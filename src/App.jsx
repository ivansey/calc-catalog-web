import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

const AppPage = () => {
	return <div>
		<Header/>
		<Outlet/>
	</div>
};

export default AppPage;
