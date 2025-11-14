import { useEffect, useMemo, useRef, useState } from 'react';
import fallbackReviews from '../data/reviews';
import '../styles/Reviews.css';

const Star = ({ filled }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className={filled ? 'star filled' : 'star'}>
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.897l-7.335 3.868 1.4-8.168L.132 9.21l8.2-1.192z"/>
  </svg>
);

function Rating({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(value));
  return (
    <div className="rating" aria-label={`${value} out of 5 stars`}>
      {stars.map((f, i) => (
        <Star key={i} filled={f} />
      ))}
    </div>
  );
}

function chunk(array, size) {
  const out = [];
  for (let i = 0; i < array.length; i += size) out.push(array.slice(i, i + size));
  return out;
}

export default function Reviews() {
  const [data, setData] = useState(fallbackReviews);
  const reviews = data;
  const avg = useMemo(() => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, r) => sum + (r.rating || 0), 0);
    return Math.round((total / reviews.length) * 10) / 10;
  }, [reviews]);

  const [expanded, setExpanded] = useState({});
  const [cardsPerView, setCardsPerView] = useState(() => {
    if (typeof window === 'undefined') return 3;
    const w = window.innerWidth;
    if (w >= 1100) return 3;
    if (w >= 700) return 2;
    return 1;
  });
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(reviews.length / cardsPerView)), [cardsPerView]);
  const pages = useMemo(() => chunk(reviews, cardsPerView), [cardsPerView]);

  const next = () => setPage((p) => (p + 1) % totalPages);
  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goto = (i) => setPage(((i % totalPages) + totalPages) % totalPages);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, totalPages]);

  // Try to load public reviews.json so you can include all reviews without code changes
  useEffect(() => {
    let cancelled = false;
    fetch('/reviews.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (cancelled || !Array.isArray(json) || json.length === 0) return;
        // Normalize minimal fields
        const normalized = json.map((r) => ({
          author: r.author || r.author_name || 'Customer',
          rating: Number(r.rating || r.stars || 5),
          text: r.text || r.review || '',
          date: r.date || r.time || new Date().toISOString(),
          url: r.url || r.link || 'https://www.google.com/maps',
        }));
        setData(normalized);
      })
      .catch(() => void 0);
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      const newCpv = w >= 1100 ? 3 : w >= 700 ? 2 : 1;
      setCardsPerView((old) => (old === newCpv ? old : newCpv));
      setPage(0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-inner" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <header className="reviews-head">
          <h2 id="reviews-title">What Our Customers Say</h2>
          <div className="reviews-meta">
            <Rating value={avg || 5} />
            <span className="reviews-meta-text">{avg || 5} average rating · {reviews.length} reviews</span>
            <a className="btn-google" href="https://www.google.com/maps/search/?api=1&query=Longhorn%20Restoration%20Fort%20Worth%20TX" target="_blank" rel="noreferrer">View on Google</a>
          </div>
        </header>

        <div className="carousel">
          <button className="nav prev" onClick={prev} aria-label="Previous review">‹</button>
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              ref={trackRef}
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, gi) => (
                <div className="carousel-page" key={`p-${gi}`} style={{ ['--cols']: cardsPerView }}>
                  <div className="cards" style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0,1fr))` }}>
                    {group.map((r, idx) => {
                      const globalIndex = gi * cardsPerView + idx;
                      const isOpen = !!expanded[globalIndex];
                      const text = r.text || '';
                      const short = text.length > 240 ? text.slice(0, 240) + '…' : text;
                      return (
                        <article className="review-card" key={`${r.author}-${globalIndex}`}>
                          <header className="review-head">
                            <div className="review-author">
                              <div className="avatar" aria-hidden="true">{(r.author || 'C')[0]}</div>
                              <div className="who">
                                <strong>{r.author}</strong>
                                <span className="date">{new Date(r.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                            <Rating value={r.rating || 5} />
                          </header>
                          <p className="review-text">{isOpen ? text : short}</p>
                          <footer className="review-foot">
                            {text.length > 240 && (
                              <button className="link" onClick={() => setExpanded((e) => ({ ...e, [globalIndex]: !isOpen }))}>
                                {isOpen ? 'Show less' : 'Read more'}
                              </button>
                            )}
                            <a className="link" href={r.url} target="_blank" rel="noreferrer">Open on Google</a>
                          </footer>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="nav next" onClick={next} aria-label="Next review">›</button>
        </div>

        <div className="dots" role="tablist" aria-label="Review slides">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={page === i}
              className={page === i ? 'dot active' : 'dot'}
              onClick={() => goto(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
