import { JsonRpcProvider } from "@ethersproject/providers";
import { Provider } from 'ethers-multicall';
import { ChainId } from "../dexsdk";
export declare class ProviderUtil {
    static getMultiCallProvider(chainId?: ChainId): Provider;
    static getJsonRPCProvider(chainId?: ChainId): JsonRpcProvider;
}
