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

// api.coingecko.com/api/v3/coins/bitcoin?localization=false,tickers=false,market_data=false,community_data=false,developer_data=false,sparkline=false

export { getAllCoinIds, getCoinInfoById };
