import { DexTrade } from "../arbitrage/arbiPlan";
import { BigNumber } from "@ethersproject/bignumber";
import { IWallet } from "../dexsdk";
export default function isZero(hexNumberString: string): boolean;
export declare class SwapUtil {
    /**
     * 预测Gas Fee消耗
     * @param  trade    要预测的交易
     * @param  wallet   钱包，保证钱包中有足够的余额执行本次交易，才能得到预测结果
     * @param  deadline 交易时限，单位秒
     * @return          Gas Limit
     */
    static estimateGasLimit(trade: DexTrade, wallet: IWallet, deadline?: number, feeOnTransfer?: boolean): Promise<BigNumber>;
    private static TRADING_TOKENS;
    /**
     * 执行交易
     * @param  trade    要执行的交易
     * @param  wallet   钱包，保证钱包中有足够的余额执行本次交易
     * @param  deadline 交易时限，单位秒
     * @return          交易最终输出金额
     */
    static executeTrade(trade: DexTrade, wallet: IWallet, deadline?: number, feeOnTransfer?: boolean, checkTradingTokens?: boolean): Promise<BigNumber>;
}
