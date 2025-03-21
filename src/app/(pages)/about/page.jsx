import React from "react";

import AppData from "@data/app.json";

import AboutSection from "@components/sections/About";
import IdeasSection from "@components/sections/Ideas";
import AdvantagesSection from "@components/sections/Advantages";
import LatestProjectsSection from "@components/sections/LatestProjects";
import HowWeWorkSection from "@components/sections/HowWeWork";

export const metadata = {
  title: {
    default: "About Us | " + AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
}

export default function About() {
  return (
    <>
      <AboutSection />
      <IdeasSection />
      <AdvantagesSection />
      <LatestProjectsSection />
      <HowWeWorkSection />
    </>
  );
}