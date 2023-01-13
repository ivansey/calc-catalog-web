import React from "react";
import { Value } from "../components/Index.jsx";
import { useLocation } from "react-router-dom";
import { useChangeTitle } from "../hooks/userSetting.js";
import { useTranslation } from "react-i18next";

const AboutModulePage = () => {
	const { t } = useTranslation();
	const { state } = useLocation();
	const { name, version, author } = state;
	useChangeTitle(t("aboutModule/title"));

	return <div className="page">
		<div className="content">
			<Value title={t("nameModule") + ":"} value={t(name)}/>
			<Value title={t("version") + ":"} value={version}/>
			<Value title={t("author") + ":"} value={author}/>
		</div>
	</div>
};

export default AboutModulePage;
