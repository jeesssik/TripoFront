import * as React from 'react';
import { Appbar } from 'react-native-paper';


export default class Headder extends React.Component {
 
  _handleMore = () => alert('Shown more');

  render() {
    return (
      <Appbar.Header>
       
        <Appbar.Content
          title="Tripo"
        />
        
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}