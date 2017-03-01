import { createRouter } from '@exponent/ex-navigation';
import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import NavigationLayout from './NavigationLayout';

export default createRouter(() => ({
  root: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
}));
