import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store';

const root = document.querySelector('#root');
ReactDOM.render(<Provider store = {store}><App /></Provider>, root );

