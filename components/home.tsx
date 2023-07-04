import * as React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, TextInput, Button,
    Modal, Alert, Linking, Touchable
} from 'react-native';
import { Entypo, FontAwesome, FontAwesome5  } from '@expo/vector-icons';

export default function Home() {
    <View style={styles.container}>
        {/* crear perfil de usuario */}
        <View style={styles.perfil}>
            <View >
                <Image style={styles.image} source={require('../assets/img/user.jpg')} />
            </View>
        </View>
        


            
    </View>
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
    perfil: {
        flex: 1,
        backgroundColor: '#333',
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
    text: {
        fontSize: 12,
        color: 'white',
        paddingTop: 4,
    },
});