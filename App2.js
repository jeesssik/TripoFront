import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/screens/home"
import Login from "./src/screens/login"
import Registro from "./src/screens/registro"
import Tabs from "./src/navigation/BottomTabNavigator"
import TyC from './src/screens/TyC'



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
   
    <Registro onPress={() => navigation.navigate('PerfilUser')} onPress1={() => navigation.navigate('TyC')  }/>
    

  );
}
function TyCon({navigation}) {
  return (
   
    <TyC onPress12={() => navigation.navigate('Registro')} />
    

  );
}


function MainScr({navigation}) {
  return (
   
    <View style={styles.container}>
      <Tabs></Tabs>
    </View>

  );
}





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Registro" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Login" component={PantallaLogin} />
        <Stack.Screen name="Registro" component={PantallaRegistro} />
        <Stack.Screen name="TyC" component={TyCon} />
        <Stack.Screen name="Main" component={MainScr} />
       
     


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





