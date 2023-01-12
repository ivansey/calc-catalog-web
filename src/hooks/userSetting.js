import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../redux/userSetting.js";
import format from "format-number";

const useChangeTitle = (title) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeTitle(title));
	});
};

const useCurrency = () => {
	const { prefix, suffix } = useSelector(state => state.userSetting.currency);
	const currencyFormat = format({prefix, suffix, integerSeparator: " ", decimal: ",", round: 2});
	return currencyFormat;
};

export {
	useChangeTitle,
	useCurrency,
};
