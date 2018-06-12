// @flow

import { Platform } from 'react-native'

export function getElevation(elevationAndroid: number) {
    return Platform.select({
        ios: {
            // https://github.com/mxck/react-native-material-menu/issues/10#issue-290259552
            shadowOpacity: 0.0015 * elevationAndroid + 0.18,
            shadowRadius: 0.54 * elevationAndroid,
            shadowOffset: { height: 0.6 * elevationAndroid }
        },
        android: {
            elevation: elevationAndroid
        }
    });
}