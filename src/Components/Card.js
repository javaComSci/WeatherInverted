import React from 'react';

export default class Card extends React.Component{
	constructor(props){
		super(props);
		this.store = this.props.store;
	}

	showInfo(){
		console.log("INSIDE SHOW INFO");
		console.log(this.props.store.getState());
		console.log("MON CHECKED IS " + this.props.store.getState().monChecked);
		switch(this.props.info){
			case "monday": return this.store.getState().monday;
			case "tuesday": return this.store.getState().tuesday;
			case "wednesday": return this.store.getState().wednesday;
			case "thursday": return this.store.getState().thursday;
			case "friday": return this.store.getState().friday;
			case "saturday": return this.store.getState().saturday;
			case "sunday": return this.store.getState().sunday;
		}
	}

	render(){
		return (
			<div> 
				LOW: {this.showInfo()[0]}
				<br />
				HIGH: {this.showInfo()[1]}
			</div>
		);
	}
}

