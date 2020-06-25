
import React from 'react';
import 'react-native-gesture-handler';
import {  View,StyleSheet} from 'react-native'

import Tabs from "../navigation/BottomTabNavigator"
import Headder from "../components/mainheader"

export default function Maiin(props){
    return(
        <View style={styles.container}>
      <View style={styles.container1} >
            <Headder alpresionar={props.salida}/>
          </View>
      <Tabs></Tabs>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //paddingTop:26,
        flex:1,
        //backgroundColor:'#dfe1e6',
        
       },
       container1: {
        //paddingTop:26,
        flex: 0.1,
       }
    
});
