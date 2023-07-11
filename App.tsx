import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calendar from './components/calendar';
import Home from './components/home';
import Patient from './components/patient';
import DetailsPatient from './components/detail';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calendar">
        <Stack.Screen 
          name="Calendar" 
          component={Calendar} 
          options={{ 
            headerShown: false, 
          }} 
         />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerShown: false, 
            animation: 'slide_from_left',
          }} 
          /> 
        <Stack.Screen
          name="Patient"
          component={Patient}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen name="DetailsPatient" component={DetailsPatient} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
