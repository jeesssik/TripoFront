import React, { Component, version,Text } from 'react';
import {  StyleSheet, View } from 'react-native'


import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
 
class MaterialText extends Component {
  fieldRef = React.createRef();
 
  onSubmit = () => {
    let { current: field } = this.fieldRef;
 
    console.log(field.value());
  };
 
  
  render() {
    return (
      <View  style={styles.container}>
        <TextField
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
  
  container: {
      marginLeft: 40,
      marginRight: 40,
      marginTop: 3.5
  },

})
export default MaterialText