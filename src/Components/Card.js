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

		if(pic == "clouds"){
			display = <div class="card">
			  <img class ="singleCard" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Cloud%2C_blue_background.svg" alt="cloudy"/>
			  <div class="container">
			    <h4><b>High: {high}</b></h4> 
			    <h4><b>Low: {low}</b></h4> 
			  </div>
			</div>
		}else if(pic == "rain"){
			display = <div class="card">
			  <img class ="singleCard" src="https://www.publicdomainpictures.net/en/view-image.php?image=71534&picture=rain-cloud-clipart" alt="rain"/>
			  <div class="container">
			    <h4><b>High: {high}</b></h4> 
			    <h4><b>Low: {low}</b></h4> 
			  </div>
			</div>
		}else if(pic == "clear"){
			display = <div class="card">
			  <img class ="singleCard" src="http://www.publicdomainfiles.com/show_file.php?id=13920112214859" alt="clear"/>
			  <div class="container">
			    <h4><b>High: {high}</b></h4> 
			    <h4><b>Low: {low}</b></h4> 
			  </div>
			</div>
		}else if(pic == "sunny"){
			display = <div class="card">
			  <img class ="singleCard" src="https://pixabay.com/en/sunshine-sun-heat-warmth-weather-151806/" alt="sunny"/>
			  <div class="container">
			    <h4><b>High: {high}</b></h4> 
			    <h4><b>Low: {low}</b></h4> 
			  </div>
			</div>
		}else if(pic == "snow"){
			display = <div class="card">
			  <img class ="singleCard" src="https://pixabay.com/en/cloudy-weather-snow-snowing-37012/" alt="snow"/>
			  <div class="container">
			    <h4><b>High: {high}</b></h4> 
			    <h4><b>Low: {low}</b></h4> 
			  </div>
			</div>
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

