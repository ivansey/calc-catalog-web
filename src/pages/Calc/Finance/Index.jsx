import React from "react";
import { useNavigate } from "react-router-dom";
import { useChangeTitle } from "../../../hooks/userSetting.js";
import { useTranslation } from "react-i18next";
import { Card, Link } from "../../../components/Index.jsx";

const CalcFinancePage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	useChangeTitle(t("finance"));

	return <div className="page">
		<div className="content">
			<Card>
				<Link onClick={() => navigate("/calc/finance/creditMorgage")}>{t("calculationCredits")}</Link>
				<Link>{t("calculationProfitbility")}</Link>
				<Link>{t("calculationInflation")}</Link>
			</Card>
		</div>
	</div>
};

export default CalcFinancePage;
