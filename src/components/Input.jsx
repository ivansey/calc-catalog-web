import React from "react";
import Card from "./Card.jsx";
import Text from "./Text.jsx";

const Input = ({title = "", id = "", placeholder = "", defaultValue = "", onChange = () => {}, type = "text", value = "", inputmode = ""}) => {
	return <Card>
		<Text noBorderChild><label htmlFor={id}>{title}</label></Text>
		<input className="card-item input" id={id} type={type} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} inputmode={inputmode}/>
	</Card>
};

export default Input;
