import { Token, ChainId, Currency } from "../dexsdk";
import { TokenInfo } from "@uniswap/token-lists";
export declare class TokenList {
    private constructor();
    static DAI: Token;
    static BUSD: Token;
    static USDT: Token;
    static EOS: Token;
    static DOT: Token;
    static ETH: Token;
    static WBNB: Token;
    static FRIES: Token;
    static BURGER: Token;
    static BAI: Token;
    static BAKE: Token;
    static BTCB: Token;
    static BAND: Token;
    static XRP: Token;
    static BCH: Token;
    static LTC: Token;
    static ADA: Token;
    static CAKE: Token;
    static THUGS: Token;
    static NYA: Token;
    static TWT: Token;
    static FUEL: Token;
    static QUSD: Token;
    static BANANA: Token;
    static ICREAM: Token;
    static USDC: Token;
    static KUN: Token;
    static VAI: Token;
    static UST: Token;
    static POKE: Token;
    static WHT: Token;
    static HUSD: Token;
    static HUSDT: Token;
    static HETH: Token;
    static BUSD_BSC_TEST: Token;
    static USDT_BSC_TEST: Token;
    static ETH_BSC_TEST: Token;
    private static additionalTokenList;
    static isETH(token: Currency): boolean;
    static getAllTokenList(chainId?: ChainId): Token[];
    private static exists;
    static addAdditionalTokenList(tokenList: TokenInfo[]): void;
    static getToken(address: string, chainId?: ChainId): Token | null;
    static getTokenBySymbol(symbol: string, chainId?: ChainId): Token | null;
}
