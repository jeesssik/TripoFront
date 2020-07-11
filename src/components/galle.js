import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class CarouselStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: Number.parseInt(this.props.altura)} });
  };

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          autoplay={false}
          swipe={true}
          style={this.state.size}
          bullets={true}
          currentPage={this.props.actual}
          /*onAnimateNextPage={p => console.log(p)}*/>
          <View style={[this.state.size]}>
            <Image style={styles.imageThumbnail} source={{ uri:this.props.seleccion[0] }} />
          </View>
          <View style={[this.state.size]}>
            <Image style={styles.imageThumbnail} source={{ uri:this.props.seleccion[1] }} />
          </View>
          <View style={[this.state.size]}>
            <Image style={styles.imageThumbnail} source={{ uri:this.props.seleccion[2] }} />
          </View>
          <View style={[this.state.size]}>
            <Image style={styles.imageThumbnail} source={{ uri: this.props.seleccion[3] }} />
          </View>
        </Carousel>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});