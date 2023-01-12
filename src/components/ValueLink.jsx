import React from "react";
import Card from "./Card.jsx";
import Text from "./Text.jsx";
import Link from "./Link.jsx";

const Value = ({title, value}) => {
	return <Card>
		<Link noBorderChild>{title}</Link>
		<Text>{value}</Text>
	</Card>
};

export default Value;
