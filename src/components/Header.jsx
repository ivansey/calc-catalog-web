import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ButtonMini } from "./Button.jsx";

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
				? <ButtonMini type="transparent" onClick={() => navigate(-1)}>{"<"}</ButtonMini>
				: <ButtonMini type="transparent"></ButtonMini>
		}
		<p className="header-title">{title}</p>
		<ButtonMini type="transparent"></ButtonMini>
	</div>
};

export default Header;
