import {
  ADD_ALL_COIN_IDS,
  ADD_COIN_TO_LIST,
  REMOVE_COIN_FROM_LIST,
  ADD_COIN_TO_WATCHLIST,
  REMOVE_COIN_FROM_WATCHLIST,
  ADD_COIN_TO_PORTFOLIO,
  REMOVE_COIN_FROM_PORTFOLIO
} from "./types";
import initialState from "./initialState";

import { collectionUtils } from "../../../utils";

const { rmArrayItem } = collectionUtils;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_COIN_IDS: {
      const { allCoinIds } = action.payload;
      return {
        ...state,
        allCoinIds
      };
    }

    case ADD_COIN_TO_LIST: {
      const { coin } = action.payload;
      const list = { ...state.list };
      list[coin.Id] = coin;
      return {
        ...state,
        list
      };
    }

    case REMOVE_COIN_FROM_LIST: {
      const { coinId } = action.payload;
      const list = { ...state.list };
      delete list[coinId];
      return {
        ...state,
        list
      };
    }

    case ADD_COIN_TO_WATCHLIST: {
      const { coinId } = action.payload;
      const watchlist = [...state.watchlist];
      if (!watchlist.includes(coinId)) watchlist.push(coinId);
      return {
        ...state,
        watchlist
      };
    }

    case REMOVE_COIN_FROM_WATCHLIST: {
      const { coinId } = action.payload;
      const watchlist = rmArrayItem([...state.watchlist], coinId);
      return {
        ...state,
        watchlist
      };
    }

    case ADD_COIN_TO_PORTFOLIO: {
      const { portfolioId, coinId } = action.payload;
      const portfolios = { ...(state.portfolios || {}) };
      const portfolio = portfolios[portfolioId];
      if (portfolio && !portfolio.list.includes(coinId)) {
        portfolio.list.push(coinId);
        portfolios[portfolioId] = portfolio;
      }
      return {
        ...state,
        portfolios
      };
    }

    case REMOVE_COIN_FROM_PORTFOLIO: {
      const { portfolioId, coinId } = action.payload;
      const portfolios = { ...(state.portfolios || {}) };
      const portfolio = portfolios[portfolioId];
      if (portfolio && portfolio.list.includes(coinId)) {
        portfolio.list = rmArrayItem(portfolio.list, coinId);
        portfolios[portfolioId] = portfolio;
      }
      return {
        ...state,
        portfolios
      };
    }

    default:
      return state;
  }
};
