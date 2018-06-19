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
			getMonday = <Card info = "monday" store = {this.props.store}/>
		}

		let getTuesday;
		if(this.props.store.getState().tuesChecked){
			console.log("GETTING TUES INFO");
			getTuesday = <Card info = "tuesday" store = {this.props.store}/>
		}

		let getWednesday;
		if(this.props.store.getState().wedChecked){
			console.log("GETTING WED INFO");
			getWednesday = <Card info = "wednesday" store = {this.props.store}/>
		}

		let getThursday;
		if(this.props.store.getState().thursChecked){
			console.log("GETTING THURS INFO");
			getThursday = <Card info = "thursday" store = {this.props.store}/>
		}

		let getFriday;
		if(this.props.store.getState().friChecked){
			console.log("GETTING FRI INFO");
			getFriday = <Card info = "friday" store = {this.props.store}/>
		}

		let getSaturday;
		if(this.props.store.getState().satChecked){
			console.log("GETTING SAT INFO");
			getSaturday = <Card info = "saturday" store = {this.props.store}/>
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