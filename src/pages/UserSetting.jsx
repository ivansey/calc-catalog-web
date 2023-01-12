import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCurrency } from "../redux/userSetting.js";
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

const UserSettingPage = () => {
	useChangeTitle("Настройки");
	const navigate = useNavigate();
	const currency = useCurrency();

	return <div className="page">
		<div className="content">
			<ValueLink title="Валюта:" value={`${currency.prefix} ${currency.suffix}`} onClick={() => navigate("/setting/currency")}/>
		</div>
	</div>
};

const UserSettingCurrencyPage = () => {
	const dispatch = useDispatch();
	useChangeTitle("Валюта");
	const currency = useCurrency();

	return <div className="page">
		<div className="content">
			<Card>
				<Text>Валюты:</Text>
				{
					currencies.map((curr, i) => {
						return <Radio key={i} title={`${curr.name} (${curr.prefix}${curr.suffix})`} value={`${curr.prefix}${curr.suffix}`} checked={(curr.prefix + curr.suffix) === (currency.prefix + currency.suffix)} onChange={() => {dispatch(changeCurrency({prefix: curr.prefix, suffix: curr.suffix}))}}/>
					})
				}
			</Card>
		</div>
	</div>
};

export {
	UserSettingPage,
	UserSettingCurrencyPage,
};
