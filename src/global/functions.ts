import numberFormatter from "number-format.js";

import { Currency, CurrencySymbol } from "global/enums";

export function formatPrice(
    price: number,
    currency: Currency = Currency.USD
): string {
    const finalPrice = numberFormatter("#,##0.00", price);
    return CurrencySymbol[currency] + finalPrice;
}

export function formatNumber(
    number: number,
    mask: string = "#,###.##"
): string {
    return numberFormatter(mask, number);
}
