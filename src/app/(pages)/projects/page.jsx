import React from "react";
import PageBanner from "@components/PageBanner";
import ProjectsContent from "./ProjectsContent";
import { getSortedProjectsData } from "../../_lib/companies";
import AppData from "@data/app.json";

export const metadata = {
    title: {
        default: "Projects",
    },
    description: AppData.settings.siteDescription,
};

export default async function Projects() {
    const projects = await getSortedProjectsData();

    return (
        <>
            <PageBanner pageTitle={"Projects"} breadTitle={"Projects"} bgImage={"/img/photo/12.jpg"} />
            <ProjectsContent initialProjects={projects} />
        </>
    );
}

async function getAllProjects() {
    const allProjects = getSortedProjectsData();
    return allProjects;
}