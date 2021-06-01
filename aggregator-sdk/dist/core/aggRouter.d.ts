import { AggSwapPlan } from "./aggSwapPlan";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { ChainId } from "../dexsdk/constants";
import { IWallet } from "../dexsdk";
export declare enum CallMode {
    ESTIMATE_GAS = 0,
    CALL_STATIC = 1,
    EXECUTE = 2
}
export declare class AggRouter {
    private static isZero;
    static swap(plan: AggSwapPlan, wallet: IWallet, callMode?: CallMode, gasLimit?: BigNumber): Promise<{
        gap: BigNumber;
        gasFee: BigNumber;
        gas: BigNumber;
    }>;
    static pauseRouter(chainId: ChainId, wallet: IWallet): Promise<void>;
    static unpauseRouter(chainId: ChainId, wallet: IWallet): Promise<void>;
    static addCurveCoins(poolAddress: string, coins: string[], chainId: ChainId, wallet: IWallet): Promise<void>;
    static updateConfig(_dexRouterAddress: string[], _dexSwapFunctionsIndex: BigNumberish[], _dexInternalRouteSupported: boolean[], _weth: string, _feeAddress: string, _feePercent: BigNumber, chainId: ChainId, wallet: IWallet): Promise<void>;
    static killRouter(chainId: ChainId, wallet: IWallet): Promise<void>;
}
