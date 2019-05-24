import { SET_PRICES, ERROR_GET_PRICES } from "./types";
import { cryptocompareApi } from "../../../services";

export const getCoinPrices = () => async dispatch => {
  try {
    const data = await cryptocompareApi.getAllPrices();
    // const data = {};

    if (data && data.Data) {
      console.log("data: ", data);
      dispatch({
        type: SET_PRICES,
        payload: { data: data.Data }
      });
    } else {
      dispatch({
        type: ERROR_GET_PRICES
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: ERROR_GET_PRICES
    });
  }
};
