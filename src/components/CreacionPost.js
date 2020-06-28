
import React from 'react'
import {  View,StyleSheet, ScrollView, Image} from 'react-native'
import Description from '../components/Description'


    

      function CreacionPost() {
        return(
      
         <View  style={styles.container}>
            
               
               <View style={styles.social}>
               <Description/>
               
               </View>
                  
             
        </View>
      
     
        
        
    );
        }


        

          

        



const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor:'#dfe1e6',
      justifyContent:"center",
      top: 10,
      marginBottom:50
    },
    social:{ 
      marginTop:10, 
      marginLeft:10, 
      marginRight:10,
      
      backgroundColor:'lightgray', 
      
    },
    inputs:{
      marginTop:40, 
      flexDirection:'row',
      justifyContent: 'center'
    }
    
});

export default CreacionPost
