
import React from 'react'
import {  View,StyleSheet,Button,ImageBackground  } from 'react-native'

import Titulo from '../components/titulo';
import Social from '../components/socialIcon'
import Texto from '../components/texto'
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
              
                <View style={styles.inputs}>
                  <View style={[{ width: "45%",marginRight:1 }]}>
                    <Button
                       onPress={props.onPress}
                      title="Iniciar Sesión"
                      color="darkgreen"
                    />
                  </View>
                  <View style={[{ width: "45%" }]}>
                  <Button
                       onPress={props.onPress1}
                      title="Cancelar"
                      color="darkred"
                    />
                  </View>

                </View>
                
             
                <View style={styles.social}>
                  <View style={styles.Tsocial}>
                      <Texto valor='O Iniciar Sesión con'/>
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
    }
    
});

export default Login