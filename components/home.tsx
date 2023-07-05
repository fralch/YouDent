import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable, Dimensions
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5, Foundation   } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';
const Home: React.FC = () => {
    const ancho = Dimensions.get('window').width;
    React.useEffect(() => {
        const ruta = async () => {
            let obj_usuario: string | null | undefined = await getSesion();
            if (obj_usuario) {
              let nuevo_obj = JSON.parse(obj_usuario);
              nuevo_obj.ruta = 'Home';
              await storeSesion(JSON.stringify(obj_usuario));
            }
          }
          
          ruta();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <View>
                    <Image style={styles.image} source={require('../assets/img/user.jpg')} />
                    <TouchableOpacity style={styles.pencil}>
                        <Foundation  name="camera" size={18} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 ,  alignItems:"center"}}>
                    <Text style={{ color: 'white', fontSize: 18 ,  fontWeight: 'bold' }}>Dr. David Chuquirachi</Text>
                    <Text style={{ color: 'white', fontSize: 18 }}>Odontologo</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TextInput style={[styles.input, {width: ancho*0.7}]} placeholder="Dirección" />
                    <TextInput style={[styles.input, {width: ancho*0.7}]} placeholder="Teléfono" />
                    <TextInput style={[styles.input, {width: ancho*0.7}]} placeholder="Correo" />

                    <TouchableOpacity style={[styles.input, {width: ancho*0.7, marginTop: 20, backgroundColor: '#55DAFF', alignItems: 'center', justifyContent: 'center', borderRadius: 10}]}>
                        <Text style={{ color: 'white' }}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BottonNavigationBar ruta='Home'/>
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
    perfil: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#55DAFF',
    },
    pencil: {
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#55DAFF',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        marginTop: 20,
        height: 40,
        backgroundColor: '#555',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 16,
    },


});
export default Home; 