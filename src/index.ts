import { AggRouter, AggSwapPlan, AggTokenGraph, CallMode, ChainConfig, ChainId, DexFactory, IWallet, nowTimeString, ProviderUtil, Token, TokenList, WalletUtil, WalletWrapper } from 'aggregator-sdk';
import * as fs from "fs";
import { Wallet } from '@ethersproject/wallet';
import axios from "axios";
import { parseUnits, formatUnits } from '@ethersproject/units';
import { BigNumber } from '@ethersproject/bignumber';
import { MaxUint256 } from "@ethersproject/constants/lib/bignumbers";

const enum CMD {
    BestRouteDemo = "BestRouteDemo"
}

const main = async () => {
    const args = process.argv;
    let cmd = args[2];
    if (!cmd)
        cmd = CMD.BestRouteDemo;
    console.log(`${nowTimeString()} start executing command: ${cmd}`);

    if (cmd === CMD.BestRouteDemo) {
        const privateKey = fs.readFileSync(".secret").toString().trim();
        const chainId = ChainId.BSCMAINNET;
        const wallet = new WalletWrapper(new Wallet(privateKey, ProviderUtil.getJsonRPCProvider(chainId)));
       
        const graph=await init(chainId);
        const fromToken = TokenList.WBNB
        const toToken = TokenList.FRIES;
        const inputAmount = parseUnits("0.01",toToken.decimals);

        await checkAllowance(fromToken,inputAmount,wallet);

        const result = await graph.getBestRoutesGasConsidered(wallet,
            inputAmount,
            fromToken,
            toToken,
            2,//slippageTolerance 2=>0.2%
            2,//maxDexHops
            4,//MaxTokenHops
            40,//maxPriceImpactPercent,40=>4%
            parseUnits("0", toToken.decimals),//minReturn
            [DexFactory.ACS4QUSD],//execludedDexes
            5,//maxResults
            100//maxStaticScan
        );

        let i = 1;
        for (let routeInfo of result) {
            let str = i++ + " ";
            for (let j = 0; j < routeInfo.route.distributions.length; j++) {
                str += "[" + routeInfo.route.distributions[j][0].dexFactory.name + ": " + routeInfo.route.tokens[j].symbol + "=>" + routeInfo.route.tokens[j + 1].symbol + "]";
            }
            str += " " + formatUnits(routeInfo.outputAmount) + " " + toToken.symbol;
            console.log(str);
        }

        //choose the best route to swap as a demo
        if (result.length > 0) {
            const routeInfo = result[0].route;
            const plan = new AggSwapPlan([routeInfo], parseUnits("0", toToken.decimals), chainId);
            const callMode = CallMode.ESTIMATE_GAS;//Warning! Changing CallMode to EXECUTE will execute the transaction and can't be rollback.
            const swapResult = await AggRouter.swap(plan, wallet,
                callMode
            );
            console.log(`Done!!!!! Got ${formatUnits(swapResult.gap, toToken.decimals)} ${toToken.symbol}`);
        }

    }
}

const init=async (chainId:ChainId):Promise<AggTokenGraph>=>{
    console.time("Load Graph");
    let graphData;
    if (!fs.existsSync(chainId + ".graph")) {
        console.log(`${nowTimeString()} download graph from TurboX server...`);
        const url = `https://exchange.turbox.io/data/${chainId}.graph`;
        const res = await axios.get(url);
        fs.writeFileSync(chainId + ".graph", JSON.stringify(res.data));
        graphData = res.data;
    }
    else
        graphData = JSON.parse(fs.readFileSync(chainId + ".graph").toString());

    const graph = new AggTokenGraph(chainId, graphData);
    console.timeEnd("Load Graph");

    let transFeeData;
    if (!fs.existsSync(chainId + ".tokens.transfee")) {
        console.log(`${nowTimeString()} download transfer fee info from TurboX server...`);
        const url = `https://exchange.turbox.io/data/${chainId}.tokens.transfee`;
        const res = await axios.get(url);
        fs.writeFileSync(chainId + ".tokens.transfee", JSON.stringify(res.data));
        transFeeData = res.data;
    }
    else
        transFeeData = JSON.parse(fs.readFileSync(chainId + ".tokens.transfee").toString());

    for (let t of transFeeData) {
        if (graph.transferFee?.[t.address.toLowerCase()] == undefined) {
            graph.transferFee = {
                ...graph.transferFee,
                [t.address.toLowerCase()]: BigNumber.from(t.fee)
            }
        }
    }

    return graph;

}

const checkAllowance=async (token:Token,amount:BigNumber,wallet:IWallet)=>{
    const address=ChainConfig.getChainConfig(token.chainId).newHarborRouterAddress;
    const allowAmt=await WalletUtil.getAllowance(wallet,token,address);
    if(allowAmt.lt(amount)){
        //not enough allowance
        await WalletUtil.approve(wallet,token,address,MaxUint256);
    }
}

main();