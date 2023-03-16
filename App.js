import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import App from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreLogs([
  "Require cycle:"
  // 'Sending `onAnimatedValueUpdate` with no listeners registered.',
  // 'RCTBridge required dispatch_sync to load RCTDevLoadingView',
]);

export default () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </SafeAreaProvider>
);
