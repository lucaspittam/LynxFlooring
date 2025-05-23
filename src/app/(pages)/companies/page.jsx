import React from "react";
import dynamic from 'next/dynamic';
import PageBanner from '@appComponents/PageBanner';
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
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <PageBanner
        pageTitle={"Our Companies"}
        breadTitle={"Companies"}
        bgImage={"/img/photo/header2.jpg"}
      />
      <CompaniesContent companies={companies} />
    </div>
  );
}
