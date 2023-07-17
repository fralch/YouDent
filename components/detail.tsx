import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';


export default function DetailsPatient() {

    const ancho = Dimensions.get('window').width;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.cuerpo}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Jose Sanchez Lopez</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Tooth' as never); }} >
                    <MaterialCommunityIcons name="tooth-outline" size={24} color="white" />
                </TouchableOpacity>
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