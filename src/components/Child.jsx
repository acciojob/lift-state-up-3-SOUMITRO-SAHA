import React from "react";

const Child = ({ num, setSelectedOption }) => {
	return (
		<div>
			<h2>Child Component {num}</h2>
			<button onClick={() => setSelectedOption(num)}>Option {num}</button>
		</div>
	);
};

export default Child;
