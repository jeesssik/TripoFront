
import React from 'react'
import {  View,StyleSheet,Button  } from 'react-native'
import Titulo from '../components/titulo';

function Home(props){
    return(
        <View style={styles.container}>
        <View style={{ flex:7}}>
          <Titulo content='Tripo' />
        </View>
         <View style={{flexDirection:'row',flex:0.5}}>      
         <View style={[{ width: "50%" }]}>
          <Button
                  style={{height:25}}
                  onPress={props.onPress}
                  title="Iniciar Sesión"
                  color="#841584"
                  
                />
          </View>
          <View style={[{ width: "50%" }]}>
            <Button
                style={{height:25}}
                onPress={props.onPress1}
                title="Registrarme"
                color="#841584"
                
              />
          </View>
        </View> 

        

    </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
        flex:1,
      backgroundColor:'#dfe1e6',

    },
    
});

export default Home