import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, router, Stack } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const scale = {
  w: (val: number): number => (screenWidth / 414) * val,
  h: (val: number): number => (screenHeight / 896) * val,
};

const welcomePerson = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Hintergrund-Images */}
      <View style={StyleSheet.absoluteFill}>
        <Image source={require('@/assets/images/Ellipse 13.png')} style={[styles.bg, { width: scale.w(492), height: scale.h(492), top: scale.h(369), left: scale.w(-39) }]} />
        <Image source={require('@/assets/images/Ellipse 12.png')} style={[styles.bg, { width: scale.w(422), height: scale.h(422), top: scale.h(404), left: scale.w(-4) }]} />
        <Image source={require('@/assets/images/Ellipse 11.png')} style={[styles.bg, { width: scale.w(354), height: scale.h(354), top: scale.h(438), left: scale.w(30) }]} />
        <Image source={require('@/assets/images/Ellipse 10.png')} style={[styles.bg, { width: scale.w(284), height: scale.h(284), top: scale.h(473), left: scale.w(65) }]} />
        <Image source={require('@/assets/images/Group.png')} style={[styles.bg, { width: scale.w(430), height: scale.h(268), top: scale.h(397), left: scale.w(-9) }]} />
        <Image source={require('@/assets/images/Rectangle 211.png')} style={[styles.bg, { width: scale.w(416), height: scale.h(266), top: scale.h(654), left: scale.w(-2) }]} />
        <Image source={require('@/assets/images/Ellipse 15.png')} style={[styles.bg, { width: scale.w(6), height: scale.h(6), top: scale.h(352), left: scale.w(27) }]} />
        <Image source={require('@/assets/images/Ellipse 14.png')} style={[styles.bg, { width: scale.w(12), height: scale.h(12), top: scale.h(357), left: scale.w(33) }]} />
        <Image source={require('@/assets/images/Vector 4.png')} style={[styles.bg, { width: scale.w(50), height: scale.h(24), top: scale.h(374), left: scale.w(-9) }]} />
        <Image source={require('@/assets/images/Vector 3.png')} style={[styles.bg, { width: scale.w(114.1348), height: scale.h(55.0251), top: scale.h(434), left: scale.w(307) }]} />
        <Image source={require('@/assets/images/Vector 5.png')} style={[styles.bg, { width: scale.w(36), height: scale.h(14), top: scale.h(410), left: scale.w(282) }]} />
      </View>

      {/* Vordergrund-Content */}
      <View>
        <View style={styles.logoRow}>
          <Text style={styles.headline1}>Silent</Text>
          <Image source={require('@/assets/images/welcome1.png')} style={styles.image_welcome1} />
          <Text style={styles.headline1}>Moon</Text>
        </View>

        <Text style={styles.text1}>Hi Afsar, Welcome</Text>
        <Text style={styles.text2}>to Silent Moon</Text>
        <Text style={styles.text3}>Explore the app, find some peace of mind to prepare for meditation</Text>

        <TouchableOpacity style={[styleButton.button, { width: scale.w(374), height: scale.h(63), top: scale.h(739), alignSelf: 'center' }]}
          onPress={() => router.push('/onboarding/welcomeTopic')}>
          <Text style={styleButton.buttonText}>GET STARTED</Text>
        </TouchableOpacity>

        {/* <Link
          style={[styles.signUpButton, { width: scale.w(374), height: scale.h(63), top: scale.h(739), alignSelf: 'center' }]}
          href="/(onboarding)/welcomeTopic"
        >
          <Text style={styles.signUpText}>GET STARTED</Text>
        </Link> */}
      </View>
    </View>
  );
};

export default welcomePerson;

const styleButton = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 38,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#EBEAEC'
  },
  buttonText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 63,
    letterSpacing: 0.7,
    color: '#3F414E',
    textAlign: 'center',
  },

  signUpButton: {
    position: 'absolute',
    backgroundColor: '#fff',
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
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8C96FF',
  },
  bg: {
    position: 'absolute',
    resizeMode: 'contain',
  },
  logoRow: {
    paddingTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headline1: {
    fontFamily: 'Airbnb Cereal App',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 3.84,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  image_welcome1: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  text1: {
    paddingTop: 20,
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 41.1, // 137% von 30
    letterSpacing: 0.3, // 1% von 30
    textAlign: 'center',
    color: '#FFECCC',
  },
  text2: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '100',
    fontSize: 30,
    lineHeight: 41.1, // 137% von 30
    letterSpacing: 0.3, // 1% von 30
    textAlign: 'center',
    color: '#FFECCC',
  },
  text3: {
    paddingHorizontal: 30,
    fontFamily: 'HelveticaNeue',
    fontWeight: '100',
    fontSize: 16,
    lineHeight: 40.5,
    textAlign: 'center',
    color: '#EBEAEC',
  },

});
