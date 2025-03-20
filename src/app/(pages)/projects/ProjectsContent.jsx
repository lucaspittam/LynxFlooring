"use client";

import React from "react";
import dynamic from "next/dynamic";
import AppData from "@data/app.json";

const ProjectsMasonry = dynamic(() => import("@components/ProjectsMasonry"), {
    loading: () => <div>Loading...</div>
});

export default function ProjectsContent({ initialProjects }) {
    return (
        <section>
            <div className="container mil-p-120-120">
                <div className="mil-background-grid mil-softened" />
                
                <div className="mil-center">
                    <p className="mil-text-lg mil-up mil-mb-90">Our Projects harness design and technology to create places where <br/> people live, work, and heal.</p>
                </div>

                <ProjectsMasonry projects={initialProjects} categories={AppData.projects.categories} />
            </div>
        </section>
    );
} 