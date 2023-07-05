import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5, Foundation   } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';

export default function Patient() {
    const ancho = Dimensions.get('window').width;
  
    return (
        <View style={styles.container}>
            <View style={styles.cuerpo}>

            </View>
            <BottonNavigationBar ruta='Patient'/>
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