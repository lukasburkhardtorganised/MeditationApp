import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const welcome = () => {
    return (
        <View style={styles.container}>

            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.logoRow}>
                <Text style={styles.headline1}>Silent</Text>
                <Image source={require('@/assets/images/welcome1.png')} style={styles.image_welcome1} />
                <Text style={styles.headline1}>Moon</Text>
            </View>

            <Text style={styles.text1}>Good Morning, Afsar</Text>
            <Text style={styles.text2}>We Wish you have a good day</Text>
        </View>
    )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        //justifyContent: 'center',
        backgroundColor: 'white',
    },
    headline1: {
        fontFamily: 'Airbnb Cereal App',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 16, // 100% von 16px
        letterSpacing: 0.24 * 16, // 24% von 16px = 3.84
        textAlign: 'center',
        color: 'black',
    },
    headline2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 40.5, // 135% von 30
        letterSpacing: 0,
        textAlign: 'center',
        color: '#3F414E',
    },
    logoRow: {
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image_welcome1: {
        width: 30,   // ← hier kannst du die Größe anpassen
        height: 30,
        marginHorizontal: 5,
    },
    text1: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 41.1,
        letterSpacing: 0.3,
        color: '#3F414E',
    },
    text2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '100',
        fontSize: 20,
        lineHeight: 41.1,
        letterSpacing: 0.3,
        marginBottom: 30,
        color: '#3F414E',
    },
})