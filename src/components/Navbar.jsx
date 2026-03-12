import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 link-lift">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" width="48" height="32">
      <polygon points="0,8 14,8 44,64 30,64" fill="#3A3D2E"/>
      <polygon points="120,8 106,8 76,64 90,64" fill="#7A8A4A"/>
      <rect x="42" y="10" width="8" height="44" fill="#3A3D2E"/>
      <rect x="52" y="4" width="8" height="50" fill="#4E5C35"/>
      <rect x="62" y="0" width="8" height="54" fill="#6B7A42"/>
      <rect x="72" y="4" width="8" height="50" fill="#8A9A55"/>
      <rect x="82" y="10" width="8" height="44" fill="#9AAA60"/>
    </svg>
    <span className="text-lg tracking-wide">
      <span className="font-heading font-bold">VERTEX</span>{' '}
      <span className="font-drama italic">Group</span>
    </span>
  </Link>
);

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À Propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-3rem)] max-w-[1200px] px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-xl border border-moss/15 shadow-lg rounded-full'
            : 'bg-transparent rounded-full'
        }`}
        style={{ willChange: 'background, border, box-shadow' }}
      >
        <div className={scrolled ? 'text-charcoal' : 'text-cream'}>
          <Logo />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm font-medium tracking-wide link-lift transition-colors duration-300 ${
                scrolled ? 'text-charcoal hover:text-moss' : 'text-cream/80 hover:text-cream'
              } ${location.pathname === link.to ? (scrolled ? 'text-moss' : 'text-cream') : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-magnetic inline-flex items-center px-5 py-2.5 bg-clay text-cream font-heading text-sm font-semibold rounded-full"
          >
            <span className="btn-slide rounded-full"></span>
            <span className="btn-text">Devis Gratuit</span>
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-cream'}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-moss flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMobileOpen(false)}
            className="font-drama italic text-cream text-4xl hover:text-khaki-light transition-colors"
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setMobileOpen(false)}
          className="btn-magnetic mt-4 inline-flex items-center px-8 py-3 bg-clay text-cream font-heading text-lg font-semibold rounded-full"
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease',
          }}
        >
          <span className="btn-slide rounded-full"></span>
          <span className="btn-text">Devis Gratuit</span>
        </Link>
      </div>
    </>
  );
}
