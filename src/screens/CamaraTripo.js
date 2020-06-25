import React, { useState, useEffect, useRef} from 'react';
import { Camera } from 'expo-camera';
import { View, Text, Modal, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { Button } from 'react-native-elements';
import CreacionPost from '../components/CreacionPost'
import * as ImagePicker from 'expo-image-picker'; // acceso a galeria


        


export default function CameraPage (props) {
    const camRef  = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturePhoto, setCapturePhoto ]= useState(null);
    const [open, setOpen ]=  useState(false);
    const { width: winWidth, height: winHeight } = Dimensions.get('window');
    useEffect(()=>{
        (async ()=>{
            const{status}= await Camera.requestPermissionsAsync();
            setHasPermission(status==='granted');

        })();
    },[]);

    if (hasPermission === null){
        return <View/>;
    }
    
    if(hasPermission === false){
        return <Text>Acceso denegado</Text>
    }
    
    
    
    async function takePicture  () {
        if (camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturePhoto (data.uri)
            setOpen(true)
        console.log(data)
        }
        
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [16, 9],
          quality: 1,
          
        });
         //imagen data 
        console.log(result);
        
        //obtener Uri 
        if (!result.cancelled) {
            setCapturePhoto (result.uri);
            setOpen(true);
          
        }
      };
    
    
        return (
<React.Fragment>

<SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}} >


<Camera
    type={type}
    style={{
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    }}
    ref={camRef}
>
    
        
    
    <View style={{flex:1, backgroundColor:'transparent', flexDirection:'row'}} >
    
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 100,
                    left:240,

                }} onPress={pickImage}>
                    <Text>Galeria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: 100,
                    left:25,

                }} onPress={()=>{
                    setType(
                    type ===Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back

                );
                }}>

            <FontAwesome
            name='camera'
            size ={23}
            color = '#FFF'
            
            ></FontAwesome> 
                </TouchableOpacity>
                

            </View>
    </Camera>
    
        
    
                
    <TouchableOpacity style={{
                
                justifyContent:'center',
                alignItems: 'center',
                backgroundColor:'gray',
                margin:120,
                marginBottom:30,
                borderRadius:60,
                height:50,
                                }}
                                onPress={takePicture}>

                <FontAwesome
            name='circle'
            size ={40}
            color = '#FFF'
            
            ></FontAwesome> 

        </TouchableOpacity>
            
            {
                capturePhoto && 
                        <Modal
                        animationType="slide"
                        transparent={false}
                        visible={open}
                        >

            <ScrollView>
                <TouchableOpacity style={{margin:20}} onPress={()=> setOpen(false)}>
                                    
                    <Text>Cancelar</Text>
                </TouchableOpacity> 
                    <Image style={{width:'100%', height:300,  borderRadius: 20}}
                            source={{uri:capturePhoto}}
                                >
                                   

                    </Image>
                     
                    <Button title='Publicar' style={{margin:10}} onPress={props.onPress}/>
                    <CreacionPost></CreacionPost>
                    </ScrollView>
        </Modal>
            }
            
</SafeAreaView>
</React.Fragment>
        );
    };

