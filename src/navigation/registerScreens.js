import { Navigation } from "react-native-navigation";

import { wrapper } from "../redux/store";

import { Watchlist, Portfolio, Settings } from "../features";

const screens = [
  { name: "Watchlist", component: Watchlist },
  { name: "Portfolio", component: Portfolio },
  { name: "Settings", component: Settings }
];

const register = screen => {
  const { name, component } = screen;
  Navigation.registerComponent(name, wrapper(component), () => component);
};

const registerScreens = () => {
  screens.forEach(screen => register(screen));
};

export default registerScreens;
