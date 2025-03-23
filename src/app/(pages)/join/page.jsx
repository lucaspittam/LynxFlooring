import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Join Us",
  },
  description:
    "Join the Lynx Flooring family - Career opportunities and acquisition partnerships",
};

const JoinUs = () => {
  return (
    <>
      <PageBanner
        pageTitle={"Join Our Family"}
        breadTitle={"Join Us"}
        bgImage={"/img/photo/header3.jpg"}
      />

      {/* join sections */}
      <section className="mil-relative" style={{ backgroundColor: "#fff" }}>
        <div className="container" style={{ padding: "100px 0 80px" }}>
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
            <div className="col-lg-6" style={{ marginBottom: "30px" }}>
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
      </section>
      {/* join sections end */}
    </>
  );
};

export default JoinUs;
