// @flow

import { Navigation } from 'react-native-navigation'

import registerScreens from './screens'

Navigation.events().registerAppLaunchedListener(() => {

    registerScreens();

    Navigation.setRoot({
        root: {
            component: {
                name: 'nav.utours.ScreenOpening'
            }
        }
    });

})