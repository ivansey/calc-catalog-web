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

import React from "react";
import {useNavigate} from "react-router-dom";
import {Value, Card, Text, Link} from "../components/Index.jsx";
import {useChangeTitle} from "../hooks/userSetting.js";
import {useTranslation} from "react-i18next";
import {mdiFileDocument} from "@mdi/js";

const authors = [
    "Ivan \"IvanSEY\" Panasyuk",
];

const AboutPage = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    useChangeTitle(t("aboutApp/title", {app: "Calc Catalog Web"}));

    return <div className="page">
        <div className="content">
            <Value title={t("version") + ":"} value="1.2.0"/>
            <Card>
                <Text>{t("authors")}:</Text>
                {
                    authors.map((author, i) => {
                        return <Text key={i}>{author}</Text>
                    })
                }
            </Card>
            <Card>
                <Text>{t("technologiesUsed") + ":"}</Text>
                <Text>React (with hooks)</Text>
                <Text>Redux</Text>
            </Card>
            <Value title={t("license") + ":"} value="GPLv3"/>
            <Card>
                <Link onClick={() => navigate("/license", {state: {license: "GPLv3"}})} next
                      icon={mdiFileDocument}>{t("openLicenseFile")}</Link>
            </Card>
        </div>
    </div>
};

export default AboutPage;
