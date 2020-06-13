import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Publicaciones from '../screens/Publicaciones';
import Perfil from '../screens/Perfil';

//const Publicaciones = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Inicio', title: 'Inicio', icon: 'home', color: 'blue' },
      { key: 'Buscar', title: 'Buscar', icon: 'magnify', color: '#99C337' },
      { key: 'Publicar', title: 'Publicar', icon: 'plus-circle', color: 'gray' },
      { key: 'Perfil', title: 'Perfil', icon: 'account', color: 'green'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    Inicio: Publicaciones,
    Buscar: RecentsRoute,
    Publicar: AlbumsRoute,
    Perfil: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting={true}//expande al estar parado en un tab
      />
    );
  }
}