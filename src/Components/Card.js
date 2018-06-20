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
		let information = this.showInfo();
		let low = information[0];
		let high = information[1];
		let pic = information[2];
		let display;
		if(pic == "cloudy"){
			display = 
			<img 
			src = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cloud%2C_blue_background.svg"
			style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; width: 40%; border-radius: 5px;"
			alt ="Clouds"/>
		}


		return (
			<div> 
				LOW: {low}
				<br />
				HIGH: {high}
				PIC: {pic}
				{display}
			</div>
		);
	}
}

