// @flow

import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './styles'

class ScreenOpening extends Component {
    static get options() {
        return {
            topBar: {
                visible: false,
                // drawBehind: true,
                // visible: false,
                animate: true
            }
        };
    }

    render() {
        return (
            <View style={styles.screen}>
                <Image style={styles.backgroundImage} source={{ uri:'landscape' }} />
                <View style={styles.backgroundOverlay} />
                <View style={styles.logo}>
                    <Text style={styles.logoTitle}>Utours</Text>
                    <Text style={styles.logoSubtitle}>Explore, experience and learn</Text>
                </View>
                <View style={styles.countryButtons}>
                    <TouchableOpacity style={styles.countryButton}>
                        <Text style={styles.countryButtonLabel}>Italy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryButton}>
                        <Text style={styles.countryButtonLabel}>Spain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryButton}>
                        <Text style={styles.countryButtonLabel}>France</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryButton}>
                        <Text style={styles.countryButtonLabel}>Belgium</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ScreenOpening