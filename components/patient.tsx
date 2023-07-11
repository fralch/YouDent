import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';

export default function Patient() {
    const navigation = useNavigation();
    const ancho = Dimensions.get('window').width;

    const list_datos_body = [
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Andres Meza Rojas', '02-03-2023'],
        ['Ana Mendoza Diaz', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
        ['Jose Sanchez Lopez', '02-03-2023'],
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
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
                        {
                            list_datos_body.map((item, index) => (
                                <View key={index} style={{ width: ancho - 20, height: 70, backgroundColor: '#555', borderRadius: 10, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ width: '70%', height: '100%', justifyContent: 'center', marginLeft: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#fff" }}>{item[0]}</Text>
                                        <Text style={{ fontSize: 14, color: "#fff" }}>Ultima visita:  {item[1]}</Text>
                                    </View>
                                    <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity 
                                            onPress={() => {navigation.navigate('DetailsPatient' as never);}}
                                        >
                                            <AntDesign name="rightcircle" size={25} color="#333" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>

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
    text: { margin: 6, color: '#fff' },
    
});