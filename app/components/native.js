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

export class TripList extends Component {
  render() {
    const trips = this.props.trips;
    return (
      <ScrollView>
        <View style={[styles.container, styles.tripList]}>
          <Text style={styles.heading}>We found {trips.length} flights!</Text>
          {trips.map((trip, i) => <Trip trip={trip} key={i}/>)}
        </View>
      </ScrollView>
    )
  }
}

export class Trip extends Component {
  render() {
    const trip = this.props.trip;
    return (
      <View style={styles.trip}>
        <Text>{trip.origin} to {trip.destination}</Text>
        <Text>{trip.carrier}</Text>
        <Text>{trip.total.replace('USD', '$')}</Text>
      </View>
    )
  }
}