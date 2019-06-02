import { Navigation } from "react-native-navigation";

import { wrapper } from "../redux/store";

import {
  Loading,
  Charts,
  Watchlist,
  Portfolio,
  Settings,
  CoinDetails,
  AddCoin
} from "../features";
import { FloatingButton } from "../common";

const screens = [
  { name: "Watchlist", component: Watchlist },
  { name: "Portfolio", component: Portfolio },
  { name: "Settings", component: Settings },
  { name: "Charts", component: Charts },
  { name: "CoinDetails", component: CoinDetails },
  { name: "AddCoin", component: AddCoin },
  { name: "Loading", component: Loading },
  { name: "FloatingButton", component: FloatingButton, encapsulate: true }
];

const register = screen => {
  const { name, component, encapsulate = false } = screen;
  Navigation.registerComponent(
    name,
    wrapper(component, encapsulate),
    () => component
  );
};

const registerScreens = () => {
  screens.forEach(screen => register(screen));
};

export default registerScreens;
