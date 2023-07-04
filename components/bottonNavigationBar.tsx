import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Entypo, FontAwesome, FontAwesome5  } from '@expo/vector-icons';

export default function BottonNavigationBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Entypo name="home" size={24} color="white" />
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome5 name="calendar-day" size={24} color="#55DAFF" />
                <Text style={[styles.text, {color:"#55DAFF"}]}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="user" size={24} color="white" />
                <Text style={styles.text}>Paciente</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    button: {
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        color: 'white',
        paddingTop: 4,
    },
});