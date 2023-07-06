import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';
import { Table, Row, Cell } from 'react-native-table-component';

export default function Patient() {
    const ancho = Dimensions.get('window').width;
    const tabla_datos_head = {
        tableHead: ['Paciente', 'Ultima visita', 'Otros'],
        withArr: [ancho * 0.3, ancho * 0.3, ancho * 0.2]
    }
    const tabla_datos_body = [
        ['Jose Sanchez Lopez', '02-03-2023', 'otro'],
        ['Jose Sanchez Lopez', '02-03-2023', 'otro'],
        ['Jose Sanchez Lopez', '02-03-2023', 'otro'],
        ['Jose Sanchez Lopez', '02-03-2023', 'otro'],
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
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#888' }}>
                        <Row data={tabla_datos_head.tableHead} widthArr={tabla_datos_head.withArr} style={styles.head} textStyle={styles.text} />
                            {
                                tabla_datos_body.map((rowData, index) => (
                                    <TouchableOpacity key={index} onPress={() => { }} style={{  borderColor: '#888', borderWidth: 1}}>
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={tabla_datos_head.withArr}
                                            style={[styles.row , index % 2 ? { backgroundColor: '#444' } : null]}
                                        />
                                    </TouchableOpacity>
                                ))
                            }
                    </Table>

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
    head: { height: 40, backgroundColor: '#444' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#444'}
});