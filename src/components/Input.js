import React, { useState } from "react";

const Input = ({ getEquation }) => {
	const [equation, setEquation] = useState("");

	const getValue = (event) => {
		setEquation(event.target.value);
	};

	return (
		<div className="ui form">
			<div className="field">
				<div className="ui action input">
					<label>f(x) = </label>
					<input
						type="text"
						className="ui input"
						placeholder="Ingresa tu funcion"
						onChange={getValue}
						onSubmit={getEquation(equation)}
						value={equation}
					/>
					<button className="ui button">Ingresar</button>
				</div>
			</div>
		</div>
	);
};

export default Input;
