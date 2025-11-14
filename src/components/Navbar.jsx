import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccessibilityWidget from './AccessibilityWidget';
import "../styles/Navbar.css";

// --- Icon Components ---
const MenuIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );
const BackIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> );

// --- Icons for Service Menu ---
const WaterIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path><path d="M12 12a2 2 0 0 0-2 2c0 1.1.89 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2z"></path></svg> );
const FireIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z"></path><path d="M20.5 15.5C20.5 11.36 17.64 8 13.5 8s-7 3.36-7 7.5c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4z"></path><path d="M4 14c0-2.21 1.79-4 4-4 .55 0 1.08.11 1.58.31"></path><path d="M18.5 11.5c.34.42.66.87.92 1.34"></path></svg> );
const MoldIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><path d="M9 12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1z"></path><path d="M8 17h8"></path><path d="M8 5h2"></path></svg> );
const StormIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="m15 12-4 4"></path><path d="M9 12l2 2"></path><path d="m12 9-2 2"></path></svg> );
const CleanupIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg> );
const RestorationIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 0-10-10c0 1.28.25 2.5.7 3.6l-1.4 1.4c-.45.45-.45 1.2 0 1.65s1.2.45 1.65 0l1.4-1.4c1.1.45 2.32.7 3.6.7z"></path><path d="m15.5 12.5-3 3-1.5-1.5"></path></svg> );

// About
const MissionIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> );
const TeamIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> );
const TestimonialIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> );
const LicenseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21l-8-4.5v-9l8 4.5 8-4.5v9L12 21z"/><path d="M12 12l8-4.5"/><path d="M12 3v9"/><path d="M4 6.5l8 4.5"/></svg> );

// Resources
const InsuranceIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> );
const GuideIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> );
const FaqIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> );
const BlogIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> );


const menuData = {
    services: {
        title: "Our Restoration Services",
        items: [
            { name: "Water Damage", description: "Emergency water extraction.", icon: <WaterIcon />, path: "/services/water-damage-restoration" },
            { name: "Fire Damage", description: "Soot, smoke, and odor removal.", icon: <FireIcon />, path: "/services/fire-damage-restoration" },
            { name: "Mold Remediation", description: "Safe, effective mold removal.", icon: <MoldIcon />, path: "/services/mold-remediation" },
            { name: "Storm & Disaster", description: "Cleanup after natural disasters.", icon: <StormIcon />, path: "/services/emergency-response" },
            { name: "Property Cleanup", description: "Biohazard & trauma scene cleaning.", icon: <CleanupIcon />, path: "/services/residential-restoration" },
            { name: "Property Restoration", description: "Full reconstruction contracting.", icon: <RestorationIcon />, path: "/services/commercial-restoration" },
        ]
    },
    about: {
      title: "About Longhorn",
      items: [
         
          { name: "Our Mission & Values", description: "Dedicated to restoring your peace of mind.",  icon: <MissionIcon />, path: "/about/mission"  },
          { name: "Our Expert Team", description: "Meet our certified and experienced professionals.", icon: <TeamIcon />, path: "/about/team" },
          { name: "Client Testimonials", description: "See what our satisfied customers are saying.", icon: <TestimonialIcon />, path: "/about/testimonials"  },
          { name: "Licenses & Certifications", description: "We are fully licensed, bonded, and insured.", icon: <LicenseIcon />, path: "/about/licenses"  },
      ]
  },
  resources: {
      title: "Helpful Resources",
      items: [
        
          { name: "The Insurance Claim Process", description: "We help you navigate the complexities.", icon: <InsuranceIcon />, path: "/resources/insurance-claim"  },
          { name: "Emergency Preparedness Guide", description: "Tips to prepare your home for the unexpected.", icon: <GuideIcon />, path: "/resources/preparedness-guide"  },
          { name: "Frequently Asked Questions", description: "Get answers to your common questions.", icon: <FaqIcon />, path: "/resources/faq"  },
          { name: "Our Restoration Blog", description: "Industry news and helpful articles for homeowners.", icon: <BlogIcon />, path: "/blog"  },
      ]
  }
};
// ... rest of the file
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('services');
    const [mobileView, setMobileView] = useState('main'); 

    const handleMenuToggle = (isOpen) => {
        setIsMenuOpen(isOpen);
        if (isOpen) {
            setMobileView('main');
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflowX = 'hidden'; // Prevent horizontal scroll on html
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflowX = 'auto'; // Restore horizontal scroll on html
        }
    };

    const handleSidebarClick = (menu) => {
        setActiveMenu(menu);
        const content = document.querySelector('.menu-main-content');
        if (content) {
            content.classList.remove('fade-in');
            void content.offsetWidth;
            content.classList.add('fade-in');
        }
    }

    return (
        <>
            <AccessibilityWidget />
            <header className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">Longhorn<span className="logo-accent">Restoration</span></Link>
                    <div className="navbar-contact">
                        <span className="contact-text">24/7 Emergency Services</span>
                        <a href="tel:111-111-1111" className="contact-phone">(817) 235-0569</a>
                    </div>
                    <button className="hamburger-menu" onClick={() => handleMenuToggle(true)} aria-label="Open menu"><MenuIcon /><span className="hamburger-text">Menu</span></button>
                </div>
            </header>
            <div className={`menu-overlay-wrapper ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-overlay">
                    <div className="menu-content">
                        <aside className={`menu-sidebar mobile-view--${mobileView}`}>
                            <div className="sidebar-desktop-view">
                                <Link to="/" className="sidebar-logo" onClick={() => handleMenuToggle(false)}>Longhorn<span className="logo-accent-light">Restoration</span></Link>
                                <h2 className="sidebar-title">Menu</h2>
                                <nav className="sidebar-nav">
                                    <button className={activeMenu === 'services' ? 'active' : ''} onClick={() => handleSidebarClick('services')}>Services</button>
                                    <button className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleSidebarClick('about')}>About Us</button>
                                    <button className={activeMenu === 'resources' ? 'active' : ''} onClick={() => handleSidebarClick('resources')}>Resources</button>
                                    <Link to="/service-area" onClick={() => handleMenuToggle(false)}>Service Area</Link>
                                </nav>
                                <div className="sidebar-cta"><a href="tel:303-975-4000" className="btn btn-call">Call Now</a><Link to="/contact" className="btn btn-email" onClick={() => handleMenuToggle(false)}>Send An Email</Link></div>
                                <div className="sidebar-contact"><span>Call us 24/7/365</span><a href="tel:303-975-4000">(817) 235-0569</a><address>...<br />Forthworth, TX </address></div>
                            </div>
                            <div className="sidebar-mobile-view">
                                <button className="close-btn mobile-close-btn" onClick={() => handleMenuToggle(false)} aria-label="Close menu"><CloseIcon /></button>
                                <div className="mobile-view mobile-view--main">
                                    <Link to="/" className="sidebar-logo" onClick={() => handleMenuToggle(false)}>Longhorn<span className="logo-accent-light">Restoration</span></Link>
                                    <h2 className="sidebar-title">Menu</h2>
                                    <nav className="sidebar-nav">
                                        <button onClick={() => setMobileView('services')}>Services</button>
                                        <button onClick={() => setMobileView('about')}>About Us</button>
                                        <button onClick={() => setMobileView('resources')}>Resources</button>
                                        <Link to="/service-area" onClick={() => handleMenuToggle(false)}>Service Area</Link>
                                    </nav>
                                    <div className="sidebar-cta"><a href="tel:817-235-0569" className="btn btn-call">Call Now</a><Link to="/contact" className="btn btn-email" onClick={() => handleMenuToggle(false)}>Send An Email</Link></div>
                                </div>
                                <div className="mobile-view mobile-view--sub">
                                    <button className="mobile-back-btn" onClick={() => setMobileView('main')}><BackIcon /> Back to Menu</button>
                                    <h3 className="mobile-submenu-title">{menuData[mobileView]?.title}</h3>
                                    <div className="mobile-submenu-links">
    {(menuData[mobileView]?.items || []).map(item => (
        // ******* UPDATED LINE BELOW *******
        <Link to={item.path} key={item.name} className="mobile-submenu-item" onClick={() => handleMenuToggle(false)}>
            {item.icon}
            <div className="mobile-submenu-item-text"><h4>{item.name}</h4><p>{item.description}</p></div>
        </Link>
    ))}
</div>
                                </div>
                            </div>
                        </aside>
                        <main className="menu-main">
                             <button className="close-btn" onClick={() => handleMenuToggle(false)} aria-label="Close menu"><CloseIcon /></button>
                            <div className="menu-main-content fade-in" key={activeMenu}>
                                <h3 className="menu-title">{menuData[activeMenu]?.title}</h3>
                                <div className="menu-grid">
    {(menuData[activeMenu]?.items || []).map(item => (
        // ******* UPDATED LINE BELOW *******
        <Link to={item.path} key={item.name} className="menu-item" onClick={() => handleMenuToggle(false)}>
            <div className="menu-item-icon">{item.icon}</div>
            <div className="menu-item-text"><h4>{item.name}</h4><p>{item.description}</p></div>
        </Link>
    ))}
</div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
