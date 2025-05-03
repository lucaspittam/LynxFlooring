import React, { Suspense, lazy } from "react";
import dynamic from 'next/dynamic';

import AppData from "@data/app.json";

import { getSortedProjectsData } from "../_lib/companies";
import USMap from "@components/USMap";

// Import critical components normally
import HeroOneSection from "../_components/sections/HeroOne";

// Simple loading component with skeleton UI
const Loading = () => <div className="mil-loading-placeholder"></div>;

// Lazy load non-critical components with more aggressive code splitting
const AboutSection = dynamic(() => 
  import("../_components/sections/About").then(mod => ({ 
    default: mod.default 
  })),
  { 
    loading: () => <Loading />,
    ssr: false 
  }
);

const IdeasSection = dynamic(() => 
  import("../_components/sections/Ideas").then(mod => ({ 
    default: mod.default 
  })),
  { 
    loading: () => <Loading />,
    ssr: false 
  }
);

const AdvantagesSection = dynamic(() => 
  import("../_components/sections/Advantages").then(mod => ({ 
    default: mod.default 
  })),
  { 
    loading: () => <Loading />,
    ssr: false 
  }
);

const LatestProjectsSection = dynamic(() => 
  import("../_components/sections/LatestProjects").then(mod => ({ 
    default: mod.default 
  })),
  { 
    loading: () => <Loading />,
    ssr: false 
  }
);

const ClientPartnersSlider = dynamic(() => 
  import("../components/sliders/ClientPartnersSlider").then(mod => ({ 
    default: mod.default 
  })),
  { 
    loading: () => <Loading />,
    ssr: false 
  }
);

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home1() {
  const projects = await getAllProjects();

  const locations = [
    { city: "Portland", state: "Oregon", url: "portland" },
    { city: "Kent", state: "Washington", url: "kent" },
    { city: "Fort Lauderdale", state: "Florida", url: "fortlauderdale" },
    { city: "Lincoln", state: "Nebraska", url: "lincoln" },
    { city: "Livermore", state: "California", url: "livermore" },
    { city: "Fairfield", state: "New Jersey", url: "newyork" },
  ];

  return (
    <>
      <HeroOneSection />
      
      {/* Add CSS class for content visibility optimization */}
      <div className="mil-section-off-screen">
        <ClientPartnersSlider />
      </div>
      
      <div className="mil-section-off-screen">
        <IdeasSection />
      </div>
      
      <div className="mil-section-off-screen">
        <AdvantagesSection />
      </div>
      
      <div className="mil-section-off-screen">
        <LatestProjectsSection projects={projects} />
      </div>

      <div className="mil-section-off-screen">
        <AboutSection />
      </div>

      {/* Map Section */}
      <section
        className="mil-relative"
      >
        <div className="container mil-p-60-60">
          <div className="mil-background-grid mil-softened" />

          <div className="mil-center mil-mb-60">
            <span 
              className="mil-suptitle mil-upper mil-up mil-mb-30"
            >
              Nationwide Presence
            </span>
            <h2
              className="mil-upper mil-up mil-mb-30"
            >
              Our Company Locations
            </h2>
            <p className="mil-up">
              Find our affiliated commercial flooring experts across the United States.
            </p>
          </div>

          <div
            className="mil-map-container mil-up"
            style={{
              height: "550px",
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <USMap locations={locations} />
          </div>
        </div>
      </section>
      {/* End Map Section */}
    </>
  );
}

export default Home1;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
