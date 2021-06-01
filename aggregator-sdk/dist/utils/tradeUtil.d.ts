import { DexFactory } from "../constants";
import { ITrade, Pair, Token, Trade } from "../dexsdk";
export declare class TradeUtil {
    /**
     * 指定输入的代币和数量，寻找最优化输出的交易方案
     * @param  tokenIn    输入的代币类型
     * @param  amountIn   输入的代币数量（非WEI单位）
     * @param  tokenOut   输出的代币类型
     * @param  dexFactory 指定的交易所
     * @return            最优化输出的交易（Trade对象）
     */
    static getBestTradeExactIn(tokenIn: Token, amountIn: string, tokenOut: Token, dexFactory: DexFactory, maxHops?: number): Promise<ITrade>;
    /**
     * 已知所有相关Pair的存量数据，寻找最优化输出的交易方案
     * 无须访问服务端
     * @param  tokenIn    输入的代币类型
     * @param  amountIn   输入的代币数量（非WEI单位）
     * @param  tokenOut   输出的代币类型
     * @param  allowedPairs 所有相关Pair的存量数据
     * @param  maxHops      最大路由跳转数量
     * @return             最优化输出的交易（Trade对象）
     */
    static getBestTradeExactInByAllowPairs(tokenIn: Token, amountIn: string, tokenOut: Token, allowedPairs: Pair[], maxHops?: number): Trade;
}
