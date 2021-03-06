import React, { Component } from 'react';
import { chooseLocation, putData } from '../Actions/index';
import './DestinationLocation.css';
import { getData } from '../Reducers/index';

export default class Location extends Component {
	constructor(props){
		super(props);
	}

	disabledStyle = {
		display: 'none',
	};

	optionLocationDispatch = (e) => {
		let prevLocation = this.props.store.getState().location;
		this.props.store.dispatch(chooseLocation(e.target.value));
		console.log("dispatch option location");
		console.log(prevLocation);
		console.log(e.target.value);
		if(this.props.store.getState().destination && prevLocation != e.target.value){
			console.log("destination changed")
			getData(e.target.value, this.props.store.getState().destination).then(response => this.props.store.dispatch(putData(response)));
		}
	}

	render(){
		return (<div>
			<h3 className="headerStyle">Choose location interested: </h3><select id="searchLoc" onChange={this.optionLocationDispatch} className="dropdownStyle">
										  <option selected disabled hidden style={this.disabledStyle}> </option>
										  <option value="northeast">Northeast</option>
										  <option value="midwest">Midwest</option>
										  <option value="west">West</option>
										  <option value="south">South</option>
			</select>
		</div>);
	}
}