import React, { Component } from 'react';

import { app } from '../constants';
import styles, { webOnly } from '../styles';

import flightData from '../data';

window.flightData = flightData;

var trips = [];

flightData.trips.tripOption.forEach((tripOption, i) => {
  /* let's just assume there's only one slice and one segment 
     to keep things simple */
  let trip = {},
      segment = tripOption.slice[0].segment[0],
      leg = segment.leg[0];
  trip.duration = segment.duration;
  trip.carrier = segment.flight.carrier;
  trip.origin = leg.origin;
  trip.destination = leg.destination;
  trip.total = tripOption.saleTotal;
  trips.push(trip);
})

console.log(trips);

export class StartScreen extends Component {
  render() {
    return (
      <div style={webOnly.container}>
        <div style={webOnly.bgImg}>
          <div style={styles.inner}>
            <h1 style={styles.heading}>{app.name}</h1>
            <Pg>{app.welcomeMsg}</Pg>
          </div>
        </div>
        <button type="button"
          style={{...styles.button, ...styles.buttonText}}
          onClick={this.props.handlePressStart}>
          {app.startButton}
        </button>
      </div>
    )
  }
}

export class ItemList extends Component {
  render() {
    return (
      <div style={webOnly.container}>
        <Pg>We found {trips.length} flights!</Pg>
        {trips.map((trip, i) => <Trip trip={trip} key={i}/>)}
      </div>
    )
  }
}

const s = {
  trip: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    width: 300,
    maxWidth: '100%',
    minHeight: 100
  }
}

export class Trip extends Component {
  render() {
    const trip = this.props.trip;
    return (
      <div style={s.trip}>
        <div>{trip.origin} to {trip.destination}</div>
        <div>{trip.total.replace('USD', '$')}</div>
      </div>
    )
  }
}

export class Pg extends Component {
  render() {
    return (
      <p style={styles.text}>{this.props.children}</p>
    )
  }
}