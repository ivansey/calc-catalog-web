import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, changeFormatMoney } from "../redux/userSetting.js";
import {
	useChangeTitle,
	useCurrency,
} from "../hooks/userSetting.js";
import {
	ValueLink,
	Card,
	Text,
	Radio,
} from "../components/Index.jsx";

import currencies from "../json/currency.json";
import formatsMoney from "../json/formatMoney.json";

const UserSettingPage = () => {
	useChangeTitle("Настройки");
	const navigate = useNavigate();
	const { currency, formatMoney } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<ValueLink title="Валюта:" value={currency} onClick={() => navigate("/setting/currency")}/>
			<ValueLink title="Денежный формат:" value={formatMoney.name} onClick={() => navigate("/setting/formatMoney")}/>
		</div>
	</div>
};

const UserSettingCurrencyPage = () => {
	const dispatch = useDispatch();
	useChangeTitle("Валюта");
	const { currency } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<Card>
				<Text>Валюты:</Text>
				{
					currencies.map((curr, i) => {
						return <Radio key={i} title={`${curr.name} (${curr.currency})`} value={curr.currency} checked={curr.currency === currency} onChange={() => {dispatch(changeCurrency(curr.currency))}}/>
					})
				}
			</Card>
		</div>
	</div>
};

const UserSettingFormatMoneyPage = () => {
	const dispatch = useDispatch();
	useChangeTitle("Денежный формат");
	const { name } = useSelector(state => state.userSetting.formatMoney);
	const { currency } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<Card>
				<Text>Денежные форматы: </Text>
				{
					formatsMoney.map((form, i) => {
						return <Radio key={i} title={form.name} value={form.name} checked={form.name === name} onChange={() => dispatch(changeFormatMoney({name: form.name, integerSeparator: form.integerSeparator, decimal: form.decimal, prefix: form.prefix.replace("$c", currency), suffix: form.suffix.replace("$c", currency)}))}/>
					})
				}
			</Card>
		</div>
	</div>
};

export {
	UserSettingPage,
	UserSettingCurrencyPage,
	UserSettingFormatMoneyPage,
};
