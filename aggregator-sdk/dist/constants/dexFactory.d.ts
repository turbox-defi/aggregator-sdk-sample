import { Percent, SwapParameters, Token, Trade, TradeOptions } from "../dexsdk";
import { ChainId } from '../dexsdk/constants';
export declare enum DexType {
    UniswapV2 = 0,
    Acryptos = 1
}
export declare enum DexSubType {
    UniswapV2ETH = 0,
    UniswapV2BNB = 1,
    UniswapV2BURGER = 2,
    AcryptoS = 3,
    UniswapV2HT = 4
}
export declare class DexFactory {
    readonly name: string;
    readonly factoryAddress: string;
    readonly initCodeHash: string;
    readonly interToken: Token[];
    readonly baseFee: Percent;
    readonly routerAddress: string;
    readonly chainId: ChainId;
    readonly type: DexType;
    readonly config: {
        [key: string]: any;
    };
    readonly subType: DexSubType;
    private static BASE_INTER_TOKEN;
    private constructor();
    get key(): string;
    static getAllDexFactory(chainId?: ChainId): DexFactory[];
    static getDexFactory(name: string, chainId?: ChainId): DexFactory | null;
    /**
     * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
     * @param trade to produce call parameters for
     * @param options options for the call parameters
     */
    swapCallParameters(trade: Trade, options: TradeOptions): SwapParameters;
    getRouter02Json(): ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[] | ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[] | ({
        name: string;
        inputs: {
            type: string;
            name: string;
            indexed: boolean;
        }[];
        anonymous: boolean;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        outputs: never[];
        inputs: {
            type: string;
            name: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
    } | {
        name: string;
        outputs: {
            type: string;
            name: string;
        }[];
        inputs: {
            type: string;
            name: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    fetchDexFactoryAddress(): Promise<string>;
    isAutoSwapSupported(): boolean;
    static PANCAKESWAP_TEST: DexFactory;
    static PANCAKESWAP: DexFactory;
    static PANCAKESWAPV2: DexFactory;
    static STREETSWAP: DexFactory;
    static BURGERSWAP: DexFactory;
    static BAKERYSWAP: DexFactory;
    static BSCSWAP: DexFactory;
    static JULSWAP: DexFactory;
    static SOFTDRINKSWAP: DexFactory;
    static SWAPKING: DexFactory;
    static BAMBOOSWAP: DexFactory;
    static STORMSWAP: DexFactory;
    static NARWHALSWAP: DexFactory;
    static NYANSWOP: DexFactory;
    static CHEESESWAP: DexFactory;
    static DANKSWAP: DexFactory;
    static ICECREAMSWAP: DexFactory;
    static PHOSWAP: DexFactory;
    static APESWAP: DexFactory;
    static VALUEDEFI: DexFactory;
    static MDEX_BSC: DexFactory;
    static BALLSWAP: DexFactory;
    static ACS4QUSD: DexFactory;
    static ACS4VAI: DexFactory;
    static ACS4UST: DexFactory;
    static MDEX: DexFactory;
    static LAVASWAP: DexFactory;
    static DOGESWAP: DexFactory;
    static MDIS: DexFactory;
    static UNISAVE: DexFactory;
    static PIPPISHRIMP: DexFactory;
    static AVANTSPORT: DexFactory;
    static COMPLUS: DexFactory;
    static CIRCLESWAP: DexFactory;
    static BXH: DexFactory;
}
