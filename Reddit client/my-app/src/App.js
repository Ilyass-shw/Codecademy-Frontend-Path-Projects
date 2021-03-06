import React from "react";
import NavBar from "./app/NavBar";
import Header from './features/Header/Header.js'
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<div  classeName='App-container'>
		<NavBar />
		<Header/>
		</div>
	);
}

export default App;
