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

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ButtonMini } from "./Button.jsx";
import Icon from "@mdi/react";
import {mdiChevronLeft} from "@mdi/js";

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isBackButtonEnable, setIsBackButtonEnable] = useState(false);
	const { title } = useSelector(state => state.userSetting);

	useEffect(() => {
		if (location.pathname !== "/") {
			setIsBackButtonEnable(true);
		} else {
			setIsBackButtonEnable(false);
		}
	});

	return <div className="header">
		{
			isBackButtonEnable
				? <ButtonMini type="transparent" onClick={() => navigate(-1)}><Icon path={mdiChevronLeft} size={1}/></ButtonMini>
				: <ButtonMini type="transparent"></ButtonMini>
		}
		<p className="header-title">{title}</p>
		<ButtonMini type="transparent"></ButtonMini>
	</div>
};

export default Header;
