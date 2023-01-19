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
import Icon from "@mdi/react";
import {mdiChevronRight} from "@mdi/js";
import {SpinnerCircularFixed} from "spinners-react";

const Link = ({children, onClick = () => {}, noBorderChild = false, icon = null, next, loading}) => {
    return <button className={`card-item button ${noBorderChild ? "no-border-child" : null}`} onClick={onClick}>
        <div className="left">
			{
			    icon && !loading
                    ? <Icon path={icon} size={1}/>
                    : null
            }
            {
                loading
                    ? <span className="loading"><SpinnerCircularFixed color="#000" size={20}/></span>
                    : null
            }
            {children}
        </div>
		{
			next
				? <Icon path={mdiChevronRight} size={1}/>
				: null
		}
    </button>
};

export default Link;
