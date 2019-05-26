import { YellowBox } from "react-native";
import { Navigation } from "react-native-navigation";

// import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

import registerScreens from "./src/navigation/registerScreens";

YellowBox.ignoreWarnings([
  "Remote debugger is in a background tab which may cause apps to perform slowly.",
  "Require cycle: node_modules/rn-fetch-blob/index.js",
  "Require cycle: node_modules/react-native/Libraries/Network/fetch.js"
]);

const setRootBottomTab = () =>
  Promise.all([
    Icon.getImageSource("md-cube", 20, "#5a6586"),
    Icon.getImageSource("md-list-box", 20, "#5a6586"),
    Icon.getImageSource("md-settings", 20, "#5a6586")
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: "rootBottomTab",
          options: {
            bottomTabs: {
              backgroundColor: "#181f31",
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
                    selectedIconColor: "white"
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
                    selectedIconColor: "white"
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
                    selectedIconColor: "white"
                  }
                }
              }
            }
          ]
        }
      }
    });
  });

const start = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setRootBottomTab();
  });
};

export { start };
