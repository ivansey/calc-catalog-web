import React from "react";
import { Value, Card, Text } from "../components/Index.jsx";
import { useChangeTitle } from "../hooks/userSetting.js";

const AboutPage = () => {
	useChangeTitle("Информация о Calc Catalog Web");

	return <div className="page">
		<div className="content">
			<Value title="Версия:" value="1.0.0a"/>
			<Value title="Автор:" value="IvanSEY"/>
			<Card>
				<Text>Используемые технологии:</Text>
				<Text>React (with hooks)</Text>
				<Text>Redux</Text>
			</Card>
		</div>
	</div>
};

export default AboutPage;
