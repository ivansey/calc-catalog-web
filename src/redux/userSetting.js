import { createSlice } from "@reduxjs/toolkit";

export const userSettingSlice = createSlice({
	name: "userSetting",
	initialState: {
		formatMoney: {
			name: "ruMoneyFormat",
			integerSeparator: " ",
			decimal: ",",
			prefix: "",
			suffix: " RUB",
		},
		currency: "RUB",
		lang: "ru-RU",
		title: "Calc Catalog Web",
	},
	reducers: {
		changeCurrency: (state, action) => {
			const old = state.currency;
			state.currency = action.payload;
			state.formatMoney.prefix = state.formatMoney.prefix.replace(old, action.payload);
			state.formatMoney.suffix = state.formatMoney.suffix.replace(old, action.payload);
		},
		changeFormatMoney: (state, action) => {
			state.formatMoney = action.payload;
		},
		changeLang: (state, action) => {
			state.lang = action.payload;
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
