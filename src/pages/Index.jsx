import React from "react";
import { useNavigate } from "react-router-dom";
import { useChangeTitle } from "../hooks/userSetting.js"; 
import { Card, Link } from "../components/Index.jsx";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	useChangeTitle("Calc Catalog Web");

	return <div className="page">
		<div className="content">
			<Card>
				<Link onClick={() => navigate("/calc/finance")}>{t("finance")}</Link>
				<Link>{t("physics")}</Link>
				<Link>{t("computerScience")}</Link>
			</Card>
			<Card>
				<Link onClick={() => navigate("/setting")}>{t("setting")}</Link>
				<Link onClick={() => navigate("/about")}>{t("aboutApp")}</Link>
			</Card>
		</div>
	</div>
};

export default IndexPage;
