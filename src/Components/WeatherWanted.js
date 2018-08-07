import React, { Component } from 'react';
import { chooseWeather } from '../Actions/index';

export default class WeatherWanted extends Component {
	constructor(props){
		super(props);
	}

	selectWeatherHandler = (e) => {
		this.props.store.dispatch(chooseWeather(e.target.value));
	}

	inputStyle = {
		color: "black",
		display: "inline",
	};

	render(){
		return <div> 
				<br/>
				<input type="checkbox" value = "Sunny" onChange = {this.selectWeatherHandler}/> <h4 style={this.inputStyle}> Sunny </h4>
				<input type="checkbox" value = "Rain" onChange = {this.selectWeatherHandler}/> <h4 style={this.inputStyle}> Rain </h4>
				<input type="checkbox" value = "Clear" onChange = {this.selectWeatherHandler}/> <h4 style={this.inputStyle}> Clear </h4>
				<input type="checkbox" value = "Clouds" onChange = {this.selectWeatherHandler}/> <h4 style={this.inputStyle}> Clouds </h4>
				<input type="checkbox" value = "Drizzle" onChange = {this.selectWeatherHandler}/> <h4 style={this.inputStyle}> Drizzle </h4>
		</div>
	}
}