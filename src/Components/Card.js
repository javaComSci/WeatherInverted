import React, { Component } from 'react';
import './Card.css';

// ALL IMAGES USED HAVE BEEN OBTAINED FROM THE PUBLIC DOMAIN LABELED FOR REUSE

export default class Card extends Component {
	constructor(props){
		super(props);
	}
	render(){
		let weather = this.props.data.Weather;
		let desiredWeather = this.props.store.getState().weather;
		let shouldDisplay = false;

		if(weather == 'Sunny' && desiredWeather.Sunny) {
			shouldDisplay = true;
		} else if (weather == 'Rain' && desiredWeather.Rain) {
			shouldDisplay = true;
		} else if (weather == 'Clear' && desiredWeather.Clear) {
			shouldDisplay = true;
		} else if (weather == 'Clouds' && desiredWeather.Clouds) {
			shouldDisplay = true;
		} else if (weather == 'Snow' && desiredWeather.Snow) {
			shouldDisplay = true;
		} else if (weather == 'Drizzle' && desiredWeather.Drizzle) {
			shouldDisplay = true;
		}
		if(!(desiredWeather.Sunny || desiredWeather.Rain || desiredWeather.Clear || desiredWeather.Clouds || desiredWeather.Snow || desiredWeather.Drizzle)){
			shouldDisplay = true;
		}

		if (shouldDisplay){
			let url;
			let alter;
			let high = this.props.data.Max;
			let low = this.props.data.Min;
			switch(weather){
				case "Clouds": url = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Cloud%2C_blue_background.svg"; alter = "cloudy"; break;
				case "Rain": url = "https://upload.wikimedia.org/wikipedia/commons/2/25/Rain01.svg"; alter = "rain"; break;
				case "Clear": url = "https://upload.wikimedia.org/wikipedia/commons/8/87/Sun02.svg"; alter = "clear"; break;
				case "Sunny": url = "https://upload.wikimedia.org/wikipedia/commons/0/02/Sun01.svg"; alter = "sunny"; break;
				case "Drizzle": url = "https://upload.wikimedia.org/wikipedia/commons/2/25/Rain01.svg"; alter = "drizzle"; break;
				case "Snow": url = "https://upload.wikimedia.org/wikipedia/commons/5/5d/Snowstorm.svg"; alter = "snow"; break;
			}
			return (<div className="card">
					  <img className ="singleCard" src={url} alt = {alter}/>
					  <div className="container">
					  	<h4><b>{this.props.info}</b></h4>
					    <h4>High: {high}</h4> 
					    <h4>Low: {low}</h4> 
					  </div>
					</div>);
		}
		return null;
	}
}