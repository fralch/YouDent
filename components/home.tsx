import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable
} from 'react-native';
import { storeSesion, getSesion, removeSesion } from '../hooks/handleSession';
import { Entypo, FontAwesome, FontAwesome5  } from '@expo/vector-icons';
import BottonNavigationBar from './bottonNavigationBar';
const Home: React.FC = () => {
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

});
export default Home;