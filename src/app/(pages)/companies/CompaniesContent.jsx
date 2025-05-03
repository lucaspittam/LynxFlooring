"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CompaniesContent = ({ companies }) => {
  const [activeCompany, setActiveCompany] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);

  // Get company names for filter buttons
  const companyNames = ["all", ...companies.map((company) => company.id)];
  const companyTitles = {
    all: "All Companies",
    "flooring-solutions": "Flooring Solutions",
    "gwc-interiors": "G&W Commercial Interiors",
    shehadi: "Shehadi Commercial Flooring",
    "mw-floor": "Midwest Floor Covering",
    floorsol: "Floor Solutions",
    resource4floors: "Resource 4 Floors",
  };

  // Company website URLs
  const companyWebsites = {
    "flooring-solutions": "https://www.flooring-solutions.com/",
    "gwc-interiors": "https://www.gwcinteriors.com/",
    shehadi: "https://www.shehadi.com",
    "mw-floor": "https://www.mwfloor.com/",
    floorsol: "https://www.floorsol.com",
    resource4floors: "https://www.resource4floors.com",
  };

  // Company highlights and president information
  const companyHighlights = {
    "flooring-solutions": {
      yearsFounded: 1990,
      highlight: "Bay Area's Premier Commercial Flooring Provider",
      specialty: "Healthcare & Educational Facilities",
      president: {
        name: "Mark Iberri",
        email: "Mark@flooring-solutions.com"
      }
    },
    "gwc-interiors": {
      yearsFounded: 2000,
      highlight: "Pacific Northwest's Trusted Flooring Partner",
      specialty: "Corporate & Retail Spaces",
      president: {
        name: "Matt Johnson",
        email: "mattj@gwcinteriors.com"
      }
    },
    shehadi: {
      yearsFounded: 1900,
      highlight: "85+ Years of Excellence in Commercial Flooring",
      specialty: "Government & Institutional Buildings",
      president: {
        name: "Nathan Dunn",
        email: "ndunn@shehadicf.com"
      }
    },
    "mw-floor": {
      yearsFounded: 1990,
      highlight: "Midwest's Leading Sports Flooring Specialist",
      specialty: "Athletic & Recreation Facilities",
      president: {
        name: "Brad Larsen",
        email: "brad@mwfloor.com"
      }
    },
    floorsol: {
      yearsFounded: 2005,
      highlight: "Innovation in Commercial & Industrial Flooring",
      specialty: "Manufacturing & Industrial Spaces",
      president: {
        name: "Jason DeBenedetto",
        email: "jd@floorsol.com"
      }
    },
    resource4floors: {
      yearsFounded: 1980,
      highlight: "South Florida's Single Source for Sustainable Floor Covering",
      specialty: "Hospitality & Multi-Family Residential",
      president: {
        name: "Sean Finn",
        email: "sean.finn@resource4floors.com"
      }
    },
  };

  // Handle company filter change with animation
  const handleCompanyChange = (company) => {
    if (company === activeCompany) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCompany(company);
      setIsAnimating(false);
    }, 300);
  };

  // Filter companies based on selected company
  const filteredCompanies =
    activeCompany === "all"
      ? companies.filter((company) => company.id !== "lynx-flooring") // Exclude Lynx Flooring
      : companies.filter((company) => company.id === activeCompany);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section style={{ paddingTop: "30px" }}>
      <div className="container mil-p-90-30">
        {/* Companies Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="row justify-content-center mb-5"
        >
          <div className="col-lg-10 text-center">
            <p className="mil-mb-40" style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.8", 
              color: "#333",
              maxWidth: "900px",
              margin: "0 auto",
              padding: "30px 40px",
              background: "rgba(194, 215, 32, 0.05)",
              borderLeft: "4px solid #C2D720",
              borderRadius: "0 8px 8px 0",
              textAlign: "left"
            }}>
              Lynx Flooring is proud to partner with industry-leading commercial flooring companies 
              across the United States. Each company brings unique expertise and regional knowledge 
              to deliver exceptional flooring solutions.
            </p>
          </div>
        </motion.div>

        {/* Company Filter */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mil-filter-buttons mil-center mil-mb-50"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
                margin: "0 auto",
                maxWidth: "1000px"
              }}
            >
              {companyNames
                .filter(
                  (companyId) =>
                    companyId === "all" || companyTitles[companyId],
                )
                .map((companyId, index) => (
                  <motion.button
                    key={companyId}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`mil-filter-btn ${activeCompany === companyId ? "mil-active" : ""}`}
                    style={{
                      padding: "12px 20px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      backgroundColor: activeCompany === companyId ? "#C2D720" : "#f5f5f5",
                      color: activeCompany === companyId ? "#FFF" : "#333",
                      border: "none",
                      boxShadow: activeCompany === companyId ? "0 5px 15px rgba(194, 215, 32, 0.3)" : "none"
                    }}
                    onClick={() => handleCompanyChange(companyId)}
                  >
                    {companyTitles[companyId]}
                  </motion.button>
                ))}
            </motion.div>
          </div>
        </div>

        {/* Companies Grid */}
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCompany} // Force re-render on filter change

        >
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              variants={itemVariants}
              className={`${activeCompany === "all" ? "col-lg-6" : "col-lg-12"} mil-mb-60`}
            >
              <motion.div
                className={`mil-company-card ${activeCompany !== "all" ? "mil-single-view" : ""}`}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.4s ease",
                  border: "none",
                  height: "100%",
                  backgroundColor: "#fff",
                  marginTop: activeCompany !== "all" ? "20px" : "10px"
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.1)" 
                }}
              >
                <div className="row g-0 h-100">
                  <div
                    className={`${activeCompany === "all" ? "col-12" : "col-lg-5"}`}
                    style={{
                      background: "#f9f9f9",
                      display: "flex",
                      flexDirection: "column",
                      padding: "25px"
                    }}
                  >
                    <div
                      className="mil-company-image"
                      style={{
                        minHeight: "150px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        paddingTop:
                          company.id === "flooring-solutions" ||
                          company.id === "gwc-interiors"
                            ? "20px"
                            : "0",
                      }}
                    >
                      <Image
                        src={
                          company.image.startsWith("/")
                            ? company.image
                            : `/${company.image}`
                        }
                        alt={company.title}
                        width={company.id === "floorsol" ? 150 : 200}
                        height={company.id === "floorsol" ? 100 : 150}
                        className="mil-company-img"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight:
                            company.id === "floorsol" ? "100px" : "150px",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                    
                    {/* Visit Us Button and Highlights */}
                    {activeCompany !== "all" && companyWebsites[company.id] && (
                      <>
                        <div
                          style={{
                            textAlign: "center",
                            marginTop: "25px",
                            marginBottom: "25px",
                          }}
                        >
                          <motion.a
                            href={companyWebsites[company.id]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mil-link mil-upper"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#C2D720",
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Visit Website
                            <span className="mil-arrow">
                              <img src="/img/icons/1.svg" alt="arrow" />
                            </span>
                          </motion.a>
                        </div>
                        
                        {companyHighlights[company.id] && (
                          <div
                            style={{
                              textAlign: "center",
                              padding: "25px",
                              background: "#fff",
                              borderRadius: "12px",
                              marginTop: "10px",
                              boxShadow: "0 3px 15px rgba(0,0,0,0.03)",
                              border: "1px solid #f0f0f0",
                              flex: "1"
                            }}
                          >
                            <div
                              style={{
                                fontSize: "40px",
                                fontWeight: "700",
                                color: "#C2D720",
                                marginBottom: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px"
                              }}
                            >
                              <span>{new Date().getFullYear() -
                                companyHighlights[company.id].yearsFounded}</span>
                              <span style={{ fontSize: "20px", color: "#666" }}>+</span>
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#666",
                                marginBottom: "20px",
                                fontWeight: "500"
                              }}
                            >
                              Years of Excellence
                            </div>
                            <div
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                color: "#333",
                                lineHeight: "1.5",
                                marginBottom: "15px"
                              }}
                            >
                              {companyHighlights[company.id].highlight}
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                color: "#666",
                                lineHeight: "1.5",
                                padding: "10px",
                                background: "#f9f9f9",
                                borderRadius: "6px",
                                display: "inline-block"
                              }}
                            >
                              <strong>Specialty:</strong> {companyHighlights[company.id].specialty}
                            </div>
                            
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div
                    className={`${activeCompany === "all" ? "col-12" : "col-lg-7"}`}
                  >
                    <div
                      className={`mil-company-content ${activeCompany !== "all" ? "mil-single-content" : ""}`}
                      style={{
                        padding: "30px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <div className="mil-company-header">
                        <div style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "space-between",
                          marginBottom: "10px" 
                        }}>
                          <h3 className="mil-company-title" style={{ margin: 0 }}>{company.title}</h3>
                          {activeCompany === "all" && companyWebsites[company.id] && (
                            <motion.a
                              href={companyWebsites[company.id]}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              style={{
                                fontSize: "12px",
                                textTransform: "uppercase",
                                fontWeight: "600",
                                color: "#C2D720",
                                textDecoration: "none"
                              }}
                            >
                              Visit →
                            </motion.a>
                          )}
                        </div>
                        <p className="mil-company-location" style={{ 
                          fontWeight: "500", 
                          color: "#666",
                          fontSize: "14px",
                          marginBottom: "15px" 
                        }}>
                          <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            style={{ marginRight: "5px" }}
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {company.location}
                        </p>
                        <p className="mil-company-description" style={{ marginBottom: "20px" }}>
                          {company.description}
                        </p>
                      </div>

                      {/* Services */}
                      <div className="mil-company-services" style={{ marginBottom: "20px" }}>
                        <h4 style={{ fontSize: "18px", marginBottom: "15px", display: "flex", alignItems: "center" }}>
                          <svg 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            style={{ marginRight: "8px" }}
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          Services
                        </h4>
                        <ul style={{ 
                          listStyleType: "none", 
                          padding: 0, 
                          display: "flex", 
                          flexWrap: "wrap", 
                          gap: "8px",
                          margin: 0
                        }}>
                          {company.services?.map((service, index) => (
                            <li 
                              key={index} 
                              style={{ 
                                padding: "6px 12px", 
                                background: "#f5f7fa", 
                                borderRadius: "30px", 
                                fontSize: "13px",
                                borderLeft: "3px solid #C2D720"
                              }}
                            >
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* President Information - Only show in single company view */}
                      {activeCompany !== "all" && companyHighlights[company.id]?.president && (
                        <div className="mil-company-president" style={{ marginBottom: "20px" }}>
                          <h4 style={{ fontSize: "18px", marginBottom: "15px", display: "flex", alignItems: "center" }}>
                            <svg 
                              width="18" 
                              height="18" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              style={{ marginRight: "8px" }}
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Company President
                          </h4>
                          
                          <div style={{ 
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            padding: "15px",
                            background: "#f9f9f9",
                            borderRadius: "8px",
                            border: "1px solid #eee"
                          }}>
                            <div style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              backgroundColor: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "2px solid #C2D720"
                            }}>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#666"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </div>
                            
                            <div>
                              <div style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                color: "#333",
                                marginBottom: "4px"
                              }}>
                                {companyHighlights[company.id].president.name}
                              </div>
                              
                              <a
                                href={`mailto:${companyHighlights[company.id].president.email}`}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "6px",
                                  fontSize: "14px",
                                  color: "#C2D720",
                                  textDecoration: "none",
                                  fontWeight: "500"
                                }}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                {companyHighlights[company.id].president.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Projects Preview */}
                      {company.projects && company.projects.length > 0 && (
                        <div className="mil-company-projects" style={{ marginTop: "auto" }}>
                          <h4 style={{ 
                            fontSize: "18px", 
                            marginBottom: "15px", 
                            display: "flex", 
                            alignItems: "center" 
                          }}>
                            <svg 
                              width="18" 
                              height="18" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              style={{ marginRight: "8px" }}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            Featured Projects
                          </h4>
                          <div className="row g-4">
                            {company.projects
                              .slice(0, 2)
                              .map((project, index) => (
                                <div
                                  key={index}
                                  className={`${activeCompany === "all" ? "col-12" : "col-md-6"}`}
                                >
                                  <div 
                                    style={{
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      position: "relative",
                                      height: activeCompany === "all" ? "120px" : "140px",
                                      boxShadow: "0 3px 10px rgba(0,0,0,0.06)"
                                    }}
                                  >
                                    <Image
                                      src={project.image}
                                      alt={project.title}
                                      width={400}
                                      height={300}
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesContent;
