import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import ScheduleReducer from './modules/scheduleReducer';
import AboutReducer from './modules/aboutReducer';
import SessionReducer from './modules/sessionReducer';
import SpeakerReducer from './modules/speakerReducer';

export default combineReducers({
  navigation: NavigationReducer,
  schedule: ScheduleReducer,
  about: AboutReducer,
  session: SessionReducer,
  speaker: SpeakerReducer,
});
