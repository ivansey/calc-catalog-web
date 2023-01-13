import React from "react";
import { Value, Card, Text } from "../components/Index.jsx";
import { useChangeTitle } from "../hooks/userSetting.js";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
	const { t } = useTranslation();
	useChangeTitle(t("aboutApp/title", { app: "Calc Catalog Web" }));

	return <div className="page">
		<div className="content">
			<Value title={t("version") + ":"} value="1.0.0a"/>
			<Value title={t("author") + ":"} value="IvanSEY"/>
			<Card>
				<Text>{t("technologiesUsed") + ":"}</Text>
				<Text>React (with hooks)</Text>
				<Text>Redux</Text>
			</Card>
		</div>
	</div>
};

export default AboutPage;
