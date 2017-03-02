import React, { Component } from 'react';
import {
  // StyleSheet,
  StatusBar,
  // View,
} from 'react-native';
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

/* const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});*/

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation initialRoute={Router.getRoute('root')} />
        </NavigationProvider>
      </Provider>
    );
  }
}
