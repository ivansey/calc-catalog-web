import { createSlice } from "@reduxjs/toolkit";

export const userSettingSlice = createSlice({
	name: "userSetting",
	initialState: {
		formatMoney: {
			name: "Русский формат",
			integerSeparator: " ",
			decimal: ",",
			prefix: "",
			suffix: " RUB",
		},
		currency: "RUB",
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
		changeTitle: (state, action) => {
			state.title = action.payload;
			document.title = action.payload;
		},
	},
});

export const { 
	changeCurrency,
	changeFormatMoney,
	changeTitle,
} = userSettingSlice.actions;

export default userSettingSlice.reducer;
