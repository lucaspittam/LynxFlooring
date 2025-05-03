import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@appComponents/PageBanner";

export const metadata = {
  title: {
    default: "Search | " + AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

export default function Search() {
  return (
    <>
      <PageBanner pageTitle={"Search"} />
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="mil-text-center mil-mb-90">
              <p>Use the search box to find the product you are looking for.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
