import { createRouter } from '@exponent/ex-navigation';
import NavigationLayout from './NavigationLayout';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session';
import AppMap from '../scenes/Map';
import Faves from '../scenes/Faves';
import About from '../scenes/About';

export default createRouter(() => ({
  root: () => NavigationLayout,
  schedule: () => Schedule,
  session: () => Session,
  map: () => AppMap,
  faves: () => Faves,
  about: () => About,
}));
