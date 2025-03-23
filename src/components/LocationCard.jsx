"use client";

import React from "react";
import styles from "./LocationCard.module.css";

const LocationCard = ({ city, state, url }) => {
  return (
    <a
      href={`https://${url}.lynxflooring.com`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.hoverBackground} />
      <div className={styles.contentWrapper}>
        <div>
          <div className={styles.cityText}>{city}</div>
          <div className={styles.stateText}>{state}</div>
        </div>
        <div className={styles.iconWrapper}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default LocationCard;
