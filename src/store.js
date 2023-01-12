import { configureStore } from "@reduxjs/toolkit";
import userSettingReducer from "./redux/userSetting.js";

export default configureStore({
	reducer: {
		userSetting: userSettingReducer,
	},
});
