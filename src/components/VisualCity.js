import React from "react";
import ReactDOM from "react-dom";
import { City } from '../store';

const VisualCity = () => {
	const cityState = React.useContext(City.State);
	const cityDispatch = React.useContext(City.Dispatch);

	return (
		<h1 onClick={() => cityDispatch({ type: 'switch'})}>{cityState.greeting} World</h1>
	);
}

export default VisualCity;