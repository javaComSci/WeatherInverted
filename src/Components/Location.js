import React from 'react';
import { chooseLocation } from '../Actions/index.js'

export default class Location extends React.Component {
	constructor(props){
		super(props);
		this.store = this.props.store;
	}


	optionLocationDispatch = () => {
		let value = document.getElementById("searchLoc").value;
		console.log("DISPATCHING " + value);
		this.store.dispatch(chooseLocation(value));
	}

	render() {
		const disStyle = {
			display: 'none'
		};
		return(
			<div> 
				Choose location interested: <select id = "searchLoc" onChange = {this.optionLocationDispatch}>
											  <option selected disabled hidden style={disStyle}> </option>
											  <option value="northeast">Northeast</option>
											  <option value="midwest">Midwest</option>
											  <option value="west">West</option>
											  <option value="south">South</option>
				</select>
		</div>
		);
	}
}