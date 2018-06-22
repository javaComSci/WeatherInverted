import React, { Component } from 'react';
import { chooseSunny, chooseRain,chooseClear, chooseClouds } from '../Actions/index.js'

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

	selectClear(){
		this.store.dispatch(chooseClear());
	}

	selectClouds(){
		this.store.dispatch(chooseClouds());
	}

	render(){

		return (
			<div>
				<input type="checkbox" onChange = {this.selectSunny}/> Sunny
				<input type="checkbox" onChange = {this.selectRain}/> Rain
				<input type="checkbox" onChange = {this.selectClear}/> Clear
				<input type="checkbox" onChange = {this.selectClouds}/> Clouds

			</div>
		);
	}
}

