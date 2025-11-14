import React, { useState } from 'react';
import '../styles/HowItWorks.css';

const DEFAULT_IMAGE_URL = '/images/steps/default-placeholder.jpg';
const DEFAULT_IMAGE_ALT = 'Default disaster restoration scene';

const stepsData = [
  {
    step: 1,
    title: 'Emergency Response',
    description: 'Our team is available 24/7. We arrive quickly to assess the damage and secure your property to prevent any further harm.',
    imageUrl: '/images/steps/step1-response.jpg',
  },
  {
    step: 2,
    title: 'Cleanup & Mitigation',
    description: 'We immediately begin water extraction, drying, and removing damaged materials to stop mold growth and secondary damage.',
    imageUrl: '/images/steps/step2-cleanup.jpg',
  },
  {
    step: 3,
    title: 'Estimate Preparation',
    description: 'We use industry-standard software to create a detailed, transparent estimate and work directly with your insurance adjuster.',
    imageUrl: '/images/steps/step3-estimate.png',
  },
  {
    step: 4,
    title: 'Property Restoration',
    description: 'Our skilled craftsmen begin the rebuilding process, restoring your property to its pre-loss condition, or even better.',
    imageUrl: '/images/steps/step4-restoration.jpeg',
  },
  {
    step: 5,
    title: 'Claim Management',
    description: 'We handle the confusing insurance paperwork and communication, ensuring your claim is processed smoothly from start to finish.',
    imageUrl: '/images/steps/step5-claim.png',
  },
];

const AccordionItem = ({ step, title, description, index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex;

  const handleToggle = () => {
    // FIX 1: If the clicked item is already active, keep it active (don't set to null)
    // Only change activeIndex if a *different* item is clicked.
    if (!isActive) {
      setActiveIndex(index);
    }
    // If you explicitly *want* to be able to close the active item to show the default image again:
    // setActiveIndex(isActive ? null : index);
    // But based on "display for 1 second and goes blank", it sounds like you want it to stay active.
  };

  return (
    <div className={`accordion-item ${isActive ? 'active' : ''}`}>
      <div className="accordion-header" onClick={handleToggle}>
        <span className="step-number">{String(step).padStart(2, '0')}</span>
        <h3 className="step-title">{title}</h3>
        <span className="accordion-arrow">{isActive ? '↑' : '↓'}</span>
      </div>
      {isActive && (
        <div className="accordion-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  // Initialize with 0 to have the first step active by default.
  // We're removing the `null` state based on the fix above.
  const [activeIndex, setActiveIndex] = useState(0);

  // The current image and caption will always come from stepsData[activeIndex]
  // since activeIndex will always be a valid index (0-4).
  const currentImage = stepsData[activeIndex].imageUrl;
  const currentCaption = stepsData[activeIndex].title;

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        {/* Left Column (Content) */}
        <div className="content-left">
          <div className="intro-text">
            <h2 className="main-title">How It Works</h2>
            <p className="main-subtitle">
              We help you navigate the chaos and complexity of disaster restoration.
            </p>
          </div>

          <div className="accordion-list">
            {stepsData.map((item, index) => (
              <AccordionItem
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.description}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>

        {/* Right Column (Image Switcher and Button) */}
        <div className="content-right">
          <div className="image-switcher">
            <img
              src={currentImage}
              alt={currentCaption}
              className="step-image active" // Always 'active' since activeIndex is always a valid step
            />
            <div className="image-caption">
              {currentCaption}
            </div>
          </div>
          <button className="contact-button">
            Contact for Restoration
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;