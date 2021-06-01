import { ChainId, IWallet, Token } from "../dexsdk";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
export declare class TokenUtil {
    private static TRANSFER_HASH;
    /**
     * [getTokenTransferFee description]
     * @param  token [description]
     * @return       return 50 if fee percent is 5%
     */
    static getTokenTransferFee(token: Token): Promise<BigNumber>;
    static wrapWETH(wallet: IWallet, amount: BigNumberish, chainId: ChainId): Promise<void>;
    static unwrapWETH(wallet: IWallet, amount: BigNumberish, chainId: ChainId): Promise<void>;
    static getTokenByAddress(address: string, chainId: ChainId): Promise<Token | undefined>;
}
export declare function isAddress(value: any): string | false;
export declare function getETHPrice(toToken: Token): Promise<BigNumber>;
