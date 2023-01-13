import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { useSelector } from "react-redux";

import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import load from "./locale/load.js";

const AppPage = () => {
	i18n
		.use(initReactI18next)
		.init({
			resources: {
				"ru-RU": {
					translation: load("ru-RU"),
				},
				"en-US": {
					translation: load("en-US"),
				},
			},
			lng: useSelector(state => state.userSetting.lang),
			fallbackLng: "ru-RU",

			interpolation: {
				escapeValue: false,
			},
		});


	return <div>
		<I18nextProvider i18n={i18n}>
			<Header/>
			<Outlet/>
		</I18nextProvider>
	</div>
};

export default AppPage;
