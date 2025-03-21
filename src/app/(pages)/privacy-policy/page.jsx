import React from 'react';
import DefaultHeader from '../../_layouts/headers/LayoutDefault';
import PageBanner from '@components/PageBanner';

const PrivacyPolicy = () => {
  return (
    <>
      <DefaultHeader />
      
      <PageBanner 
        pageTitle="Privacy Policy"
        breadTitle="Privacy Policy"
        bgImage="/img/photo/12.jpg"
      />

      <div className="mil-content">
        <div className="container mil-p-120-60">
          <div className="mil-text-content">
            <p className="mil-text-lg mil-dark-soft mil-mb-30">
              This Privacy Policy describes how Lynx Flooring collects, uses, and discloses your Personal Information 
              when you visit or make a purchase from our website.
            </p>

            <section className="mil-mb-60">
              <h2 className="mil-h4 mil-dark mil-mb-30">
                Collecting Personal Information
              </h2>
              <p className="mil-text-sm mil-dark-soft mil-mb-30">
                When you visit our website, we collect certain information about your device, your interaction with the site, 
                and information necessary to process your purchases. We may also collect additional information if you contact us 
                for support.
              </p>

              <div className="mil-p-30 mil-mb-30" style={{ backgroundColor: '#f8f9fa' }}>
                <h3 className="mil-h6 mil-dark mil-mb-15">
                  Device information:
                </h3>
                <ul className="mil-list mil-dark-soft mil-text-sm">
                  <li className="mil-mb-15">Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information</li>
                  <li className="mil-mb-15">Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage</li>
                  <li>Source of collection: Collected automatically when you access our Site</li>
                </ul>
              </div>

              <div className="mil-p-30" style={{ backgroundColor: '#f8f9fa' }}>
                <h3 className="mil-h6 mil-dark mil-mb-15">
                  Order information:
                </h3>
                <ul className="mil-list mil-dark-soft mil-text-sm">
                  <li className="mil-mb-15">Examples: name, billing address, shipping address, payment information, email address</li>
                  <li className="mil-mb-15">Purpose: to process your orders and provide you with invoices and order confirmations</li>
                  <li>Source: collected from you during checkout</li>
                </ul>
              </div>
            </section>

            <section className="mil-mb-60">
              <h2 className="mil-h4 mil-dark mil-mb-30">
                Using Personal Information
              </h2>
              <p className="mil-text-sm mil-dark-soft mil-mb-30">
                We use the Personal Information we collect to provide and improve our services, to process your orders, 
                and to communicate with you.
              </p>
              <ul className="mil-p-30 mil-mb-30" style={{ backgroundColor: '#f8f9fa' }}>
                <li>Prevent and detect fraud</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Improve our services</li>
              </ul>
            </section>

            <section className="mil-mb-60">
              <h2 className="mil-h4 mil-dark mil-mb-30">
                Sharing Personal Information
              </h2>
              <div className="mil-p-30" style={{ backgroundColor: '#f8f9fa' }}>
                We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you.
              </div>
            </section>

            <section className="mil-mb-60">
              <h2 className="mil-h4 mil-dark mil-mb-30">
                Advertising Opt-Out
              </h2>
              <div className="mil-p-30" style={{ backgroundColor: '#f8f9fa' }}>
                <ul className="mil-list mil-dark-soft mil-text-sm">
                  <li className="mil-mb-15 hover:text-blue-600 transition-colors">
                    <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">
                      <span className="font-semibold">FACEBOOK</span> - Ad Settings
                    </a>
                  </li>
                  <li className="mil-mb-15 hover:text-blue-600 transition-colors">
                    <a href="https://www.google.com/settings/ads/anonymous" target="_blank" rel="noopener noreferrer">
                      <span className="font-semibold">GOOGLE</span> - Ad Settings
                    </a>
                  </li>
                  <li className="mil-mb-15 hover:text-blue-600 transition-colors">
                    <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank" rel="noopener noreferrer">
                      <span className="font-semibold">BING</span> - Ad Settings
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mil-mb-60">
              <h2 className="mil-h4 mil-dark mil-mb-30">
                Contact
              </h2>
              <div className="mil-p-30" style={{ backgroundColor: '#f8f9fa' }}>
                <p className="font-semibold text-base mb-1">Lynx Flooring</p>
                <p className="mb-1">[Your Address Here]</p>
                <p className="text-blue-600 hover:text-blue-700 transition-colors">
                  <a href="mailto:[Your Email Here]">[Your Email Here]</a>
                </p>
              </div>
            </section>

            <div className="mil-divider mil-mb-30"></div>
            <div className="mil-text-sm mil-dark-soft mil-center">
              <p>Last updated: [Current Date]</p>
              <p>© 2024 Lynx Flooring. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 