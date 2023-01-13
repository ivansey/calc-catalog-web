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
