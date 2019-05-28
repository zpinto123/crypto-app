import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { withTheme } from 'styled-components';
import { store } from '../redux/store';

import * as themes from '../design/themes';

const setLoading = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Loading',
        options: {},
        passProps: {
          text: 'This text will be available in your component.props'
        }
      }
    }
  });
};

// // register component TabBarIcon
// Navigation.registerComponent('TabBarIcon', () => withTheme(TabBarIcon));
// // TabBarIcon Component
// class TabBarIcon extends Component {
//   render() {
//     // const { theme } = this.props;
//     console.log('PROPS: ', this.props);
//     return (
//       <View
//         style={{
//           width: 55,
//           height: 55,
//           position: 'absolute',
//           bottom: 10,
//           borderRadius: 55,
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',
//           zIndex: 2,
//           backgroundColor: theme.bottomTab.backgroundColor
//         }}
//       >
//         <Text>ADD</Text>
//       </View>
//     );
//   }
// }

const setRootBottomTab = () => {
  const { theme = themes.DARK } = store.getState().cryptocompare;
  console.log('setRootBottomTab: ', store.getState().cryptocompare);
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: 'transparent' // Set background color only for components, helps reduce overdraw if background color is set in default options.
    },
    topBar: {
      visible: false,
      drawBehind: true,
      animate: false
    }
    // animations: {
    //   push: {
    //     waitForRender: true
    //   },
    //   showModal: {
    //     waitForRender: true
    //   }
    // }
  });

  Navigation.showOverlay({
    component: {
      name: 'FloatingButton',
      options: {
        overlay: {
          interceptTouchOutside: false
        },
        layout: {
          componentBackgroundColor: 'transparent' // Set background color only for components, helps reduce overdraw if background color is set in default options.
        }
      }
    }
  });

  Promise.all([
    Icon.getImageSource('md-cube', 20, theme.bottomTab.iconColor),
    Icon.getImageSource('md-list-box', 20, theme.bottomTab.iconColor),
    Icon.getImageSource('md-settings', 20, theme.bottomTab.iconColor)
  ]).then(icons => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'rootBottomTab',
          options: {
            bottomTabs: {
              backgroundColor: theme.bottomTab.backgroundColor,
              currentTabIndex: 0,
              animate: false,
              titleDisplayMode: 'alwaysHide'
            }
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Watchlist',
                      options: {
                        topBar: null,
                        bottomTab: {
                          icon: icons[0],
                          testID: 'Watchlist',
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
                      name: 'Portfolio',
                      options: {
                        bottomTab: {
                          icon: icons[1],
                          testID: 'Portfolio',
                          selectedIconColor: theme.bottomTab.selectedIconColor
                        },
                        topBar: {
                          visible: true,
                          title: {
                            text: 'Portfolio',
                            fontSize: 20,
                            color: theme.topBar.textColor,
                            fontFamily: 'Helvetica',
                            alignment: 'center'
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
                      name: 'Settings',
                      options: {
                        bottomTab: {
                          icon: icons[2],
                          testID: 'Settings',
                          selectedIconColor: theme.bottomTab.selectedIconColor
                        },
                        topBar: {
                          visible: true,
                          title: {
                            text: 'Settings',
                            fontSize: 20,
                            color: theme.topBar.textColor,
                            fontFamily: 'Helvetica',
                            alignment: 'center'
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

export { setLoading, setRootBottomTab };
