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
	
	inputStyle = {
		color: "black",
		display: "inline",
	};

	render(){
		return (
			<div>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Monday"/> <h4 style = {this.inputStyle}> Monday {this.store.getState().monDate} </h4>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Tuesday"/> <h4 style = {this.inputStyle}> Tuesday {this.store.getState().tuesDate} </h4>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Wednesday"/> <h4 style = {this.inputStyle}> Wednesday {this.store.getState().wedDate} </h4>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Thursday"/> <h4 style = {this.inputStyle}> Thursday {this.store.getState().thursDate} </h4>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Friday"/> <h4 style = {this.inputStyle}> Friday {this.store.getState().friDate} </h4>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Saturday"/> <h4 style = {this.inputStyle}> Saturday {this.store.getState().satDate} </h4>
				<input id="checkBox" type="checkbox" onChange = {this.selectDayHandler} value = "Sunday"/> <h4 style = {this.inputStyle}> Sunday {this.store.getState().sunDate} </h4>
			</div>
		);
	}
}