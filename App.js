import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/screens/home"
import Login from "./src/screens/login"
import Registro from "./src/screens/registro"
import Tabs from "./src/navigation/BottomTabNavigator"
import IndvPost from './src/screens/indvPost'

import Perfil from './src/screens/Perfil'

function HomeScreen({ navigation }) {
  return (
    <Home onPress={() => navigation.navigate('Login')} onPress1={() => navigation.navigate('Registro')}/>
  );
}


function PantallaLogin({navigation}) {
  return (
   
     <Login onPress={() => navigation.navigate('Login')} onPress1={() => navigation.navigate('Registro')}/>
  );
}


function PantallaRegistro({navigation}) {
  return (
   
    <Registro onPress={() => navigation.navigate('PerfilUser')}/>

  );
}


function MainScr({navigation}) {
  return (
   
    <View style={styles.container}>
      <Tabs></Tabs>
    </View>

  );
}

function PostIndv({navigation}) {
  return (
   
    <View style={styles.container}>
        <View >
        <IndvPost  />
        </View>    
    </View> 
  );
}



function PerfilU({navigation}){
  return(
                                       
      <Perfil />

  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Login" component={PantallaLogin} />
        <Stack.Screen name="Registro" component={PantallaRegistro} />
        <Stack.Screen name="Main" component={MainScr} />
        <Stack.Screen name="PostIndv" component={PostIndv} />
        <Stack.Screen name="PerfilUser" component={PerfilU} />


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
   }
  
});





