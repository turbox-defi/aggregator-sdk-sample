import { ChainId } from '../dexsdk';
import { Transaction } from '@ethersproject/transactions';
import { TransactionDescription } from '@ethersproject/abi';
import { Fragment, JsonFragment } from "@ethersproject/abi";
export declare class ScanUtil {
    static getTransactionsByAddress(address: string, chainId: ChainId, sort?: string, page?: number, pageSize?: number): Promise<Transaction[]>;
    static getParsedTransactionByHash(hash: string, chainId: ChainId, abi: string | (string | Fragment | JsonFragment)[]): Promise<TransactionDescription>;
}
