import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

const { width } = Dimensions.get('window');

const cardWidth = (width - 60) / 2; // 2 Spalten + Padding
const largeCardWidgth = cardWidth - 20; // 20px Padding
const largeCardHeight = 210;
const smallCardHeight = 167;

const topics = [
    { title: 'Reduce Stress', image: require('@/assets/images/welcomeTopic/stresss.png'), backgroundColor: '#808AFF' },
    { title: 'Improve Performance', image: require('@/assets/images/welcomeTopic/performance1.png'), backgroundColor: '#FA6E5A' },
    { title: 'Reduce Anxiety', image: require('@/assets/images/welcomeTopic/anxiety.png'), backgroundColor: '#FFCF86' },
    { title: 'Increase Happiness', image: require('@/assets/images/welcomeTopic/happiness.png'), backgroundColor: '#FEB18F' },
    { title: 'Reduce Stress', image: require('@/assets/images/welcomeTopic/stresss.png'), backgroundColor: '#808AFF' },
    { title: 'Improve Performance', image: require('@/assets/images/welcomeTopic/performance1.png'), backgroundColor: '#FA6E5A' },
    { title: 'Reduce Anxiety', image: require('@/assets/images/welcomeTopic/anxiety.png'), backgroundColor: '#FFCF86' },
    { title: 'Increase Happiness', image: require('@/assets/images/welcomeTopic/happiness.png'), backgroundColor: '#FEB18F' },
];

const height = Math.floor(1) % 2 === 0 ? smallCardHeight : largeCardHeight;

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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    style={[styles.card, { height, backgroundColor: '#808AFF', flex: 1, marginRight: 8 }]}
                    onPress={() => router.push('/(onboarding)/welcomeTime')}
                >
                    <Image source={require('@/assets/images/welcomeTopic/stresss.png')} style={styles.cardImage} />
                    <Text style={styles.cardText}>{'Reduce Stress'}</Text>
                    <Text style={styles.cardText}>{'COURSE'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.card, { height, backgroundColor: '#FFCF86', flex: 1, marginLeft: 8 }]}
                    onPress={() => router.push('/(onboarding)/welcomeTime')}
                >
                    <Image source={require('@/assets/images/welcomeTopic/anxiety.png')} style={styles.cardImage} />
                    <Text style={styles.cardText}>{'Relaxation'}</Text>
                    <Text style={styles.cardText}>{'MUSIC'}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[styles.cardLarge, { height: 95, backgroundColor: '#808AFF', marginRight: 8 }]}
                onPress={() => router.push('/(onboarding)/welcomeTime')}
            >
                <Image source={require('@/assets/images/welcomeTopic/stresss.png')} style={styles.cardImage} />
                <Text style={styles.cardText}>{'Daily Thought'}</Text>
                <Text style={styles.cardText}>{'MEDITATION * 3-10 MIN'}</Text>
            </TouchableOpacity>

            <Text style={styles.text1}>Which day would you like to meditate?</Text>


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
        paddingTop: 20,
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
    card: {
        width: cardWidth,
        borderRadius: 10,
        backgroundColor: '#F6F1FB',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    cardLarge: {
        marginTop: 20,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#F6F1FB',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    cardImage: {
        padding: 20,
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    cardText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 19.44,
        letterSpacing: 0,
        textAlign: 'center',
        padding: 10,
        color: '#3F414E',
    },
    cardLargeImage: {
        padding: 20,
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    cardLargeText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 19.44,
        letterSpacing: 0,
        textAlign: 'left',
        padding: 10,
        color: '#3F414E',
    },
})