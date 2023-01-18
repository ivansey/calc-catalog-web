/*
Copyright 2023 Ivan "IvanSEY" Panasyuk
Copyright 2023 Alexandr Panasyuk

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

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useChangeTitle, useCurrency} from "../../../../../hooks/userSetting.js";
import axios from "axios";
import {Card, Link, Value, Input, Text} from "../../../../../components/Index.jsx";

const MODULE_INFO = {
    name: "calculationFuelSpending",
    author: "IvanSEY",
    version: "1.0.0",
};

const CalculationFuelSpending = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    useChangeTitle(t(MODULE_INFO.name));
    const {lang} = useSelector(state => state.userSetting);
    const currencyFormat = useCurrency();

    const [response, setResponse] = useState("wait");
    const [error, setError] = useState("");
    const [firstCity, setFirstCity] = useState("");
    const [secondCity, setSecondCity] = useState("");
    const [fuelConsumption, setFuelConsumption] = useState(0);
    const [fuelPriceMin, setFuelPriceMin] = useState(0);
    const [fuelPriceMax, setFuelPriceMax] = useState(0);
    const [distance, setDistance] = useState(0);
    const [fuelConsumptionSum, setFuelConsumptionSum] = useState(0);
    const [fuelPriceSumMin, setFuelPriceSumMin] = useState(0);
    const [fuelPriceSumMax, setFuelPriceSumMax] = useState(0);
    const [duration, setDuration] = useState(0);

    const calculate = () => {
        setResponse("loading");
        if (firstCity === "" && secondCity === "") {
            setError("emptyField");
            setResponse("wait");
            return false;
        }
        setError("");
        axios.post("/api/geo/getDistance/byCity", {
            firstCity: firstCity,
            secondCity: secondCity,
            lang: lang,
        }).then(q => {
            setDistance((q.data.distance).toFixed(0));
            setDuration((q.data.duration / 60 / 60).toFixed(0));

            const fuel = ((q.data.distance / 100).toFixed(2) * (fuelConsumption / 100).toFixed(2)).toFixed(2);
            setFuelConsumptionSum(fuel);

            setFuelPriceSumMin((fuel * fuelPriceMin).toFixed(2));
            setFuelPriceSumMax((fuel * fuelPriceMax).toFixed(2));

            setResponse("ok");
        });
    };

    return <div className="page">
        <div className="content">
            <Input title={t("firstCity")} onChange={e => setFirstCity(e.target.value)}/>
            <Input title={t("secondCity")} onChange={e => setSecondCity(e.target.value)}/>
            <Input title={t("fuelConsumption")} onChange={e => setFuelConsumption(e.target.value)}/>
            <Input title={t("fuelPriceMin")} onChange={e => setFuelPriceMin(e.target.value)}/>
            <Input title={t("fuelPriceMax")} onChange={e => setFuelPriceMax(e.target.value)}/>

            <Card>
                {
                    response === "loading"
                        ? <Link>{t("loading...")}</Link>
                        : <Link onClick={calculate}>{t("calculate")}</Link>
                }
            </Card>
            {
                error === "emptyField"
                    ? <Card>
                        <Text>
                            {t("ERROR")}:
                            {t("emptyFieldPlsFill")}
                        </Text>
                    </Card>
                    : null
            }
            {
                response === "ok"
                    ? <div>
                        <Value title={t("distance")} value={`${distance / 100} ${t("kilometers(short)")}`}/>
                        <Value title={t("duration")} value={`${duration} ${t("hours(short)")}`}/>
                        <Value title={t("fuelConsumptionSum")} value={`${fuelConsumptionSum} ${t("liters(short)")}`}/>
                        <Value title={t("fuelPriceSumMin")} value={currencyFormat(fuelPriceSumMin)}/>
                        <Value title={t("fuelPriceSumMax")} value={currencyFormat(fuelPriceSumMax)}/>
                    </div>
                    : null
            }
            <Card>
                <Link onClick={() => navigate("/about/module", {state: MODULE_INFO})}>{t("aboutModule")}</Link>
            </Card>
        </div>
    </div>
};

export default CalculationFuelSpending;
