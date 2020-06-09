
import React from 'react'
import {  View,StyleSheet,Button  } from 'react-native'
import MaterialTextFilled from '../components/material-textfieldFilled'
import Titulo from '../components/titulo';
import Social from '../components/socialIcon'
import Texto from '../components/texto'

function Login(props){

    return(
        <View style={styles.container}>
          
            
                <Titulo content='Tripo' />
                
                <MaterialTextFilled valor='Usuario'/> 
                <MaterialTextFilled valor='Contraseña'/>  

          

              
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
    )
}

const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor:'#dfe1e6',
      justifyContent:"center",

    },
    social:{ 
      marginTop: 30, 
      marginLeft:70, 
      marginRight:70,
      marginBottom:30, 
      backgroundColor:'lightgray', 
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