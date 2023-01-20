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
import Card from "./Card.jsx";
import Text from "./Text.jsx";

const Input = ({
                   title = "", id = "", placeholder = "", defaultValue = "", onChange = () => {
    }, type = "text", inputmode = ""
               }) => {
    return <Card className="input">
        <Text><label htmlFor={id}>{title}:</label></Text>
        <input className="card-item input" id={id} type={type} placeholder={placeholder} defaultValue={defaultValue}
               onChange={onChange} inputMode={inputmode}/>
    </Card>
};

export default Input;
