import React from "react";

const Text = ({children, noBorderChild = false}) => {
	return <div className={`card-item text ${noBorderChild ? "no-border-child" : null}`}>
		{children}
	</div>
};

export default Text;
