import { useParams, Link } from 'react-router-dom';
import services from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = services.find(s => s.slug === slug);

  if (!svc) {
    return (
      <div className="container px-4 py-8">
        <h2>Service not found</h2>
        <p>The service you requested could not be found.</p>
        <Link to="/services">Back to services</Link>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <nav className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{svc.title}</span></nav>
      <h1>{svc.title}</h1>
      <p>{svc.desc}</p>
      <p>More detail about the {svc.title} service can be added here.</p>
    </div>
  );
}
