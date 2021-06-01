import { DexFactory } from "../constants";
import { ChainId, Token } from "../dexsdk";
import { BigNumber } from "@ethersproject/bignumber";
export declare class AggSwapRoute {
    private static readonly DEX_INDEX_MAP;
    readonly inputAmount: BigNumber;
    readonly tokens: Token[];
    readonly distributions: DexAssign[][];
    constructor(inputAmount: BigNumber, tokens: Token[], distributions: DexAssign[][]);
    static getSupportedDEXes(chainId: ChainId): DexFactory[];
    get fromToken(): Token;
    get toToken(): Token;
    private checkDistributions;
    toSwapRouteParameter(): SwapRouteParameter;
    private static toUInt8Hex;
}
export declare class DexAssign {
    readonly dexFactory: DexFactory;
    readonly percentage: number;
    constructor(dexFactory: DexFactory, percentage: number);
}
export declare class SwapRouteParameter {
    readonly tokens: string[];
    readonly distributions: BigNumber[];
    constructor(tokens: string[], distributions: BigNumber[]);
}
export declare class AggRouterSwapParameter {
    readonly splitAmount: BigNumber[];
    readonly routes: SwapRouteParameter[];
    readonly minReturnAmount: BigNumber;
    readonly flags: BigNumber;
    constructor(splitAmount: BigNumber[], routes: SwapRouteParameter[], minReturnAmount: BigNumber, flags?: BigNumber);
}
export declare class AggSwapPlan {
    readonly swapRouteList: AggSwapRoute[];
    readonly minReturnAmount: BigNumber;
    readonly chainId: ChainId;
    constructor(swapRouteList: AggSwapRoute[], minReturnAmount: BigNumber, chainId?: ChainId);
    private checkSwapRouteList;
    get fromToken(): Token;
    get toToken(): Token;
    get inputAmount(): BigNumber;
    getAggSwapCallArgs(): AggRouterSwapParameter;
}
