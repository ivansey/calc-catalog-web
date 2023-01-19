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
import {Value, Card, Text} from "../components/Index.jsx";
import {useLocation} from "react-router-dom";
import {useChangeTitle} from "../hooks/userSetting.js";
import {useTranslation} from "react-i18next";

const AboutModulePage = () => {
    const {t} = useTranslation();
    const {state} = useLocation();
    const {name, version, authors} = state;
    useChangeTitle(t("aboutModule/title"));

    return <div className="page">
        <div className="content">
            <Value title={t("nameModule") + ":"} value={t(name)}/>
            <Value title={t("version") + ":"} value={version}/>
            <Card>
                <Text>{t("authors")}:</Text>
                {
                    authors.map((author, i) => {
                        return <Text key={i}>{author}</Text>
                    })
                }
            </Card>
        </div>
    </div>
};

export default AboutModulePage;
