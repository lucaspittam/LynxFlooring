"use client";

import React from "react";

const TeamMasonry = ({ teamData = [] }) => {
  return (
    <div className="row">
      {teamData.map((member, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="mil-team-card mil-mb-60">
            <div className="mil-image-frame mil-mb-30">
              <img src={member.image} alt={member.name} />
            </div>
            <h4 className="mil-mb-10">{member.name}</h4>
            <p className="mil-text-sm mil-mb-15">{member.role}</p>
            <ul className="mil-social-icons">
              {member.social?.map((social, socialIndex) => (
                <li key={socialIndex}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className={`fab fa-${social.platform.toLowerCase()}`}
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMasonry;
