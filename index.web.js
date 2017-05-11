import React from 'react';
import ReactDOM from 'react-dom';

import Flights from './app/components/Flights';
import { StartScreen, ItemList } from './app/components/web'

ReactDOM.render(
  <Flights comps={{ StartScreen, ItemList }}/>,
  document.getElementById('app')
)