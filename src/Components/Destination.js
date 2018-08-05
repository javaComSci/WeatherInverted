import React, { Component } from 'react';
import { chooseDestination } from '../Actions/index';

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
			Choose destination type: <select id = "search" onChange = {this.destinationOptionHandler}>
										<option selected disabled hidden style={this.disabledStyle}> </option>
										  <option value="beach">Beach</option>
										  <option value="forest">Forest</option>
										  <option value="mall">Mall</option>
										  <option value="museum">Museum</option>
									</select>
			<br/>
		</div>);
	}
}