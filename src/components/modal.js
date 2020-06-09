// source   https://github.com/jacklam718/react-native-modals


//modal deslizable!  >> gif de muestra >>> https://raw.githubusercontent.com/jacklam718/react-native-modals/master/.github/swipeable-modal.gif


// insttalacion

/*

npm install --save react-native-modals
# OR
yarn add react-native-modals


*/



import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-modals';

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },*/
  dialogContentView: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  customBackgroundModal: {
    opacity: 0.5,
    backgroundColor: '#000',
  },
});

export default class Modale extends Component {
  state = {
    swipeableModal: false,
  };

  render() {
    return (
      <View >
        <View style={styles.container}>
          
          <Button
            title="Show Modal - Swipeable Modal Animation"
            onPress={() => {
              this.setState({
                swipeableModal: true,
              });
            }}
          />
        
        </View>

        <Modal
          onDismiss={() => {
            this.setState({ swipeableModal: false });
          }}
          width={0.9}
          overlayOpacity={1}
          visible={this.state.swipeableModal}
          rounded
          actionsBordered
          onSwipeOut={() => {
            this.setState({ swipeableModal: false });
          }}
          onTouchOutside={() => {
            this.setState({ swipeableModal: false });
          }}
          swipeDirection={['down', 'up']}
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
          modalTitle={
            <ModalTitle
              title={this.props.titulo}
            />
          }
          footer={
            <ModalFooter>
              <ModalButton
                text={this.props.botonI}
                bordered
                onPress={() => {
                  this.setState({ swipeableModal: false });
                }}
                key="button-1"
              />
              <ModalButton
                text={this.props.botonD}
                bordered
                onPress={() => {
                  this.setState({ swipeableModal: false });
                }}
                key="button-2"
              />
            </ModalFooter>
          }
        >
          <ModalContent
            style={{ backgroundColor: '#fff', paddingTop: 24 }}
          >
            <Text>{this.props.linea1}</Text>
            <Text>{this.props.linea2}</Text>
          </ModalContent>
        </Modal>

        
      </View>
    );
  }
}