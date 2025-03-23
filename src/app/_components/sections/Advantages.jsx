"use client";

import Data from "@data/sections/advantages.json";
import ModernBackground from "../../_common/modernBackgrounds";

const AdvantagesSection = () => {
  return (
    <>
      {/* advantages */}
      <section
        className="mil-relative"
        style={{ marginTop: "40px", paddingTop: "20px" }}
      >
        <div className="container mil-p-90-40">
          {/* Modern background effect */}
          <ModernBackground type="wave" softened={true} />

          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-60">
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-20"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
                <h2
                  className="mil-upper mil-up mil-mb-20"
                  dangerouslySetInnerHTML={{ __html: Data.title }}
                />
                <p
                  className="mil-up"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />
              </div>
            </div>
            {Data.items.map((item, key) => (
              <div key={`advantages-item-${key}`} className="col-md-6 col-lg-3">
                <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-40">
                  <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                  <div className="mil-icon mil-icon-border mil-mb-20">
                    <img src="/img/icons/6.svg" alt="icon" />
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* advantages end */}
    </>
  );
};

export default AdvantagesSection;
