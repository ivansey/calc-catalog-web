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

import { createSlice } from "@reduxjs/toolkit";

const defaultSetting = {
	moneyFormat: {
		name: localStorage.getItem("moneyFormat.name"),
		integerSeparator: localStorage.getItem("moneyFormat.integerSeparator"),
		decimal: localStorage.getItem("moneyFormat.decimal"),
		prefix: localStorage.getItem("moneyFormat.prefix"),
		suffix: localStorage.getItem("moneyFormat.suffix"),
	},
	currency: localStorage.getItem("currency"),
	lang: localStorage.getItem("lang"),
};

export const userSettingSlice = createSlice({
	name: "userSetting",
	initialState: {
		formatMoney: {
			name: defaultSetting.moneyFormat.name ? defaultSetting.moneyFormat.name : "ruMoneyFormat",
			integerSeparator: defaultSetting.moneyFormat.integerSeparator ? defaultSetting.moneyFormat.integerSeparator : " ",
			decimal: defaultSetting.moneyFormat.decimal ? defaultSetting.moneyFormat.decimal : ",",
			prefix: defaultSetting.moneyFormat.prefix ? defaultSetting.moneyFormat.prefix : "",
			suffix: defaultSetting.moneyFormat.suffix ? defaultSetting.moneyFormat.suffix : " RUB",
		},
		currency: defaultSetting.currency ? defaultSetting.currency : "RUB",
		lang: defaultSetting.lang ? defaultSetting.lang : "ru-RU",
		title: "Calc Catalog Web",
	},
	reducers: {
		changeCurrency: (state, action) => {
			const old = state.currency;
			state.currency = action.payload;
			state.formatMoney.prefix = state.formatMoney.prefix.replace(old, action.payload);
			state.formatMoney.suffix = state.formatMoney.suffix.replace(old, action.payload);
			localStorage.setItem("currency", action.payload);
		},
		changeFormatMoney: (state, action) => {
			state.formatMoney = action.payload;
			localStorage.setItem("moneyFormat.name", action.payload.name);
			localStorage.setItem("moneyFormat.integerSeparator", action.payload.integerSeparator);
			localStorage.setItem("moneyFormat.decimal", action.payload.decimal);
			localStorage.setItem("moneyFormat.prefix", action.payload.prefix);
			localStorage.setItem("moneyFormat.suffix", action.payload.suffix);
		},
		changeLang: (state, action) => {
			state.lang = action.payload;
			localStorage.setItem("lang", action.payload);
		},
		changeTitle: (state, action) => {
			state.title = action.payload;
			document.title = action.payload;
		},
	},
});

export const { 
	changeCurrency,
	changeFormatMoney,
	changeLang,
	changeTitle,
} = userSettingSlice.actions;

export default userSettingSlice.reducer;
