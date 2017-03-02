import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import { Provider } from 'react-redux';
import Router from '../js/navigation/router';
import Store from '../js/redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
});

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            navigatorUID="root"
            initialRoute={Router.getRoute('root')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
