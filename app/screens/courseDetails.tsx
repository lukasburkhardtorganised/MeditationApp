import { View, StyleSheet, ImageBackground, Text, GestureResponderEvent, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';

import React, { useState } from 'react';

const tracks = [
    { title: 'Focus Attention', duration: '10 MIN' },
    { title: 'Body Scan', duration: '5 MIN' },
    { title: 'Making Happiness', duration: '3 MIN' },
];

const courseDetails = () => {

    const [selectedVoice, setSelectedVoice] = useState<'male' | 'female'>('male');

    const [selectedTrack, setSelectedTrack] = useState<number | null>(0);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Stack.Screen options={{ headerShown: false }} />
                <ImageBackground
                    source={require('@/assets/images/course_details/sun.png')} // <-- ersetze mit deinem Bild
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
                    <Text style={styles.text1}>Happy Morning</Text>
                    <Text style={styles.text2}>COURSE</Text>
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

                    <Text style={styles.text4}>Pick a Nrrator</Text>

                    <View style={stylesRow.tabRow}>
                        <TouchableOpacity onPress={() => setSelectedVoice('male')} style={stylesRow.tabButton}>
                            <Text style={[stylesRow.tabText, selectedVoice === 'male' && stylesRow.tabTextActive]}>
                                MALE VOICE
                            </Text>
                            {selectedVoice === 'male' && <View style={stylesRow.underline} />}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectedVoice('female')} style={stylesRow.tabButton}>
                            <Text style={[stylesRow.tabText, selectedVoice === 'female' && stylesRow.tabTextActive]}>
                                FEMALE VOICE
                            </Text>
                            {selectedVoice === 'female' && <View style={stylesRow.underline} />}
                        </TouchableOpacity>
                    </View>

                    {tracks.map((track, index) => {
                        const isActive = selectedTrack === index;

                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => router.push({ pathname: '/screens/music', params: { title: track.title } })}
                                style={styleListe.trackItem}
                            >
                                <View style={[styleListe.playButtonCircle, isActive && styleListe.playButtonCircleActive]}>
                                    <Ionicons
                                        name="play"
                                        size={16}
                                        color={isActive ? 'white' : '#8E97FD'}
                                    />
                                </View>
                                <View style={styleListe.trackTextWrapper}>
                                    <Text style={styleListe.trackTitle}>{track.title}</Text>
                                    <Text style={styleListe.trackDuration}>{track.duration}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}

                </View>


            </View>
        </ScrollView>
    );
};

export default courseDetails

const styleListe = StyleSheet.create({
    trackItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F1F6',
    },

    playButtonCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1.5,
        borderColor: '#8E97FD',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },

    playButtonCircleActive: {
        backgroundColor: '#8E97FD',
    },

    trackTextWrapper: {
        flexDirection: 'column',
    },

    trackTitle: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 16,
        color: '#3F414E',
    },

    trackDuration: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 12,
        color: '#A1A4B2',
        marginTop: 4,
    },
})

const stylesRow = StyleSheet.create({
    tabRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 10,
        marginBottom: 10,
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 10,
    },
    tabText: {
        fontSize: 14,
        color: '#A1A4B2',
        fontWeight: '600',
    },
    tabTextActive: {
        color: '#8E97FD',
    },
    underline: {
        marginTop: 6,
        height: 2,
        width: 40,
        backgroundColor: '#8E97FD',
        borderRadius: 1,
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: 'white',
    },
    container2: {
        padding: 20,
        flex: 1,
        //justifyContent: 'center',
        backgroundColor: 'white',
    },
    background: {
        flex: 1,
        height: 288,

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
        color: '#3F414E',
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
        color: '#A1A4B2',
    },
    text3: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 16 * 1.45, // 23.2
        letterSpacing: 0,
        marginBottom: 30,
        color: '#A1A4B2',
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