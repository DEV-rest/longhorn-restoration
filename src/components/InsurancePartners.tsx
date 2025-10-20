import React, { useState, useEffect, useRef } from 'react';
import '../styles/InsurancePartners.css';


const row1Logos = [
  { src: '/logos/Keller.png', altText: 'Keller-Lowry Insurance Logo' },
  { src: '/logos/geico.png', altText: 'GEICO Logo' },
  { src: '/logos/atena.png', altText: 'Aetna Logo' },
  { src: '/logos/chubb.png', altText: 'Chubb Logo' },
  { src: '/logos/vanglider.png', altText: 'Vangilder Logo' },
  { src: '/logos/farmers.png', altText: 'Farmers Insurance Logo' },
  { src: '/logos/anpac.png', altText: 'ANPAC Logo' },
  { src: '/logos/travellers.png', altText: 'Travelers Insurance Logo' },
  { src: '/logos/insurance.png', altText: 'ISD Insurance Services Logo' },
  { src: '/logos/CNA.png', altText: 'CNA Insurance Logo' },

];

const row2Logos = [
  { src: '/logos/allstate.png', altText: 'Allstate Insurance Logo' },
  { src: '/logos/Metlife.png', altText: 'MetLife Insurance Logo' },
  { src: '/logos/moody.png', altText: 'Moodys Logo' },
  { src: '/logos/westernmutual.png', altText: 'Western Mutual Insurance Logo' },
  { src: '/logos/westfield.png', altText: 'Westfield Insurance Logo' },
  { src: '/logos/americanfamily.png', altText: 'American Family Insurance Logo' },
  { src: '/logos/Statefarm.png', altText: 'State Farm Insurance Logo' },
  { src: '/logos/esurance.png', altText: 'Esurance Logo' },
  { src: '/logos/ascent.png', altText: 'Ascent Claim Service Logo' },
  { src: '/logos/lockton.png', altText: 'Lockton Insurance Logo' },
  
];

const row3Logos = [
  { src: '/logos/gabrobins.png', altText: 'GAB Robins Logo' },
  { src: '/logos/twg.png', altText: 'The Wright Group Services Logo' },
  { src: '/logos/crawford.png', altText: 'Crawford Logo' },
  { src: '/logos/alied.png', altText: 'Allied Insurance Logo' },
  { src: '/logos/cheery.png', altText: 'Cherry Creek Insurance Group Logo' },
  { src: '/logos/zurich.png', altText: 'Zurich Insurance Logo' },
  { src: '/logos/nationwide.png', altText: 'Nationwide Insurance Logo' },
  { src: '/logos/sentry.png', altText: 'Sentry Insurance Logo' },
  { src: '/logos/auto.png', altText: 'Auto-Owners Insurance Logo' },
  { src: '/logos/qbe.png', altText: 'QBE Farmers Union Logo' },
  // Add more as needed, following this pattern
];

const InsurancePartners = () => {

  const extendedRow1 = [...row1Logos, ...row1Logos];
  const extendedRow2 = [...row2Logos, ...row2Logos];
  const extendedRow3 = [...row3Logos, ...row3Logos];

  const [inView, setInView] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="insurance-container">
      <div className="title-wrapper" ref={titleRef}>
        <h2 className="insurance-title">
          We work with all <span className={`highlight-wrapper ${inView ? 'animate-highlight' : ''}`}>insurances<span className="highlight-green"></span></span>
        </h2>
      </div>

      <div className="logo-marquee">
        {/* Row 1: Left to Right */}
        <div className="marquee-row">
          <div className="marquee-content ltr">
            {extendedRow1.map((logo, index) => (
              <div className="logo-item" key={`r1-${index}`}>
                {/* --- UPDATED: Use logo.src and logo.altText --- */}
                <img src={logo.src} alt={logo.altText} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="marquee-row">
          <div className="marquee-content rtl">
            {extendedRow2.map((logo, index) => (
              <div className="logo-item" key={`r2-${index}`}>
                {/* --- UPDATED: Use logo.src and logo.altText --- */}
                <img src={logo.src} alt={logo.altText} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="marquee-row">
          <div className="marquee-content ltr">
            {extendedRow3.map((logo, index) => (
              <div className="logo-item" key={`r3-${index}`}>
                {/* --- UPDATED: Use logo.src and logo.altText --- */}
                <img src={logo.src} alt={logo.altText} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;