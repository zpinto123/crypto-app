import { SET_PRICES, ERROR_GET_PRICES } from "./types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICES: {
      const { data } = action.payload;
      console.log("data: ", data);
      const coinImages = {};
      data.forEach(coin => {
        const {
          CoinInfo: { Name, ImageUrl }
        } = coin;
        coinImages[
          Name.toLowerCase()
        ] = `https://www.cryptocompare.com${ImageUrl}`;
      });
      console.log("coinImages: ", coinImages);
      return {
        ...state,
        data,
        coinImages
      };
    }
    case ERROR_GET_PRICES: {
      return {
        ...state,
        error: true
      };
    }
    default:
      return state;
  }
};
