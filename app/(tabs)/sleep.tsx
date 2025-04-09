import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router';

import { useState } from 'react';

const { width } = Dimensions.get('window');

const cardWidth = (width - 60) / 2; // 2 Spalten + Padding
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

const cards = [
  {
    title: 'Night Island',
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
  {
    title: 'Productivity',
    subtitle: 'COURSE',
    duration: '5-15 MIN',
    backgroundColor: '#4C53B4',
    image: require('@/assets/images/sleep/picture3.png'),
  },
  {
    title: 'Joyful Vibes',
    subtitle: 'MUSIC',
    backgroundColor: '#4C53B4',
    image: require('@/assets/images/sleep/picture4.png'),
  },
  // beliebig erweiterbar
];

const categories = [
  { title: 'All', image: require('@/assets/images/meditate/all_icon.png') },
  { title: 'My', image: require('@/assets/images/meditate/my_icon.png') },
  { title: 'Anxious', image: require('@/assets/images/meditate/anxious_icon.png') },
  { title: 'Sleep', image: require('@/assets/images/meditate/sleep_icon.png') },
  { title: 'Kids', image: require('@/assets/images/meditate/kids_icon.png') },
];

const sleep = () => {
  const [activeCategory, setActiveCategory] = useState('All'); // default

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ImageBackground
        source={require('@/assets/images/sleep/background1.png')}
        style={styles.imageBackground1}
        imageStyle={{ borderRadius: 0 }}
      >
        <ImageBackground
          source={require('@/assets/images/sleep/background2.png')}
          style={styles.imageBackground2}
          imageStyle={{ borderRadius: 0 }}
        >
          <View style={styles.textOverlay}>
            <Text style={styles.text1}>Sleep Stories</Text>
            <Text style={styles.text2}>Soothing bedtime stories to help you fall
              into a deep and natural sleep</Text>
          </View>
        </ImageBackground>

        {/* Hier die ScrollView Row hinzufügen: */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingTop: 20, marginBottom: 1, paddingLeft: 20 }}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 5 }}
        >
          {categories.map((item, index) => {
            const isActive = activeCategory === item.title;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(item.title)}
                style={styles.categoryCircle}
              >
                <View
                  style={[
                    styles.iconCircle,
                    { backgroundColor: isActive ? '#8E97FD' : '#A0A3B1' },
                  ]}
                >
                  <Image source={item.image} style={styles.categoryImage} />
                </View>
                <Text
                  style={[
                    styles.categoryText,
                    { color: isActive ? '#E6E7F2' : '#A0A3B1' },
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ImageBackground>

      {/* Hier die große Karte hinzufügen: */}    
      <View style={{ alignItems: 'center', width: '95%', marginBottom: 20, marginTop: 20}}>
        <ImageBackground
          source={require('@/assets/images/sleep/background3.png')}
          style={styleBigImage.cardBigModified}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styleBigImage.cardBigContent}>
            <Text style={styleBigImage.cardBigTitle}>The Ocean Moon</Text>
            <Text style={styleBigImage.cardBigSubtitle}>
              Non-stop 8-hour mixes of our{'\n'}most popular sleep audio
            </Text>
            <TouchableOpacity style={styleBigImage.startButton}>
              <Text style={styleBigImage.startButtonText}>START</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Hier die Karten hinzufügen: */}
      {Array.from({ length: Math.ceil(cards.length / 2) }).map((_, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
            paddingHorizontal: 5,
          }}
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

    </ScrollView>
  )
}

export default sleep

const styleBigImage = StyleSheet.create({

  cardBigModified: {
    width: '100%',
    height: 230,
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 10,
    alignSelf: 'center', // <---- hinzugefügt
  },
  cardBigContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  cardBigTitle: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 24,
    color: '#FFECCC',
    marginBottom: 10,
    textAlign: 'center',
  },

  cardBigSubtitle: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    fontSize: 14,
    color: '#EBEAEC',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },

  startButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
  },

  startButtonText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 14,
    color: '#3F414E',
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
    //paddingTop: 50,
    //padding: 20,
    backgroundColor: '#03174D',
    alignItems: 'center',
  },
  container2: {
    //padding: 20,
    backgroundColor: '#03174D',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text1: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 28 * 1.08, // 30.24
    letterSpacing: 0,
    color: '#E6E7F2',
    textAlign: 'center',
    marginTop: 60, // vorher: 100
    paddingHorizontal: 20,
  },

  text2: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 16 * 1.35, // 21.6
    letterSpacing: 0,
    color: '#EBEAEC',
    marginTop: 10, // vorher: 20
    marginBottom: 20, // vorher: 40
    textAlign: 'center',
    paddingHorizontal: 30,
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
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 11 * 1.08, // 108% von 11px = 11.88
    letterSpacing: 0.55, // 5% von 11px = 0.55
    textAlign: 'left',
    padding: 10,
    color: '#3F414E',
  },

  cardHeadlineText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18 * 1.08, // 108% von 18px → ergibt 19.44
    letterSpacing: 0,
    textAlign: 'left',
    padding: 10,
    color: '#3F414E',
  },

  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  column: {
    flex: 1,
    gap: 20,
  },

  cardLarge: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#F1DDCF',
    overflow: 'hidden',

  },
  cardLargeImage: {
    //padding: 20,
    width: '100%',
    height: '70%',
    resizeMode: 'cover',

  },
  cardLargeText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 19.44,
    letterSpacing: 0,
    textAlign: 'left',
    padding: 10,
    color: 'white',
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F1DDCF',
  },
  imageBackground1: {
    height: 270,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#03174D',
  },
  imageBackground2: {
    marginTop: 20,
    height: 140,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },

  textOverlay: {
    //backgroundColor: 'rgba(0, 0, 0, 0.3)', // optionaler dunkler Layer für bessere Lesbarkeit
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },

  categoryCircle: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryImage: {
    width: 25,
    height: 25,
    borderRadius: 30,
    marginBottom: 5,
    resizeMode: 'contain',
  },

  categoryText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14 * 1.08,
    letterSpacing: 0,
    textAlign: 'center',
    paddingTop: 10,
  },
  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },








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
    fontSize: 16,
    color: '#3F414E',
  },
})