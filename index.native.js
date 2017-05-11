import React, { Component } from 'react';

import Flights from './app/components/Flights';
import { StartScreen, TripList } from './app/components/native';

export default () => <Flights comps={{ StartScreen, TripList }}/>