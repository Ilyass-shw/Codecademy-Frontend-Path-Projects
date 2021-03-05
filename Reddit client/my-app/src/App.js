import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavBar from "./app/NavBar";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		// <Router>
		<NavBar />
		// <div className="App">
		// 	<Switch>
		// 		<Route exact path="/" />
		// 	</Switch>
		// </div>
		// </Router>
	);
}

export default App;
