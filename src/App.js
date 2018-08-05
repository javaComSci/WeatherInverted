import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Days from './Components/Days';
import TotalCards from './Components/TotalCards';
import WeatherWanted from './Components/WeatherWanted';
import Destination from './Components/Destination';
import Location from './Components/Location';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
        <Location store = {this.props.store}/>
        <Destination store = {this.props.store}/>
        <Days store = {this.props.store}/>
        <WeatherWanted store = {this.props.store}/>
        <TotalCards store = {this.props.store}/>
      </div>
    );
  }
}

export default App;
