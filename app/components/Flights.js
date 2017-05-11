import React, { Component } from 'react';

import flightData from '../data';

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
});

export default class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: false
    }
  }
  handlePressStart = () => {
    this.setState({
      showItems: true
    })
  }
  render() {
    return (
      this.state.showItems ? 
        <this.props.comps.TripList trips={trips}/> :
        <this.props.comps.StartScreen handlePressStart={this.handlePressStart}/>
    );
  }
}