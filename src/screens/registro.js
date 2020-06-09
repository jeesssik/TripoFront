import * as React from 'react';
import 'react-native-gesture-handler';

import {  View,StyleSheet,SafeAreaView, ScrollView,Button  } from 'react-native'
import Titulo from '../components/titulo';
import MaterialText from '../components/material-textfield'

function Registro(props){
    return(
        <View style={styles.container}>
            <SafeAreaView >
                <ScrollView >
                    <Titulo content='Registrarme' />
    
                    <MaterialText valor='Nombre'/>  
                    <MaterialText valor='Apellido'/> 
                    <MaterialText valor='DNI'/> 
                    <MaterialText valor='Fecha De Nacimiento'/> 
                    <MaterialText valor='Username'/> 
                    <MaterialText valor='Coontraseña'/> 
                    <MaterialText valor='email'/> 
                
                    <View style={styles.bot}>
                        <Button
                        onPress={props.onPress}
                        title="Registrarme"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        />
                    </View>         
                </ScrollView>
            </SafeAreaView>
            </View>

  
    )
}

const styles = StyleSheet.create({
  
    container: {
        flex:1,
      backgroundColor:'#dfe1e6',

    },
    bot:{
        marginTop:40, 
        flexDirection:'row',
        justifyContent: 'center'}
    
});

export default Registro