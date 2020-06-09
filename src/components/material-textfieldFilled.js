import React, { Component, version,Text } from 'react';
import {  StyleSheet, View } from 'react-native'


import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
 
class MaterialTextFilled extends Component {
  fieldRef = React.createRef();
 
  onSubmit = () => {
    let { current: field } = this.fieldRef;
 
    console.log(field.value());
  };
 
  
  render() {
    return (
      <View  style={styles.ancho}>
        <FilledTextField
          label={this.props.valor}
          formatText={this.formatText}
          onSubmitEditing={this.onSubmit}
          ref={this.fieldRef}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  ancho: {
    justifyContent: 'center',
    alignItems: 'stretch',
      marginLeft: 40,
      marginRight: 40,
  },

})
export default MaterialTextFilled
