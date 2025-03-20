"use client";

import Data from "@data/sections/latest-projects.json";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestProjectsSection = ({ projects = [] }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const projectRows0 = [];

    // Ensure we have valid projects data and numOfItems
    const numOfItems = Math.min(Data.numOfItems || 0, projects.length);

    for (var i = 0; i < numOfItems; i += 3) {
        const slicedProjects = projects.slice(i, Math.min(i + 3, projects.length));
        if (slicedProjects.length > 0) {
            projectRows0.push(slicedProjects);
        }
    }

    const projectRows = [];

    projectRows0.forEach((row, row_key) => {
        const row1_items = [];
        const row2_items = [];
        
        row.forEach((item, row2_key) => {
            if (row2_key < 2) {
                row1_items.push(item);
            } else {
                row2_items.push(item);
            }
        });
        
        if (row1_items.length > 0) projectRows.push(row1_items);
        if (row2_items.length > 0) projectRows.push(row2_items);
    });

    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <>
            {/* portfolio */}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        {projectRows.map((row, row_key) => (
                        <div className="col-md-6 col-lg-3" key={`projects-row-${row_key}`}>
                            {row.map((item, key) => (
                            <Link 
                                href={`/projects/${item?.id || '#'}`} 
                                key={`projects-item-${key}`} 
                                className={`${row.length == 2 ? "mil-portfolio-item mil-square-item" : "mil-portfolio-item mil-long-item"} mil-mb-30 ${isClient ? "mil-up" : ""}`}
                            >
                                <img src={item?.image || ''} alt={item?.title || ''} />
                                <div className="mil-project-descr">
                                    <h4 className="mil-upper mil-mb-20">{item?.title || ''}</h4>
                                    <div className="mil-divider-sm mil-mb-20"></div>
                                    <p>{item?.short || ''}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* blog end */}
        </>
    );
};

export default LatestProjectsSection;