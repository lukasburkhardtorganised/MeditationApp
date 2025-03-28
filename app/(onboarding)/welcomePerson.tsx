import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'

const welcomePerson = () => {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Hintergrund-Images */}
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('@/assets/images/Ellipse 13.png')}
                    style={[styles.bg, {
                        width: screenWidth * (492 / 414),
                        height: screenHeight * (492 / 896),
                        top: screenHeight * (369 / 896),
                        left: screenWidth * (-39 / 414),
                    }]}
                />
                <Image
                    source={require('@/assets/images/Ellipse 12.png')}
                    style={[styles.bg, {
                        width: screenWidth * (422 / 414),
                        height: screenHeight * (422 / 896),
                        top: screenHeight * (404 / 896),
                        left: screenWidth * (-4 / 414),
                    }]}
                />
                <Image
                    source={require('@/assets/images/Ellipse 11.png')}
                    style={[styles.bg, {
                        width: screenWidth * (354 / 414),
                        height: screenHeight * (354 / 896),
                        top: screenHeight * (438 / 896),
                        left: screenWidth * (30 / 414),
                    }]}
                />
                <Image
                    source={require('@/assets/images/Ellipse 10.png')}
                    style={[styles.bg, {
                        width: screenWidth * (284 / 414),
                        height: screenHeight * (284 / 896),
                        top: screenHeight * (473 / 896),
                        left: screenWidth * (65 / 414),
                    }]}
                />
                <Image
                    source={require('@/assets/images/Group.png')}
                    style={[styles.bg, {
                        width: screenWidth * (430 / 414),
                        height: screenHeight * (258 / 896),
                        top: screenHeight * (397 / 896),
                        left: screenWidth * (-9 / 414),
                    }]}
                />
                <Image
                    source={require('@/assets/images/Rectangle 211.png')}
                    style={[styles.bg, {
                        width: screenWidth * (416 / 414),
                        height: screenHeight * (266 / 896),
                        top: screenHeight * (654 / 896),
                        left: screenWidth * (-2 / 414),
                    }]}
                />
                <Image
                    source={require('@/assets/images/Ellipse 15.png')}
                    style={[styles.bg, {
                        width: screenWidth * (6 / 414),
                        height: screenHeight * (6 / 896),
                        top: screenHeight * (352 / 896),
                        left: screenWidth * (27 / 414),
                    }]}
                />

                <Image
                    source={require('@/assets/images/Ellipse 14.png')}
                    style={[styles.bg, {
                        width: screenWidth * (12 / 414),
                        height: screenHeight * (12 / 896),
                        top: screenHeight * (357 / 896),
                        left: screenWidth * (33 / 414),
                    }]}
                />

                <Image
                    source={require('@/assets/images/Vector 4.png')}
                    style={[styles.bg, {
                        width: screenWidth * (50 / 414),
                        height: screenHeight * (24 / 896),
                        top: screenHeight * (374 / 896),
                        left: screenWidth * (-9 / 414),
                    }]}
                />

                <Image
                    source={require('@/assets/images/Vector 3.png')}
                    style={[styles.bg, {
                        width: screenWidth * (114.1348 / 414),
                        height: screenHeight * (55.0251 / 896),
                        top: screenHeight * (434 / 896),
                        left: screenWidth * (307 / 414),
                    }]}
                />

                <Image
                    source={require('@/assets/images/Vector 5.png')}
                    style={[styles.bg, {
                        width: screenWidth * (36 / 414),
                        height: screenHeight * (14 / 896),
                        top: screenHeight * (410 / 896),
                        left: screenWidth * (282 / 414),
                    }]}
                />
            </View>

            {/* Vordergrund-Content */}
            <View>
                <View style={styles.logoRow}>
                    <Text style={styles.headline1}>Silentt</Text>
                    <Image source={require('@/assets/images/welcome1.png')} style={styles.image_welcome1} />
                    <Text style={styles.headline1}>Moon</Text>
                </View>

                <Text style={styles.text1}>Hi Afsar, Welcome</Text>
                <Text style={styles.text2}>to Silent Moon</Text>
                <Text style={styles.text3}>Explore the app, find some peace of mind to prepare for meditation</Text>


                <Link
                    style={[
                        styles.signUpButton,
                        {
                            width: screenWidth * (374 / 414),
                            height: screenHeight * (63 / 896),
                            top: screenHeight * (739 / 896),
                            alignSelf: 'center',
                        },
                    ]}
                    href="/(onboarding)/registration"
                >
                    <Text style={styles.signUpText}>GET STARTED</Text>
                </Link>
            </View>
        </View>
    )
}

export default welcomePerson

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#8C96FF',
    },
    headline1: {
        fontFamily: 'Airbnb Cereal App',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 16, // 100% von 16px
        letterSpacing: 0.24 * 16, // 24% von 16px = 3.84
        textAlign: 'center',
        color: '#FFFFFF',
    },
    text1: {
        paddingTop: 20,
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 30,
        lineHeight: 40.5, // 135% von 30
        letterSpacing: 0.1,
        textAlign: 'center',
        color: '#FFECCC',
    },
    text2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '100',
        fontSize: 30,
        lineHeight: 40.5, // 135% von 30
        letterSpacing: 0.1,
        textAlign: 'center',
        color: '#FFECCC',
    },
    text3: {
        paddingLeft: 30,
        paddingRight: 30,
        fontFamily: 'HelveticaNeue',
        fontWeight: '100',
        fontSize: 16,
        lineHeight: 40.5, // 135% von 30
        textAlign: 'center',
        color: '#EBEAEC',
    },
    image_welcome2: {
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF8F5',
    },
    logoRow: {
        paddingTop: 40,
        backgroundColor: '#8C96FF',
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
    backgroundImage: {
        color: '#FAF8F5',
        width: '100%',
        // Höhe anpassen je nach Bild oder Inhalt
        height: 500,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    bg: {
        position: 'absolute',
        resizeMode: 'contain',
    },
    signUpButton: {
        position: 'absolute',
        backgroundColor: '#fff', // oder beliebige Farbe
        borderRadius: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 63, 
        letterSpacing: 0.7,
        color: '#3F414E',
        textAlign: 'center',
    }
})