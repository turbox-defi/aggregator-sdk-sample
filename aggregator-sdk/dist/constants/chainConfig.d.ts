import { ChainId } from "../dexsdk";
export declare class ChainConfig {
    readonly chainId: ChainId;
    readonly rpcUrl: string;
    readonly multicallAddress: string;
    readonly newHarborRouterAddress?: string;
    readonly scanApiAddress?: string;
    readonly scanApiKKey?: string;
    constructor(chainId: ChainId, rpcUrl: string, multicallAddress: string, newHarborRouterAddress?: string, scanApiAddress?: string, scanApiKey?: string);
    static getChainConfig(chainId: ChainId): ChainConfig;
}
