# react-growsumojs
Small component to implement GrowSumoJS into your react application

GrowSumoJS is javascript snippet that reads browser cookies and sends signup information back to your GrowSumo account.

## Installation
```zsh
npm i react-growsumojs
```
or
```zsh
yarn add react-growsumojs
```
## Use/Example
Initialize the growsumojs into the page you gonna use it, passing your appkey.
```zsh
import React, { Component } from 'react';
import GrowSumo from 'react-growsumojs';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	componentDidMount() {
		GrowSumo.initialize(your_growsumo_appkey);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
```
***react-growsumojs exposes other 2 methods***

***setUserInfo:*** Used to set the user data, this method expect 1 object with 3 properties.

1 - name: Customer Name

2 - email: Customer Email

3 - customerKey:  Is a unique string that identifies each customer you send to growsumo.

```zsh
const customerData = {
    name: 'Joe',
    email: 'joe@duhan.com',
    customerKey: '123'
};

GrowSumo.setUserInfo(customerData);
```

***createSignup:*** Used to call the growsumojs createSignup.
```zsh
GrowSumo.createSignup();
```

### GrowSumoJS - Docs
[https://docs.partnerstack.com/docs/growsumojs](https://docs.partnerstack.com/docs/growsumojs)