import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import AboutReducer from './modules/actionReducer';

export default combineReducers({
  navigation: NavigationReducer,
  about: AboutReducer,
});
