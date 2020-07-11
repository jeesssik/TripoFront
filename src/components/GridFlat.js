import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Card from './Card';




//aca con el user y el token puedo llamar a otros metodos  
const DATA = [
  {
    id: user.id,
    title: user.publicaciones,
    actual: 1
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    actual: 2
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    actual: 3
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    actual: 1
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item',
  },

];

export default function App(props) {
  
  let user = navigation.getParam('user',{})
  let token = navigation.getParam('token',{})

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
            <View style={styles.item}>
                <Card titulo={item.title} actual={item.actual} onPress={props.aPost} />
            </View>
        )}
        keyExtractor={item => item.id}
        numColumns={1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //marginTop:'5%',
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});