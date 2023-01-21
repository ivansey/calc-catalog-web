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

import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Card, Link} from "../components/Index.jsx";
import {useTranslation} from "react-i18next";
import {useChangeTitle} from "../hooks/userSetting";
import {mdiFileDownload} from "@mdi/js";
import axios from "axios";

const LicenseFilePage = () => {
    const {t} = useTranslation();
    useChangeTitle(t("license"));
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [urlFile, setUrlFile] = useState("");
    const {state} = useLocation();

    const getLicenseFile = (license = "GPLv3") => {
        axios.get(`/api/static/docs/licenses/${license}.txt`).then(q => {
            setFile(q.data); setUrlFile(`/api/static/docs/licenses/${license}.txt`);
        });
    };

    const downloadFile = () => {
        const element = document.createElement("a");
        element.href = urlFile;
        element.download = urlFile.replace("/api/static/docs/licenses/", "");
        element.click();
    };

    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
            state.license ? getLicenseFile(state.license) : getLicenseFile()
        }
    });

    return <div className="page">
        <div className="content">
            {
                !isLoading && file
                    ? <div>
                        <Card>
                            <Link onClick={downloadFile} icon={mdiFileDownload}>{t("downloadFile")}</Link>
                        </Card>
                        <div style={{whiteSpace: "pre-wrap"}}>
                            {file}
                        </div>
                    </div>
                    : <p>Loading...</p>
            }

        </div>
    </div>
};

export default LicenseFilePage;