import React from "react";
import { useLocation } from "react-router-dom";
import { useChangeTitle, useCurrency } from "../../../../hooks/userSetting.js";
import { Card, Text } from "../../../../components/Index.jsx";

const CreditMortgageListPays = () => {
	const { state } = useLocation();
	const { arrayPays } = state;
	const currencyFormat = useCurrency();
	useChangeTitle("List Pays");

	return <div className="page">
		<div className="content">
			{
				arrayPays.map((pay, i) => {
					return <Card key={i}>
						<Text>{pay.month} месяц</Text>
						<Text noBorderChild>Платеж:</Text>
						<Text>{currencyFormat(pay.monthlyPayment)}</Text>
						<Text noBorderChild>Основная/кредитная часть</Text>
						<Text>{currencyFormat(pay.primary)} / {pay.rate <= 0 ? currencyFormat(0) : currencyFormat(pay.rate)}</Text>
						<Text noBorderChild>Остаток:</Text>
						<Text>{pay.sumAll <= 0 ? currencyFormat(0) : currencyFormat(pay.sumAll)}</Text>
					</Card>
				})
			}			
		</div>
	</div>
};

export default CreditMortgageListPays;
