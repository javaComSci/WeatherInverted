import React from 'react';
import { chooseMonday, chooseTuesday, chooseWednesday, chooseThursday, chooseFriday, chooseSaturday, chooseSunday } from '../Actions/index';  

class Days extends React.Component{
	constructor(props){
		super(props);
		this.store = this.props.store;
		this.selectMonday = this.selectMonday.bind(this);
		this.selectTuesday = this.selectTuesday.bind(this);
		this.selectWednesday = this.selectWednesday.bind(this);
		this.selectThursday = this.selectThursday.bind(this);
		this.selectFriday = this.selectFriday.bind(this);
		this.selectSaturday = this.selectSaturday.bind(this);
		this.selectSunday = this.selectSunday.bind(this);
	}

	selectMonday = () => {
		this.store.dispatch(chooseMonday());
		if(document.getElementById("mon").checked == true){
			console.log("checked");
		}
	}

	selectTuesday = () => {
		this.store.dispatch(chooseTuesday());	
	}

	selectWednesday = () => {
		this.store.dispatch(chooseWednesday());	
	}

	selectThursday = () => {
		this.store.dispatch(chooseThursday());	
	}

	selectFriday = () => {
		this.store.dispatch(chooseFriday());	
	}

	selectSaturday = () => {
		this.store.dispatch(chooseSaturday());	
	}

	selectSunday = () => {
		this.store.dispatch(chooseSunday());	
	}

	render(){
		console.log("RENDERING IN DAYS" + this.store.monDate);
		return (
			<div>
				<input id="checkBox" type="checkbox" onChange = {this.selectMonday} id = "mon"/> Monday {this.store.getState().monDate}
				<input id="checkBox" type="checkbox" onChange= {this.selectTuesday} id = "tues"/> Tuesday {this.store.getState().tuesDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectWednesday} id = "wed"/> Wednesday {this.store.getState().wedDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectThursday} id = "thurs"/> Thursday {this.store.getState().thursDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectFriday} id = "fri"/> Friday {this.store.getState().friDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectSaturday} id = "sat"/> Saturday {this.store.getState().satDate}
				<input id="checkBox" type="checkbox" onChange = {this.selectSunday} id = "sun"/> Sunday {this.store.getState().sunDate}
			</div>
		);
	}
}

export default Days;