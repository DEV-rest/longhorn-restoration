// Hero.jsx
import "../hero.css";
import heroVideo from "../assets/hero1.mp4";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        className="hero-media"
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
        aria-hidden="true"
        preload="metadata"
        /* poster="/images/hero-poster.jpg" */
      />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-title">Your Emergency, Our Priority.</h1>
          <p>24/7 water and fire restoration. Fast mitigation, clear updates.</p>

          <a
            className="cta-pill-call"
            href="tel:+16825551234"
            aria-label="Call Longhorn Restoration, 24 7. Phone number 6 8 2, 5 5 5, 1 2 3 4."
          >
            <span className="call-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="phone-svg" aria-hidden="true">
                <path d="M6.1 3.5c.6-.6 1.6-.6 2.2 0l2 2c.5.6.6 1.4.2 2.1l-1 1.6c-.2.3-.2.7 0 1 1.1 1.9 2.7 3.5 4.6 4.6.3.2.7.2 1 0l1.6-1c.7-.4 1.6-.3 2.1.2l2 2c.6.6.6 1.6 0 2.2l-1.1 1.1c-.7.7-1.8 1-2.8.7-3.4-1-6.7-3.3-9.3-5.9S3.1 8.6 2.2 5.2c-.3-1 0-2.1.7-2.8l1.2-1.1z" />
              </svg>
            </span>

            <span className="call-label">Talk to a Pro</span>
           
            {/* inner ghost button shown on hover/focus */}
            <span className="cta-inner" aria-hidden="true">
              <span className="cta-inner-text">(682) 555-1234</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
