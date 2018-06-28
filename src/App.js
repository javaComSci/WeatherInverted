import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Days from './Components/Days';
import AllCards from './Components/AllCards';
import WeatherWanted from './Components/WeatherWanted';
import Destination from './Components/Destination';
import Location from './Components/Location';


class App extends Component {
  constructor(props){
    super(props);
  }

    // func() {
    //   console.log("FUNC");
    //   console.log(this.props.store.getState());
    //   console.log(this.props.store.getState().monChecked);
    //   return 1;
    // }
  render() {

    return (
      <div className="App">
        <Location store = {this.props.store}/>
        <Days store = {this.props.store}/>
        <WeatherWanted store = {this.props.store}/>
        <AllCards store = {this.props.store}/>
        <Destination store = {this.props.store}/>
      </div>
    );
  }
}

export default App;
