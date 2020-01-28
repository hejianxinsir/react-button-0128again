import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

export default class App extends React.Component {
	constructor(){
		super()
		this.state = {}
	}

	render(){
		return(
			<div className="wrapper">
				<Button value="点我啊" />
				<Button value="点呀" />
				<Button value="快点" />
			</div>
		)
	}	
}
