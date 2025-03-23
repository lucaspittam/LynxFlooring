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
          {/* Modern background effect - only show if pattern is not 'none' */}
          {Data.background?.pattern !== "none" && (
            <ModernBackground type={Data.background?.pattern} softened={true} />
          )}

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4">
              <div className="mil-ideas-intro">
                <span
                  className={`mil-suptitle mil-upper ${styles.subtitleText}`}
                >
                  {Data.subtitle}
                </span>
                <h2 className={`mil-upper ${styles.titleReveal}`}>
                  {Data.title}
                </h2>
                <Link href={Data.button.link} className={styles.ctaButton}>
                  <span className={styles.buttonText}>{Data.button.label}</span>
                  <span className={styles.arrowIcon}>
                    <Image
                      src="/img/icons/1.svg"
                      alt="arrow"
                      width={14}
                      height={14}
                    />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className={styles.description}>{Data.description}</p>
                </div>

                <div className="col-md-6">
                  <div className={styles.featuresWrapper}>
                    {Data.items.map((item, key) => (
                      <div
                        className={styles.featureItem}
                        key={`ideas-item-${key}`}
                      >
                        <Link
                          href={item.link}
                          className={`d-flex align-items-center ${styles.cardShadow}`}
                        >
                          <div
                            className={`${styles.gradientBg} ${styles.scaleOnHover}`}
                          >
                            <Image
                              src={item.icon}
                              alt={item.label}
                              width={18}
                              height={18}
                              className={styles.featureIcon}
                            />
                          </div>
                          <h6
                            className={`mil-upper ${styles.featureTitle} ms-3`}
                          >
                            {item.label}
                          </h6>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
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
