import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { Component } from 'react';

import './App.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


class App extends Component {
	constructor() {
		super();

	this.state = {
		monsters: [
		{
			name: 'Frankenstein'
		},
		{
			name: 'Dracula'
		},
		{
			name: 'Zombie'
		}
	]
	};
}

render() {
	return (
		<div className='App'>
		{
			this.state.monsters.map(monster => 
		</div>

		)
}