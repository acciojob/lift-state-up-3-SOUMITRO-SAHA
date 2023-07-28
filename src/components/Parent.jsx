import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [selectedOption, setSelectedOption] = useState();
	return (
		<div className='parent'>
			<h1>Parent Component</h1>
			<Child num={1} setSelectedOption={setSelectedOption} />
			<Child num={2} setSelectedOption={setSelectedOption} />
			<br />
			<div>
				Selected Option:
				{selectedOption && <span>Option{selectedOption}</span>}
			</div>
		</div>
	);
};

export default Parent;
