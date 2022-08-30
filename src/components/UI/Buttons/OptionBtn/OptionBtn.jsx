import React from "react";
import "./OptionBtn.css";

const OptionBtn = (props) => {
	return (
		<button
			className="optionCounterBtn"
			onClick={props.clicked}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

export default OptionBtn;
