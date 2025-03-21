"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative" style={{
        "backgroundColor": "#262626",
        "borderTop": "2px solid #C2D720"
    }}>
        <div className="container mil-p-30-20">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-3">
                    <Link href="/contact" style={{
                        "backgroundColor": "#C2D720",
                        "color": "#262626",
                        "padding": "15px 25px",
                        "textDecoration": "none",
                        "fontSize": "14px",
                        "fontWeight": "500",
                        "display": "inline-block",
                        "textTransform": "uppercase",
                        "letterSpacing": "1px"
                    }}>Contact Us</Link>
                </div>
                <div className="col-lg-4" style={{"textAlign": "center"}}>
                    <p className="mil-light-soft" style={{"opacity": "0.7"}}>
                        692 Queen St E #205<br/>
                        Toronto, ON M4M 1G9
                    </p>
                </div>
                <div className="col-lg-3" style={{"textAlign": "right"}}>
                    <a href="https://linkedin.com/company/lynx-flooring" target="_blank" rel="noopener noreferrer" style={{"textDecoration": "none"}}>
                        <i className="fab fa-linkedin" style={{"fontSize": "24px", "color": "#fff"}}></i>
                    </a>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{"borderTop": "1px solid rgba(255,255,255,0.1)"}}>
            <div className="container">
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "15px 0"}}>
                    <p className="mil-light-soft" style={{"margin": "0", "opacity": "0.7", "flex": "1", "textAlign": "center"}}>© 2025 Lynx Flooring.</p>
                    <Link href="/privacy-policy" className="mil-light-soft" style={{"textDecoration": "none", "opacity": "0.7", "flex": "1", "textAlign": "center"}}>Privacy Policy</Link>
                    <Link href="/terms-conditions" className="mil-light-soft" style={{"textDecoration": "none", "opacity": "0.7", "flex": "1", "textAlign": "center"}}>Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
