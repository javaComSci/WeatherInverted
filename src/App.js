import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Days from './Components/Days';
import Card from './Components/Card';
import AllCards from './Components/AllCards';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Days store = {this.props.store}/>
        <Card store = {this.props.store}/>
        <AllCards store = {this.props.store}/>
      </div>
    );
  }
}

export default App;
