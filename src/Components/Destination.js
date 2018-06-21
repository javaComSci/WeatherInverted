import React from 'react';

export default class Destination extends React.Component{
	constructor(props){
		super(props);
		this.store = this.props.store;
	}
	

	render(){
		return (
			<div>
			Choose destination type: <select>
										  <option value="beach">Beach</option>
										  <option value="forest">Forest</option>
										  <option value="mall">Mall</option>
										  <option value="museum">Museum</option>
									</select>
			</div>
		);
	}
} 