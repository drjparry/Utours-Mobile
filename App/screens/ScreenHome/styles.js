// @flow

import { StyleSheet } from 'react-native'

const styles = {
    screen: {
        flex: 1,
        marginTop: 8
    },

    header: {
        marginTop: 32,
        fontSize: 24,
        marginLeft: 24
    },
    subheader: {
        fontSize: 15,
        marginHorizontal: 24,
        marginTop: 4
    },

    categoryStrip: {
        marginTop: 16,
        flexGrow: 0
    },
    categoryStripContent: {
        marginLeft: 24
    },
    category: {
        marginRight: 24,
        width: 128 // match link22
    },
    categoryImage: {
        width: 128, // link22
        height: 96
    },
    categoryLabel: {
        fontSize: 15,
        marginTop: 4
    },

    featuredStrip: {
        marginTop: 16,
        flexGrow: 0
    },
    featuredStripContent: {
        marginLeft: 24
    },
    featured: {
        marginRight: 24,
        width: 192, // match link11
    },
    featuredImage: {
        width: 192, // link11
        height: 128
    },
    featuredLabel: {
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 4
    },
    featuredWith: {
        fontSize: 13,
        marginBottom: 2
    },
    featuredWithGuide: {
        color: '#F9A603'
    },
    featuredDuration: {
        fontSize: 13,
        marginBottom: 2
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingStarImage: {
        height: 14,
        width: 14,
        resizeMode: 'contain'
    },
    ratingCount: {
        fontSize: 13,
        marginLeft: 8
    },
    save: {
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: 4,
        paddingRight: 4
    },
    saveImage: {
        width: 32,
        height: 32,
        tintColor: '#FFFFFF',
        shadowOpacity: 0.8,
        shadowRadius: 0.54 * 2,
        shadowOffset: { height: 0.6 * 2 }
    },

    topGuidesStrip: {
        marginTop: 16,
        flexGrow: 0
    },
    topGuidesStripContent: {
        marginLeft: 24,
    },
    topGuidesGuide: {
        marginRight: 8
    },
    topGuidesGuideImage: {
        width: 64,
        height: 64,
        borderRadius: 32
    }
}

export default styles