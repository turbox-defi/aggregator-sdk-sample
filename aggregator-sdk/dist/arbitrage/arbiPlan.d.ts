import { DexFactory } from "../constants";
import { CurrencyAmount, Fraction, ITrade, Percent, Token } from "../dexsdk";
export declare class DexTrade {
    readonly dex: DexFactory;
    readonly trade: ITrade;
    readonly allowedSlippage: Percent;
    constructor(dex: DexFactory, trade: ITrade, allowedSlippage?: Percent);
    get minimumAmountOut(): CurrencyAmount;
    get amountIn(): CurrencyAmount;
    get tokenIn(): Token;
    get tokenOut(): Token;
}
/**
 * Arbi计划
 */
export declare class ArbiPlan {
    readonly trades: DexTrade[];
    constructor(trades: DexTrade[]);
    get firstTrade(): DexTrade;
    get lastTrade(): DexTrade;
    get inputToken(): Token;
    get outputToken(): Token;
    get revenue(): Fraction;
}
