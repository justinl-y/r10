import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import ScheduleReducer from './modules/scheduleReducer';
import FavesReducer from './modules/favesReducer';
import AboutReducer from './modules/aboutReducer';
import SessionReducer from './modules/sessionReducer';

export default combineReducers({
  navigation: NavigationReducer,
  schedule: ScheduleReducer,
  faves: FavesReducer,
  about: AboutReducer,
  session: SessionReducer,
});
