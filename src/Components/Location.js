import React, { Component } from 'react';
import { chooseLocation } from '../Actions/index';

export default class Location extends Component {
	constructor(props){
		super(props);
	}

	disabledStyle = {
		display: 'none',
	};

	optionLocationDispatch = (e) => {
		this.props.store.dispatch(chooseLocation(e.target.value));
	}

	render(){
		return (<div>
			Choose location interested: <select id = "searchLoc" onChange = {this.optionLocationDispatch}>
										  <option selected disabled hidden style={this.disabledStyle}> </option>
										  <option value="northeast">Northeast</option>
										  <option value="midwest">Midwest</option>
										  <option value="west">West</option>
										  <option value="south">South</option>
			</select>
		</div>);
	}
}