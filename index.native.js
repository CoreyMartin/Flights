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
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';

import { app } from './app/constants';
import stylesObj, { colors } from './app/styles';

const styles = StyleSheet.create(stylesObj);

export default class Flights extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inner}>
            <Image source={require('./app/img/cloud.png')} style={styles.image} resizeMode={'contain'}/>
            <Text style={styles.heading}>
              {app.name}
            </Text>
            <Text style={styles.text}>
              {app.welcomeMsg}
            </Text>
            <Button title={app.startButton} color={colors.button}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}