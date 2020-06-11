import * as React from 'react';
import 'react-native-gesture-handler';
import { Button,Text } from 'react-native-paper';
import {  View,StyleSheet,SafeAreaView, ScrollView,ImageBackground  } from 'react-native'
import Titulo from '../components/titulo';
import TxtImput from '../components/textimput'

function Registro(props){
    return(
        <View style={styles.container}>

            <ImageBackground 
                source={require('../assets/blured.jpg')}
                style={{ flex: 1,
                width: null,
                height: null,
                }}>
                <View style={styles.container2}>
                    <SafeAreaView >
                        <ScrollView >
                        
                            <Titulo content='Registrarme' />
            
                            <TxtImput defecto='Nombre' />
                            <TxtImput defecto='Apellido' />

                            <TxtImput defecto='DNI' />

                            <TxtImput defecto='Fecha de Nacimiento' />
                            <TxtImput defecto='Username' />
                            <TxtImput defecto='Contraseña' />
                            <TxtImput defecto='emal' />
                        
                            <View style={styles.bot}>
                            <Button mode="text" onPress={() => console.log('Pressed')} onPress={props.onPress} >
                                <Text style={{fontSize:17, color:'darkblue'}}>Registrarme</Text>
                            </Button>
        
                            </View>    
                            
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </ImageBackground> 
        </View>

  
    )
}

const styles = StyleSheet.create({
  
    container: {
        flex:1,   

    },
    container2: {
        flex:1,
        justifyContent:"center",
  
      },
    bot:{
        marginTop:40, 
        flexDirection:'row',
        justifyContent: 'center'
    }
    
});

export default Registro