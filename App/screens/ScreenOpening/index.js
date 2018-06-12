// @flow

import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './styles'

class ScreenOpening extends Component {
    static get options() {
        return {
            topBar: {
                visible: false
            }
        }
    }

    render() {
        console.log('this.props:', this.props);
        return (
            <View style={styles.screen}>
                <Image style={styles.backgroundImage} source={{ uri: 'landscape' }} />
                <View style={styles.backgroundOverlay} />
                <View style={styles.logo}>
                    <Text style={styles.logoTitle}>Utours</Text>
                    <Text style={styles.logoSubtitle}>Explore, experience and learn</Text>
                </View>
                <View style={styles.countryButtons}>
                    <TouchableOpacity style={styles.countryButton} onPress={this.gotoItaly}>
                        <Text style={styles.countryButtonLabel}>Italy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryButton} onPress={this.gotoSpain}>
                        <Text style={styles.countryButtonLabel}>Spain</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryButton} onPress={this.gotoFrance}>
                        <Text style={styles.countryButtonLabel}>France</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.countryButton} onPress={this.gotoBelgium}>
                        <Text style={styles.countryButtonLabel}>Belgium</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    gotoCountry = async (name) => {
        await Navigation.push(this.props.componentId, {
            component: {
                name: 'nav.utours.ScreenHome',
                options: {
                    topBar: {
                        title: {
                            text: name
                        }
                    }
                }
            }
        });
    }

    gotoItaly = () => this.gotoCountry('Italy')
    gotoSpain = () => this.gotoCountry('Spain')
    gotoFrance = () => this.gotoCountry('France')
    gotoBelgium = () => this.gotoCountry('Belgium')
}

export default ScreenOpening