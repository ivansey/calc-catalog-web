import React from "react";
import { useNavigate } from "react-router-dom";
import { useChangeTitle } from "../../../hooks/userSetting.js";
import { Card, Link } from "../../../components/Index.jsx";

const CalcFinancePage = () => {
	const navigate = useNavigate();
	useChangeTitle("Финансы");

	return <div className="page">
		<div className="content">
			<Card>
				<Link onClick={() => navigate("/calc/finance/creditMorgage")}>Расчет</Link>
				<Link>Расчет доходности</Link>
				<Link>Расчет инфляции</Link>
			</Card>
		</div>
	</div>
};

export default CalcFinancePage;
