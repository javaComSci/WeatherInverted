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

	getDate = (curr) => {
		var d = new Date();
		d.setDate(d.getDate() + ((7-d.getDay())%7+curr) % 7);
		switch(d.getMonth){
			case 0: "January"; break;
			case 1: "Feburary"; break;
			case 2: "March"; break;
			case 3: "April"; break;
			case 4: "May"; break;
			case 5: "June"; break;
			case 6: "July"; break;
			case 7: "August"; break;
			case 8: "September"; break;
			case 9: "October"; break;
			case 10: "November"; break;
			case 11: "December"; break;
		}
		
		return d.getMonth() + " " + d.getDate();
	}
	render(){
		return (
			<div> 
				<input id="checkBox" type="checkbox" onChange = {this.selectMonday} id = "mon"/> Monday {this.getDate(1)}
				<input id="checkBox" type="checkbox" onChange= {this.selectTuesday} id = "tues"/> Tuesday {this.getDate(2)}
				<input id="checkBox" type="checkbox" onChange = {this.selectWednesday} id = "wed"/> Wednesday {this.getDate(3)}
				<input id="checkBox" type="checkbox" onChange = {this.selectThursday} id = "thurs"/> Thursday {this.getDate(4)}
				<input id="checkBox" type="checkbox" onChange = {this.selectFriday} id = "fri"/> Friday {this.getDate(5)}
				<input id="checkBox" type="checkbox" onChange = {this.selectSaturday} id = "sat"/> Saturday {this.getDate(6)}
				<input id="checkBox" type="checkbox" onChange = {this.selectSunday} id = "sun"/> Sunday {this.getDate(0)}
			</div>
		);
	}
}

export default Days;