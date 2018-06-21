import React, { Component } from 'react';
import { chooseSunny, chooseRain } from '../Actions/index.js'

export default class WeatherWanted extends Component{
	constructor(props){
		super(props);
		this.store = this.props.store;
		this.selectSunny = this.selectSunny.bind(this);
		this.selectRain = this.selectRain.bind(this);
	}

	selectSunny(){
		this.store.dispatch(chooseSunny());
	}

	selectRain(){
		this.store.dispatch(chooseRain());
	}

	render(){

		return (
			<div>
				<input type="checkbox" onChange = {this.selectSunny}/> Sunny
				<input type="checkbox" onChange = {this.selectRain}/> Rain
			</div>
		);
	}
}

