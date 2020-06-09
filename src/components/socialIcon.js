
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SocialIcon } from 'react-native-elements'

function Social(props){
    return(
        <View style={styles.inputView}>
        
               <SocialIcon type={props.tipo} />

        </View>
    )
}

const styles = StyleSheet.create({
    loginBtn:{
       
        
      },
    
      inputView:{
       
      
      },
})


export default Social