import React from "react";

import AppData from "@data/app.json";

import AboutSection from "@appComponents/sections/About";
import IdeasSection from "@appComponents/sections/Ideas";
import AdvantagesSection from "@appComponents/sections/Advantages";
import LatestProjectsSection from "@appComponents/sections/LatestProjects";
import HowWeWorkSection from "@appComponents/sections/HowWeWork";

export const metadata = {
  title: {
    default: "About Us | " + AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

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
