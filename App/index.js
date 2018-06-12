// @flow

import { Navigation } from 'react-native-navigation'

import registerScreens from './screens'

Navigation.events().registerAppLaunchedListener(() => {

    registerScreens();

    Navigation.setRoot({
        root: {
            stack: {
                options: {
                    topBar: {
                        drawBehind: true,
                        animate: true
                    }
                },
                children: [
                    {
                        component: {
                            name: 'nav.utours.ScreenOpening'
                        }
                    }
                ]
            }
        }
    });

})