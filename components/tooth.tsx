import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5, AntDesign } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';


export default function Tooth() {
    const ancho = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.cuerpo}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d1.png')} style={{ height: 25, width: 75 }} />
                    <Image source={require('../assets/tooth/d2.png')} style={{ height: 25, width: 25 }} />
                    <Image source={require('../assets/tooth/d3.png')} style={{ height: 25, width: 25 }} />
                    <Image source={require('../assets/tooth/d4.png')} style={{ height: 25, width: 75 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d5.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d6.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d7.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d8.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d9.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d10.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d11.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d12.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d13.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d14.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d15.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d16.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" , marginTop:20}}>
                    <Image source={require('../assets/tooth/d17.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d18.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d19.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d20.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d21.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d22.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/tooth/d23.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d24.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row"}}>
                    <Image source={require('../assets/tooth/d25.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d26.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row"}}>
                    <Image source={require('../assets/tooth/d27.png')} style={{ height: 25, width: 100 }} />
                    <Image source={require('../assets/tooth/d28.png')} style={{ height: 25, width: 100 }} />
                </View>
                <View style={{ flexDirection: "row"}}>
                    <Image source={require('../assets/tooth/d29.png')} style={{ height: 25, width: 75 }} />
                    <Image source={require('../assets/tooth/d30.png')} style={{ height: 25, width: 25 }} />
                    <Image source={require('../assets/tooth/d31.png')} style={{ height: 25, width: 25 }} />
                    <Image source={require('../assets/tooth/d32.png')} style={{ height: 25, width: 75 }} />
                </View>
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