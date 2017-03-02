import { NavigationActions } from '@exponent/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID,
    Router.getRoute('session', { sessionData }),
  ));
};

export const goToSpeaker = (speakerData) => {
  Store.dispatch(NavigationActions.push(
    'root',
    Router.getRoute('speaker', { speakerData }),
  ));
};

// TODO other functions
/*
<TouchableOpacity
  onPress={() => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('main').jumpToTab('profile');
      stacks('home').push(route);
    });
  }}
/>
*/
