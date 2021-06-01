import { ChainId, Currency, IWallet, Token } from '../dexsdk';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
export declare class WalletUtil {
    private static getTokenContract;
    static getBalance(wallet: IWallet, token: Currency): Promise<BigNumber>;
    static getAllowance(wallet: IWallet, token: Token, spenderAddress: string): Promise<BigNumber>;
    static approve(wallet: IWallet, token: Token, spenderAddress: string, amount: BigNumberish): Promise<void>;
    static getAllTokenBalance(wallet: IWallet, chainId: ChainId): Promise<{
        token: Token;
        balance: BigNumber;
    }[]>;
}
