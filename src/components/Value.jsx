import React from "react";
import Card from "./Card.jsx";
import Text from "./Text.jsx";

const Value = ({title, value}) => {
	return <Card>
		<Text noBorderChild>{title}</Text>
		<Text>{value}</Text>
	</Card>
};

export default Value;
