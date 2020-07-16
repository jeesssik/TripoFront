

import * as React from 'react';
import { AsyncStorage, Text, Button,TextInput, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Maiin from "./src/screens/main"
import NavegaLog from './src/navigation/navegacionLog'

const AuthContext = React.createContext(); // creando el contexto

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
 
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
  /*
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
    
    */
    <NavegaLog />
  
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
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

// AsyncStorage es una fachada que permite persistir datos en forma offline

/*Autentificación basada en token
En este método, el usuario se identifica al igual que con la autenticación básica, con sus credenciales,
 nombre de usuario y contraseña. Pero en este caso, con la primera petición de autentificación, el servidor 
 generará un token basado en esas credenciales.
El servidor guarda en base de datos este registro y lo devuelve al usuario para que a partir de ese momento no 
envíe más credenciales de inicio de sesión en cada petición HTTP.  En lugar de las credenciales, simplemente se 
debe enviar el token codificado en cada petición HTTP.*/

  React.useEffect(() => {
    // Toma el token almacenado en el  storage
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // en caso de que el restoring del token falle
      }

      // Despues de obtener el token, habria que validarlo 

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        //En la app de produccion, se necesita mandar el usuario y contraseña al servidor para obtener el token
        // tambien se necesita manejar errores en caso de que el inicio de sesion falle
        // despues de obtener el token se necesita persistirlo usando `AsyncStorage`
        // De momento el token está harcodeado para que funcione el flow de autenticacion

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      
      signUp: async data => {
        
        //pasa lo mismo que con el signIn

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    //el provider del contexto en su propiedad value tiene el valor de los datos a compartir
    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  
  container: {
    //paddingTop:26,
    flex:1,
    //backgroundColor:'#dfe1e6',
    
   },
   container1: {
    //paddingTop:26,
    flex: 0.1,
   }
  
});