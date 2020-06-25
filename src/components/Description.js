
import React from 'react'
import {  View,StyleSheet, Text } from 'react-native'
import MaterialText from '../components/material-textfieldFilled';
import IconAnt from 'react-native-vector-icons/AntDesign' 
//import Localizacion from '../components/Localizacion'

function Description(props){

  
    return (
      
        <View style={styles.container}> 
        
            <Text  style={styles.text}>Datos de Publicacion: </Text>
                <View  style={styles.iconosInputs}>
                    <IconAnt name='clockcircle' style={styles.icono}/>
             </View>
            <MaterialText valor='Hora'></MaterialText>
                <View  style={styles.iconosInputs}>
                <IconAnt name='phone' style={styles.icono}/> 
                </View>
            <MaterialText valor='Telefono'></MaterialText>  
                <View  style={styles.iconosInputs}>
                <IconAnt name='pushpin' style={styles.icono}/> 
                </View>
            <MaterialText valor='Ubicacion'></MaterialText>  
                <View  style={styles.iconosInputs}>
                    
                <IconAnt name='tag' style={styles.icono}/>    
              </View>
            <MaterialText valor='Web'></MaterialText> 
      
        </View>
    )
}



const styles = StyleSheet.create({
  
    container: {
      flex:1,
      flexDirection:'column'
      

    },
    icono:{
        fontSize:20
    },
    iconosInputs:{
        flex:1,
        flexDirection:'row'
    

    },
    text: {
        
        fontSize:25,
        color: 'black',

    }
    
});

export default Description