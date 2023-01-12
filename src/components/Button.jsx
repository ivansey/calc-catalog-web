import React from "react";

const ButtonMini = ({type, children, onClick}) => {
	return <button className={`btn btn-mini ${type === "transparent" ? "btn-transparent" : null}`} onClick={onClick}>{children}</button>
};

export {
	ButtonMini,
};
