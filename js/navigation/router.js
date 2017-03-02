import { createRouter } from '@exponent/ex-navigation';
import NavigationLayout from './NavigationLayout';
import Schedule from '../scenes/Schedule';
import AppMap from '../scenes/Map';
import Faves from '../scenes/Faves';
import About from '../scenes/About';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';

export default createRouter(() => ({
  root: () => NavigationLayout,
  schedule: () => Schedule,
  map: () => AppMap,
  faves: () => Faves,
  about: () => About,
  session: () => Session,
  speaker: () => Speaker,
}));
