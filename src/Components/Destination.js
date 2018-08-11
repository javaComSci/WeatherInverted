import React, { Component } from 'react';
import { chooseDestination, putData } from '../Actions/index';
import './DestinationLocation.css';
import { getData } from '../Reducers/index';

export default class Destination extends Component {
	constructor(props){
		super(props);
	}

	disabledStyle = {
		display: 'none',
	};


	destinationOptionHandler = (e) => {
		let prevDestination = this.props.store.getState().destination;
		this.props.store.dispatch(chooseDestination(e.target.value));
		if(this.props.store.getState().location && this.prevDestination != e.target.value){
			getData(this.props.store.getState().location, e.target.value).then(response => {
				console.log(response);
				this.props.store.dispatch(putData(response));
			});
		}
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