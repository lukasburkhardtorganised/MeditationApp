import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{
            tabBarIcon: ({ color, size}) => (
                <Ionicons name="home" size={size} color={color}></Ionicons>
            ),
        }}></Tabs.Screen>
        <Tabs.Screen name="sleep" options={{
            tabBarIcon: ({ color, size}) => (
                <Ionicons name="add" size={size} color={color}></Ionicons>
            ),
        }}></Tabs.Screen>
                        <Tabs.Screen name="meditation" options={{
            tabBarIcon: ({ color, size}) => (
                <Ionicons name="person" size={size} color={color}></Ionicons>
            ),
        }}></Tabs.Screen>
                <Tabs.Screen name="music" options={{
            tabBarIcon: ({ color, size}) => (
                <Ionicons name="person" size={size} color={color}></Ionicons>
            ),
        }}></Tabs.Screen>
        <Tabs.Screen name="person" options={{
            tabBarIcon: ({ color, size}) => (
                <Ionicons name="person" size={size} color={color}></Ionicons>
            ),
        }}></Tabs.Screen>
              
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})
