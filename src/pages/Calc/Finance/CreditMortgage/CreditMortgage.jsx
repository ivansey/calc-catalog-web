import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useChangeTitle, useCurrency } from "../../../../hooks/userSetting.js";
import { Card, Text, Input, Value, Radio, Link } from "../../../../components/Index.jsx";
import format from "format-number";

const MODULE_INFO = {
	name: "Credit Mortgage",
	version: "1.0.0a",
	author: "IvanSEY",
};

const CreditMortgagePage = () => {
	const navigate = useNavigate();
	const currencyFormat = useCurrency();
	useChangeTitle(MODULE_INFO.name);

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
				<Text>Тип выплаты по кредитному продукту:</Text>
				<Radio firstChild title="Аннуитетный" value="annuity" checked={type === "annuity"} onChange={() => setType("annuity")}/>
				<Radio lastChild title="Дифференцированный" value="differentiated" checked={type === "differentiated"} onChange={() => setType("differentiated")}/>
			</Card>
			<Input title="Сумма кредитного продукта:" id="sum" placeholder="0" onChange={handleSum} type="text" inputmode="numeric"/>
			<Input title="% годовых:" id="monthlyRate" placeholder="0" onChange={handleMonthlyRate} type="number"/>
			<Input title="Срок (в месяцах):" id="months" placeholder="0" onChange={handleMonths} type="number"/>
			{
				!isNaN(parseFloat(monthlyPayment)) && isFinite(monthlyPayment) && monthlyPayment !== 0
					? <Value title="Месячный платеж:" value={`${currencyFormat(monthlyPayment)}`}/>
					: null
			}
			{
				!isNaN(parseFloat(overpayment)) && isFinite(overpayment) && overpayment !== 0
					? <Value title="Переплата:" value={`${currencyFormat(overpayment)}`}/>
					: null
			}
			{
				arrayPays.length !== 0
					? <Card><Link onClick={() => navigate("/calc/finance/creditMortgage/listPays", { state: { arrayPays: arrayPays } })}>Список платежей по месяцам</Link></Card>
					: null
			}
			<Card>
				<Link onClick={() => navigate("/about/module", { state: MODULE_INFO })}>Информация о модуле</Link>
			</Card>
		</div>
	</div>
};

export default CreditMortgagePage;
