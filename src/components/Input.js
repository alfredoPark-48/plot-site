import React, { useState } from "react";
import Plot from "../apis/Plot";

const Input = () => {
	const [equation, setEquation] = useState("0");

	const getValue = (event) => {
		setEquation(event.target.value);
	};

	return (
		<form
			className="ui form"
			onSubmit={(event) => {
				event.preventDefault();
				Plot(equation, "#result");
			}}
		>
			<label>f(x) = </label>
			<input
				type="text"
				className="ui input"
				placeholder="Ingresa tu funcion"
				onChange={getValue}
			/>
			<button type="submit" className="ui button">
				Ingresar
			</button>
		</form>
	);
};

export default Input;
