import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';

export default function Patient() {
    const ancho = Dimensions.get('window').width;
   
    const list_datos_body = [
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Andres Meza Rojas', '02-03-2023'],
        ['Ana Mendoza Diaz', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
    ]


    return (
        <View style={styles.container}>
            <View style={styles.cuerpo}>
                <View>
                    <Image source={require('../assets/img/logo.png')} style={{ width: 120, height: 150, marginLeft: 10 }} />
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                        }}
                    >
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Pacientes</Text>
                    {
                        list_datos_body.map((item, index) => (
                            <View key={index} style={{ width: ancho - 20, height: 70, backgroundColor: '#555', borderRadius: 10, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ width: '70%', height: '100%', justifyContent: 'center', marginLeft: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color:"#fff" }}>{item[0]}</Text>
                                    <Text style={{ fontSize: 14 , color:"#fff"}}>{item[1]}</Text>
                                </View>
                                <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#444', alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesome name="eye" size={24} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))



                    }

                </View>
            </View>
            <BottonNavigationBar ruta='Patient' />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#444',
    },
    cuerpo: {
        flex: 1,
        width: '100%',
    },
    text: { margin: 6 , color: '#fff'},
});