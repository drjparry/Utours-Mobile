// @flow

import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import IMAGE_CHURCH from './church.jpg'
import IMAGE_ROME from './rome.jpg'
import IMAGE_RUINS from './ruins.jpg'
import IMAGE_STAR from './star.jpg'
import IMAGE_STONEPATH from './stonepath.jpg'
import IMAGE_TABLES from './tables.jpg'
import IMAGE_USER1 from './user1.jpg'
import IMAGE_USER2 from './user2.jpg'
import IMAGE_USER3 from './user3.jpg'
import IMAGE_USER4 from './user4.jpg'
import IMAGE_USER5 from './user5.jpg'
import IMAGE_HEART_EMPTY from './heart_empty.jpg'
import styles from './styles'

class ScreenHome extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <ScrollView style={styles.categoryStrip} contentContainerStyle={styles.categoryStripContent} horizontal>
                    <TouchableOpacity style={styles.category}>
                        <Image source={IMAGE_ROME} style={styles.categoryImage} />
                        <TouchableOpacity style={styles.save}>
                            <Image style={styles.saveImage} source={IMAGE_HEART_EMPTY} />
                        </TouchableOpacity>
                        <Text style={styles.categoryLabel}>Must See</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={IMAGE_CHURCH} style={styles.categoryImage} />
                        <TouchableOpacity style={styles.save}>
                            <Image style={styles.saveImage} source={IMAGE_HEART_EMPTY} />
                        </TouchableOpacity>
                        <Text style={styles.categoryLabel}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Image source={IMAGE_STONEPATH} style={styles.categoryImage} />
                        <TouchableOpacity style={styles.save}>
                            <Image style={styles.saveImage} source={IMAGE_HEART_EMPTY} />
                        </TouchableOpacity>
                        <Text style={styles.categoryLabel}>Architecture</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Text style={styles.header}>Featured Tours</Text>
                <ScrollView style={styles.featuredStrip} contentContainerStyle={styles.featuredStripContent} horizontal>
                    <TouchableOpacity style={styles.featured}>
                        <Image source={IMAGE_RUINS} style={styles.featuredImage} />
                        <TouchableOpacity style={styles.save}>
                            <Image style={styles.saveImage} source={IMAGE_HEART_EMPTY} />
                        </TouchableOpacity>
                        <Text style={styles.featuredLabel}>The Wonders of Ancient Rome</Text>
                        <Text style={styles.featuredWith}>
                            With&nbsp;
                            <Text style={styles.featuredWithGuide}>
                                Giovanni Lucca
                            </Text>
                        </Text>
                        <Text style={styles.featuredDuration}>
                            2.5 hours
                        </Text>
                        <View style={styles.rating}>
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Text style={styles.ratingCount}>221</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featured}>
                        <Image source={IMAGE_TABLES} style={styles.featuredImage} />
                        <TouchableOpacity style={styles.save}>
                            <Image style={styles.saveImage} source={IMAGE_HEART_EMPTY} />
                        </TouchableOpacity>
                        <Text style={styles.featuredLabel}>The Taste of Italy</Text>
                        <Text style={styles.featuredWith}>
                            With&nbsp;
                            <Text style={styles.featuredWithGuide}>
                                Kelly Johnson
                            </Text>
                        </Text>
                        <Text style={styles.featuredDuration}>
                            2.5 hours
                        </Text>
                        <View style={styles.rating}>
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Image style={styles.ratingStarImage} source={IMAGE_STAR} />
                            <Text style={styles.ratingCount}>351</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <Text style={styles.header}>Awesome Guides</Text>
                <Text style={styles.subheader}>Meet some of our top guides and learn about their tours.</Text>
                <ScrollView style={styles.topGuidesStrip} contentContainerStyle={styles.topGuidesStripContent} horizontal>
                    <TouchableOpacity style={styles.topGuidesGuide}>
                        <Image source={IMAGE_USER1} style={styles.topGuidesGuideImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topGuidesGuide}>
                        <Image source={IMAGE_USER2} style={styles.topGuidesGuideImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topGuidesGuide}>
                        <Image source={IMAGE_USER3} style={styles.topGuidesGuideImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topGuidesGuide}>
                        <Image source={IMAGE_USER4} style={styles.topGuidesGuideImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topGuidesGuide}>
                        <Image source={IMAGE_USER5} style={styles.topGuidesGuideImage} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default ScreenHome