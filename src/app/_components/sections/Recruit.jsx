"use client";

import Link from "next/link";
import Image from "next/image";
import ModernBackground from "../../_common/modernBackgrounds";

const RecruitSection = () => {
  return (
    <section className="mil-relative">
      <div className="container mil-p-120-90">
        <ModernBackground type="grid" softened={true} />
        
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mil-upper mil-mb-30">JOIN OUR TEAM</h2>
            <p className="mil-mb-50">
              Looking for a rewarding career in the flooring industry? We're seeking talented professionals 
              who share our passion for excellence and innovation.
            </p>
            <Link href="/join" className="mil-button mil-upper">
              Apply Today
              <span className="mil-arrow">
                <Image src="/img/icons/1.svg" alt="arrow" width={14} height={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitSection; 