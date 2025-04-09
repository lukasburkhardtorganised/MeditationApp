import { View, StyleSheet, ImageBackground, Text, GestureResponderEvent, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';

import React, { useState } from 'react';

const { width } = Dimensions.get('window');

const tracks = [
    { title: 'Focus Attention', duration: '10 MIN' },
    { title: 'Body Scan', duration: '5 MIN' },
    { title: 'Making Happiness', duration: '3 MIN' },
];

const cards = [
    {
        title: 'Moon Clouds',
        subtitle: '45 MIN - SLEEP MUSIC',
        duration: '3-10 MIN',
        backgroundColor: '#4C53B4',
        image: require('@/assets/images/sleep/picture1.png'),
    },
    {
        title: 'Sweet Sleep',
        subtitle: '45 MIN - SLEEP MUSIC',
        backgroundColor: '#4C53B4',
        image: require('@/assets/images/sleep/picture2.png'),
    },
    // beliebig erweiterbar
];

const playOption = () => {


    const [selectedTrack, setSelectedTrack] = useState<number | null>(0);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Stack.Screen options={{ headerShown: false }} />
                <ImageBackground
                    source={require('@/assets/images/sleep/picture1.png')} // <-- ersetze mit deinem Bild
                    style={styles.background}
                    resizeMode="cover"
                >
                    <View style={styles.buttonRow}>
                        {/* Linker Button */}
                        <TouchableOpacity style={styles.circleBackButton} onPress={() => router.push('/(tabs)/home')}>
                            <Image
                                source={require('@/assets/images/course_details/back_icon.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                        {/* Rechte Gruppe */}
                        <View style={styles.rightButtonGroup}>
                            <TouchableOpacity style={styles.circleButton} onPress={() => router.push('/(tabs)/home')}>
                                <Image
                                    source={require('@/assets/images/course_details/like_icon.png')}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.circleButton} onPress={() => router.push('/(tabs)/home')}>
                                <Image
                                    source={require('@/assets/images/course_details/download_icon.png')}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.container2}>
                    <Text style={styles.text1}>Night Island</Text>
                    <Text style={styles.text2}>45 MIN - SLEEP MUSIC</Text>
                    <Text style={styles.text3}>Ease the mind into a restful night’s sleep  with these deep, amblent tones.</Text>

                    <View style={styles.row}>
                        {/* Erstes Paar */}
                        <View style={styles.iconTextPair}>
                            <Image
                                source={require('@/assets/images/course_details/favorit_sum_icon.png')} // passe den Pfad an
                                style={styles.icon1}
                            />
                            <Text style={styles.text}>24.234 Favorites</Text>
                        </View>

                        {/* Spacer */}
                        <View style={styles.spacer} />

                        {/* Zweites Paar */}
                        <View style={styles.iconTextPair}>
                            <Image
                                source={require('@/assets/images/course_details/listen_icon.png')} // passe den Pfad an
                                style={styles.icon2}
                            />
                            <Text style={styles.text}>34.234 Lestining</Text>
                        </View>
                    </View>

                    {Array.from({ length: Math.ceil(cards.length / 2) }).map((_, rowIndex) => (
                        <View
                            key={rowIndex}
                            style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}
                        >
                            {cards.slice(rowIndex * 2, rowIndex * 2 + 2).map((card, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{ alignItems: 'flex-start', width: '48%' }}
                                    onPress={() => router.push({ pathname: '/screens/sleep_screens/playOption', params: { title: card.title } })}
                                >
                                    <View
                                        style={[
                                            styleListe.cardModified,
                                            {
                                                backgroundColor: card.backgroundColor,
                                            },
                                        ]}
                                    >
                                        <Image source={card.image} style={styleListe.cardTopRightImage} />
                                    </View>
                                    <Text style={styleListe.cardTextBelow}>{card.title}</Text>
                                    <Text style={styleListe.cardSmallTextBelow}>{card.subtitle}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}

                    <TouchableOpacity style={styleButton.playButton} onPress={() => console.log('Play pressed')}>
                        <Text style={styleButton.playButtonText}>PLAY</Text>
                    </TouchableOpacity>


                </View>


            </View>
        </ScrollView>
    );
};
export default playOption


const styleButton = StyleSheet.create({
    playButton: {
        marginTop: 20,
        backgroundColor: '#8E97FD',
        paddingVertical: 16,
        borderRadius: 38,
        alignItems: 'center',
    },

    playButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 1,
    },
})

const styleListe = StyleSheet.create({
    cardModified: {
        width: width / 2 - 30, // z. B. für 2 Cards nebeneinander mit Margin
        height: width / 2.8,   // statt fixer Höhe – skaliert mit Gerät
        borderRadius: 10,
        padding: 15,
        position: 'relative',
        justifyContent: 'center',
        overflow: 'hidden',
    },


    cardTopRightImage: {
        width: width / 2 - 30, // z. B. für 2 Cards nebeneinander mit Margin
        height: width / 2.3,   // statt fixer Höhe – skaliert mit Gerät
        resizeMode: 'contain',
        position: 'absolute',
    },

    cardBigImage: {
        width: width, // z. B. für 2 Cards nebeneinander mit Margin
        height: 230,   // statt fixer Höhe – skaliert mit Gerät
        resizeMode: 'contain',
        position: 'absolute',
    },

    cardTextBelow: {
        marginTop: 8,
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 18 * 1.08, // 108% von 18px
        letterSpacing: 0,
        color: '#E6E7F2',
      },
      cardSmallTextBelow: {
        marginTop: 8,
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 11 * 1.08, // 108% von 11px = 11.88
        letterSpacing: 0.55,   // 5% von 11px = 0.55
        color: '#98A1BD',
      },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#03174C'
    },
    container2: {
        padding: 20,
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: '#03174C'
    },
    background: {
        flex: 1,
        height: 288,
        backgroundColor: '#03174C'

    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
    },

    rightButtonGroup: {
        flexDirection: 'row',
        gap: 15, // funktioniert ab RN 0.71 – sonst: marginLeft am zweiten Button
    },
    circleBackButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(3, 23, 76, 0.5)', // 50% Transparenz
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 34 * 1.08, // 36.72
        letterSpacing: 0,
        color: '#E6E7F2',
        paddingTop: 20,
        marginBottom: 15
    },
    text2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14 * 1.08, // 15.12
        letterSpacing: 0.7, // 5% von 14px
        marginTop: 10,
        marginBottom: 15,
        color: '#98A1BD',
    },
    text3: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 16 * 1.45, // 23.2
        letterSpacing: 0,
        marginBottom: 30,
        color: '#98A1BD',
        paddingRight: 40,
    },
    text4: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 20 * 1.08, // 21.6
        letterSpacing: 0,
        color: '#3F414E',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconTextPair: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6, // oder use marginRight in icon
    },
    spacer: {
        width: 30, // der größere Abstand zwischen den Paaren
    },
    text: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14 * 1.08, // 15.12
        letterSpacing: 0,
        color: '#A1A4B2',
        textTransform: 'capitalize',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        backgroundColor: 'transparnet',
    },
    icon1: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    icon2: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
})