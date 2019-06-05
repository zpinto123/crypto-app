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
import { coinsApi } from "../../../services";

export const getAllCoinIds = () => async dispatch => {
  try {
    const allCoinIds = await coinsApi.getAllCoinIds();
    console.log("allCoinIds: ", allCoinIds);
    dispatch({
      type: ADD_ALL_COIN_IDS,
      payload: { allCoinIds }
    });
  } catch (error) {
    console.error(error);
  }
};

/** WATCHLIST */

export const addCoinToWatchlist = coinId => async dispatch => {
  const coin = await coinsApi.getCoinInfoById(coinId);
  dispatch({
    type: ADD_COIN_TO_WATCHLIST,
    payload: { coin }
  });
};

export const removeCoinFromWatchlist = coinId => async dispatch => {
  dispatch({
    type: REMOVE_COIN_FROM_WATCHLIST,
    payload: { coinId }
  });
};

/** PORTFOLIO */

export const addCoinToPortfolio = (portfolioId, id) => async dispatch => {
  const coin = await coinsApi.getCoinPrices("usd", [id]);
  dispatch({
    type: ADD_COIN_TO_PORTFOLIO,
    payload: { portfolioId, coin: { ...coin, price: coin.current_price } }
  });
};

export const removeCoinFromPortfolio = (
  portfolioId,
  coinId
) => async dispatch => {
  dispatch({
    type: REMOVE_COIN_FROM_PORTFOLIO,
    payload: { portfolioId, coinId }
  });
};

export const changePortfolioName = (portfolioId, name) => async dispatch => {
  dispatch({
    type: CHANGE_PORTFOLIO_NAME,
    payload: { portfolioId, name }
  });
};

export const removePortfolio = portfolioId => async dispatch => {
  dispatch({
    type: REMOVE_PORTFOLIO,
    payload: { portfolioId }
  });
};
