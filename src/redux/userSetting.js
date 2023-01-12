import { createSlice } from "@reduxjs/toolkit";

export const userSettingSlice = createSlice({
	name: "userSetting",
	initialState: {
		currency: {
			prefix: "",
			suffix: " RUB",
		},
		title: "Calc Catalog Web",
	},
	reducers: {
		changeCurrency: (state, action) => {
			state.currency = action.payload;
		},
		changeTitle: (state, action) => {
			state.title = action.payload;
			document.title = action.payload;
		},
	},
});

export const { 
	changeCurrency,
	changeTitle,
} = userSettingSlice.actions;

export default userSettingSlice.reducer;
