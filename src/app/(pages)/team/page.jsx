import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@appComponents/PageBanner";
import RecruitSection from "@appComponents/sections/Recruit";

export const metadata = {
  title: {
    default: "Team | " + AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

export default async function Team() {
  return (
    <>
      <PageBanner pageTitle={"Our Team"} />
      <RecruitSection />
    </>
  );
}
