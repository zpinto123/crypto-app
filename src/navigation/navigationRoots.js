import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { store } from "../redux/store";

import * as themes from "../design/themes";

const setRootBottomTab = () => {
  const { theme = themes.DARK } = store.getState().cryptocompare;
  console.log("store.getState().cryptocompare: ", store.getState());
  Promise.all([
    Icon.getImageSource("md-cube", 20, theme.bottomTab.iconColor),
    Icon.getImageSource("md-list-box", 20, theme.bottomTab.iconColor),
    Icon.getImageSource("md-settings", 20, theme.bottomTab.iconColor)
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: "rootBottomTab",
          options: {
            bottomTabs: {
              backgroundColor: theme.bottomTab.backgroundColor,
              currentTabIndex: 0,
              animate: true,
              titleDisplayMode: "alwaysHide"
            }
          },
          children: [
            {
              component: {
                name: "Watchlist",
                options: {
                  bottomTab: {
                    icon: icons[0],
                    testID: "Watchlist",
                    selectedIconColor: theme.bottomTab.selectedIconColor
                  }
                }
              }
            },
            {
              component: {
                name: "Portfolio",
                options: {
                  bottomTab: {
                    icon: icons[1],
                    testID: "Portfolio",
                    selectedIconColor: theme.bottomTab.selectedIconColor
                  }
                }
              }
            },
            {
              component: {
                name: "Settings",
                options: {
                  bottomTab: {
                    icon: icons[2],
                    testID: "Settings",
                    selectedIconColor: theme.bottomTab.selectedIconColor
                  }
                }
              }
            }
          ]
        }
      }
    });
  });
};

export { setRootBottomTab };
