// ServiceDetail.jsx
import { useParams, Link } from 'react-router-dom';
import services from '../data/services';

// Icon helper (unchanged)
function Icon({ name }) {
  switch (name) {
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true">
          <path d="M13 2 3 14h7l-1 8 11-14h-7l0-6z" />
        </svg>
      );
    case 'water':
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true">
          <path d="M12 2s7 8 7 12a7 7 0 1 1-14 0C5 10 12 2 12 2z" />
        </svg>
      );
    case 'flame':
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true">
          <path d="M12 2c3 4-1 6 2 9 2 2 3 3 3 6a5 5 0 1 1-10 0c0-3 2-5 4-7 1-1 1-3 1-8z" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true">
          <path d="M12 2 4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5l-8-3z" />
        </svg>
      );
    case 'building':
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true">
          <path d="M3 21h18v-2H3v2zm3-3h3V4H6v14zm6 0h3V8h-3v10zm6 0h3V6h-3v12z" />
        </svg>
      );
    case 'home':
    default:
      return (
        <svg viewBox="0 0 24 24" className="svc-icon" aria-hidden="true">
          <path d="M12 3 3 10h2v10h6v-6h2v6h6V10h2L12 3z" />
        </svg>
      );
  }
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = services.find((s) => s.slug === slug);

  if (!svc) {
    return (
      <div className="container px-4 py-8">
        <h2>Service not found</h2>
        <p>The service you requested could not be found.</p>
        <Link to="/services">Back to services</Link>
      </div>
    );
  }

  const other = services.filter((s) => s.slug !== slug);
  const hasSteps = Array.isArray(svc.steps) && svc.steps.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="svc-hero" aria-labelledby="svc-hero-title">
        <img
          className="svc-hero-media"
          src={svc.hero || '/assets/services/water.png'}
          alt=""
          aria-hidden="true"
        />
        <div className="svc-hero-overlay" />
        <div className="svc-hero-inner">
          <div className="svc-hero-chip">
            <Icon name={svc.icon} />
            <span>{svc.title}</span>
          </div>
          <h1 id="svc-hero-title" className="svc-hero-title">
            {svc.title}
          </h1>
          <p className="svc-hero-lead">{svc.desc}</p>
        </div>
      </section>

      {/* Detail */}
      <div className="container px-4 py-8">
        <main className="svc-detail-main">
          <section
            className="svc-detail-grid"
            aria-label={`${svc.title} scope of work`}
          >
            {hasSteps && (
              <article className="svc-card svc-steps">
                <h2 className="svc-card-cap">What to expect</h2>
                <ol className="svc-steps-list">
                  {svc.steps.map((step, i) => (
                    <li key={i}>
                      <span className="svc-step-index">{i + 1}</span>
                      <span className="svc-step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            )}

            <article className="svc-card">
              <h3 className="svc-card-sub">Typical timeframe</h3>
              <p className="svc-card-text">{svc.timeframe}</p>
            </article>

            <article className="svc-card">
              <h3 className="svc-card-sub">Example project</h3>
              <p className="svc-card-text">{svc.example}</p>
            </article>
          </section>
        </main>

        {/* Other services centered at bottom */}
        <section className="svc-carousel" aria-label="Other services">
          <div className="svc-carousel-head">
            
          </div>

          <div className="svc-rail">
            {other.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="svc-card-mini"
              >
                <div className="svc-card-mini-icon">
                  <Icon name={s.icon} />
                </div>
                <div className="svc-card-mini-title">{s.title}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
