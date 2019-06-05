import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
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

const getAllBarHeights = () =>
  new Promise(resolve => resolve(Navigation.constants()));

const goToAddCoin = async (componentId, props, title) => {
  const { theme } = store.getState().properties;
  Navigation.push(componentId, {
    component: {
      id: "AddCoin",
      name: "AddCoin",
      passProps: {
        ...props,
        fromScreen: componentId
      },
      options: {
        topBar: {
          visible: true,
          animate: true,
          title: {
            text: title,
            fontSize: 20,
            color: theme.topBar.textColor,
            fontFamily: "Helvetica",
            alignment: "center"
          },
          background: {
            color: theme.topBar.backgroundColor
          },
          backButton: {
            color: theme.topBar.textColor,
            visible: true
          }
        }
      }
    }
  });
};

const goToCoinDetails = async (componentId, props, title) => {
  const { theme } = store.getState().properties;
  const threeDotIcon = await MCIcons.getImageSource(
    "dots-vertical",
    35,
    theme.bottomTab.iconColor
  );
  Navigation.push(componentId, {
    component: {
      name: "CoinDetails",
      passProps: {
        ...props
      },
      options: {
        topBar: {
          visible: true,
          animate: true,
          title: {
            text: title,
            fontSize: 20,
            color: theme.topBar.textColor,
            fontFamily: "Helvetica",
            alignment: "center"
          },
          background: {
            color: theme.topBar.backgroundColor
          },
          backButton: {
            color: theme.topBar.textColor,
            visible: true
          },
          rightButtons: [
            {
              id: "ThreeDotButton",
              icon: threeDotIcon
            }
          ]
        }
      }
    }
  });
};

const setRootBottomTab = async () => {
  const { theme = themes.NAVY_BLUE } = store.getState().properties;
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: false,
      animate: false
    }
  });

  const icons = await Promise.all([
    Icon.getImageSource("md-cube", 20, theme.bottomTab.iconColor),
    Icon.getImageSource("ios-wallet", 20, theme.bottomTab.iconColor),
    Icon.getImageSource("md-settings", 20, theme.bottomTab.iconColor)
  ]);

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
                    id: "Portfolio",
                    name: "Portfolio",
                    options: {
                      bottomTab: {
                        icon: icons[1],
                        // icon: require("../assets/icons/crypto/other/wallet.png"),
                        testID: "Portfolio",
                        selectedIconColor: theme.bottomTab.selectedIconColor
                      },
                      topBar: {
                        visible: false,
                        drawBehind: true,
                        animate: false
                      }
                      // topBar: {
                      //   visible: true,
                      //   title: {
                      //     text: "Portfolio",
                      //     fontSize: 20,
                      //     color: theme.topBar.textColor,
                      //     fontFamily: "Helvetica",
                      //     alignment: "center"
                      //   },
                      //   background: {
                      //     color: theme.topBar.backgroundColor
                      //   }
                      // }
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
                    id: "Watchlist",
                    name: "Watchlist",
                    options: {
                      topBar: {
                        visible: false,
                        drawBehind: true,
                        animate: false
                      },
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
                    id: "Settings",
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
                        drawBehind: false,
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

export {
  setLoading,
  setRootBottomTab,
  getAllBarHeights,
  goToCoinDetails,
  goToAddCoin
};
