import * as React from 'react';
import { AsyncStorage, Text, Button,TextInput, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Maiin from "./src/screens/main"
import NavegaLog from './src/navigation/navegacionLog'
const AppContext = React.useContext(); 


function SplashScreen() {
  return (
    <View>
      <Text>Cargando...</Text>
    </View>
  );
}

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Maiin salida={signOut}/>
  );
}

function SignInScreen() {
  return (    
    <NavegaLog   />
  );
}

const Stack = createStackNavigator();

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false, 
            userToken: action.token 
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,  // isLoading: se setea a true cuando se trata de chequear si hay un token ya almacenado en el asyncStorage
      isSignout: false, //isSignOut: se setea a true cuando el usuario cierre sesion
      userToken: null, // userToken: es el token del usuario, si no es nulo (null) se asume que el usuario está logueado, sino NO.
    }
  );

  return (
    //el provider del contexto en su propiedad value tiene el valor de los datos a compartir
    <AppContext.Consumer>
      {value =>{
        <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          {state.isLoading ? (
            // Mientras se revisa el token, aparece un splash screen
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // si no hay token encontrado, el usuario no inicia sesión
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
            // cambio de animacion de pantallas 
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // Cuando el usuario inicia sesión 
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      }}
    </AppContext.Consumer>
  );
}




const styles = StyleSheet.create({
  
  container: {
    flex:1,    
   },
   container1: {
    flex: 0.1,
   }
  
});



