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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useChangeTitle, useCurrency } from "../../../../hooks/userSetting.js";
import { Card, Text, Input, Value, Radio, Link } from "../../../../components/Index.jsx";
import format from "format-number";
import { useTranslation } from "react-i18next";

const MODULE_INFO = {
	name: "calculationCredits",
	version: "1.1.0",
	author: "IvanSEY",
};

const CreditMortgagePage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const currencyFormat = useCurrency();
	useChangeTitle(t(MODULE_INFO.name));

	const [type, setType] = useState("annuity");
	const [sum, setSum] = useState(0);
	const [monthlyRate, setMonthlyRate] = useState(0);
	const [months, setMonths] = useState(0);
	const [monthlyPayment, setMonthlyPayment] = useState(0);
	const [overpayment, setOverpayment] = useState(0);
	const [arrayPays, setArrayPays] = useState([]);

	useEffect(() => {
		calc();
	});

	const calc = () => {
		if (type === "annuity") {
			const rate = Math.pow((1 + (monthlyRate / 12 / 100)), months);
			setMonthlyPayment((sum*(monthlyRate/12/100)*rate/(rate-1)).toFixed(2));
			setOverpayment(((monthlyPayment*months)-sum).toFixed(2));
			if (!isNaN(parseFloat(monthlyPayment)) && isFinite(monthlyPayment)) {
				let array = [];
				let sumAll = sum.toFixed(2);
				let rate = sum * (monthlyRate / 12 / 100);
				let primary = monthlyPayment - rate;
				let sumRate = rate * months;
				let sumPrimary = primary * months;
				for (let i = 1; i <= months; i++) {
					sumAll = (sumAll - (monthlyPayment - (sumAll * (monthlyRate / 12 / 100)))).toFixed(2);
					rate = (sumAll * (monthlyRate / 12 / 100)).toFixed(2);
					primary = (monthlyPayment - rate).toFixed(2);
					array.push({
						month: i,
						monthlyPayment,
						sumAll: sumAll <= 0 ? 0 : sumAll,
						rate: rate <= 0 ? 0 : rate,
						primary,
						sumRate: sumRate,
						sumPrimary: sumPrimary,
					});
				}
				setArrayPays(array);
			}
		} else if (type === "differentiated") {
			let overpay = ((monthlyRate / 12 / 100).toFixed(4) * sum * (months + 1) / 2);
			setMonthlyPayment(0);
			if (!isNaN(parseFloat(sum) && isFinite(sum))) {
				let array = [];
				let pay = 0;
				let payRate = 0;
				let payPrimary = 0;
				let sumAll = (sum + overpay).toFixed(2);
				let sumRate = overpay;
				let sumPrimary = sum;
				for (let i = 1; i <= months; i++) {
					payPrimary = (sum / months).toFixed(2);
					sumPrimary = (sumPrimary - payPrimary).toFixed(2);
					payRate = ((sumPrimary * (monthlyRate / 100) * 30) / 365).toFixed(2);
					sumRate = (sumRate - payRate).toFixed(2);
					pay = Number(payRate) + Number(payPrimary);
					sumAll = (sumAll - pay).toFixed(2);
					let s = (Number(sumPrimary) + Number(sumRate)).toFixed(2);
					array.push({
						month: i,
						monthlyPayment: pay.toFixed(2),
						sumAll: sumPrimary,
						rate: payRate,
						primary: payPrimary,
						sumRate,
						sumPrimary,
					});
				}
				setOverpayment(overpay);
				let payR = ((sum * (monthlyRate / 100) * 30) / 365).toFixed(2);
				let payP = (sum / months).toFixed(2);
				setMonthlyPayment(Number(payR) + Number(payP));
				setArrayPays(array);
			}
			
		}	
	};

	const handleSum = (e) => {
		const value = e.target.value;
		const str = value.replace(/[A-Za-zА-Яа-я]/, "").replace(",", "").replace(/\s/g, "");
		setSum(Number(str));
		const myFormat = format({prefix: "", suffix: "", integerSeparator: " ", decimal: ".", round: 2});
		e.target.value = myFormat(str);
	};

	const handleMonthlyRate = (e) => {
		setMonthlyRate(Number(e.target.value));
	};

	const handleMonths = (e) => {
		setMonths(Number(e.target.value));
	};

	return <div className="page">
		<div className="content">
			<Card>
				<Text>{t("typeOfLoanPayment")}:</Text>
				<Radio firstChild title={t("annuity")} value="annuity" checked={type === "annuity"} onChange={() => setType("annuity")}/>
				<Radio lastChild title={t("differentiated")} value="differentiated" checked={type === "differentiated"} onChange={() => setType("differentiated")}/>
			</Card>
			<Input title={t("loanProductAmount") + ":"} id="sum" placeholder="0" onChange={handleSum} type="text" inputmode="numeric"/>
			<Input title={t("percentagePerAnnum") + ":"} id="monthlyRate" placeholder="0" onChange={handleMonthlyRate} type="number"/>
			<Input title={t("termInMonths") + ":"} id="months" placeholder="0" onChange={handleMonths} type="number"/>
			{
				!isNaN(parseFloat(monthlyPayment)) && isFinite(monthlyPayment) && monthlyPayment !== 0
					? <Value title={t("monthlyPayment") + ":"} value={`${currencyFormat(monthlyPayment)}`}/>
					: null
			}
			{
				!isNaN(parseFloat(overpayment)) && isFinite(overpayment) && overpayment !== 0
					? <Value title={t("overpayment") + ":"} value={`${currencyFormat(overpayment)}`}/>
					: null
			}
			{
				arrayPays.length !== 0
					? <Card><Link onClick={() => navigate("/calc/finance/creditMortgage/listPays", { state: { arrayPays: arrayPays } })}>{t("listOfPaymentsByMonth")}</Link></Card>
					: null
			}
			<Card>
				<Link onClick={() => navigate("/about/module", { state: MODULE_INFO })}>{t("aboutModule")}</Link>
			</Card>
		</div>
	</div>
};

export default CreditMortgagePage;
