import { CurrencyAmount, Percent } from "../entities";
export interface ITrade {
    readonly inputAmount: CurrencyAmount;
    readonly outputAmount: CurrencyAmount;
    minimumAmountOut(slippageTolerance: Percent): CurrencyAmount;
}
