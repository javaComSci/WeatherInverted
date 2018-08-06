import React, { Component } from 'react';
import AllCards from './AllCards';

export default class TotalCards extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let place1;
		let place2;
		let place3;
		let place4;
		let place5;
		if(this.props.store.getState().data){
			if(this.props.store.getState().data.Place1){
				place1 = <AllCards store = {this.props.store} place = "Place1" data = {this.props.store.getState().data.Place1}/>
			}
			if(this.props.store.getState().data.Place2){
				place2 = <AllCards store = {this.props.store} place = "Place2" data = {this.props.store.getState().data.Place2}/>
			}
			if(this.props.store.getState().data.Place3){
				place3 = <AllCards store = {this.props.store} place = "Place3" data = {this.props.store.getState().data.Place3}/>
			}
			if(this.props.store.getState().data.Place4){
				place4 = <AllCards store = {this.props.store} place = "Place4" data = {this.props.store.getState().data.Place4}/>
			}
			if(this.props.store.getState().data.Place5){
				place5 = <AllCards store = {this.props.store} place = "Place5" data = {this.props.store.getState().data.Place5}/>
			}
		}
		return <div>
			{place1}
			{place2}
			{place3}
			{place4}
			{place5}
		</div>
	}
}