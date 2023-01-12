import React from "react";
import Card from "./Card.jsx";
import Text from "./Text.jsx";
import Link from "./Link.jsx";

const Value = ({title, value, onClick = () => {}}) => {
	return <Card onClick={onClick}>
		<Link noBorderChild onClick={onClick}>{title}</Link>
		<Text onClick={onClick}>{value}</Text>
	</Card>
};

export default Value;
