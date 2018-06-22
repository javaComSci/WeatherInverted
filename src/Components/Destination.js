import React from 'react';
import { chooseBeach, chooseForest, chooseMall, chooseMuseum } from '../Actions/index.js'

export default class Destination extends React.Component{
	constructor(props){
		super(props);
		this.store = this.props.store;
	}
	

	optionHandler = () => {
		let value = document.getElementById("search").value;
		switch(value){
			case "beach": this.store.dispatch(chooseBeach()); break;
			case "forest": this.store.dispatch(chooseForest()); break;
			case "mall": this.store.dispatch(chooseMall()); break;
			case "museum": this.store.dispatch(chooseMuseum()); break;
			default: this.store.dispatch(chooseBeach()); break;
		}
	}

	render(){
		return (
			<div>
			THE ALREADY CHOSEN IS: {this.store.getState().chosenDestination}
			Choose destination type: <select id = "search" onChange = {this.optionHandler}>
										  <option value="beach">Beach</option>
										  <option value="forest">Forest</option>
										  <option value="mall">Mall</option>
										  <option value="museum">Museum</option>
									</select>
			</div>
		);
	}
} 