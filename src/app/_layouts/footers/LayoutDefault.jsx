"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
      {/* footer */}
      <footer className="mil-relative">
        <div
          style={{
            background: "linear-gradient(to bottom, #262626, #1a1a1a)",
            borderTop: "2px solid #C2D720",
            padding: "60px 0 30px",
          }}
        >
          <div className="container">
            {/* Main Footer Content */}
            <div className="row justify-content-between mb-5">
              {/* Logo and About */}
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Link href="/" style={{ display: "block" }}>
                    <img
                      src={AppData.footer.logo.image}
                      alt={AppData.footer.logo.alt}
                      style={{
                        width: "220px",
                        height: "auto",
                        filter: "brightness(0) invert(1)",
                        display: "block",
                      }}
                    />
                  </Link>
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      background: "rgba(255,255,255,0.1)",
                      margin: "1px 0",
                    }}
                  ></div>
                  <a
                    href="https://www.starnetflooring.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      padding: "15px 0",
                      marginTop: "75px",
                    }}
                  >
                    <img
                      src="/img/logo/starnet_logo.png"
                      alt="Starnet Flooring"
                      style={{
                        width: "180px",
                        height: "auto",
                        filter: "brightness(0) invert(1)",
                        display: "block",
                      }}
                    />
                  </a>
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <a
                    href={AppData.social[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      color: "#fff",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "#C2D720")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        "rgba(255,255,255,0.1)")
                    }
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-lg-3 mb-4 mb-lg-0">
                <h4
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "20px",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                >
                  Quick Links
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "30px",
                      height: "2px",
                      backgroundColor: "#C2D720",
                    }}
                  ></span>
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {AppData.footer.menu.map((item, index) => (
                    <li key={index} style={{ marginBottom: "12px" }}>
                      <Link
                        href={item.link}
                        style={{
                          color: "#999",
                          textDecoration: "none",
                          fontSize: "1rem",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#C2D720";
                          e.currentTarget.style.paddingLeft = "5px";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "#999";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        <span style={{ fontSize: "12px" }}>›</span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-lg-4">
                <h4
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "20px",
                    position: "relative",
                    paddingBottom: "15px",
                  }}
                >
                  Contact Us
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "30px",
                      height: "2px",
                      backgroundColor: "#C2D720",
                    }}
                  ></span>
                </h4>
                <div
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px",
                    padding: "25px",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(194,215,32,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: "#C2D720" }}
                      ></i>
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#999" }}>
                        692 Queen St E #205
                        <br />
                        Toronto, ON M4M 1G9
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(194,215,32,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="fas fa-phone"
                        style={{ color: "#C2D720" }}
                      ></i>
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#999" }}>(416) 323-3512</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(194,215,32,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className="fas fa-envelope"
                        style={{ color: "#C2D720" }}
                      ></i>
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#999" }}>
                        Info@lynxflooring.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>
                {AppData.footer.copy}
              </p>
              <div>
                <Link
                  href="/privacy-policy"
                  style={{
                    color: "#666",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#C2D720")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#666")}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
