import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from "./src/navigation/BottomTabNavigator"

export default function App() {
  return (
    <View style={styles.container}>
      <Tabs></Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
