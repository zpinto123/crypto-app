import { YellowBox } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { setRootBottomTab, setLoading } from './src/navigation/navigationRoots';
import registerScreens from './src/navigation/registerScreens';

YellowBox.ignoreWarnings([
  'Remote debugger is in a background tab which may cause apps to perform slowly.',
  'Require cycle: node_modules/rn-fetch-blob/index.js',
  'Require cycle: node_modules/react-native/Libraries/Network/fetch.js'
]);

const start = () => {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(() => {
    setLoading();
    // setRootBottomTab();
  });
};

export { start };
