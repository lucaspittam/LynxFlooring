import React, { Suspense } from "react";

import AppData from "@data/app.json";

import { getSortedProjectsData } from "../_lib/companies";

import HeroOneSection from "../_components/sections/HeroOne";
import AboutSection from "../_components/sections/About";
import IdeasSection from "../_components/sections/Ideas";
import AdvantagesSection from "../_components/sections/Advantages";
import LatestProjectsSection from "../_components/sections/LatestProjects";
import HowWeWorkSection from "../_components/sections/HowWeWork";
import ClientPartnersSlider from "../components/sliders/ClientPartnersSlider";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home1() {
  const projects = await getAllProjects();

  return (
    <>
      <HeroOneSection />
      <ClientPartnersSlider />
      <AboutSection />
      <IdeasSection />
      <AdvantagesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestProjectsSection projects={projects} />
      </Suspense>
      <HowWeWorkSection />
    </>
  );
}
export default Home1;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
