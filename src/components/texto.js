
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'


function Texto(props){
    return(
        <View style={styles.textView}>
       
          <Text  onPress={props.onPress}>{props.valor}</Text>
        

  

        </View>
    )
}

const styles = StyleSheet.create({
    
    
      textView:{
        marginTop:4,
        marginLeft:7,
      },
    
})


export default Texto