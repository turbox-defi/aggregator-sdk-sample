import { CurrencyAmount, Percent, Trade } from "../dexsdk";
export declare class PriceUtil {
    static computeTradePriceBreakdown(trade: Trade, baseFee?: Percent): {
        priceImpactWithoutFee: Percent;
        realizedLPFee: CurrencyAmount;
    };
    static getSwapPercent(allowedSlippage: number): Percent;
}
