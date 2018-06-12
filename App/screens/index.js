// @flow

import { Navigation } from 'react-native-navigation'

import ScreenCategory from './ScreenCategory'
import ScreenHome from './ScreenHome'
import ScreenOpening from './ScreenOpening'
import ScreenProfile from './ScreenProfile'
import ScreenPurchased from './ScreenPurchased'
import ScreenSaved from './ScreenSaved'
import ScreenSignup from './ScreenSignup'
import ScreenTour from './ScreenTour'

function registerScreens() {
    Navigation.registerComponent('nav.utours.ScreenCategory', () => ScreenCategory);
    Navigation.registerComponent('nav.utours.ScreenHome', () => ScreenHome);
    Navigation.registerComponent('nav.utours.ScreenOpening', () => ScreenOpening);
    Navigation.registerComponent('nav.utours.ScreenProfile', () => ScreenProfile);
    Navigation.registerComponent('nav.utours.ScreenPurchased', () => ScreenPurchased);
    Navigation.registerComponent('nav.utours.ScreenSaved', () => ScreenSaved);
    Navigation.registerComponent('nav.utours.ScreenSignup', () => ScreenSignup);
    Navigation.registerComponent('nav.utours.ScreenTour', () => ScreenTour);
}

export default registerScreens

