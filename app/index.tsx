import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const Index = () => {
  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/Frame.png')}
        style={styles.backgroundImage}
        resizeMode="cover" // oder "contain", je nach Wunsch
      >
        <View style={styles.logoRow}>
          <Text style={styles.headline1}>Silent</Text>
          <Image source={require('@/assets/images/welcome1.png')} style={styles.image_welcome1} />
          <Text style={styles.headline1}>Moon</Text>
        </View>

        <Image source={require('@/assets/images/welcome2.png')} style={styles.image_welcome2} />
      </ImageBackground>


      <Text style={styles.headline2}>We are what we do</Text>
      <Text style={styles.text1}>Thousand of people are usign silent moon for smalls meditation </Text>
      <Link style={styles.link} href="/(onboarding)/registration">SIGN UP</Link>
      <Text style={styles.text2} >
        ALREADY HAVE AN ACCOUNT?{' '}
        <Link style={styles.loginText} href="/(onboarding)/login">LOG INN</Link>
      </Text>
    </View>

  )
}

export default Index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
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
  text1: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 26.4, // 165% von 16px
    letterSpacing: 0,
    textAlign: 'center',
    color: '#A1A4B2',
    padding: 20,
  },
  /*
  text2: {
      fontFamily: 'HelveticaNeue',
      padding: 10,
      fontSize: 16,
      color: 'black',
      justifyContent: 'center',
      textAlign: 'center',
  },
  */
  link: {
    width: '90%',
    padding: 20,
    backgroundColor: '#8E97FD',
    color: 'white',
    borderRadius: 25,
    marginTop: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  image_welcome2: {
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8F5',
    alignSelf: 'center',
  },
  logoRow: {
    paddingTop: 40,
    backgroundColor: '#FAF8F5',
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
  text2: {
    padding: 20,
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15.12, // 108% von 14
    letterSpacing: 0.7, // 5% von 14
    textAlign: 'center',
    color: 'black',
  },

  loginText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 15.12,
    letterSpacing: 0.7,
    color: '#3F414E', // Optional: andere Farbe oder Stil
    textDecorationLine: 'underline', // falls du es klickbar aussehen lassen willst
  },
})
