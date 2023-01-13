import React from "react";
import { useLocation } from "react-router-dom";
import { useChangeTitle, useCurrency } from "../../../../hooks/userSetting.js";
import { Card, Text } from "../../../../components/Index.jsx";
import { useTranslation } from "react-i18next";

const CreditMortgageListPays = () => {
	const { t } = useTranslation();
	const { state } = useLocation();
	const { arrayPays } = state;
	const currencyFormat = useCurrency();
	useChangeTitle(t("listPays"));

	return <div className="page">
		<div className="content">
			{
				arrayPays.map((pay, i) => {
					return <Card key={i}>
						<Text>{pay.month} {t("month")}</Text>
						<Text noBorderChild>{t("monthlyPayment")}:</Text>
						<Text>{currencyFormat(pay.monthlyPayment)}</Text>
						<Text noBorderChild>{t("mainCreditPart")}:</Text>
						<Text>{currencyFormat(pay.primary)} / {pay.rate <= 0 ? currencyFormat(0) : currencyFormat(pay.rate)}</Text>
						<Text noBorderChild>{t("remainder")}:</Text>
						<Text>{pay.sumAll <= 0 ? currencyFormat(0) : currencyFormat(pay.sumAll)}</Text>
					</Card>
				})
			}			
		</div>
	</div>
};

export default CreditMortgageListPays;
