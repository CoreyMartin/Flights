import React from 'react';
import ReactDOM from 'react-dom';

import Flights from './app/components/Flights';
import { StartScreen, TripList } from './app/components/web'

ReactDOM.render(
  <Flights comps={{ StartScreen, TripList }}/>,
  document.getElementById('app')
)