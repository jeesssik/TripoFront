import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


function Titulo(props){
    return(
        <View style={styles.container}>
             <Text style={styles.logo}>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({


    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:20,
        marginTop:30
        
      },
      container:{
        //justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
      }

})


export default Titulo