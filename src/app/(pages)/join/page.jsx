import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";
import Link from "next/link";

export const metadata = {
    title: {
        default: "Join Us",
    },
    description: "Join the Lynx Flooring family - Career opportunities and acquisition partnerships",
}

const JoinUs = () => {
    return (
        <>
            <PageBanner pageTitle={"Join Our Family"} breadTitle={"Join Us"} bgImage={"/img/photo/12.jpg"} />

            {/* join sections */}
            <section className="mil-relative" style={{ backgroundColor: '#fff' }}>
                <div className="container" style={{ padding: '60px 0' }}>
                    <div className="row justify-content-between">
                        {/* Careers Section */}
                        <div className="col-lg-6">
                            <div style={{ 
                                backgroundColor: '#f8f9fa',
                                padding: '40px',
                                borderRadius: '12px',
                                border: '1px solid #eee',
                                height: '100%'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '25px',
                                    gap: '15px'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: '#C2D720',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
                                            <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                                        </svg>
                                    </div>
                                    <h2 className="mil-upper" style={{ 
                                        fontSize: '2rem',
                                        color: '#262626',
                                        letterSpacing: '0.5px',
                                        fontWeight: '600',
                                        margin: 0
                                    }}>Join Our Team</h2>
                                </div>
                                
                                <p style={{ 
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6',
                                    color: '#666',
                                    marginBottom: '25px'
                                }}>Looking for a rewarding career in the flooring industry? We're always seeking talented individuals who share our passion for excellence and innovation.</p>

                                <div style={{ 
                                    width: '40px',
                                    height: '2px',
                                    backgroundColor: '#C2D720',
                                    marginBottom: '25px'
                                }}></div>

                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: '#262626',
                                    marginBottom: '15px',
                                    fontWeight: '500'
                                }}>Why Join Us?</h3>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    marginBottom: '30px'
                                }}>
                                    {['Professional Growth', 'Competitive Benefits', 'Innovative Environment', 'Industry Leadership'].map((item, index) => (
                                        <li key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '12px',
                                            color: '#444',
                                            fontSize: '1rem'
                                        }}>
                                            <span style={{
                                                color: '#C2D720',
                                                marginRight: '10px',
                                                fontWeight: 'bold'
                                            }}>›</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <ContactForm formType="careers" />
                            </div>
                        </div>

                        {/* Acquisition Section */}
                        <div className="col-lg-6">
                            <div style={{ 
                                backgroundColor: '#f8f9fa',
                                padding: '40px',
                                borderRadius: '12px',
                                border: '1px solid #eee',
                                height: '100%'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '25px',
                                    gap: '15px'
                                }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: '#C2D720',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="2">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                        </svg>
                                    </div>
                                    <h2 className="mil-upper" style={{ 
                                        fontSize: '2rem',
                                        color: '#262626',
                                        letterSpacing: '0.5px',
                                        fontWeight: '600',
                                        margin: 0
                                    }}>Sell Your Company</h2>
                                </div>

                                <p style={{ 
                                    fontSize: '1.1rem',
                                    lineHeight: '1.6',
                                    color: '#666',
                                    marginBottom: '25px'
                                }}>Own a successful flooring company? Partner with Lynx Flooring to take your business to the next level while preserving your legacy.</p>

                                <div style={{ 
                                    width: '40px',
                                    height: '2px',
                                    backgroundColor: '#C2D720',
                                    marginBottom: '25px'
                                }}></div>

                                <h3 style={{
                                    fontSize: '1.3rem',
                                    color: '#262626',
                                    marginBottom: '15px',
                                    fontWeight: '500'
                                }}>Why Partner With Us?</h3>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    marginBottom: '30px'
                                }}>
                                    {[
                                        'Fair Valuation',
                                        'Smooth Transition',
                                        'Continued Legacy',
                                        'Industry Expertise'
                                    ].map((item, index) => (
                                        <li key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '12px',
                                            color: '#444',
                                            fontSize: '1rem'
                                        }}>
                                            <span style={{
                                                color: '#C2D720',
                                                marginRight: '10px',
                                                fontWeight: 'bold'
                                            }}>›</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <ContactForm formType="acquisition" />
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