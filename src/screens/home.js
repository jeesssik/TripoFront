
import React from 'react'
import {  View,StyleSheet  } from 'react-native'
import Titulo from '../components/titulo';
import { Button,Text } from 'react-native-paper';
function Home(props){
    return(
        <View style={styles.container}>
        <View style={{ flex:7}}>
          <Titulo content='Tripo' />
        </View>
         <View style={{flexDirection:'row',flex:0.5}}>      
         <View style={[{ width: "50%" }]}>
         <Button mode="text" onPress={() => console.log('Pressed')} onPress={props.onPress} >
                  <Text style={{fontSize:16, color:'darkblue'}}>Inciar Sesión</Text>
                    </Button>
          </View>
          <View style={[{ width: "50%" }]}>
          <Button mode="text" onPress={() => console.log('Pressed')} onPress={props.onPress1} >
                  <Text style={{fontSize:16, color:'darkblue'}}>Registrarme</Text>
                    </Button>
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