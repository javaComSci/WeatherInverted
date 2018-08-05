import React, { Component } from 'react';
import { chooseWeather } from '../Actions/index';

export default class WeatherWanted extends Component {
	constructor(props){
		super(props);
	}

	selectWeatherHandler = (e) => {
		this.props.store.dispatch(chooseWeather(e.target.value));
	}

	render(){
		return <div> 
				<input type="checkbox" value = "Sunny" onChange = {this.selectWeatherHandler}/> Sunny
				<input type="checkbox" value = "Rain" onChange = {this.selectWeatherHandler}/> Rain
				<input type="checkbox" value = "Clear" onChange = {this.selectWeatherHandler}/> Clear
				<input type="checkbox" value = "Clouds" onChange = {this.selectWeatherHandler}/> Clouds
				<input type="checkbox" value = "Drizzle" onChange = {this.selectWeatherHandler}/> Drizzle
		</div>
	}
}