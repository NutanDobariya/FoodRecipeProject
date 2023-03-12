import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./src/store";
import App from './src/navigation';

LogBox.ignoreLogs([
  // 'Sending `onAnimatedValueUpdate` with no listeners registered.',
  // 'RCTBridge required dispatch_sync to load RCTDevLoadingView',
]);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
