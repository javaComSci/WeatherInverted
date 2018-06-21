import React from 'react';
import Days from './Days';
import Card from './Card';

class AllCards extends React.Component{
	constructor(props){
		super(props);
		this.store = this.props.store;
	}

	funcy() {
      console.log("FUNCY");
      console.log(this.props.store.getState());
      console.log(this.props.store.getState().monChecked);
      if(this.props.store.getState().monChecked ){
      	console.log("CHECKED MODN")
      	return 4;
      }
      return 1;
    }

	render(){
		let getMonday;
		if(this.props.store.getState().monChecked){
			console.log("GETTING MON INFO");
			getMonday = <Card info = "Monday" store = {this.props.store}/>
		}

		let getTuesday;
		if(this.props.store.getState().tuesChecked){
			console.log("GETTING TUES INFO");
			getTuesday = <Card info = "Tuesday" store = {this.props.store}/>
		}

		let getWednesday;
		if(this.props.store.getState().wedChecked){
			console.log("GETTING WED INFO");
			getWednesday = <Card info = "Wednesday" store = {this.props.store}/>
		}

		let getThursday;
		if(this.props.store.getState().thursChecked){
			console.log("GETTING THURS INFO");
			getThursday = <Card info = "Thursday" store = {this.props.store}/>
		}

		let getFriday;
		if(this.props.store.getState().friChecked){
			console.log("GETTING FRI INFO");
			getFriday = <Card info = "Friday" store = {this.props.store}/>
		}

		let getSaturday;
		if(this.props.store.getState().satChecked){
			console.log("GETTING SAT INFO");
			getSaturday = <Card info = "Saturday" store = {this.props.store}/>
		}

		let getSunday;
		if(this.props.store.getState().sunChecked){
			console.log("GETTING SUN INFO");
			getSunday = <Card info = "sunday" store = {this.props.store}/>
		}


		return (
			<div>Does it work?
				{getMonday}
				{getTuesday}
				{getWednesday}
				{getThursday}
				{getFriday}
				{getSaturday}
				{getSunday}
				After get cards
			</div>
		);
	}
}

export default AllCards;