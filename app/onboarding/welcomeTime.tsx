import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Link, Stack } from 'expo-router';

//import WheelPicker from 'react-native-wheel-picker-expo';
import WheelPicker from '@quidone/react-native-wheel-picker';

const createPickerItems = (values: string[]) =>
    values.map((value) => ({ label: value, value }));

const hourItems = createPickerItems(Array.from({ length: 12 }, (_, i) => `${i + 1}`));
const minuteItems = createPickerItems(Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')));
const meridiemItems = createPickerItems(['AM', 'PM']);

const data = [...Array(100).keys()].map((index) => ({
    value: index,
    label: index.toString(),
}))

const DAYS = ['Su', 'M', 'T', 'W', 'TH', 'F', 'S'];




export default function welcomeTime() {
    const [selectedHour, setSelectedHour] = useState(hourItems[0].value);
    const [selectedMinute, setSelectedMinute] = useState(minuteItems[0].value);
    const [selectedMeridiem, setSelectedMeridiem] = useState(meridiemItems[0].value);

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const { width: screenWidth } = Dimensions.get('window');
    const pickerWidth = screenWidth / 3 - 20; // 3 Picker, kleiner Abstand

    const toggleDay = (day: string) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Text style={styles.text1}>What time would you like to meditate?</Text>
            <Text style={styles.text2}>Any time you can choose but We recommend first thing in the morning.</Text>

            <View style={styles.pickerRow}>
                <WheelPicker
                    data={hourItems}
                    value={selectedHour}
                    onValueChanged={({ item: { value } }) => setSelectedHour(selectedHour)}
                    style={{ width: pickerWidth, marginHorizontal: 15 }}
                    overlayItemStyle={{
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#8E97FD',
                        backgroundColor: 'rgba(142,151,253,0.05)', // optional: leichtes Highlight
                    }}
                />
                <WheelPicker
                    data={minuteItems}
                    value={selectedMinute}
                    onValueChanged={({ item: { value } }) => setSelectedMinute(selectedMinute)}
                    style={{ width: pickerWidth, marginHorizontal: 15 }}
                    overlayItemStyle={{
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#8E97FD',
                        backgroundColor: 'rgba(142,151,253,0.05)', // optional: leichtes Highlight
                    }}
                />
                <WheelPicker
                    data={meridiemItems}
                    value={selectedMeridiem}
                    onValueChanged={({ item: { value } }) => setSelectedMeridiem(selectedMeridiem)}
                    style={{ width: pickerWidth, marginHorizontal: 15 }}
                    overlayItemStyle={{
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: '#8E97FD',
                        backgroundColor: 'rgba(142,151,253,0.05)', // optional: leichtes Highlight
                    }}
                />


            </View>
            {/* 
            <Text style={styles.result}>
                Selected: {selectedHour}:{selectedMinute} {selectedMeridiem}
            </Text> */}

            <Text style={styles.text1}>Which day would you like to meditate?</Text>
            <Text style={styles.text2}>Everyday is best, but we recommend picking at least five.</Text>

            <View style={styles.dayRow}>
                {DAYS.map((day) => {
                    const isSelected = selectedDays.includes(day);
                    return (
                        <View key={day} style={styles.dayWrapper}>
                            <Text
                                onPress={() => toggleDay(day)}
                                style={[
                                    styles.dayCircle,
                                    {
                                        backgroundColor: isSelected ? '#3F414E' : '#fff',
                                        color: isSelected ? '#fff' : '#3F414E',
                                    },
                                ]}
                            >
                                {day}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <Link style={styles.link} href="/(tabs)/home"> SAVE </Link>

            <Text style={styles.noThanks}>NO THANKS</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        padding: 20,
        backgroundColor: 'white',
    },
    text1: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32.4, // 135% von 24px
        letterSpacing: 0,
        color: '#3F414E',
        paddingRight: 80,
    },
    text2: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
        fontSize: 16,
        lineHeight: 26.4, // 165% von 16px
        letterSpacing: 0,
        marginBottom: 30,
        color: '#3F414E',
        paddingRight: 40,
    },
    text3: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 20, // 100% von 20px
        letterSpacing: 0,
        color: '#A1A4B2',
        marginBottom: 20,
    },

    label: {
        fontSize: 20,
        marginBottom: 30,
        fontWeight: '600',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 40,
        color: '#3F414E',
    },
    pickerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,              // ← fügt die Linie hinzu
        borderColor: '#F5F5F9',      // ← z.B. ein helles Grau, anpassbar
        borderRadius: 15,            // optional: abgerundete Ecken
        backgroundColor: '#F5F5F9',         // optional: Hintergrundfarbe
        marginBottom: 30,         // optional: Abstand zum nächsten Element
    },
    result: {
        marginTop: 30,
        fontSize: 18,
        color: '#3F414E',
        fontWeight: '500',
    },

    dayRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    dayWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    dayCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 1,
        borderColor: '#3F414E',
        fontFamily: 'HelveticaNeue',
        fontWeight: '600',
        fontSize: 14,
    },

    link: {
        width: '100%',
        padding: 20,
        backgroundColor: '#8E97FD',
        color: 'white',
        borderRadius: 25,
        marginTop: 10,
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
    },
    noThanks: {
        fontFamily: 'HelveticaNeue',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 32.4, // 135% von 24px
        letterSpacing: 0,
        color: '#3F414E',
        textAlign: 'center',}
});