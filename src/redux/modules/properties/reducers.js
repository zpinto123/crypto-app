import { SET_THEME } from "./types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
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
