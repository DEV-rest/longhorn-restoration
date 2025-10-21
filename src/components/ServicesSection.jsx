// ServicesSection.jsx
import { Link } from 'react-router-dom';
import "../styles/services.css";
import services from '../data/services';

function Icon({ name }) {
  switch (name) {
    case "bolt":
      return (<svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true"><path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z"/></svg>);
    case "water":
      return (<svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true"><path d="M12 2s7 8 7 12a7 7 0 1 1-14 0C5 10 12 2 12 2z"/></svg>);
    case "flame":
      return (<svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true"><path d="M12 2c3 4-1 6 2 9 2 2 3 3 3 6a5 5 0 1 1-10 0c0-3 2-5 4-7 1-1 1-3 1-8z"/></svg>);
    case "shield":
      return (<svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true"><path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z"/></svg>);
    case "building":
      return (<svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true"><path d="M3 21h18v-2H3v2zm3-3h3V4H6v14zm6 0h3V8h-3v10zm6 0h3V6h-3v12z"/></svg>);
    case "home":
    default:
      return (<svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true"><path d="M12 3 3 10h2v10h6v-6h2v6h6V10h2L12 3z"/></svg>);
  }
}

export default function ServicesSection() {
  return (
    <section className="services" aria-labelledby="services-title">
      <div className="services-inner">
        <header className="services-head">
          <h2 id="services-title">Our Services Will Help You Recover</h2>
          <p className="services-sub">The right help when you need it.</p>
        </header>

        <ul className="services-grid">
          {services.map((s) => (
            <li key={s.title} className="service-item">
              <div className="svc-left">
                <Link to={`/services/${s.slug}`} className="svc-link" aria-label={`Open ${s.title} service page`}>
                  <Icon name={s.icon} />
                </Link>
              </div>
              <div className="svc-right">
                <h3 className="svc-title">
                  <Link to={`/services/${s.slug}`} className="svc-link">{s.title}</Link>
                </h3>
                <p className="svc-desc">{s.desc}</p>
                <hr className="svc-divider" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
