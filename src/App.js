import React, { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";

const App = () => {
	const [equation, setEquation] = useState("");

	const getEquation = (equationInput) => {
		console.log(equation);
		setEquation(equationInput);
	};

	return (
		<div className="ui aligned basic segment">
			<Input getEquation={getEquation} />
			<div className="ui horizontal divider">{}</div>
			<div className="ui section divider"></div>
			{/* <Result renderedResult={equation} /> */}
		</div>
	);
};

export default App;
