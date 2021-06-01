import { DexFactory } from "../constants";
import { ChainId, IWallet, Token } from "../dexsdk";
import { AggSwapRoute } from "./aggSwapPlan";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { TokenInfo } from "@uniswap/token-lists";
import { CurvePool } from "../dexsdk/acs/curvePool";
export declare class GraphData {
    allPairs: AggPair[];
}
export declare class AggTokenGraph {
    graphData: GraphData;
    chainId?: ChainId;
    pairHash: {
        [pairHashCode: string]: AggPair;
    };
    tokenIndex: {
        [tokenAddress: string]: AggPair[];
    };
    transferFee: {
        [address: string]: BigNumber;
    };
    excludeToken: {
        [address: string]: true;
    };
    curvePools: {
        [dexName: string]: CurvePool;
    };
    private static BEST_ROUTE_CACHE;
    constructor(chainId: ChainId, graphData: GraphData);
    private addToIndex;
    static loadFromChain(chainId: ChainId, additionalTokens?: TokenInfo[]): Promise<AggTokenGraph>;
    /**
     * Calculate available routes by input amount given,based on historical reserve data
     * It will be executed totally off chain.
     * @param  inputAmount           inputAmount
     * @param  fromToken             fromToken
     * @param  toToken               toToken
     * @param  maxDexHops            maxDexHops
     * @param  maxTokenHops          maxTokenHops
     * @param  maxPriceImpactPercent maxPriceImpactPercent,input 5 if refer to 0.5%x
     * @param  maxResults            max length of return routes
     * @param  usedDexes             just used for recursive call
     * @param  usedAggPairs          just used for recursive call
     * @return                       [description]
     */
    getAvailableRoutesStatic(inputAmount: BigNumberish, fromToken: Token, toToken: Token, maxDexHops: number | undefined, maxTokenHops: number | undefined, maxPriceImpactPercent: string | number | BigNumber | import("ethers").Bytes | undefined, minReturn: string | number | BigNumber | import("ethers").Bytes | undefined, execuldeDexes: DexFactory[], maxResults?: number, usedDexes?: DexFactory[], usedAggPairs?: AggPair[]): AggPair[][];
    getBestRoutesStatic(inputAmount: BigNumberish, fromToken: Token, toToken: Token, maxDexHops: number | undefined, maxTokenHops: number | undefined, maxPriceImpactPercent: string | number | BigNumber | import("ethers").Bytes | undefined, minReturn: string | number | BigNumber | import("ethers").Bytes | undefined, execuldeDexes: DexFactory[], maxResults?: number): {
        route: AggPair[];
        outputAmount: BigNumber;
    }[];
    /**
     * [getBestRoutesValidated description]
     * @param  inputAmount           [description]
     * @param  fromToken             [description]
     * @param  toToken               [description]
     * @param  slippageTolerance     input 5 if refer to 0.5%
     * @param  maxDexHops            [description]
     * @param  maxTokenHops          [description]
     * @param  maxPriceImpactPercent input 5 if refer to 0.5%
     * @param  minReturn             [description]
     * @param  execuldeDexes         [description]
     * @param  maxResults            [description]
     * @param  maxStaticScan         [description]
     * @return                       [description]
     */
    getBestRoutesValidated(wallet: IWallet, inputAmount: BigNumberish, fromToken: Token, toToken: Token, slippageTolerance: string | number | BigNumber | import("ethers").Bytes | undefined, maxDexHops: number | undefined, maxTokenHops: number | undefined, maxPriceImpactPercent: string | number | BigNumber | import("ethers").Bytes | undefined, minReturn: string | number | BigNumber | import("ethers").Bytes | undefined, execuldeDexes: DexFactory[], maxResults?: number, maxStaticScan?: number): Promise<{
        route: AggSwapRoute;
        outputAmount: BigNumber;
    }[]>;
    getBestRoutesGasConsidered(wallet: IWallet, inputAmount: BigNumberish, fromToken: Token, toToken: Token, slippageTolerance: string | number | BigNumber | import("ethers").Bytes | undefined, maxDexHops: number | undefined, maxTokenHops: number | undefined, maxPriceImpactPercent: string | number | BigNumber | import("ethers").Bytes | undefined, minReturn: string | number | BigNumber | import("ethers").Bytes | undefined, execuldeDexes: DexFactory[], maxResults?: number, maxStaticScan?: number): Promise<{
        route: AggSwapRoute;
        outputAmount: BigNumber;
        gasFee: BigNumber;
        outputAmountExcludeGas: BigNumber;
    }[]>;
    getBestRoutes(inputAmount: BigNumberish, fromToken: Token, toToken: Token, maxDexHops: number | undefined, maxTokenHops: number | undefined, maxPriceImpactPercent: string | number | BigNumber | import("ethers").Bytes | undefined, minReturn: string | number | BigNumber | import("ethers").Bytes | undefined, execuldeDexes: DexFactory[], maxResults?: number, maxStaticScan?: number): Promise<{
        route: AggSwapRoute;
        outputAmount: BigNumber;
    }[]>;
    aggPairOutputAmount(aggPair: AggPair, inputToken: Token, inputAmount: BigNumber): Promise<BigNumber>;
    static copyToken(token: Token): Token;
    static aggPairContainsToken(token: Token, aggPair: AggPair): boolean;
    static aggPairAnother(aggPair: AggPair, token: Token): Token;
    private static hashCode;
    static aggPairHashCode(aggPair: AggPair): string;
    static aggPairEquals(aggPair: AggPair, other: AggPair): boolean;
    getTransferFee(token: Token): BigNumber;
    aggPairOutputAmountStatic(aggPair: AggPair, inputToken: Token, inputAmount: BigNumber): BigNumber;
    aggPairPriceImpact(aggPair: AggPair, inputToken: Token, inputAmount: BigNumber): BigNumber;
    aggPairRouteOutputAmountStatic(route: AggPair[], inputToken: Token, inputAmount: BigNumber): BigNumber;
    aggPairRouteOutputAmount(route: AggPair[], inputToken: Token, inputAmount: BigNumber, outputCache?: {
        [key: string]: BigNumber;
    }): Promise<BigNumber>;
}
export declare class AggPair {
    readonly dexName: string;
    readonly token0: Token;
    readonly token1: Token;
    reserve0: BigNumber;
    reserve1: BigNumber;
    constructor(dexName: string, token0: Token, token1: Token, reserve0?: BigNumberish, reserve1?: BigNumberish);
}
