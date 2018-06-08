import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import Reducer from './Reducers/index';

let store = createStore(Reducer);

ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
registerServiceWorker();

