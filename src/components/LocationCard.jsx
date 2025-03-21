'use client';

import React from 'react';

const LocationCard = ({ city, state, url }) => {
    return (
        <a 
            href={`https://${url}.lynxflooring.com`} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
                textDecoration: 'none',
                padding: '16px',
                borderRadius: '10px',
                backgroundColor: 'white',
                border: '1px solid #eee',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = '#C2D720';
                e.currentTarget.querySelector('.location-hover-bg').style.transform = 'translateX(0)';
                e.currentTarget.querySelector('.city-text').style.color = 'white';
                e.currentTarget.querySelector('.state-text').style.color = 'rgba(255,255,255,0.8)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#eee';
                e.currentTarget.querySelector('.location-hover-bg').style.transform = 'translateX(-100%)';
                e.currentTarget.querySelector('.city-text').style.color = '#262626';
                e.currentTarget.querySelector('.state-text').style.color = '#666';
            }}
        >
            <div 
                className="location-hover-bg"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#C2D720',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                    zIndex: 0
                }}
            />
            <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <div>
                    <div 
                        className="city-text"
                        style={{ 
                            fontWeight: '600',
                            color: '#262626',
                            marginBottom: '4px',
                            fontSize: '1rem',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {city}
                    </div>
                    <div 
                        className="state-text"
                        style={{ 
                            fontSize: '0.85rem',
                            color: '#666',
                            transition: 'color 0.3s ease'
                        }}
                    >
                        {state}
                    </div>
                </div>
                <div style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.5
                }}>
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
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                </div>
            </div>
        </a>
    );
};

export default LocationCard; 