"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CompaniesContent = ({ companies }) => {
    const [activeCompany, setActiveCompany] = useState("all");

    // Get company names for filter buttons
    const companyNames = ["all", ...companies.map(company => company.id)];
    const companyTitles = {
        all: "All Companies",
        "flooring-solutions": "Flooring Solutions",
        "gwc-interiors": "G&W Commercial Interiors",
        "shehadi": "Shehadi Commercial Flooring",
        "mw-floor": "M&W Floor Companies",
        "floorsol": "Floor Solutions",
        "resource4floors": "Resource 4 Floors"
    };

    // Filter companies based on selected company
    const filteredCompanies = activeCompany === "all" 
        ? companies.filter(company => company.id !== "lynx-flooring")  // Exclude Lynx Flooring
        : companies.filter(company => company.id === activeCompany);

    return (
        <section>
            <div className="container mil-p-120-30">
                {/* Company Filter */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="mil-filter-buttons mil-center mil-mb-90">
                            {companyNames
                                .filter(companyId => companyId === "all" || companyTitles[companyId])
                                .map((companyId) => (
                                    <button
                                        key={companyId}
                                        className={`mil-filter-btn ${activeCompany === companyId ? "mil-active" : ""}`}
                                        onClick={() => setActiveCompany(companyId)}
                                    >
                                        {companyTitles[companyId]}
                                    </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Companies Grid */}
                <div className="row">
                    {filteredCompanies.map((company) => (
                        <div 
                            key={company.id} 
                            className={`${activeCompany === "all" ? "col-lg-6" : "col-lg-12"} mil-mb-90`}
                        >
                            <div className={`mil-company-card ${activeCompany !== "all" ? "mil-single-view" : ""}`}>
                                <div className="row">
                                    <div className={`${activeCompany === "all" ? "col-12" : "col-lg-5"}`}>
                                        <div className="mil-company-image" style={{ maxHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                            <Image
                                                src={company.image.startsWith('/') ? company.image : `/${company.image}`}
                                                alt={company.title}
                                                width={company.id === "floorsol" ? 150 : 200}
                                                height={company.id === "floorsol" ? 100 : 150}
                                                className="mil-company-img"
                                                style={{ 
                                                    objectFit: 'contain', 
                                                    maxWidth: '100%', 
                                                    maxHeight: company.id === "floorsol" ? '100px' : '150px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${activeCompany === "all" ? "col-12" : "col-lg-7"}`}>
                                        <div className={`mil-company-content ${activeCompany !== "all" ? "mil-single-content" : ""}`}>
                                            <div className="mil-company-header">
                                                <h3 className="mil-company-title">{company.title}</h3>
                                                <p className="mil-company-location">{company.location}</p>
                                                <p className="mil-company-description">{company.description}</p>
                                            </div>
                                            
                                            {/* Services */}
                                            <div className="mil-company-services">
                                                <h4>Services</h4>
                                                <ul>
                                                    {company.services?.map((service, index) => (
                                                        <li key={index}>{service}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Projects Preview */}
                                            {company.projects && company.projects.length > 0 && (
                                                <div className="mil-company-projects">
                                                    <h4>Featured Projects</h4>
                                                    <div className="row g-4">
                                                        {company.projects.slice(0, 2).map((project, index) => (
                                                            <div key={index} className={`${activeCompany === "all" ? "col-6" : "col-lg-6"}`}>
                                                                <div className="mil-project-preview" style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                                                    <Image
                                                                        src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                                                                        alt={project.title}
                                                                        width={150}
                                                                        height={100}
                                                                        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '150px' }}
                                                                    />
                                                                    <h5>{project.title}</h5>
                                                                    <p>{project.description}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Contact Info */}
                                            <div className="mil-company-contact">
                                                <h4>Contact</h4>
                                                <p>{company.contact?.address}</p>
                                                <p>{company.contact?.phone}</p>
                                                <p>{company.contact?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompaniesContent; 