import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, ImageBackground, GestureResponderEvent } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const cardWidth = (width - 60) / 2; // 2 Spalten + Padding
const largeCardWidgth = cardWidth - 20; // 20px Padding
const largeCardHeight = 210;
const smallCardHeight = 167;

const topics = [
  { title: 'Focus', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/focus.png'), backgroundColor: '#AFDBC5' },
  { title: 'Happiness', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/happiness.png'), backgroundColor: '#F59D0E' },
  { title: 'Focus', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/focus.png'), backgroundColor: '#AFDBC5' },
  { title: 'Happiness', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/happiness.png'), backgroundColor: '#F59D0E' },
  { title: 'Focus', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/focus.png'), backgroundColor: '#AFDBC5' },
  { title: 'Happiness', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/happiness.png'), backgroundColor: '#F59D0E' },
  { title: 'Focus', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/focus.png'), backgroundColor: '#AFDBC5' },
  { title: 'Happiness', text: 'MEDITATION 3-10 MIN', image: require('@/assets/images/homepage/happiness.png'), backgroundColor: '#F59D0E' },
];

const height = Math.floor(1) % 2 === 0 ? smallCardHeight : largeCardHeight;

const home = () => {
  return (
    <ScrollView style={styles.container}>

      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.logoRow}>
        <Text style={styles.headline1}>Silent</Text>
        <Image source={require('@/assets/images/welcome1.png')} style={styles.image_welcome1} />
        <Text style={styles.headline1}>Moon</Text>
      </View>

      <Text style={styles.text1}>Good Morning, Afsar</Text>
      <Text style={styles.text2}>We Wish you have a good day</Text>

      <View style={styles.doubleCardRow}>
        <View style={[styles.cardModified, { backgroundColor: '#8E97FD' }]}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>{'Basics'}</Text>
            <Text style={styles.cardText}>{'COURSE'}</Text>

            <View style={styles.rowContainer}>
              <Text style={styles.cardText}>{'3-10 MIN'}</Text>
              <TouchableOpacity
                style={[styles.smallButton, { backgroundColor: 'black' }]}
                onPress={() => router.push('/screens/courseDetails')}
              >
                <Text style={[styles.smallButtonText, { color: 'white' }]}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={require('@/assets/images/homepage/basics.png')}
            style={styles.cardTopRightImage}
          />
        </View>

        <View style={[styles.cardModified, { backgroundColor: '#FFCF86' }]}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>{'Relaxation'}</Text>
            <Text style={styles.cardText}>{'MUSIC'}</Text>

            <View style={styles.rowContainer}>
              <Text style={styles.cardText}>{'3-10 MIN'}</Text>
              <TouchableOpacity
                style={[styles.smallButton, { backgroundColor: '#3F414E' }]}
                onPress={() => router.push('/screens/courseDetails')}
              >
                <Text style={[styles.smallButtonText, { color: 'white' }]}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={require('@/assets/images/homepage/relaxation.png')}
            style={[styles.cardTopRightImage, { backgroundColor: '#FFC97E' }]}
          />
        </View>
      </View>

      {/* Large Card for Daily Thought */}
      <View
        style={[styles.cardLarge, { height: 95, marginRight: 8 }]}
      >
        <ImageBackground
          source={require('@/assets/images/homepage/daily_thought.png')}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.rowWrapper}>
            <View style={styles.textOverlay2}>
              <Text style={styles.cardHeadlineText}>{'Daily Thought'}</Text>
              <Text style={styles.cardText}>{'MEDITATION * 3-10 MIN'}</Text>
            </View>

            <CircleButton
              iconName="play"
              onPress={() => console.log('Pressed!')}
              backgroundColor="#FFFFFF"
              iconColor="#3F414E"
              size={45}
            />
          </View>
        </ImageBackground>
      </View>

      <Text style={styles.textRecommended}>Recomended for you</Text>

      {/* Horizontal ScrollView for recommendations*/}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, marginBottom: 20 }}>
        {topics.slice(0, 6).map((item, index) => (
          <View key={index} style={styles.recommendationItem}>
            <View style={[styles.imageCardWrapper, { backgroundColor: item.backgroundColor }]}>
              <Image source={item.image} style={styles.recommendationImage} />
            </View>
            <Text style={styles.recommendationTextTitle}>{item.title}</Text>
            <Text style={styles.recommendationTextSub}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>


    </ScrollView>
  )
}

type CircleButtonProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
};

const CircleButton: React.FC<CircleButtonProps> = ({
  iconName = 'add',
  onPress,
  backgroundColor = '#FFFFFF',
  iconColor = '#3F414E',
  size = 30,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.circleButton,
        {
          backgroundColor,
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={size * 0.5} color={iconColor} />
    </TouchableOpacity>
  );
};

export default home

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
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 28 * 1.08, // 30.24
    letterSpacing: 0,
    color: '#3F414E',
    paddingTop: 20,
  },
  text2: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 20 * 1.08, // 21.6
    letterSpacing: 0,
    marginTop: 10,
    marginBottom: 30,
    color: '#3F414E',
  },
  card: {
    width: cardWidth,
    borderRadius: 10,
    backgroundColor: '#8E97FD',
    overflow: 'hidden',
  },
  cardLarge: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#333242',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardImage: {
    padding: 10,
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
    backgroundColor: '#8E97FD',
  },
  cardText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11 * 1.08, // 108% von 11px = 11.88
    letterSpacing: 0.55, // 5% von 11px = 0.55
    textAlign: 'left',
    padding: 10,
    color: 'white',
  },

  cardHeadlineText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18 * 1.08, // 108% von 18px → ergibt 19.44
    letterSpacing: 0,
    textAlign: 'left',
    padding: 10,
    color: 'white',
  },
  cardLargeImage: {
    padding: 20,
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  cardLargeText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11 * 1.08, // 11.88
    letterSpacing: 0.55,   // 5% von 11px
    textAlign: 'left',
    color: 'white',
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#333242',
  },

  textOverlay: {
    //backgroundColor: 'rgba(0, 0, 0, 0.3)', // optionaler dunkler Layer für bessere Lesbarkeit
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },

  recommendationItem: {
    width: 150,
    marginRight: 15,
  },

  imageCardWrapper: {
    width: 150,
    height: 100,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  recommendationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  recommendationTextTitle: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18 * 1.08, // 19.44
    letterSpacing: 0,
    textAlign: 'left',
    color: '#3F414E',
  },

  recommendationTextSub: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11 * 1.08, // 11.88
    letterSpacing: 0.55, // 5% von 11px
    textAlign: 'left',
    color: '#A1A4B2',
    marginTop: 2,
  },

  doubleCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 2,
  },

  cardModified: {
    width: (width - 52) / 2, // passt perfekt mit Padding + Gap
    height: width / 2,
    borderRadius: 10,
    padding: 15,
    position: 'relative',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  cardTopRightImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    right: 10,
  },

  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start', // passt sich dem Inhalt an
  },

  smallButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // optional, falls du React Native 0.71+ nutzt
    // Falls gap nicht geht:
    // marginTop: 10,
  },

  textRecommended: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 24 * 1.08, // 25.92
    letterSpacing: 0,
    textAlign: 'left',
    color: '#3F414E',
    marginTop: 20,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // oder 'flex-start' je nach Layout-Wunsch
    gap: 12, // falls RN 0.71+
    paddingHorizontal: 20,
  },

  textOverlay2: {
    marginRight: 12,
    // andere styles wie zuvor
  }
})
