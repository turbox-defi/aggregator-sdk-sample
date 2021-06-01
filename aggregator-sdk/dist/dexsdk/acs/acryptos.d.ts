import { DexFactory } from "../../constants";
import { CurrencyAmount, IWallet, Percent, Token } from "../entities";
import { ITrade } from "../interface";
import { BigNumber } from "@ethersproject/bignumber";
import { DexTrade } from "../..";
import { CurvePool } from "./curvePool";
export declare class ACryptoS {
    static getBestTradeExactIn(tokenIn: Token, amountIn: string, tokenOut: Token, dexFactory: DexFactory): Promise<ITrade>;
    static getBestTradeExactInStatic(tokenIn: Token, amountIn: string, tokenOut: Token, dexFactory: DexFactory, curvePool: CurvePool): ITrade;
    private static getTokenIndex;
    static estimateGasLimit(trade: DexTrade, wallet: IWallet): Promise<BigNumber>;
    static executeTrade(trade: DexTrade, wallet: IWallet): Promise<void>;
}
export declare class ACSTrade implements ITrade {
    inputAmount: CurrencyAmount;
    outputAmount: CurrencyAmount;
    constructor(inputAmount: CurrencyAmount, outputAmount: CurrencyAmount);
    minimumAmountOut(slippageTolerance: Percent): CurrencyAmount;
}
