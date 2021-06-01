import { DexFactory } from "../constants";
import { Percent, Token, TokenAmount } from "../dexsdk";
import { ArbiPlan } from "./arbiPlan";
export declare class ArbiUtil {
    static findArbiPlanExactInAndDex(tokenOwned: TokenAmount, tokenShuttle: Token, dex1: {
        dexFactory: DexFactory;
        allowedSlippage: Percent;
    }, dex2: {
        dexFactory: DexFactory;
        allowedSlippage: Percent;
    }, tokenOut?: Token | null): Promise<ArbiPlan>;
}
