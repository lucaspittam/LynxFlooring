import React from "react";
import PageBanner from "@components/PageBanner";
import CompaniesContent from "./CompaniesContent";
import { getSortedProjectsData } from "../../_lib/companies";
import AppData from "@data/app.json";

export const metadata = {
    title: {
        default: "Our Companies",
    },
    description: AppData.settings.siteDescription,
};

export default async function Companies() {
    const companies = await getSortedProjectsData();

    return (
        <>
            <PageBanner pageTitle={"Our Companies"} breadTitle={"Companies"} bgImage={"/img/photo/header2.jpg"} />
            <CompaniesContent companies={companies} />
        </>
    );
} 