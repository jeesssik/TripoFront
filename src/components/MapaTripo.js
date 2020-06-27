import React, {useState}from 'react';
import MapView, {Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';



const id = 0;
export default class App extends React.Component {
    

  
    render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} showsUserLocation 
        initialRegion={
          {
            latitude: -34.6131500,
            longitude: -58.3772300
            
          }
        }
        
        
        
        >
         <Marker
              coordinate={{
                latitude: -34.6131500,
                longitude: -58.3772300
              }}
              title="Prueba de inicializar"
              description="esto se setea"
              
              />
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
