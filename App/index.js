import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

class WelcomeScreen extends Component {
    // static options() {
    //     return {
    //         _statusBar: {
    //             backgroundColor: 'transparent',
    //             style: 'dark',
    //             drawBehind: true
    //         },
    //         topBar: {
    //             title: {
    //                 title: 'My Screen'
    //             },
    //             largeTitle: {
    //                 visible: false,
    //             },
    //             drawBehind: true,
    //             visible: false,
    //             animate: false
    //         }
    //     }
    // }

    render() {
        return (
            <View style={{ backgroundColor:'skyblue', flex:1, justifyContent:'center', alignItems:'center' }}>
                <Text>Welcome</Text>
            </View>
        )
    }
}

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => WelcomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'navigation.playground.WelcomeScreen'
            }
        }
    })
})