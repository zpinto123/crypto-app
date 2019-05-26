import { apiUtils } from "../utils";

const { fetchData } = apiUtils;

const cryptocompareApi = {
  getAllPrices: () => fetchData(`/data/top/mktcapfull?limit=100&tsym=USD`)
};

export default cryptocompareApi;
