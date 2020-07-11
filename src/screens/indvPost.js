
import React from 'react';
import 'react-native-gesture-handler';
import {  View,StyleSheet,SafeAreaView, ScrollView, TextInput, Button } from 'react-native'
import { Formik } from 'formik';
import Titulo from '../components/titulo';
import Icono from '../components/icono'
import { Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import CarouselStart from '../components/Carousel';


function IndvPost(props){
    return(
        <View style={styles.container}>
         <SafeAreaView >
                <ScrollView>
                    <View style={styles.titleBar}>
                        
                        <Ionicons name="md-more" size={24} ></Ionicons>
                    </View>
                    <Titulo content='Nombre del Lugar'/>

                    <CarouselStart  altura= '300' actual={props.actual} />
                    <View style={styles.detalles}>
                        <View style={{ flexDirection: 'row'}}>
                            <Icono iconName="alarm" />
                            <Text>"Lorem ipsum dolor sit amet</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Icono iconName="call" />
                            <Text>"Lorem ipsum dolor sit amet"</Text>
                        </View>

                        <View style={{ flexDirection: 'row'}}>
                            <Icono iconName="place" />
                            <Text >Lorem ipsum dolor sit amet </Text>
                        </View>
                    </View>
                    <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
               
                    <View style={{margin:10, backgroundColor:'gray'}}>
                    <Text>Comentarios</Text>
                    <Formik
                        initialValues={{ comentario: '' }}
                        onSubmit={values => console.log(values)}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                            onChangeText={handleChange('comentario')}
                            onBlur={handleBlur('comentario')}
                            value={values.comentario}
                            style={{
                                backgroundColor:"rgba(192,192,192,0.3)",
                                padding: 4,
                              }}
                            />
                            <Button onPress={handleSubmit} title="Comentar" />
                        </View>
                        )}
                    </Formik>
                   
                    </View>
                  
               
                </ScrollView>
            </SafeAreaView>  
                    

        </View>
    )
}

const styles = StyleSheet.create({
  
    container: {
        overflow: 'hidden',
        margin: 10,
        flex:1,

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