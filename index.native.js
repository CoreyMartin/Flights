/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import Button from 'react-native-button';

import { app } from './app/constants';
import stylesObj, { colors } from './app/styles';

const styles = StyleSheet.create(stylesObj);

export default class Flights extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image source={require('./app/img/cloud.png')} style={styles.image} resizeMode={'contain'}>
            <View style={styles.inner}>
                <Text style={styles.heading}>
                  {app.name}
                </Text>
                <Text style={styles.text}>
                  {app.welcomeMsg}
                </Text>
            </View>
          </Image>
          <Button containerStyle={styles.button} style={styles.buttonText}>{app.startButton}</Button>
        </View>
    );
  }
}