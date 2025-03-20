"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative">
        <img src="/img/photo/4.jpg" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

        <div className="mil-overlay" />
        <div className="container mil-p-60-60">
            <div className="mil-background-grid" />

            <div className="row">
                <div className="col-12">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-lg-6">
                            <h2 className="mil-light" style={{"fontSize": "64px", "color": "#C5E11E", "marginBottom": "0"}}>Get our latest news</h2>
                            <h3 className="mil-light" style={{"fontSize": "42px", "color": "#C5E11E", "marginBottom": "30px"}}>Sign Up for our General Newsletter</h3>
                            <p className="mil-text-sm mil-light-soft" style={{"fontStyle": "italic", "marginBottom": "40px", "opacity": "0.7"}}>
                                By submitting your email address, you are giving express consent to receive communications from Lynx Flooring. You may unsubscribe at anytime.
                            </p>
                            <div className="mil-newsletter-form">
                                <div style={{"position": "relative", "marginBottom": "30px"}}>
                                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "5px"}}>
                                        <label style={{"color": "rgba(255,255,255,0.7)"}}>Email address</label>
                                        <button className="mil-text-sm" style={{
                                            "background": "transparent",
                                            "border": "none",
                                            "color": "#C5E11E",
                                            "cursor": "pointer",
                                            "fontSize": "18px",
                                            "padding": "0"
                                        }}>Submit</button>
                                    </div>
                                    <input type="email" className="mil-text-sm mil-light-soft" style={{
                                        "background": "transparent",
                                        "border": "none",
                                        "borderBottom": "1px solid rgba(255,255,255,0.4)",
                                        "color": "white",
                                        "width": "100%",
                                        "padding": "5px 0"
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="row">
                                <div className="col-6">
                                    <span className="mil-suptitle mil-light mil-upper" style={{"opacity": "0.7", "marginBottom": "20px", "display": "block"}}>Contact Us</span>
                                    <p className="mil-text-sm mil-light-soft" style={{"opacity": "0.7"}}>123 Main Street<br/>Suite 100<br/>Dallas, TX 75201<br/>(214) 555-0123</p>
                                </div>
                                <div className="col-6">
                                    <span className="mil-suptitle mil-light mil-upper" style={{"opacity": "0.7", "marginBottom": "20px", "display": "block"}}>Follow Us</span>
                                    <p className="mil-text-sm mil-light-soft">
                                        <a href="https://linkedin.com/company/lynx-flooring" target="_blank" rel="noopener noreferrer" className="mil-hover-link" style={{"opacity": "0.7"}}>
                                            LinkedIn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="mil-footer-bottom" style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                <div>
                    <p className="mil-light-soft mil-mb-15">© 2025 Lynx Flooring.</p>
                    <p className="mil-light-soft mil-mb-15" style={{"fontSize": "12px"}}>Website by Lucas Pittam</p>
                </div>
                <Link href="/" className="mil-footer-logo">
                    <img src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} style={{"width": "250px"}} />
                </Link>
            </div>
        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
