import React, { Component } from 'react';

import { app } from '../constants';
import styles, { webOnly } from '../styles';

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

export class TripList extends Component {
  render() {
    const trips = this.props.trips;
    return (
      <div style={{...webOnly.container, ...styles.tripList}}>
        <Pg>We found {trips.length} flights!</Pg>
        {trips.map((trip, i) => <Trip trip={trip} key={i}/>)}
      </div>
    )
  }
}

export class Trip extends Component {
  render() {
    const trip = this.props.trip;
    return (
      <div style={styles.trip}>
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