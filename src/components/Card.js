import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import Carousel from './Carousel';
import { View, StyleSheet, Image } from 'react-native';
import Star from './Star';

export default function Contenedor(props){
  return (
    <Card style={{flex:1}} >
      <Card.Content style={{width:'100%'}}>
        <View style={{width:'100%', height:'50%'}}>
          <Title>ivan</Title>
          <Carousel altura= '300' actual={props.actual} />
          <View style={styles.row}>
            <Title>{props.titulo}</Title>
            <Paragraph>Card content</Paragraph>
            <Star></Star>
          </View>
        </View>
          
      </Card.Content>
    </Card>
  )
  
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
});