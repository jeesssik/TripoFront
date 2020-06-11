import * as React from 'react';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {  View,StyleSheet,SafeAreaView, ScrollView,Text, Image  } from 'react-native'



function Perfil(props){
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Ionicons name="ios-arrow-back" size={24} color="#AEB5BC"></Ionicons>
            <Ionicons name="md-more" size={24} color="#AEB5BC"></Ionicons>
          </View>

            
          <View style={{ alignSelf: "center"}}>
            <View style={styles.profileImage}>
                <Image source={require('../assets/avatars.jpg')} style={styles.image} resizeMode="center"></Image>
            </View>
          </View>

          <View style={styles.infoContainer}>
              <Text style={[styles.text, {fontWeight:"200", fontSize:36, color: "#AEB5BC"}] }>Jesica Rodriguez</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
                <Text style={[styles.text, {fontSize:24}]}>456</Text>
                <Text style={styles.text, styles.subText}>Posts</Text>
            </View>
            <View style={[styles.statsBox, {borderColor:"#DFD8C8", borderLeftWidth: 1, borderRightWidth:1}]}>
                <Text style={[styles.text, {fontSize:24}]}>14</Text>
                <Text style={styles.text, styles.subText}>Favoritos</Text>
            </View>
            <View style={[styles.statsBox, {borderColor:"#DFD8C8", borderRightWidth:1}]}>
                <Text style={[styles.text, {fontSize:24}]}>6</Text>
                <Text style={styles.text, styles.subText}>Seguidores</Text>
            </View>
            <View style={styles.statsBox}>
                <Text style={[styles.text, {fontSize:24}]}>54</Text>
                <Text style={styles.text, styles.subText}>Seguidos</Text>
            </View>
          </View>

          <View style={{marginTop: 32}}>
          <Text style={[styles.text, {fontSize:24, marginLeft: 10}]}>Ultimos Posteos </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/avatars.jpg")} style={styles.image} resizeMode='cover'></Image>
                </View>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/avatars.jpg")} style={styles.image} resizeMode='cover'></Image>
                </View>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/avatars.jpg")} style={styles.image} resizeMode='cover'></Image>
                </View>
                <View style={styles.mediaImageContainer}>
                    <Image source={require("../assets/avatars.jpg")} style={styles.image} resizeMode='cover'></Image>
                </View>
            </ScrollView>
          </View>

        </ScrollView>
      </SafeAreaView>

  
    );
}

const styles = StyleSheet.create({
  
    container: {
        flex:1,
      backgroundColor:'#dfe1e6',

    },
    text:{
        
        color:"#52575D"
    },
    subText:{
        fontSize:12,
        color: "#AEB5BC",
        textTransform:'uppercase',
        fontWeight: '500'
    },
    titleBar:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 34,
        marginHorizontal: 16,
      },
      image:{
        flex:1,
        width:undefined,
        height: undefined,
      },
      profileImage:{
          width: 200,
          height: 200,
          borderRadius: 200,
          overflow: "hidden"
      },
      infoContainer:{
          alignSelf: "center",
          alignItems: "center",
          marginTop: 1,
      },
      infoContainer:{
          alignSelf: "center",
          alignItems: "center",
          marginTop:16,
      },
      statsContainer:{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 32,
      }, 
      statsBox:{
          alignItems: "center",
          flex:1,
      },
      mediaImageContainer:{
          width: 300,
          height:300,
          borderRadius: 12,
          overflow:'hidden',
          marginHorizontal: 10  
      }
    
    
});

export default Perfil