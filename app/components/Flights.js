import React, { Component } from 'react';

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
        <this.props.comps.ItemList/> :
        <this.props.comps.StartScreen handlePressStart={this.handlePressStart}/>
    );
  }
}