import Data from "@data/sections/ideas.json";
import Link from "next/link";
import Image from "next/image";
import ModernBackground from "../../_common/modernBackgrounds";
import styles from "./Ideas.module.css";

const IdeasSection = () => {
  return (
    <>
      {/* ideas */}
      <section className={`mil-relative ${styles.ideasSection}`}>
        <div className="container mil-p-0-30">
          {/* Removed the ModernBackground component for a cleaner look, can be re-added if needed */}
          <div className={`row justify-content-between align-items-stretch ${styles.contentRow}`}>
            {/* Left Column: Text Content */}
            <div className={`col-lg-6 ${styles.leftColumn}`}>
              {/* Reordered intro content slightly for better flow */}
              <span className={`mil-suptitle mil-upper mil-mb-30 ${styles.subtitleText}`}>
                {Data.subtitle}
              </span>
              <h2 className={`mil-upper mil-mb-30 ${styles.titleReveal}`}>
                {Data.title}
              </h2>
              <p className={`${styles.description} mil-mb-30`}>
                {Data.description}
              </p>
              <p className={`${styles.mission} mil-mb-30`}>
                {Data.mission}
              </p>
              {/* Updated Learn More Button */}
              <Link href={Data.button.link} className={`mil-button mil-button-rounded mil-button-lg ${styles.learnMoreButton}`}>
                <span className={styles.buttonText}>{Data.button.label}</span>
                <span className={styles.arrowIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
              </Link>
            </div>

            {/* Right Column: Feature Cards (e.g., Our Companies) */}
            <div className={`col-lg-5 ${styles.rightColumn}`}>
              {/* Wrapper for feature cards */}
              <div className={styles.featuresWrapper}>
                {Data.items.map((item, key) => (
                  // Updated structure for feature card link
                  <Link
                    href={item.link}
                    className={styles.featureCard}
                    key={`ideas-item-${key}`}
                  >
                    {/* Icon container */}
                    <div className={styles.cardIcon}>
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={28} // Slightly larger icon
                        height={28}
                      />
                    </div>
                    {/* Title container */}
                    <div className={styles.cardTextContent}>
                      <h5 className={`mil-upper ${styles.cardTitle}`}>
                        {item.label}
                      </h5>
                      {/* Optional: Add description if available in JSON */}
                      {/* {item.description && <p className={styles.cardDescription}>{item.description}</p>} */}
                    </div>
                    {/* Arrow container */}
                    <div className={styles.cardArrow}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ideas end */}
    </>
  );
};
export default IdeasSection;
