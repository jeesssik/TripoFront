
import React from 'react';
import 'react-native-gesture-handler';
import {  View,StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import Titulo from '../components/titulo';
import Icono from '../components/icono'
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import CarouselStart from '../components/Carousel';
import Description from '../components/Description'

//pantalla por completar
function IndvPost(props){
    return(
        <View style={styles.container}>
          <Image style={{width:'100%', height:300,  borderRadius: 20}}
                            source={{props}}
            ></Image>
            <Description/>
        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
        overflow: 'hidden',
        margin: 10,

    },
    detalles:{
        marginTop:20,
        marginBottom:20,
    },
    titleBar:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        alignSelf: 'flex-end',
        marginTop:10
      },
    
});

export default IndvPost