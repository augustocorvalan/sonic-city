import React from "react";
import ReactDOM from "react-dom";

class SonicCity extends React.Component {
	render() {
		return (
			<h1>Hello</h1>
			)
	}
}

let App = document.getElementById("app");

ReactDOM.render(<SonicCity />, App);