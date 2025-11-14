import counties from '../data/texasCounties';
import "../styles/ServiceArea.css";

export default function ServiceArea() {
  const mapQuery = encodeURIComponent('Longhorn Restoration Fort Worth TX');

  return (
    <section className="service-area-section" aria-labelledby="service-area-title">
      <div className="service-area-inner">
        <div className="service-area-map" aria-label="Map showing Longhorn Restoration location">
          <iframe
            title="Longhorn Restoration Map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="service-area-list">
          <h2 id="service-area-title">Serving Fort Worth and Dallas Areas</h2>
          <p className="service-area-sub">Rapid response across these Texas counties:</p>
          <ul className="county-list" aria-label="Texas counties served">
            {counties.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

