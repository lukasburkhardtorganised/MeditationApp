import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router';

import { useRouter } from 'expo-router';

import { useState } from 'react';

const { width } = Dimensions.get('window');

const cardWidth = (width - 60) / 2; // 2 Spalten + Padding
const largeCardHeight = 210;
const smallCardHeight = 167;

const topics = [
  { title: 'Reduce Stress', image: require('@/assets/images/welcomeTopic/stresss.png'), backgroundColor: '#808AFF' },
  { title: 'Improve Performance', image: require('@/assets/images/welcomeTopic/performance1.png'), backgroundColor: '#FA6E5A' },
  { title: 'Reduce Anxiety', image: require('@/assets/images/welcomeTopic/anxiety.png'), backgroundColor: '#FFCF86' },
  { title: 'Increase Happiness', image: require('@/assets/images/welcomeTopic/happiness.png'), backgroundColor: '#FEB18F' },
  { title: 'Reduce Stress', image: require('@/assets/images/welcomeTopic/stresss.png'), backgroundColor: '#808AFF' },
  { title: 'Improve Performance', image: require('@/assets/images/welcomeTopic/performance1.png'), backgroundColor: '#FA6E5A' },
  { title: 'Reduce Anxiety', image: require('@/assets/images/welcomeTopic/anxiety.png'), backgroundColor: '#FFCF86' },
  { title: 'Increase Happiness', image: require('@/assets/images/welcomeTopic/happiness.png'), backgroundColor: '#FEB18F' },
];

const categories = [
  { title: 'All', image: require('@/assets/images/meditate/all_icon.png') },
  { title: 'My', image: require('@/assets/images/meditate/my_icon.png') },
  { title: 'Anxious', image: require('@/assets/images/meditate/anxious_icon.png') },
  { title: 'Sleep', image: require('@/assets/images/meditate/sleep_icon.png') },
  { title: 'Kids', image: require('@/assets/images/meditate/kids_icon.png') },
];

const meditation = () => {
  const [activeCategory, setActiveCategory] = useState('All'); // default

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.text1}>Meditate</Text>
      <Text style={styles.text2}>we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>


      {/* Hier die ScrollView Row hinzufügen: */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20, paddingLeft: 20 }}
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
                  { color: isActive ? '#3F414E' : '#A0A3B1' },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>



        {/* Large Card for Daily Thought */}
        <TouchableOpacity
          style={[styles.cardLarge, { height: 95, marginRight: 8 }]}
          onPress={() => router.push('/(onboarding)/welcomeTime')}
        >
          <ImageBackground
            source={require('@/assets/images/meditate/large_image.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.textOverlay}>
              <Text style={styles.cardHeadlineText}>{'Daily Thought'}</Text>
              <Text style={styles.cardText}>{'MEDITATION * 3-10 MIN'}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.gridContainer}>
          <View style={styles.column}>
            {topics.filter((_, i) => i % 2 === 0).map((item, index) => {
              const height = Math.floor(index) % 2 === 0 ? largeCardHeight : smallCardHeight;
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.card, { height, backgroundColor: item.backgroundColor }]}
                  onPress={() => router.push('/(onboarding)/welcomeTime')}
                >
                  <Image source={item.image} style={styles.cardImage} />
                  <Text style={styles.cardText}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.column}>
            {topics.filter((_, i) => i % 2 !== 0).map((item, index) => {
              const height = Math.floor(index) % 2 === 0 ? smallCardHeight : largeCardHeight;
              return (

                <TouchableOpacity
                  key={index}
                  style={[styles.card, { height, backgroundColor: item.backgroundColor }]}
                  onPress={() => router.push('/(onboarding)/welcomeTime')}
                >
                  <Image source={item.image} style={styles.cardImage} />
                  <Text style={styles.cardText}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

    </ScrollView>
  )
}

export default meditation

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    //padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container2: {
    //padding: 20,
    backgroundColor: 'white',
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
    color: '#3F414E',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text2: {
    fontFamily: 'HelveticaNeue',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 16 * 1.35, // 21.6
    letterSpacing: 0,
    color: '#A0A3B1',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
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
  },
  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
})