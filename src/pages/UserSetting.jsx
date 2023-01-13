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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, changeFormatMoney, changeLang } from "../redux/userSetting.js";
import { useChangeTitle } from "../hooks/userSetting.js";
import { useTranslation } from "react-i18next";
import {
	ValueLink,
	Card,
	Text,
	Radio,
} from "../components/Index.jsx";

import currencies from "../json/currency.json";
import formatsMoney from "../json/formatMoney.json";
import langs from "../json/lang.json";

const UserSettingPage = () => {
	const {t} = useTranslation();
	useChangeTitle(t("setting"));
	const navigate = useNavigate();
	const { currency, formatMoney, lang } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<ValueLink title={t("currency") + ":"} value={currency} onClick={() => navigate("/setting/currency")}/>
			<ValueLink title={t("moneyFormat") + ":"} value={t(formatMoney.name)} onClick={() => navigate("/setting/formatMoney")}/>
			<ValueLink title={t("language") + ":"} value={lang} onClick={() => navigate("/setting/lang")}/>
		</div>
	</div>
};

const UserSettingCurrencyPage = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	useChangeTitle(t("currency"));
	const { currency } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<Card>
				<Text>{t("currencies")}:</Text>
				{
					currencies.map((curr, i) => {
						return <Radio key={i} title={`${t(curr.name)} (${curr.currency})`} value={curr.currency} checked={curr.currency === currency} onChange={() => {dispatch(changeCurrency(curr.currency))}}/>
					})
				}
			</Card>
		</div>
	</div>
};

const UserSettingFormatMoneyPage = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	useChangeTitle(t("moneyFormat"));
	const { name } = useSelector(state => state.userSetting.formatMoney);
	const { currency } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<Card>
				<Text>{t("moneyFormats")}:</Text>
				{
					formatsMoney.map((form, i) => {
						return <Radio key={i} title={t(form.name)} value={form.name} checked={form.name === name} onChange={() => dispatch(changeFormatMoney({name: form.name, integerSeparator: form.integerSeparator, decimal: form.decimal, prefix: form.prefix.replace("$c", currency), suffix: form.suffix.replace("$c", currency)}))}/>
					})
				}
			</Card>
		</div>
	</div>
};

const UserSettingLangPage = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	useChangeTitle(t("language"));
	const { lang } = useSelector(state => state.userSetting);

	return <div className="page">
		<div className="content">
			<Card>
				<Text>{t("languages")}:</Text>
				{
					langs.map((l, i) => {
						return <Radio key={i} title={`${l.name} (${l.code})`} value={l.code} checked={lang === l.code} onChange={() => { dispatch(changeLang(l.code))}}/>
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
	UserSettingLangPage,
};
