import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { store } from "../redux/store";

import * as themes from "../design/themes";

const setRootBottomTab = () => {
  const { theme = themes.DARK } = store.getState().cryptocompare;
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false
    },
    animations: {
      push: {
        waitForRender: true
      },
      showModal: {
        waitForRender: true
      }
    }
  });

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
              animate: false,
              titleDisplayMode: "alwaysHide"
            }
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: "Watchlist",
                      options: {
                        topBar: null,
                        bottomTab: {
                          icon: icons[0],
                          testID: "Watchlist",
                          selectedIconColor: theme.bottomTab.selectedIconColor
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: "Portfolio",
                      options: {
                        bottomTab: {
                          icon: icons[1],
                          testID: "Portfolio",
                          selectedIconColor: theme.bottomTab.selectedIconColor
                        },
                        topBar: {
                          visible: true,
                          title: {
                            text: "Portfolio",
                            fontSize: 20,
                            color: theme.topBar.textColor,
                            fontFamily: "Helvetica",
                            alignment: "center"
                          },
                          background: {
                            color: theme.topBar.backgroundColor
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: "Settings",
                      options: {
                        bottomTab: {
                          icon: icons[2],
                          testID: "Settings",
                          selectedIconColor: theme.bottomTab.selectedIconColor
                        },
                        topBar: {
                          visible: true,
                          title: {
                            text: "Settings",
                            fontSize: 20,
                            color: theme.topBar.textColor,
                            fontFamily: "Helvetica",
                            alignment: "center"
                          },
                          background: {
                            color: theme.topBar.backgroundColor
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    });
  });
};

export { setRootBottomTab };
