import { DexFactory } from "../constants";
import { Pair, Token } from "../dexsdk";
import { TokenInfo } from "@uniswap/token-lists";
export declare class PairUtil {
    private static PAIR_ADDRESS_CACHE;
    static getAllCommonPairs(tokenA: Token, tokenB: Token, dexFactory: DexFactory): Promise<Pair[]>;
    /**
     * 获取一对Token的pair地址
     * @param  tokenA     tokenA对象
     * @param  tokenB     tokenB对象
     * @param  dexFactory 交易所
     * @return            Pair地址
     */
    static getAddress(tokenA: Token, tokenB: Token, dexFactory: DexFactory): Promise<string>;
    /**
     * 返回一组token对的pair地址
     * 采用multicall查询
     * @param  tokenPairs token对数组
     * @param  dexFactory 交易所
     * @return            Pair地址数组，如果其中不存在pair的，返回0x0000000000000000000000000000000000000000
     */
    static getAddresses(tokenPairs: [Token, Token][], dexFactory: DexFactory): Promise<string[]>;
    /**
     * 获取Pair的存量等实时数据
     * @param  tokenPairs [description]
     * @param  dexFactory [description]
     * @return            [description]
     */
    static fetchPairsData(tokenPairs: [Token, Token][], dexFactory: DexFactory): Promise<Pair[]>;
    static fetchPairsDataBatch(input: {
        tokenPairs: [Token, Token][];
        dexFactory: DexFactory;
    }[]): Promise<{
        pair: Pair;
        dexFactory: DexFactory;
    }[]>;
    private static TOKEN_SYMBOL_CACHE;
    private static PAIRS_CACHE;
    static getAllPairs(dexFactory: DexFactory, additionalTokenInfos?: TokenInfo[], useCache?: boolean): Promise<[Token, Token][]>;
    private static multicallAllWithRetry;
    static searchPairsByToken(token: Token): Promise<{
        [dexName: string]: [Token, Token][];
    }>;
    static searchPairsByTokenAndDex(token: Token, dexFactory: DexFactory): Promise<[Token, Token][]>;
}
