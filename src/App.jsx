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
import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";
import {useSelector} from "react-redux";

import i18n from "i18next";
import {initReactI18next, I18nextProvider} from "react-i18next";
import load from "./locale/load.js";

const AppPage = () => {
    i18n
        .use(initReactI18next)
        .init({
            resources: {
                "ru-RU": {
                    translation: load("ru-RU"),
                },
                "en-US": {
                    translation: load("en-US"),
                },
            },
            lng: useSelector(state => state.userSetting.lang),
            fallbackLng: "ru-RU",

            interpolation: {
                escapeValue: false,
            },
        });


    return <div>
        <I18nextProvider i18n={i18n}>
            <Header/>
            <Outlet/>
            <div className="footer">
                <p>v1.2.0</p>
                <p>Copyright 2023 <a href="https://github.com/ivansey" target="_blank">Ivan "IvanSEY" Panasyuk</a></p>
                <p>Build with React&Webpack</p>
            </div>
        </I18nextProvider>
    </div>
};

export default AppPage;
