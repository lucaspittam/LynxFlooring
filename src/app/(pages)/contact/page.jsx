import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";
import LocationCard from "../../../components/LocationCard";
import styles from "./contact.module.css";

import Link from "next/link";
import USMap from "../../../components/USMap";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const Contact = () => {
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
      <PageBanner
        pageTitle={"We'd love to talk"}
        breadTitle={"Contact"}
        bgImage={"/img/photo/header4.jpg"}
      />

      {/* contact */}
      <section className="mil-relative" style={{ backgroundColor: "#fff" }}>
        <div className="container" style={{ padding: "60px 0" }}>
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "40px",
                  borderRadius: "12px",
                  border: "1px solid #eee",
                }}
              >
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
                  get the conversation started. Especially about designing
                  something, or something we've designed.
                </p>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#C2D720",
                    marginBottom: "25px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  Interested in joining the team? Browse our current openings.
                </p>
                <Link
                  href="/join"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#C2D720",
                    color: "#262626",
                    padding: "14px 28px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                    marginBottom: "30px",
                  }}
                >
                  JOIN US
                  <span style={{ marginLeft: "10px" }}>
                    <img
                      src="/img/icons/1.svg"
                      alt="arrow"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </span>
                </Link>

                {/* Contact Info */}
                <div
                  style={{
                    marginTop: "30px",
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
                      Info@lynxflooring.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "40px",
                  borderRadius: "12px",
                  border: "1px solid #eee",
                }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}

      {/* map and locations */}
      <div
        style={{
          width: "100%",
          height: "700px",
          background: "linear-gradient(to bottom, #fff 0%, #f8f9fa 100%)",
          position: "relative",
          padding: "40px 0 0",
        }}
      >
        {/* Title Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#262626",
              marginBottom: "15px",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Our Locations
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#C2D720",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          ></div>
        </div>

        {/* Map Container */}
        <div
          style={{
            width: "100%",
            height: "calc(100% - 100px)",
            background: "#242424",
            position: "relative",
            borderRadius: "20px 20px 0 0",
            overflow: "hidden",
            boxShadow: "0 -10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <USMap locations={locations} />
          {/* Gradient Overlays */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(36,36,36,0.1) 0%, rgba(36,36,36,0.4) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(0deg, rgba(36,36,36,0.9) 0%, rgba(36,36,36,0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(180deg, rgba(36,36,36,0.9) 0%, rgba(36,36,36,0) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>
      {/* map and locations end */}
    </>
  );
};
export default Contact;
