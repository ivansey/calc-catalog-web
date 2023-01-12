import React from "react";

const Link = ({children, onClick = {}}) => {
	return <button className="card-item button" onClick={onClick}>{children}</button>
};

export default Link;
