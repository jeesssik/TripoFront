import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default class TxtImput extends React.Component {
  state = {
    text: ''
  };

  render(){
    return (
        <View style={styles.container}>
            <TextInput  style={styles.estilo}
                label={this.props.defecto}
                underlineColor="darkblue"
                onChangeText={this.props.valor}
                onBlur={this.props.comp}
                secureTextEntry={this.props.seguridad}
                maxLengt={this.props.largoMax}
            />
      
        </View>
    );
  }
}


const styles = StyleSheet.create({
  
    container: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
    },
    estilo:{
        opacity: 0.5,
        color:"black"

    }
  
  })