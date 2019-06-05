import {
  ADD_ALL_COIN_IDS,
  ADD_COIN_TO_LIST,
  REMOVE_COIN_FROM_LIST,
  ADD_COIN_TO_WATCHLIST,
  REMOVE_COIN_FROM_WATCHLIST,
  ADD_COIN_TO_PORTFOLIO,
  REMOVE_COIN_FROM_PORTFOLIO,
  CHANGE_PORTFOLIO_NAME,
  REMOVE_PORTFOLIO
} from "./types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    /** ALL COIN IDS */

    case ADD_ALL_COIN_IDS: {
      const { allCoinIds } = action.payload;
      return {
        ...state,
        allCoinIds
      };
    }

    /** WATCHLIST */

    case ADD_COIN_TO_WATCHLIST: {
      const { coin } = action.payload;
      return {
        ...state,
        watchlist: {
          ...state.watchlist,
          [coin.id]: { ...coin }
        }
      };
    }

    case REMOVE_COIN_FROM_WATCHLIST: {
      const { coinId } = action.payload;
      const watchlist = { ...state.watchlist };
      delete watchlist[coinId];
      return {
        ...state,
        watchlist
      };
    }

    // watchlist: {
    //   bitcoin: { id: "bitcoin", name: "Bitcoin", symbol: "btc", price: 8254 }
    // },
    // portfolios: {
    //   p1: {
    //     id: "p1",
    //     name: "My Portfolio",
    //     coins: {
    //       bitcoin: {
    //         id: "bitcoin",
    //         name: "Bitcoin",
    //         symbol: "btc",
    //         price: 8254,
    //         totalAmount: 20,
    //         transactions: [{ id: 1, exchange: "Kraken", amount: 5, price: 2700 }]
    //       }
    //     }
    //   }
    // }

    /** PORTFOLIO */

    case CHANGE_PORTFOLIO_NAME: {
      const { portfolioId, name } = action.payload;
      const portfolios = { ...state.portfolios };
      const portfolio = portfolios[portfolioId];
      portfolio.name = name;

      return {
        ...state,
        portfolios: { ...portfolios, [portfolioId]: portfolio }
      };
    }

    case REMOVE_PORTFOLIO: {
      const { portfolioId } = action.payload;
      const portfolios = { ...state.portfolios };
      delete portfolios[portfolioId];

      return {
        ...state,
        portfolios
      };
    }

    case ADD_COIN_TO_PORTFOLIO: {
      const { portfolioId, coin } = action.payload;
      const portfolios = { ...state.portfolios };
      const portfolio = portfolios[portfolioId];

      portfolio.coins = {
        ...portfolio.coins,
        [coin.id]: { ...coin, totalAmount: 0, transactions: [] }
      };

      return {
        ...state,
        portfolios: { ...portfolios, [portfolioId]: portfolio }
      };
    }

    case REMOVE_COIN_FROM_PORTFOLIO: {
      const { portfolioId, coinId } = action.payload;
      const portfolios = { ...state.portfolios };
      const portfolio = portfolios[portfolioId];
      delete portfolio.coins[coinId];

      return {
        ...state,
        portfolios: { ...portfolios, [portfolioId]: portfolio }
      };
    }

    default:
      return state;
  }
};
