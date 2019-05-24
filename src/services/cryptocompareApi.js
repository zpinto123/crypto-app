import { fetchData } from "../shared/utils";
const cryptocompareApi = {
  getAllPrices: () => fetchData(`/data/top/mktcapfull?limit=100&tsym=USD`)
};

export default cryptocompareApi;
