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

import CalcFinancePage from "./pages/Calc/Finance/Index.jsx";
import CreditMortgagePage from "./pages/Calc/Finance/CreditMortgage/CreditMortgage.jsx";
import CreditMortgageListPayPage from "./pages/Calc/Finance/CreditMortgage/CreditMortgageListPays.jsx";

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
