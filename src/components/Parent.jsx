import React, { useState } from "react";

const Parent = () => {
	const [selectedOption, setSelectedOption] = useState();
	return (
		<div className='parent'>
			<h1>Parent Component</h1>
			<div>
				<h2>Child Component 1</h2>
				<button onClick={() => setSelectedOption(1)}>Option 1</button>
			</div>
			<div>
				<h2>Child Component 2</h2>
				<button onClick={() => setSelectedOption(2)}>Option 2</button>
			</div>
			<br />
			<p>
				Selected Option:{" "}
				{selectedOption && <span>Option {selectedOption}</span>}
			</p>
		</div>
	);
};

export default Parent;
