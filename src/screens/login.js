
import React from 'react'
import {  View,StyleSheet,ImageBackground,  } from 'react-native'
import { Button,Text } from 'react-native-paper';

import Titulo from '../components/titulo';
import Social from '../components/socialIcon'
import TxtImput from '../components/textimput'


function Login(props){
 
    return(
        

        <View style={styles.container}>
         
          <ImageBackground 
            source={require('../assets/blured.jpg')}
            style={{ flex: 1,
              width: null,
              height: null,
              }}>
              
              <View style={styles.container2}>
                <Titulo content='Tripo' />
              
                <TxtImput defecto='Usuario' />
                <TxtImput defecto='Contrseña' />
                <Text                  
                  style={styles.registerTextStyle}
                  onPress={props.onPress1}>
                  ¿No tenés cuenta? Registrate
                </Text>
                  
              
                <View style={styles.inputs}>
                  
                  <Button mode="text" onPress={props.onPress} >
                  <Text style={{fontSize:17, color:'darkblue'}}>Inciar Sesión</Text>
                    </Button>
                    

                </View>
                
             
                <View style={styles.social}>
                  <View style={styles.Tsocial}>
                      <Text style={{fontSize:17, marginTop:20}}> O Iniciar Sesión con</Text>
                  </View>
                    <View style={{flexDirection:'row', justifyContent: 'center'}}>
                      <Social tipo="google" titulo='Google'/>
                      <Social tipo="facebook" titulo='Facebook' />
                    </View>
                </View> 
              </View>

          </ImageBackground>       
        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
      flex:1,
      justifyContent:"center",

    },
    container2: {
      flex:1,
      justifyContent:"center",

    },
    social:{ 
      marginTop: 30, 
      marginLeft:70, 
      marginRight:70,
      marginBottom:30, 
      backgroundColor:'rgba(18, 44, 44, 0.1)', 
      paddingLeft:20, 
      paddingRight:20, 
      paddingBottom:20,
      borderRadius:8,
    },
    Tsocial:{ 
      paddingBottom:20,
      alignSelf : "center" 
    },
    inputs:{
      marginTop:40, 
      flexDirection:'row',
      justifyContent: 'center'
    },
    registerTextStyle: {
      marginRight:40,
      color: '#334191',
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: 14,
    },
    
});

export default Login