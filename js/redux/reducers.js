import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import ScheduleReducer from './modules/scheduleReducer';
import AboutReducer from './modules/aboutReducer';

export default combineReducers({
  navigation: NavigationReducer,
  schedule: ScheduleReducer,
  about: AboutReducer,
});
