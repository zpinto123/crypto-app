import { SET_THEME } from "./types";
import { setRootBottomTab } from "../../../navigation/navigationRoots";
import * as themes from "../../../design/themes";

export const setTheme = themeName => async dispatch => {
  dispatch({
    type: SET_THEME,
    payload: { theme: themes[themeName] }
  });
  setRootBottomTab();
};
