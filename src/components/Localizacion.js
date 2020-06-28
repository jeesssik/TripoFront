import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Localizacion(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation(location);

    })();
  });

  let latitud= 'Waiting..';
  let longi = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    //text = JSON.stringify(location);
   // console.log(location);
     latitud = location.coords.latitude;
     longi = location.coords.longitude;
    //let coord = JSON.stringify(coordenadas.coords);
    
  
  }

  return (
    <View style={styles.container}>
      <Text>{latitud}{longi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});