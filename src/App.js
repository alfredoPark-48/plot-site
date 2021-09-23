import React from "react";
import Input from "./components/Input";

const App = () => {
	return (
		<div className="ui aligned basic segment">
			<Input />
			<div className="ui horizontal divider">{}</div>
			<div className="ui section divider"></div>
			<div className="ui center aligned segment" id="result"></div>
		</div>
	);
};

export default App;
