import { apiUtils } from "../utils";

const { fetchData } = apiUtils;

const getAllCoinIds = () => fetchData(`/coins/list`);

const getCoinInfoById = id =>
  fetchData(`/coins/${id}`, {
    tickers: false,
    market_data: false,
    community_data: false,
    developer_data: false,
    sparkline: false
  });

const getCoinPrices = (currency, ids) =>
  fetchData(`/coins/markets`, {
    vs_currency: currency,
    ids: ids.join(","),
    order: "market_cap_desc",
    per_page: 250,
    page: 1,
    sparkline: false,
    price_change_percentage: "1h,24h,7d,14d,30d,200d,1y"
  });

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y

// api.coingecko.com/api/v3/coins/bitcoin?localization=false,tickers=false,market_data=false,community_data=false,developer_data=false,sparkline=false

export { getAllCoinIds, getCoinInfoById, getCoinPrices };
