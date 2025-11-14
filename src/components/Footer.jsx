import { Link } from 'react-router-dom';
import services from '../data/services';
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <section className="footer-brand" aria-label="Company">
          <Link to="/" className="footer-logo">Longhorn<span className="logo-accent">Restoration</span></Link>
          <p className="tagline">24/7 Emergency Response Across DFW</p>
          <div className="footer-contact">
            <a className="contact-link" href="tel:817-235-0569">(817) 235-0569</a>
            <a className="contact-link" href="mailto:info@longhornrestoration.com">adam@longhorn-restoration.com</a>
            <address className="address"> Fort Worth, TX</address>
          </div>
        </section>

        <nav className="footer-links" aria-label="Quick links">
          <div className="links-col">
            <h4>Pages</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/service-area">Service Area</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="links-col">
            <h4>Services</h4>
            <ul>
              {services.slice(0,6).map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="footer-cta" aria-label="Help">
          <h4>Need Emergency Help?</h4>
          <p>Call now for immediate dispatch. We work with all insurance.</p>
          <a className="btn-call" href="tel:817-235-0569">Call (817) 235-0569</a>
        </section>
      </div>

      <div className="footer-bottom">
        <p>© {year} Longhorn Restoration. All rights reserved.</p>
        <p className="legal-links">
          <Link to="/privacy">Privacy</Link>
          <span>•</span>
          <Link to="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}

