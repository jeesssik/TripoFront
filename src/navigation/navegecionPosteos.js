import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Pubs from '../screens/Publicaciones'
import Post from '../screens/indvPost'
//mport TyC from './TyC'




function Publicaciones({navigation}) {
  return (
   <Pubs publicac={() => navigation.navigate('Posts')}/>
     
  );
}

function Posts({navigation}) {
  return (
   
 <Post />

  );
}


/*function Terminos({navigation}) {
  return (
  
  );
}*/


const Stack = createStackNavigator();


export default function NavPost() {
  return (
    <NavigationContainer  independent={true}>
      <Stack.Navigator initialRouteName="Publicaciones" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Publicaciones" component={Publicaciones} />
        <Stack.Screen name="Posts" component={Posts} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor:'#dfe1e6',
    justifyContent: 'center',
 
       
  },
  
  
  
  
});






