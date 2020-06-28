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
      <View style={styles.container}>
        <MapView style={styles.mapStyle} showsUserLocation 
        initialRegion={
          {
            latitude: 31.776685,
            longitude: 35.234491,
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
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: 300,
    height: 200,
  },
});