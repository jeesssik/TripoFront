import * as React from 'react';
import {StyleSheet} from 'react-native';
import { Appbar,Text } from 'react-native-paper';


export default class Headder extends React.Component {
 
  _handleMore = () => alert('Shown more');

  render() {
    return (
      <Appbar.Header>
       
        <Appbar.Content
          title="Tripo"
        />
        <Text style={styles.salida} onPress={this.props.alpresionar}> Cerrar Sesión</Text>
      
        
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  
  salida: {
    fontSize:12,
        color: "white",
        textTransform:'uppercase',
        fontWeight: '600',
        paddingRight:12,
  },
   
  
});

