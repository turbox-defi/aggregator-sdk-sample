export declare class ChangeModel {
    readonly tokenIn: string;
    readonly tokenShuttle: string;
    readonly tokenOut?: string;
    readonly dex1: string;
    readonly dex2: string;
    readonly chainId: number;
    readonly allowedSlippage: number;
    constructor(tokenIn: string, tokenShuttle: string, dex1: string, dex2: string, chainId: number, allowedSlippage: number, tokenOut?: string);
}
