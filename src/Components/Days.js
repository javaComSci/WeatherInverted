import React, { Component } from 'react';
import { chooseDay } from '../Actions/index';

export default class Days extends Component {
	constructor(props){
		super(props);
		this.store = this.props.store;
	}

	selectDayHandler = (e) => {
		this.store.dispatch(chooseDay(e.target.value));
	}
	
	render(){
		return (
			<div>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Monday"/> Monday {this.store.getState().monDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Tuesday"/> Tuesday {this.store.getState().tuesDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Wednesday"/> Wednesday {this.store.getState().wedDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Thursday"/> Thursday {this.store.getState().thursDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Friday"/> Friday {this.store.getState().friDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Saturday"/> Saturday {this.store.getState().satDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Sunday"/> Sunday {this.store.getState().sunDate}
			</div>
		);
	}
}