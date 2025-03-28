import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link, Stack, useRouter } from 'expo-router'

const login = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (

        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Image
                    source={require('@/assets/images/back_button.png')}
                    style={styles.backImage}
                />
            </TouchableOpacity>


            <ImageBackground
                source={require('@/assets/images/Group 6800.png')}
                style={styles.backgroundImage}
                resizeMode="cover" // oder "contain", je nach Wunsch
            >
                <Text style={styles.textInImage}>Welcome Back!</Text>


                <Link href="/(onboarding)/registration" style={styles_social_button.linkFacebook}>
                    <View style={styles_social_button.facebookButtonContent}>
                        <Image
                            source={require('@/assets/images/facebook_logo.png')}
                            style={styles_social_button.facebookLogo}
                        />
                        <Text style={styles_social_button.facebookText}>CONTINUE WITH FACEBOOK</Text>
                    </View>
                </Link>

                <Link href="/(onboarding)/registration" style={styles_social_button.linkGoogle}>
                    <View style={styles_social_button.googleButtonContent}>
                        <Image
                            source={require('@/assets/images/google_logo.png')}
                            style={styles_social_button.googleLogo}
                        />
                        <Text style={styles_social_button.googleText}>CONTINUE WITH GOOGLE</Text>
                    </View>
                </Link>
            </ImageBackground>

            <Text style={styles.text}>OR LOG IN WITH EMAIL</Text>

            <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>
            <TextInput style={styles.input} value={email} onChangeText={setEmail}></TextInput>

            <Link href="/(onboarding)/welcomePerson" style={styles.button}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </Link>

            <Text style={styles.text_forget_password}>OR LOG IN WITH EMAIL</Text>

            <Text style={styles.text_sign_up1}>
                ALREADY HAVE AN ACCOUNT?{' '}
                <Text style={styles.text_sign_up2} onPress={() => router.push('/(tabs)/home')}>
                    SIGN UP
                </Text>
            </Text>

        </View>
    )
}

export default login

const styles_social_button = StyleSheet.create({
    linkFacebook: {
        marginTop: 20,
        width: '90%',
        height: 63,
        padding: 10,
        borderRadius: 38,
        backgroundColor: '#7583CA',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // Innenabstand links und rechts
    },

    facebookButtonContent: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    facebookLogo: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 0,
    },

    facebookText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 15.12, // 108% von 14px
        letterSpacing: 0.7, // 5% von 14px
        textAlign: 'center',
        color: '#F6F1FB',
        flex: 1,
    },
    linkGoogle: {
        marginTop: 20,
        color: 'white',
        width: '90%',
        height: 63,
        padding: 20,
        borderRadius: 38,
        //backgroundColor: '#EBEAEC',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // Innenabstand links und rechts
        borderWidth: 1,
        borderColor: '#EBEAEC',
    },

    googleButtonContent: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    googleLogo: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 0,
    },

    googleText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 15.12, // 108% von 14px
        letterSpacing: 0.7, // 5% von 14px
        textAlign: 'center',
        color: '#3F414E',
        flex: 1,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },

    backgroundImage: {
        width: '100%',
        height: 400, // oder je nach Bildgröße
        justifyContent: 'center', // vertikal zentriert
        alignItems: 'center',     // horizontal zentriert
    },

    textInImage: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 37.8, // 135% von 28
        letterSpacing: 0,
        textAlign: 'center',
        color: '#3F414E',
    },
    text: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 15.12,     // 14 * 1.08
        letterSpacing: 0.7,    // 14 * 0.05
        color: '#A1A4B2',         // optional: anpassbar je nach Hintergrund
        textAlign: 'center',   // optional: zentriert anzeigen
      },

    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#EBEAEC',
        borderRadius: 100,
        zIndex: 10,
    },

    backImage: {
        width: 16,   // anpassen je nach Icon-Größe
        height: 16,
        resizeMode: 'contain',
        color: '#3F414E',
    },
    input: {
        width: '90%',
        height: 63,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#F2F3F7',
        marginTop: 20,
        borderRadius: 15,
        tintColor: '#A1A4B2',
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
    },
    button: {
        marginTop: 20,
        width: '90%',
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 38,
        backgroundColor: '#8E97FD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 15.12,       // 108% von 14px → 14 * 1.08
        letterSpacing: 0.7,      // 5% von 14px → 14 * 0.05
        color: 'white',
        textAlign: 'center',
    },
    text_forget_password: {

    },
    text_sign_up1: {
        padding: 20,
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 15.12, // 108% von 14
        letterSpacing: 0.7, // 5% von 14
        textAlign: 'center',
        color: 'black',
      },
    
      text_sign_up2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 15.12,
        letterSpacing: 0.7,
        color: '#3F414E', // Optional: andere Farbe oder Stil
        textDecorationLine: 'underline', // falls du es klickbar aussehen lassen willst
      },

})