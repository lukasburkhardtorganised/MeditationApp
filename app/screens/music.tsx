import React from 'react';
import { View, StyleSheet, ImageBackground, Text, GestureResponderEvent, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';

import { useLocalSearchParams } from 'expo-router';
import Slider from '@react-native-community/slider';


const { width } = Dimensions.get('window');

const music = () => {
    const { title } = useLocalSearchParams(); // <- Titel aus URL lesen

    return (
        <View style={styles.background}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.buttonRow}>
                {/* Linker Button */}
                <TouchableOpacity style={styles.circleBackButton} onPress={() => router.push('/screens/courseDetails')}>
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

            <View style={styles.centeredTextWrapper}>
                <Text style={styles.text1}>{title || 'Focus Attention'}</Text>
                <Text style={styles.text2}>7 DAYS OF CALM</Text>
            </View>

            <View style={{ marginTop: '90%' }}>
                <View style={stylesPlayer.playerContainer}>
                    <View style={stylesPlayer.controlsRow}>
                        <TouchableOpacity>
                            <Image
                                source={require('@/assets/images/music/back_15.png')} // Beispielicon
                                style={stylesPlayer.skipIcon}
                            />
                        </TouchableOpacity>

                        <View style={stylesPlayer.playWrapper}>
                            <TouchableOpacity style={stylesPlayer.playButton}>
                                <Ionicons name="pause" size={28} color="white" />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Image
                                source={require('@/assets/images/music/forward_15.png')} // Beispielicon
                                style={stylesPlayer.skipIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={stylesPlayer.sliderContainer}>
                        <Slider
                            style={{ flex: 1 }}
                            minimumValue={0}
                            maximumValue={2700} // 45 min
                            value={90}
                            minimumTrackTintColor="#3F414E"
                            maximumTrackTintColor="#DADADA"
                            thumbTintColor="#3F414E"
                        />
                        <View style={stylesPlayer.timeRow}>
                            <Text style={stylesPlayer.timeText}>01:30</Text>
                            <Text style={stylesPlayer.timeText}>45:00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default music

const stylesPlayer = StyleSheet.create({
    playerContainer: {
        paddingHorizontal: 40,
        paddingTop: 30,
    },
    controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingLeft: 20,
        paddingRight: 20
    },

    skipIcon: {
        width: 40,
        height: 40,
        tintColor: '#A1A4B2',
        resizeMode: 'contain',
    },
    sliderContainer: {
        width: '100%',
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    timeText: {
        fontSize: 14,
        color: '#A1A4B2',
        fontFamily: 'HelveticaNeue',
    },

    playWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E6E7F2', // heller Hintergrund-Kreis
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      playButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#3F414E',
        justifyContent: 'center',
        alignItems: 'center',
      },
})

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FCFCFC'

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
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        backgroundColor: 'transparnet',
    },

    centeredTextWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -0.5 * width }, { translateY: -50 }],
        width: width,
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
        marginBottom: 15,
        alignSelf: 'center'
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
        alignSelf: 'center'
    },
})