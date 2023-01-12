import React from "react";
import { Value } from "../components/Index.jsx";
import { useLocation } from "react-router-dom";
import { useChangeTitle } from "../hooks/userSetting.js";

const AboutModulePage = () => {
	const { state } = useLocation();
	const { name, version, author } = state;
	useChangeTitle("Информация о модуле");

	return <div className="page">
		<div className="content">
			<Value title="Название модуля" value={name}/>
			<Value title="Версия модуля" value={version}/>
			<Value title="Автор модуля" value={author}/>
		</div>
	</div>
};

export default AboutModulePage;
