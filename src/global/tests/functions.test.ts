import { formatPrice, formatNumber } from "../functions";
import { Currency, CurrencySymbol } from "global/enums";

/**
 * formatPrice
 */
test.each([
    {
        scenario: "ZeroWithoutCurrency",
        expectedBehavior: "CorrectPriceFormatWithDefaultCurrency",
        price: 0,
        expectedResult: CurrencySymbol.USD + "0.00",
    },
    {
        scenario: "IntegerWithoutCurrency",
        expectedBehavior: "CorrectPriceFormatWithDefaultCurrency",
        price: 12345,
        expectedResult: CurrencySymbol.USD + "12,345.00",
    },
    {
        scenario: "FloatWithoutCurrency",
        expectedBehavior: "CorrectPriceFormatWithDefaultCurrency",
        price: 12345.678,
        expectedResult: CurrencySymbol.USD + "12,345.68",
    },
    {
        scenario: "FloatWithoutCurrency",
        expectedBehavior: "CorrectPriceFormatWithDefaultCurrency",
        price: 0.123,
        expectedResult: CurrencySymbol.USD + "0.12",
    },
    {
        scenario: "FloatWithCurrency",
        expectedBehavior: "CorrectPriceFormat",
        price: 12345.678,
        currency: Currency.EUR,
        expectedResult: CurrencySymbol.EUR + "12,345.68",
    },
])(
    "formatNumber: should be $expectedBehavior when $scenario given",
    ({ price, currency, expectedResult }) => {
        const result1 = formatPrice(price, currency);
        expect(result1).toBe(expectedResult);
    }
);

/**
 * formatNumber
 */
test.each([
    {
        scenario: "ZeroWithoutCustomMask",
        expectedBehavior: "EmptyString",
        number: 0,
        expectedResult: "",
    },
    {
        scenario: "IntegerWithoutCustomMask",
        expectedBehavior: "DefaultFormattedString",
        number: 12345,
        expectedResult: "12,345",
    },
    {
        scenario: "FloatWithoutCustomMask",
        expectedBehavior: "DefaultFormattedString",
        number: 12345.678,
        expectedResult: "12,345.68",
    },
    {
        scenario: "FloatWithCustomMask",
        expectedBehavior: "FormattedString",
        number: 12345.678,
        mask: "##,##.0000",
        expectedResult: "1,23,45.6780",
    },
    {
        scenario: "FloatWithCustomMask",
        expectedBehavior: "FormattedString",
        number: 0,
        mask: "0",
        expectedResult: "0",
    },
])(
    "formatNumber: should be $expectedBehavior when $scenario given",
    ({ number, mask, expectedResult }) => {
        const result = formatNumber(number, mask);
        expect(result).toBe(expectedResult);
    }
);
