import React, { Component } from "react";
import { View, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { withTheme } from "styled-components";
import { store } from "../redux/store";

import * as themes from "../design/themes";

const setLoading = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Loading",
        options: {},
        passProps: {
          text: "This text will be available in your component.props"
        }
      }
    }
  });
};

const setRootBottomTab = () => {
  const { theme = themes.NAVY_BLUE } = store.getState().cryptocompare;
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false
    }
  });

  Promise.all([
    Icon.getImageSource("md-cube", 20, theme.bottomTab.iconColor),
    Icon.getImageSource("ios-wallet", 20, theme.bottomTab.iconColor),
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
                          // icon: require("../assets/icons/crypto/other/watchlist.png"),
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
                          // icon: require("../assets/icons/crypto/other/wallet.png"),
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
                          // icon: require("../assets/icons/crypto/other/settings.png"),
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
  // setBottomBarFloatingButton();
};

// const setBottomBarFloatingButton = Navigation.showOverlay({
//   component: {
//     name: "FloatingButton",
//     options: {
//       overlay: {
//         interceptTouchOutside: false
//       }
//     }
//   }
// });

export { setLoading, setRootBottomTab };
