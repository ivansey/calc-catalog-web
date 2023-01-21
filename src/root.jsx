/*
Copyright 2023 Ivan "IvanSEY" Panasyuk

This file is part of the Calc Catalog Web.

Calc Catalog Web is free software: you may redistribute it and/or modify it under 
the terms of the GNU General Public License as published by the 
Free Software Foundation;  either version 3 of the license, 
or (at your option) any later version.

Foobar is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;  
without even the implied warranty of MERCHANTABILITY or 
FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for details.

You should have received a copy of the GNU General Public License with this program.  
If not, see <https://www.gnu.org/licenses/>.
*/

import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";

import "./styles/index.scss";

import AppPage from "./App.jsx";
import IndexPage from "./pages/Index.jsx";
import AboutPage from "./pages/About.jsx";
import AboutModulePage from "./pages/AboutModule.jsx";
import LicenseFilePage from "./pages/LicenseFile.jsx";
import {
	UserSettingPage,
	UserSettingCurrencyPage,
	UserSettingFormatMoneyPage,
	UserSettingLangPage,
} from "./pages/UserSetting.jsx";

import CalcFinancePage from "./pages/Calc/Finance/Index.jsx";
import CreditMortgagePage from "./pages/Calc/Finance/CreditMortgage/CreditMortgage.jsx";
import CreditMortgageListPayPage from "./pages/Calc/Finance/CreditMortgage/CreditMortgageListPays.jsx";

import MetrologyPage from "./pages/Calc/Metrology/Index.jsx";
import MetrologyTransportPage from "./pages/Calc/Metrology/Transport/Index.jsx";
import CalculationFuelSpendingPage from "./pages/Calc/Metrology/Transport/CalculationFuelSpending/Index.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppPage/>,
		children: [
			{
				path: "",
				element: <IndexPage/>,
			},
			{
				path: "about/",
				element: <AboutPage/>,
			},
			{
				path: "about/module",
				element: <AboutModulePage/>,
			},
			{
				path: "license",
				element: <LicenseFilePage/>,
			},
			{
				path: "setting",
				element: <UserSettingPage/>,
			},
			{
				path: "setting/currency",
				element: <UserSettingCurrencyPage/>,
			},
			{
				path: "setting/formatMoney",
				element: <UserSettingFormatMoneyPage/>,
			},
			{
				path: "setting/lang",
				element: <UserSettingLangPage/>,
			},

			{
				path: "calc/finance",
				element: <CalcFinancePage/>,
			},
			{
				path: "calc/finance/creditMorgage",
				element: <CreditMortgagePage/>,
			},
			{
				path: "calc/finance/CreditMortgage/listPays",
				element: <CreditMortgageListPayPage/>,
			},

			{
				path: "calc/metrology",
				element: <MetrologyPage/>,
			},
			{
				path: "calc/metrology/transport",
				element: <MetrologyTransportPage/>,
			},
			{
				path: "calc/metrology/transport/calculationFuelSpending",
				element: <CalculationFuelSpendingPage/>,
			},
		],
	},
]);

const RootPage = () => {
	return <React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	</React.StrictMode>
};

export default RootPage;
