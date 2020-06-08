import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StarRating from 'react-native-star-rating';

export default class Stars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: 3.5,
      customStarCount: 2.5,
    };
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
  }

  onCustomStarRatingPress(rating) {
    this.setState({
      customStarCount: rating,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.instructions}>
          {`${this.state.generalStarCount} stars`} 
        </Text>   
        <StarRating
          disabled={false}
          maxStars={5}  // cant de esttrellas
          rating={this.state.generalStarCount}
          // reversed   // parra revertir las estrellas de derecha a izqda
          starSize={10} // tamaño esttrellas (convertilo a prop para manejar su tamaño)
          halfStarEnabled  // si se ttoca la estrella 1 vez la deja por la mittad, 2 veces es estrella entera
          fullStarColor="#e8e22e"
          halfStarColor="#e8e22e"
          emptyStarColor="#d1ce7b"
          selectedStar={rating => this.onGeneralStarRatingPress(rating)}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',   
  },
 
  instructions: { // estilo del texto que está arriba de las esttrellas
    textAlign: 'right',
    color: '#333333',
    marginBottom: 5,
    fontSize:10,
  },
  star: {
    paddingHorizontal: 6,
    opacity: 0,
  },
});


//////// Esttrellas    https://github.com/djchie/react-native-star-rating  //////

/// A instalar en npm

///     npm install react-native-star-rating --save

///y   


/// npm install --save react-native-vector-icons