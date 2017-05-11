import React, { Component } from 'react';

import Flights from './app/components/Flights';
import { StartScreen } from './app/components/native';
import { ItemList } from './app/components/native';

console.log(StartScreen)

let comps = {
  StartScreen: StartScreen,
  ItemList: ItemList
}

export default () => <Flights comps={comps}/>