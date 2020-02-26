import React from "react";
import ReactDOM from "react-dom";
import { Store } from './store';
// Components
import VisualCity from './components/VisualCity';

const SonicCity = () => {
	return (
		<Store>
			<VisualCity />
		</Store>
	)
}

let App = document.getElementById("app");

ReactDOM.render(<SonicCity />, App);