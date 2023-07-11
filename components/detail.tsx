import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';


export default function DetailsPatient() {
    
    const ancho = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.cuerpo}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Jose Sanchez Lopez</Text>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#444'
    },
    cuerpo: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
});