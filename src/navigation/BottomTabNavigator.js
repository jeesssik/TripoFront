import * as React from 'react';
import { BottomNavigation, Text, Button } from 'react-native-paper';

//import Publicaciones from '../screens/Publicaciones';
import NavPosts from './navegecionPosteos'
import Perfil from '../screens/Perfil';
import Creacion from '../screens/creacionPost';
import { View } from 'react-native';
<<<<<<< HEAD

=======
//import CamaraTripo from '../screens/CamaraTripo'
//const Publicaciones = () => <Text>Music</Text>;
>>>>>>> ivan

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () =>  <Text>Albums</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Inicio', title: 'Inicio', icon: 'home', color: '#121075' },
      { key: 'Buscar', title: 'Buscar', icon: 'magnify', color: '#3230a1' },
      { key: 'Publicar', title: 'Publicar', icon: 'plus-circle', color: '#5351c2' },
      { key: 'Perfil', title: 'Perfil', icon: 'account', color: '#6966ff'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    //Inicio: Publicaciones,
    Inicio: NavPosts,
    Buscar: RecentsRoute,
<<<<<<< HEAD
    Publicar: Creacion,
=======
    Publicar: NavPosts,
>>>>>>> ivan
    Perfil: Perfil,
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