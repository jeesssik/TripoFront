import React, {useState}from 'react';
import MapView, {Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';




export default class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        markers: []
      }
      this.handlePress =  this.handlePress.bind(this);
    }
    handlePress(e){
        this.setState({
          markers :[
         ...this.state.markers,
            {
              coordinate: e.nativeEvent.coordinate
            }
          
         ]
        })
        let coordsPubli= this.state.markers[0]
        console.log(coordsPubli)
    }

    
    render() {

    return (
        <MapView style={styles.mapStyle} showsUserLocation 
        initialRegion={
          {
            latitude: -34.6131500,
            longitude: -58.3772300,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
            
            
          }
        }
        onPress={this.handlePress}  
        >
          {this.state.markers.map((marker)=>{
            return <Marker {...marker}/>
          })}
          </MapView>
        
      
    );
  }
}

const styles = StyleSheet.create({
 
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
