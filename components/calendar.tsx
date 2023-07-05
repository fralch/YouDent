import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';

import { AntDesign, FontAwesome } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';

export default function Calendar() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [usuario, setUsuario] = React.useState({});
    const [dia, setDia] = React.useState('Lunes');
    const [horas, setHoras] = React.useState([
        { hora: '8:00', disponible: true, data: {} },
        { hora: '9:00', disponible: true, data: {} },
        { hora: '10:00', disponible: true, data: {} },
        { hora: '11:00', disponible: true, data: {} },
        { hora: '12:00', disponible: true, data: {} },
        { hora: '13:00', disponible: true, data: {} },
        { hora: '14:00', disponible: true, data: {} },
        { hora: '15:00', disponible: true, data: {} },
        { hora: '16:00', disponible: true, data: {} },
        { hora: '17:00', disponible: true, data: {} },
        { hora: '18:00', disponible: true, data: {} },
        { hora: '19:00', disponible: true, data: {} },
        { hora: '20:00', disponible: true, data: {} },
        { hora: '21:00', disponible: true, data: {} },
        { hora: '22:00', disponible: true, data: {} },
    ]);
    const [h, setH] = React.useState('');
    const [d, setD] = React.useState('');
    const [m, setM] = React.useState('');
    const [y, setY] = React.useState('');

    const [fecha, setFecha] = React.useState(new Date());
    const [showDatePicker, setShowDatePicker] = React.useState(false);

    React.useEffect(() => {
        // guardar ruta de navegacion
        const obj_usuario = {
            data: {}
        }
        const ruta = async () => {
            await storeSesion(JSON.stringify(obj_usuario));
        }
        ruta();
    }, []);

    const dateToString = (date: Date): string => {
        //crearte date to string large with format dd nameMonth yyyy    
        let day: number = date.getDate();
        let month: number = date.getMonth() + 1;
        let year: number = date.getFullYear();
        let nameMonth: string = '';
        let nameMonthObject: Record<number, string> = {
            1: 'ene',
            2: 'feb',
            3: 'mar',
            4: 'abr',
            5: 'may',
            6: 'jun',
            7: 'jul',
            8: 'ago',
            9: 'sep',
            10: 'oct',
            11: 'nov',
            12: 'dic'
        }
        let nameDayObject: Record<number, string> = {
            1: 'Lun',
            2: 'Mar',
            3: 'Mié',
            4: 'Jue',
            5: 'Vie',
            6: 'Sáb',
            0: 'Dom'

        }
        nameMonth = nameMonthObject[month];
        let nameDay: string = nameDayObject[date.getDay()];
        return `${nameDay}, ${day} de ${nameMonth} de ${year}`;
    };
    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date): void => {
        const currentDate = selectedDate || fecha;
        setShowDatePicker(false);
        setFecha(currentDate);
    };


    return (
        <View
            style={[
                styles.container,
                {
                    flexDirection: 'column',
                },
            ]}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center" }} >
                <Image source={require('../assets/img/logo.png')} style={{ width: 120, height: 150, marginLeft: 10 }} />
                <TouchableOpacity onPress={() => setShowDatePicker(true)}
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10, color: "white" }} >{dateToString(fecha)}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={fecha}
                        mode="date"
                        is24Hour={true}
                        display="calendar"
                        onChange={handleDateChange}
                    />
                )}
            </View>

            <View style={{ flex: 5 }} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    {
                        horas.map((hora, index) => {
                            return (
                                <View key={index} style={{ flex: 1, marginHorizontal: 5, padding: 10, marginVertical: 5 }} >

                                    <View style={{
                                        flex: 1,
                                        backgroundColor: '#555',
                                        borderRadius: 10,
                                        padding: 10,
                                    }}>
                                        <Text style={{ fontSize: 18, color: "white" }} >{hora.hora}</Text>
                                        <TouchableOpacity
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                            onPress={() => { () => { } }}
                                        >
                                            <AntDesign name="plussquare" size={40} color="#55DAFF" />

                                        </TouchableOpacity>

                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>

                <BottonNavigationBar  ruta='Calendar' />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#444',
    },
    line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
    },

});