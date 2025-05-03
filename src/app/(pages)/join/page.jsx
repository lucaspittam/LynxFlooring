"use client";

import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@appComponents/PageBanner";
import ContactForm from "@appComponents/ContactForm";
import Link from "next/link";

const JoinUs = () => {
  return (
    <>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .join-intro-text {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            padding: 0 10px !important;
            text-align: left !important;
          }
        }
      `}</style>
      <PageBanner
        pageTitle={"Join Our Family"}
        breadTitle={"Join Us"}
        bgImage={"/img/photo/header3.jpg"}
      />

      {/* join sections */}
      <section className="mil-relative" style={{ backgroundColor: "#fff" }}>
        <div className="container" style={{ padding: "100px 0 40px" }}>
          <div className="row justify-content-between">
            <div
              className="col-12 text-center"
              style={{ marginBottom: "60px" }}
            >
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "rgba(194, 215, 32, 0.7)",
                  margin: "0 auto 25px",
                }}
              ></div>
              <p
                className="join-intro-text"
                style={{
                  fontSize: "1.1rem",
                  maxWidth: "700px",
                  margin: "0 auto",
                  color: "#555",
                  lineHeight: "1.7",
                }}
              >
                Whether you're seeking your next professional opportunity or
                considering a business partnership, Lynx Flooring offers
                pathways for meaningful growth and collaboration.
              </p>
            </div>

            {/* Careers Section */}
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: "#fcfcfc",
                  padding: "45px 40px 40px",
                  borderRadius: "8px",
                  border: "1px solid #f0f0f0",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    width: "3px",
                    height: "40px",
                    background: "rgba(194, 215, 32, 0.7)",
                  }}
                ></div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "25px",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(194, 215, 32, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#262626"
                      strokeWidth="1.5"
                    >
                      <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.8rem",
                      color: "#262626",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    Join Our Team
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    color: "#666",
                    marginBottom: "30px",
                  }}
                >
                  Looking for a rewarding career in the flooring industry? We're
                  seeking talented professionals who share our passion for
                  excellence and innovation.
                </p>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "#262626",
                    marginBottom: "20px",
                    fontWeight: "600",
                  }}
                >
                  Why Join Us?
                </h3>

                <div style={{ marginBottom: "40px" }}>
                  {[
                    {
                      title: "Professional Growth",
                      description:
                        "Continuous learning and advancement opportunities",
                    },
                    {
                      title: "Competitive Benefits",
                      description:
                        "Comprehensive packages that value your contributions",
                    },
                    {
                      title: "Innovative Environment",
                      description:
                        "Work with cutting-edge technologies and approaches",
                    },
                    {
                      title: "Industry Leadership",
                      description:
                        "Be part of a company that's shaping the future of flooring",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: index < 3 ? "16px" : 0,
                        paddingBottom: index < 3 ? "16px" : 0,
                        borderBottom: index < 3 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(194, 215, 32, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#262626"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: "600",
                            margin: "0 0 4px 0",
                            color: "#333",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "#777",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "30px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#262626",
                      marginBottom: "25px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Apply Today
                  </h3>
                  <div>
                    <ContactForm formType="careers" />
                  </div>
                </div>
              </div>
            </div>

            {/* Acquisition Section */}
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: "#fcfcfc",
                  padding: "45px 40px 40px",
                  borderRadius: "8px",
                  border: "1px solid #f0f0f0",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    left: 0,
                    width: "3px",
                    height: "40px",
                    background: "rgba(194, 215, 32, 0.7)",
                  }}
                ></div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "25px",
                    gap: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(194, 215, 32, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#262626"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.8rem",
                      color: "#262626",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    Sell Your Company
                  </h2>
                </div>

                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    color: "#666",
                    marginBottom: "30px",
                  }}
                >
                  Own a successful flooring company? Partner with Lynx Flooring
                  to elevate your business to the next level while preserving
                  your legacy.
                </p>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "#262626",
                    marginBottom: "20px",
                    fontWeight: "600",
                  }}
                >
                  Why Partner With Us?
                </h3>

                <div style={{ marginBottom: "40px" }}>
                  {[
                    {
                      title: "Fair Valuation",
                      description:
                        "Market-competitive offers based on a thorough assessment",
                    },
                    {
                      title: "Smooth Transition",
                      description:
                        "Expertly managed integration process with minimal disruption",
                    },
                    {
                      title: "Continued Legacy",
                      description:
                        "We honor and build upon your company's heritage and reputation",
                    },
                    {
                      title: "Industry Expertise",
                      description:
                        "Benefit from our proven track record and deep market knowledge",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: index < 3 ? "16px" : 0,
                        paddingBottom: index < 3 ? "16px" : 0,
                        borderBottom: index < 3 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(194, 215, 32, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#262626"
                          strokeWidth="2.5"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: "600",
                            margin: "0 0 4px 0",
                            color: "#333",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "#777",
                            margin: 0,
                            lineHeight: "1.5",
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    borderTop: "1px solid #f0f0f0",
                    paddingTop: "30px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#262626",
                      marginBottom: "25px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    Start the Conversation
                  </h3>
                  <div>
                    <ContactForm formType="acquisition" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Added Contact Info Section */}
        <div className="container" style={{ padding: "0 0 40px" }}>
            <div className="row justify-content-center">
                <div className="col-lg-10"> 
                    <div
                      style={{
                        backgroundColor: "#f8f9fa",
                        padding: "40px",
                        borderRadius: "12px",
                        border: "1px solid #eee",
                        marginTop: "0"
                      }}
                    >
                      <div className="row align-items-center"> 
                          <div className="col-md-7"> 
                              <h2
                                className="mil-upper"
                                style={{
                                  fontSize: "2.2rem",
                                  marginBottom: "20px",
                                  color: "#262626",
                                  letterSpacing: "0.5px",
                                  fontWeight: "600",
                                }}
                              >
                                We'd love to talk
                              </h2>
                              <p
                                style={{
                                  fontSize: "1rem",
                                  lineHeight: "1.6",
                                  color: "#666",
                                  marginBottom: "25px",
                                }}
                              >
                                Have a question? We'd love to hear from you. Send us a note to
                                get the conversation started.
                              </p>
                              <div
                                style={{
                                  width: "40px",
                                  height: "2px",
                                  backgroundColor: "#C2D720",
                                  marginBottom: "25px",
                                }}
                              ></div>
                          </div>

                          <div className="col-md-5">
                              <div
                                style={{
                                  backgroundColor: "white",
                                  padding: "25px",
                                  borderRadius: "8px",
                                  border: "1px solid #eee",
                                }}
                              >
                                <div style={{ marginBottom: "20px" }}>
                                  <h6
                                    style={{
                                      fontSize: "0.85rem",
                                      fontWeight: "600",
                                      textTransform: "uppercase",
                                      letterSpacing: "1px",
                                      color: "#262626",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    Phone
                                  </h6>
                                  <p
                                    style={{
                                      fontSize: "1.1rem",
                                      color: "#262626",
                                      margin: 0,
                                      fontWeight: "500",
                                    }}
                                  >
                                    (416) 323-3512
                                  </p>
                                </div>
                                <div>
                                  <h6
                                    style={{
                                      fontSize: "0.85rem",
                                      fontWeight: "600",
                                      textTransform: "uppercase",
                                      letterSpacing: "1px",
                                      color: "#262626",
                                      marginBottom: "10px",
                                    }}
                                  >
                                    Email
                                  </h6>
                                  <p
                                    style={{
                                      fontSize: "1.1rem",
                                      color: "#262626",
                                      margin: 0,
                                      fontWeight: "500",
                                    }}
                                  >
                                    ma@lynxequity.com
                                  </p>
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Added Contact Info Section */}

      </section>
      {/* join sections end */}
    </>
  );
};

export default JoinUs;
