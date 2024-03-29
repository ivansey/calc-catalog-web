import React from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Card, Link} from "../Index.jsx";
import {mdiInformationVariant} from "@mdi/js";

const InformationModuleButton = ({MODULE_INFO}) => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return <Card>
        <Link onClick={() => navigate("/about/module", {state: MODULE_INFO})} icon={mdiInformationVariant} next>{t("aboutModule")}</Link>
    </Card>
};

export {
    InformationModuleButton,
};