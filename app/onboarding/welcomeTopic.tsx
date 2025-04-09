import { Stack } from 'expo-router';
import { Image, Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const cardWidth = (width - 60) / 2; // 2 Spalten + Padding
const largeCardHeight = 210;
const smallCardHeight = 167;

const topics = [
    { title: 'Reduce Stress', image: require('@/assets/images/welcomeTopic/stresss.png'), backgroundColor: '#808AFF', textColor: '#FFFFFF' },
    { title: 'Improve Performance', image: require('@/assets/images/welcomeTopic/performance1.png'), backgroundColor: '#FA6E5A' },
    { title: 'Reduce Anxiety', image: require('@/assets/images/welcomeTopic/anxiety.png'), backgroundColor: '#FFCF86' },
    { title: 'Increase Happiness', image: require('@/assets/images/welcomeTopic/happiness.png'), backgroundColor: '#FEB18F' },
    { title: 'Personal Growth', image: require('@/assets/images/welcomeTopic/growth.png'), backgroundColor: '#6CB28E' },
    { title: 'Better Sleep', image: require('@/assets/images/welcomeTopic/better_sleep.png'), backgroundColor: '#3F414E' },
    { title: 'Reduce Anxiety', image: require('@/assets/images/welcomeTopic/anxiety.png'), backgroundColor: '#FFCF86' },
    { title: 'Increase Happiness', image: require('@/assets/images/welcomeTopic/happiness.png'), backgroundColor: '#FEB18F' },
];

export default function WelcomeTopic() {

    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Text style={styles.text1}>What Brings you</Text>
            <Text style={styles.text2}>to Silent Moon?</Text>
            <Text style={styles.text3}>choose a topic to focus on:</Text>

            <View style={styles.gridContainer}>
                <View style={styles.column}>
                    {topics.filter((_, i) => i % 2 === 0).map((item, index) => {
                        const height = Math.floor(index) % 2 === 0 ? largeCardHeight : smallCardHeight;
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.card, { height, backgroundColor: item.backgroundColor }]}
                                onPress={() => router.push('/onboarding/welcomeTime')}
                            >
                                <Image source={item.image} style={styles.cardImage} />
                                <Text style={styles.cardText}>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={styles.column}>
                    {topics.filter((_, i) => i % 2 !== 0).map((item, index) => {
                        const height = Math.floor(index) % 2 === 0 ? smallCardHeight : largeCardHeight;
                        return (

                            <TouchableOpacity
                                key={index}
                                style={[styles.card, { height, backgroundColor: item.backgroundColor }]}
                                onPress={() => router.push('/onboarding/welcomeTime')}
                            >
                                <Image source={item.image} style={styles.cardImage} />
                                <Text style={styles.cardText}>{item.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        padding: 20,
        backgroundColor: 'white',
    },
    text1: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41.1,
        letterSpacing: 0.3,
        color: '#3F414E',
    },
    text2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '100',
        fontSize: 30,
        lineHeight: 41.1,
        letterSpacing: 0.3,
        marginBottom: 30,
        color: '#3F414E',
    },
    text3: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 20, // 100% von 20px
        letterSpacing: 0,
        color: '#A1A4B2',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 20,
    },
    card: {
        width: cardWidth,
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
        color: '#EBEAEC',
    },

    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 20,
    },
    column: {
        flex: 1,
        gap: 20,
    },
});