import { BigNumber } from "@ethersproject/bignumber";
import { Signer } from "@ethersproject/abstract-signer";
import { Provider } from "@ethersproject/abstract-provider";
import { Wallet } from '@ethersproject/wallet';
import { Web3Provider } from '@ethersproject/providers';
export interface IWallet {
    getAddress(): Promise<string>;
    getBalance(): Promise<BigNumber>;
    getSignerOrProvider(): Signer | Provider;
    getGasPrice(): Promise<BigNumber>;
}
export declare class WalletWrapper implements IWallet {
    private wallet;
    constructor(wallet: Wallet);
    getAddress(): Promise<string>;
    getBalance(): Promise<BigNumber>;
    getSignerOrProvider(): Signer | Provider;
    getGasPrice(): Promise<BigNumber>;
}
export declare class Web3WalletWrapper implements IWallet {
    private provider;
    private address;
    constructor(provider: Web3Provider, address: string);
    getAddress(): Promise<string>;
    getBalance(): Promise<BigNumber>;
    getSignerOrProvider(): Signer | Provider;
    getGasPrice(): Promise<BigNumber>;
}
