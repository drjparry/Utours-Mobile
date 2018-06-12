// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './styles'

class ScreenOpening extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text>ScreenOpening</Text>
            </View>
        )
    }
}

export default ScreenOpening