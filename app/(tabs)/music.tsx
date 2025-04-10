import React from 'react';
import { View, StyleSheet, ImageBackground, Text, GestureResponderEvent, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';

import { useLocalSearchParams } from 'expo-router';

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
                <Text style={{ textAlign: 'center' }}>Hier kommt dein weiterer Content</Text>
            </View>
        </View>
    )
}

export default music

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