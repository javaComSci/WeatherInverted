import React, { Component } from 'react';
import Card from './Card';

export default class AllCards extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let getAll;
		let allDays = this.props.store.getState().days;

		if(allDays.Monday || allDays.Tuesday || allDays.Wednesday || allDays.Friday || allDays.Saturday || allDays.Sunday){
			getAll = false;
		}else{
			getAll = true;
		}

		let getMonday;
		if(allDays.Monday || getAll){
			getMonday = <Card getAll = {getAll} place = {this.props.place} info = "Monday" store = {this.props.store} data = {this.props.data.Monday}/>;
		}

		let getTuesday;
		if(allDays.Tuesday || getAll){
			getTuesday = <Card getAll = {getAll}place = {this.props.place} info = "Tuesday" store = {this.props.store} data = {this.props.data.Tuesday}/>
		}

		let getWednesday;
		if(allDays.Wednesday || getAll){
			getWednesday = <Card getAll = {getAll} place = {this.props.place} info = "Wednesday" store = {this.props.store} data = {this.props.data.Wednesday}/>
		}

		let getThursday;
		if(allDays.Thursday || getAll){
			getThursday = <Card getAll = {getAll} place = {this.props.place} info = "Thursday" store = {this.props.store} data = {this.props.data.Thursday}/>
		}

		let getFriday;
		if(allDays.Friday || getAll){
			getFriday = <Card getAll = {getAll} place = {this.props.place} info = "Friday" store = {this.props.store} data = {this.props.data.Friday}/>
		}

		let getSaturday;
		if(allDays.Saturday || getAll){
			getSaturday = <Card getAll = {getAll} place = {this.props.place} info = "Saturday" store = {this.props.store} data = {this.props.data.Saturday}/>
		}

		let getSunday;
		if(allDays.Sunday || getAll){
			getSunday = <Card getAll = {getAll} place = {this.props.place} info = "Sunday" store = {this.props.store} data = {this.props.data.Sunday}/>
		}

		return (
			<div>
				<h3> {this.props.place} </h3>
				{getMonday}
				{getTuesday}
				{getWednesday}
				{getThursday}
				{getFriday}
				{getSaturday}
				{getSunday}
			</div>
		);
	}
}