import { SET_PRICES, ERROR_GET_PRICES, SET_THEME } from "./types";
import { cryptocompareApi } from "../../../services";
import { setRootBottomTab } from "../../../navigation/navigationRoots";
import * as themes from "../../../design/themes";

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

export const setTheme = (themeName, updateTheme) => async dispatch => {
  updateTheme(themes[themeName]);
  setRootBottomTab();
  dispatch({
    type: SET_THEME,
    payload: { theme: themes[themeName] }
  });
};
