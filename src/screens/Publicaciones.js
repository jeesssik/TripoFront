import * as React from 'react';
import GridView from "../components/GridFlat";
import { View } from 'react-native';

export default function Publicaciones(props){
  return (
    <View style={{width:'100%', height:'100%'}}>
        <GridView aPost={props.publicac}/>
    </View>
  )
}