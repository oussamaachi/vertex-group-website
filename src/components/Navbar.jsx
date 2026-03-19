import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Logo = ({ forceDarkText }) => (
  <Link to="/" className="flex items-center gap-2 link-lift">
    <img 
      src="/logo-w.png" 
      alt="Vertex Group" 
      className={`h-11 w-auto object-contain transition-all duration-300 ${forceDarkText ? 'brightness-0 opacity-90' : ''}`} 
    />
  </Link>
);

const navLinks = [
  {
    to: '/services',
    label: 'Services',
    dropdown: [
      { to: '/services/maconnerie-generale', label: 'Travaux Tous Corps d’État' },
      { to: '/services/renovation-energetique', label: 'Rénovation Énergétique' },
      { to: '/services/etancheite-toitures', label: 'Étanchéité & Toitures' },
      { to: '/services/coordination-chantier', label: 'Coordination de Chantier' },
      { to: '/services/fourniture-materiaux', label: 'Fourniture de Matériaux' },
    ],
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightHero = location.pathname === '/';
  const forceDarkText = scrolled || isLightHero;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-3rem)] max-w-[1200px] h-16 px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-xl border border-charcoal/10 shadow-lg rounded-full'
            : 'bg-transparent rounded-full'
        }`}
        style={{ willChange: 'background, border, box-shadow' }}
      >
        <div className={forceDarkText ? 'text-charcoal' : 'text-paper'}>
          <Logo forceDarkText={forceDarkText} />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.to} className="relative group">
              <Link
                to={link.to}
                className={`font-heading text-sm font-medium tracking-wide link-lift transition-colors duration-300 flex items-center gap-1 ${
                  forceDarkText ? 'text-charcoal hover:text-safety' : 'text-paper/80 hover:text-paper'
                } ${location.pathname.startsWith(link.to) && link.to !== '/' ? (forceDarkText ? 'text-safety' : 'text-paper') : ''}`}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-[50%] pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="relative w-64 overflow-hidden rounded-xl border border-concrete-light bg-white py-2 shadow-xl">
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    {link.dropdown.map((drop) => (
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
            className="btn-magnetic inline-flex items-center px-5 py-2.5 bg-safety text-paper font-heading text-sm font-semibold rounded-full whitespace-nowrap"
          >
            <span className="btn-slide rounded-full" />
            <span className="btn-text">Devis Gratuit</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className={`lg:hidden p-2 ${forceDarkText ? 'text-charcoal' : 'text-paper'}`}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[999] bg-navy flex flex-col items-center justify-center gap-8 transition-all duration-500 overflow-y-auto py-24 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, index) => (
          <div
            key={link.to}
            className="w-full px-8 text-center"
            style={{
              transitionDelay: mobileOpen ? `${index * 80}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease',
            }}
          >
            <Link
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="mb-2 block font-heading text-3xl font-medium tracking-tight text-paper transition-colors hover:text-concrete-light"
            >
              {link.label}
            </Link>
            {link.dropdown && (
              <div className="mt-6 mb-4 flex flex-col gap-4">
                {link.dropdown.map((drop) => (
                  <Link
                    key={drop.to}
                    to={drop.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-lg text-paper/60 transition-colors hover:text-safety"
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
          className="btn-magnetic mt-8 inline-flex shrink-0 items-center rounded-full bg-safety px-8 py-3 font-heading text-lg font-semibold text-paper whitespace-nowrap"
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: mobileOpen ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease',
          }}
        >
          <span className="btn-slide rounded-full" />
          <span className="btn-text">Devis Gratuit</span>
        </Link>
      </div>
    </>
  );
}
