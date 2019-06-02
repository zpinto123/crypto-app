import {
  ADD_ALL_COIN_IDS,
  ADD_COIN_TO_LIST,
  REMOVE_COIN_FROM_LIST,
  ADD_COIN_TO_WATCHLIST,
  REMOVE_COIN_FROM_WATCHLIST,
  ADD_COIN_TO_PORTFOLIO,
  REMOVE_COIN_FROM_PORTFOLIO
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

export const addCoinToList = id => async dispatch => {
  console.log("coin to get: ", id);
  const coinInfo = await coinsApi.getCoinInfoById(id);
  console.log("addCoinToList: ", coinInfo);
  // dispatch({
  //   type: ADD_COIN_TO_LIST,
  //   payload: { coin }
  // });
};

export const removeCoinFromList = coinId => async dispatch => {
  dispatch({
    type: REMOVE_COIN_FROM_LIST,
    payload: { coinId }
  });
};

export const addCoinToWatchlist = coinId => async dispatch => {
  dispatch({
    type: ADD_COIN_TO_WATCHLIST,
    payload: { coinId }
  });
};

export const removeCoinFromWatchlist = coinId => async dispatch => {
  dispatch({
    type: REMOVE_COIN_FROM_WATCHLIST,
    payload: { coinId }
  });
};

export const addCoinToPortfolio = (portfolioId, coinId) => async dispatch => {
  dispatch({
    type: ADD_COIN_TO_PORTFOLIO,
    payload: { portfolioId, coinId }
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
