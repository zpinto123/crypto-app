import { Navigation } from "react-native-navigation";

import { wrapper } from "../redux/store";

import { Watchlist, Portfolio, Settings } from "../features";

const screens = [Watchlist, Portfolio, Settings];

const register = Component => {
  let { displayName } = Component;
  if (displayName.includes("Connect("))
    displayName = displayName.substring(8, displayName.length - 1);
  Navigation.registerComponent(
    displayName,
    wrapper(Component),
    () => Component
  );
};

const registerScreens = () => {
  screens.forEach(Component => register(Component));
};

export default registerScreens;
