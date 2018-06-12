// @flow

import { Navigation } from 'react-native-navigation'

import registerScreens from './screens'

Navigation.events().registerAppLaunchedListener(() => {

    registerScreens();

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'nav.utours.ScreenOpening',
                            passProps: {
                                text: 'This is tab 1',
                                myFunction: () => 'Hello from a function!',
                            }
                        }
                    }
                ]
            }
        }
    });

})