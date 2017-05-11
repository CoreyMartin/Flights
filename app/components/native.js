import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';

import { app } from '../constants';
import stylesObj from '../styles';

const styles = StyleSheet.create(stylesObj);

export class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/cloud.png')} style={styles.image} resizeMode={'contain'}>
          <View style={styles.inner}>
              <Text style={styles.heading}>
                {app.name}
              </Text>
              <Text style={styles.text}>
                {app.welcomeMsg}
              </Text>
          </View>
        </Image>
        <Button 
          containerStyle={styles.button} 
          style={styles.buttonText} 
          onPress={this.props.handlePressStart}>
          {app.startButton}
        </Button>
      </View>
    )
  }
}

export class ItemList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Items!</Text>
      </View>
    )
  }
}