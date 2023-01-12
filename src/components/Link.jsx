import React from "react";

const Link = ({children, onClick = () => {}, noBorderChild = false}) => {
	return <button className={`card-item button ${noBorderChild ? "no-border-child" : null}`} onClick={onClick}>{children}</button>
};

export default Link;
