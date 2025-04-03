import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Tabs, useFocusEffect } from 'expo-router';

const TabsLayout = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: [
                    styles.tabBarStyle,
                    { backgroundColor: activeTab === 'sleep' ? '#03174D' : 'white' },
                ],
            }}
        >
            {Object.entries(tabData).map(([name, config]) => (
                <Tabs.Screen
                    key={name}
                    name={name}
                    options={{
                        ...getTabOptions(config),
                        tabBarButton: (props) => (
                            <TabButton {...props} name={name} onFocus={() => setActiveTab(name)} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

const TabButton = ({ children, onPress, name, onFocus }: any) => {
    useFocusEffect(
        React.useCallback(() => {
            onFocus?.();
        }, [])
    );

    return (
        <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>{children}</View>
        </TouchableOpacity>
    );
};

const getTabOptions = ({ icon, label }: TabConfig) => ({
    tabBarLabel: ({ focused }: { focused: boolean }) => (
        <Text style={[styles.tabLabel, { color: focused ? '#8E97FD' : '#A1A4B2' }]}>{label}</Text>
    ),
    tabBarIcon: ({ focused, size }: { focused: boolean; size: number }) => (
        <View
            style={[
                styles.iconWrapper,
                { backgroundColor: focused ? '#8E97FD' : 'transparent' },
            ]}
        >
            <Image
                source={icon}
                style={{ width: size, height: size, tintColor: focused ? 'white' : '#A1A4B2' }}
                resizeMode="contain"
            />
        </View>
    ),
});

type TabConfig = {
    icon: any;
    label: string;
};

const tabData = {
    home: { label: 'Home', icon: require('@/assets/images/icons/home_icon.png') },
    sleep: { label: 'Sleep', icon: require('@/assets/images/icons/sleep_icon.png') },
    meditation: { label: 'Meditation', icon: require('@/assets/images/icons/meditate_icon.png') },
    music: { label: 'Music', icon: require('@/assets/images/icons/music_icon.png') },
    person: { label: 'Afsar', icon: require('@/assets/images/icons/afsar.png') },
};

export default TabsLayout;

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 100,
        paddingBottom: 10,
        paddingTop: 10,
    },
    tabLabel: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 14 * 1.08,
        letterSpacing: 0,
        marginTop: 15,
    },
    iconWrapper: {
        borderRadius: 18,
        padding: 10,
        marginBottom: 2,
    },
});