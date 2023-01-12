import React from "react";
import { useNavigate } from "react-router-dom";
import { useChangeTitle } from "../hooks/userSetting.js"; 
import { Card, Link } from "../components/Index.jsx";

const IndexPage = () => {
	const navigate = useNavigate();
	useChangeTitle("Calc Catalog Web");

	return <div className="page">
		<div className="content">
			<Card>
				<Link onClick={() => navigate("/calc/finance")}>Финансы</Link>
				<Link>Физика</Link>
				<Link>Информатика</Link>
			</Card>
			<Card>
				<Link onClick={() => navigate("/about")}>О приложении</Link>
			</Card>
		</div>
	</div>
};

export default IndexPage;
