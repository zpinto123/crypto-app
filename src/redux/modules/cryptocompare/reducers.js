import { SET_PRICES, ERROR_GET_PRICES, SET_THEME } from "./types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICES: {
      const { data } = action.payload;
      return {
        ...state,
        data
      };
    }
    case ERROR_GET_PRICES: {
      return {
        ...state,
        error: true
      };
    }
    case SET_THEME: {
      const { theme } = action.payload;
      return {
        ...state,
        theme
      };
    }
    default:
      return state;
  }
};
