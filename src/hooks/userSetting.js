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
	const { prefix, suffix, integerSeparator, decimal } = useSelector(state => state.userSetting.formatMoney);
	const currencyFormat = format({prefix, suffix, integerSeparator, decimal, round: 2});
	return currencyFormat;
};

export {
	useChangeTitle,
	useCurrency,
};
