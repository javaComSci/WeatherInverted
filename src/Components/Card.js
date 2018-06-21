import React from 'react';
import './Card.css';

// ALL IMAGES USED HAVE BEEN OBTAINED FROM THE PUBLIC DOMAIN LABELED FOR REUSE


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
			case "Monday": return this.store.getState().monday;
			case "Tuesday": return this.store.getState().tuesday;
			case "Wednesday": return this.store.getState().wednesday;
			case "Thursday": return this.store.getState().thursday;
			case "Friday": return this.store.getState().friday;
			case "Saturday": return this.store.getState().saturday;
			case "Sunday": return this.store.getState().sunday;
		}
	}

	render(){
		let information = this.showInfo();
		let low = information[0];
		let high = information[1];
		let pic = information[2];
		let display;

		console.log("INSIDE CARD RENDER\n\n\n " + information + "\n\n\n" + this.store.getState().thursday);

		let url;
		let alter;
		switch(pic){
			case "clouds": url = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cloud%2C_blue_background.svg"; alter = "cloudy"; break;
			case "rain": url = "https://upload.wikimedia.org/wikipedia/commons/2/25/Rain01.svg"; alter = "rain"; break;
			case "clear": url = "https://upload.wikimedia.org/wikipedia/commons/8/87/Sun02.svg"; alter = "clear"; break;
			case "sunny": url = "https://upload.wikimedia.org/wikipedia/commons/0/02/Sun01.svg"; alter = "sunny"; break;
			case "snow": url = "https://upload.wikimedia.org/wikipedia/commons/5/5d/Snowstorm.svg"; alter = "snow"; break;
		}
		display = <div className="card">
			  <img className ="singleCard" src={url} alt = {alter}/>
			  <div className="container">
			  	<h4><b>{this.props.info}</b></h4>
			    <h4>High: {high}</h4> 
			    <h4>Low: {low}</h4> 
			  </div>
			</div>
	
		return (
			<div>
				{display}
			</div>
		);
	}
}

