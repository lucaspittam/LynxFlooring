'use client';

import dynamic from 'next/dynamic';

const TeamMasonry = dynamic(() => import("./TeamMasonry"), { ssr: false });

const sampleTeamData = [
  {
    name: "John Smith",
    role: "CEO",
    image: "/img/team/1.jpg",
    social: [
      { platform: "LinkedIn", link: "https://linkedin.com" },
      { platform: "Twitter", link: "https://twitter.com" }
    ]
  },
  {
    name: "Sarah Johnson",
    role: "Sales Director",
    image: "/img/team/2.jpg",
    social: [
      { platform: "LinkedIn", link: "https://linkedin.com" }
    ]
  },
  {
    name: "Michael Brown",
    role: "Operations Manager",
    image: "/img/team/3.jpg",
    social: [
      { platform: "LinkedIn", link: "https://linkedin.com" },
      { platform: "Twitter", link: "https://twitter.com" }
    ]
  }
];

export default function TeamSection() {
  return (
    <div className="container mil-content-frame mil-appearance mil-p-120-90">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <TeamMasonry teamData={sampleTeamData} />
        </div>
      </div>
    </div>
  );
} 