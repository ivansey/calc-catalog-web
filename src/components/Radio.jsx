import React from "react";

const Radio = ({title, value, onChange, checked}) => {
	return <div className="card-item radio" onChange={onChange}>
		<label htmlFor={value}>{title}</label>
		<input type="radio" id={value} value={value} checked={checked} onChange={onChange}/>
	</div>
};

export default Radio;
