import React, { useState, useEffect, useCallback } from 'react';
import '../styles/AccessibilityWidget.css';

// --- Icon Components ---
const AccessibilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6a2 2 0 0 1 2 2c0 1.1-.9 2-2 2s-2-.9-2-2a2 2 0 0 1 2-2z"></path><path d="M12 14c-2.5 0-5 1-5 3v2h10v-2c0-2-2.5-3-5-3z"></path></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const FontSizeIncreaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/><path d="M18 10h3"/><path d="M21 13h-3"/></svg>;
const FontSizeDecreaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/><path d="M18 11.5h6"/></svg>;
const ContrastIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 18a6 6 0 0 0 0-12v12z"></path></svg>;
const GrayscaleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#888" stroke="#555" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>;
const ResetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4"/></svg>;

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1); // Multiplier for root font size
  const [contrast, setContrast] = useState('normal'); // 'normal', 'high', 'grayscale'

  const applyStyles = useCallback(() => {
    const root = document.documentElement;
    // Font size: Use clamp to keep it within a reasonable range
    root.style.setProperty('--font-size-multiplier', fontSize);

    // Contrast and Grayscale
    document.body.classList.remove('high-contrast', 'grayscale');
    if (contrast === 'high') {
      document.body.classList.add('high-contrast');
    } else if (contrast === 'grayscale') {
      document.body.classList.add('grayscale');
    }
  }, [fontSize, contrast]);

  useEffect(() => {
    applyStyles();
  }, [applyStyles]);

  const handleReset = () => {
    setFontSize(1);
    setContrast('normal');
  };

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 0.1, 1.4));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 0.1, 0.8));

  return (
    <div className={`accessibility-widget ${isOpen ? 'open' : ''}`}>
      <button
        className="accessibility-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
      >
        <AccessibilityIcon />
      </button>

      <div className="accessibility-panel">
        <div className="panel-header">
          <h3>Accessibility</h3>
          <button onClick={() => setIsOpen(false)} aria-label="Close accessibility panel">
            <CloseIcon />
          </button>
        </div>
        <div className="panel-content">
          <div className="option-group">
            <p className="option-label">Font Size</p>
            <div className="option-controls">
              <button onClick={decreaseFontSize} aria-label="Decrease font size"><FontSizeDecreaseIcon /></button>
              <button onClick={increaseFontSize} aria-label="Increase font size"><FontSizeIncreaseIcon /></button>
            </div>
          </div>
          <div className="option-group">
            <p className="option-label">Contrast</p>
            <div className="option-controls">
              <button onClick={() => setContrast('high')} aria-pressed={contrast === 'high'} aria-label="High contrast"><ContrastIcon /></button>
              <button onClick={() => setContrast('grayscale')} aria-pressed={contrast === 'grayscale'} aria-label="Grayscale"><GrayscaleIcon /></button>
            </div>
          </div>
        </div>
        <div className="panel-footer">
          <button onClick={handleReset} className="reset-btn">
            <ResetIcon /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityWidget;