export declare class SearchChanceJsonData {
    static getChanceJsonData(): {
        defaultInAmountUSDT: string;
        defaultInAmountBNB: string;
        list: ({
            tokenIn: string;
            tokenShuttle: string;
            chainId: number;
            allowedSlippage: number;
            dex1: string;
            dex2: string;
            tokenOut?: undefined;
        } | {
            tokenIn: string;
            tokenShuttle: string;
            tokenOut: string;
            chainId: number;
            allowedSlippage: number;
            dex1: string;
            dex2: string;
        })[];
    };
}
