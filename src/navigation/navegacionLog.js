import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login'
import Registro from '../screens/registro'
import TyC from '../screens/TyC'
import BotTabNav from '../navigation/BottomTabNavigator'



function PantallaLogin({navigation}) {
  return (
   
    <Login irme={() => navigation.navigate('Registro')} navigation={navigation} />

  );
}

function PantallasBotTabNav({navigation}) {
  return (
   
    <BotTabNav out={() => navigation.navigate('Loging')} navigation={navigation} />

  );
}

function PantallaRegistro({navigation}) {
  return (
   
    <Registro onPress1={() => navigation.navigate('Terminos')}   vamosAlLogin={() => navigation.navigate('Login')}/>

  );
}


function Terminos({navigation}) {
  return (
   
    <TyC onPress12={() => navigation.navigate('Registro')} />
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Login" component={PantallaLogin} />
        <Stack.Screen name="Registro" component={PantallaRegistro} />
        <Stack.Screen name="Terminos" component={Terminos} />
        <Stack.Screen name="BotTabNav" component={PantallasBotTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor:'#dfe1e6',
    justifyContent: 'center',
 
       
  },
  
  
  
  
});