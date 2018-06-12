// @flow

import { StyleSheet } from 'react-native'

const styles = {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    backgroundOverlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(242, 92, 0, 0.45)'
    },

    logo: {
        alignItems: 'center'
    },
    logoTitle: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: '700'
    },
    logoSubtitle: {
        marginTop: 8,
        color: '#FFFFFF',
        fontSize: 13
    },

    countryButtons: {
        width: 288,
        marginTop: 32
    },
    countryButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.62)',
        borderRadius: 8,
        paddingVertical: 12,
        marginBottom: 8
    },
    countryButtonLabel: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center'
    }
}

export default styles