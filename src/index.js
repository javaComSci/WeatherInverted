import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import Reducer from './Reducers/index';


let store = createStore(Reducer);

function render(){
	ReactDOM.render(
		<div className = "container">
			<App store = {store}/>
		</div>,
		document.getElementById("root"));
}

store.subscribe(() => {
	console.log("STATE CHANGE");
	console.log(store.getState());
});

store.subscribe(render); //must always call back
render();