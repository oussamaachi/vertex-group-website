import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = ({ scrolled }) => (
  <Link to="/" className="flex items-center gap-2 link-lift">
    {scrolled ? (
      <img src="/logo-w.png" alt="Vertex Group" className="h-11 w-auto object-contain transition-all duration-300" />
    ) : (
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-sm transition-all duration-300">
        <img src="/logo-w.png" alt="Vertex Group" className="h-11 w-auto object-contain" />
      </div>
    )}
  </Link>
);

const navLinks = [
  { 
    to: '/services', 
    label: 'Services',
    dropdown: [
      { to: '/services/maconnerie-generale', label: 'Maçonnerie Générale' },
      { to: '/services/renovation-energetique', label: 'Rénovation Énergétique' },
      { to: '/services/etancheite-toitures', label: 'Étanchéité & Toitures' },
      { to: '/services/coordination-chantier', label: 'Coordination de Chantier' },
      { to: '/services/fourniture-materiaux', label: 'Fourniture de Matériaux' },
    ]
  },
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
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-3rem)] max-w-[1200px] h-16 px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-xl border border-navy/10 shadow-lg rounded-full'
            : 'bg-transparent rounded-full'
        }`}
        style={{ willChange: 'background, border, box-shadow' }}
      >
        <div className={scrolled ? 'text-charcoal' : 'text-paper'}>
          <Logo scrolled={scrolled} />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <Link
                to={link.to}
                className={`font-heading text-sm font-medium tracking-wide link-lift transition-colors duration-300 flex items-center gap-1 ${
                  scrolled ? 'text-charcoal hover:text-navy' : 'text-paper/80 hover:text-paper'
                } ${location.pathname.startsWith(link.to) && link.to !== '/' ? (scrolled ? 'text-navy' : 'text-paper') : ''}`}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-[50%] pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-xl shadow-xl border border-concrete-light w-64 overflow-hidden py-2 relative">
                    {/* Invisible bridge to prevent mouseout */}
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    {link.dropdown.map(drop => (
                      <Link
                        key={drop.to}
                        to={drop.to}
                        className="block px-6 py-2.5 text-sm font-heading text-charcoal/80 hover:bg-concrete-light/30 hover:text-safety transition-colors"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="btn-magnetic inline-flex items-center px-5 py-2.5 bg-safety text-paper font-heading text-sm font-semibold rounded-full"
          >
            <span className="btn-slide rounded-full"></span>
            <span className="btn-text">Devis Gratuit</span>
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-charcoal' : 'text-paper'}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-navy flex flex-col items-center justify-center gap-8 transition-all duration-500 overflow-y-auto py-24 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <div 
            key={link.to} 
            className="text-center w-full px-8"
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease',
            }}
          >
            <Link
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="font-heading font-medium tracking-tight text-paper text-3xl hover:text-concrete-light transition-colors block mb-2"
            >
              {link.label}
            </Link>
            {link.dropdown && (
              <div className="flex flex-col gap-4 mt-6 mb-4">
                {link.dropdown.map(drop => (
                  <Link
                    key={drop.to}
                    to={drop.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-paper/60 text-lg hover:text-safety transition-colors"
                  >
                    {drop.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link
          to="/contact"
          onClick={() => setMobileOpen(false)}
          className="btn-magnetic mt-8 inline-flex items-center px-8 py-3 bg-safety text-paper font-heading text-lg font-semibold rounded-full shrink-0"
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
