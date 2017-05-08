/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import { app } from './app/constants';
import styles from './app/native-styles';

export default class Flights extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {app.name}
        </Text>
        <Text style={styles.text}>
          {app.welcomeMsg}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Flights', () => Flights);
