// Global types

type Cryptocurrency = {
    id: string;
    name: string;
    currency: string;
    logo_url: string;
    price: string;
    circulating_supply: string;
    max_supply: string | undefined;
    "1d": CryptocurrencyPriceChange;
    "7d": CryptocurrencyPriceChange;
    "30d": CryptocurrencyPriceChange;
    "365d": CryptocurrencyPriceChange;
};

type CryptocurrencyPriceChange = {
    price_change_pct: string;
};

interface TableProps<RecordType> {
    align: string;
}
