'use client'

import dynamic from 'next/dynamic';

const DynamicPartnersSlider = dynamic(() => import("@components/sliders/Partners"), { 
    ssr: false 
});

export default function ClientPartnersSlider() {
    return <DynamicPartnersSlider />;
} 