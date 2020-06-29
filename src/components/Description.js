
import React, {useState}from 'react'
import {  View,StyleSheet, Text, Modal, TouchableOpacity, Button, Dimensions} from 'react-native'
import MaterialText from '../components/material-textfieldFilled';
import IconAnt from 'react-native-vector-icons/AntDesign' 
//import Localizacion from '../components/Localizacion'
import MapaTripo from '../components/MapaTripo'
function Description(props){

    const [open, setOpen ]=  useState(false);


     function abrirMapa  () {
           return ( setOpen(true))
        
        
    }
    return (
      
        <View style={styles.container}> 
        
            <Text  style={styles.text}>Datos de Publicación: </Text>
                <View  style={styles.iconosInputs}>
                    <IconAnt name='clockcircle' style={styles.icono}/>
             </View>
            <MaterialText valor='Hora'></MaterialText>
                <View  style={styles.iconosInputs}>
                <IconAnt name='phone' style={styles.icono}/> 
                </View>
            <MaterialText valor='Teléfono'></MaterialText>  
                <View  style={styles.iconosInputs}>
                    
                <IconAnt name='tag' style={styles.icono}/>    
              </View>
            <MaterialText valor='Web'></MaterialText> 
            <View  style={{alignContent: "center", marginLeft:130}}>
                <IconAnt name='earth' style={{fontSize:40}} onPress={abrirMapa}/> 
                </View>
            <Modal style={styles.mapStyle}
                        animationType="slide"
                        transparent={false}
                        visible={open}
                        >
                            <MapaTripo style={styles.mapStyle}></MapaTripo>
            
            
                    <Button title='Cancelar' style={{margin:10}} onPress={()=> setOpen(false)} />
                    <Button title='OK' style={{margin:10}} onPress={()=> setOpen(false)}/>
                    
                
        </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
  
    container: {
      flex:1,
      flexDirection:'column',
    
      

    },
    icono:{
        fontSize:20
    },
    iconosInputs:{
        flex:1,
       
    

    },
    text: {
        
        fontSize:25,
        color: 'black',

    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    
});

export default Description