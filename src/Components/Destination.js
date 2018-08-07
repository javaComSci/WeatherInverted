import React, { Component } from 'react';
import { chooseDestination } from '../Actions/index';
import './DestinationLocation.css';

export default class Destination extends Component {
	constructor(props){
		super(props);
	}

	disabledStyle = {
		display: 'none',
	};


	destinationOptionHandler = (e) => {
		this.props.store.dispatch(chooseDestination(e.target.value));
	}
	render(){
		return (<div>
			<h3 className="headerStyle">Choose destination type: </h3><select onChange={this.destinationOptionHandler} className="dropdownStyle">
										<option selected disabled hidden style={this.disabledStyle}> </option>
										  <option value="beach">Beach</option>
										  <option value="forest">Forest</option>
										  <option value="park">Park</option>
										  <option value="building">Building</option>
									</select>
		</div>);
	}
}