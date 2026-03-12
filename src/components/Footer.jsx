import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 rounded-t-footer overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Block */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 link-lift">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" width="48" height="32">
                <polygon points="0,8 14,8 44,64 30,64" fill="#9AAA60"/>
                <polygon points="120,8 106,8 76,64 90,64" fill="#9AAA60"/>
                <rect x="42" y="10" width="8" height="44" fill="#6B7A42"/>
                <rect x="52" y="4" width="8" height="50" fill="#7A8A4A"/>
                <rect x="62" y="0" width="8" height="54" fill="#8A9A55"/>
                <rect x="72" y="4" width="8" height="50" fill="#9AAA60"/>
                <rect x="82" y="10" width="8" height="44" fill="#9AAA60"/>
              </svg>
              <span className="text-lg text-cream">
                <span className="font-heading font-bold">VERTEX</span>{' '}
                <span className="font-drama italic">Group</span>
              </span>
            </Link>
            <p className="font-drama italic text-cream/50 text-lg">
              Bâtisseurs d'excellence en Île-de-France.
            </p>
            <div className="flex items-center gap-2 font-mono-brand text-xs text-cream/40">
              <span className="w-2 h-2 bg-green-400 rounded-full status-dot inline-block"></span>
              Opérationnel · Disponible
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-cream text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2.5">
              {['Maçonnerie Générale', 'Rénovation Énergétique', 'Étanchéité & Toitures', 'Coordination de Chantier', 'Fourniture Matériaux'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-cream transition-colors link-lift inline-block">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-cream text-sm tracking-widest uppercase">Entreprise</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'À Propos', to: '/a-propos' },
                { label: 'Réalisations', to: '/realisations' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm hover:text-cream transition-colors link-lift inline-block">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-cream text-sm tracking-widest uppercase">Légal</h4>
            <div className="space-y-2 font-mono-brand text-xs text-cream/40 leading-relaxed">
              <p>SIREN : 101 799 591</p>
              <p>RCS Créteil</p>
              <p>SAS à associé unique</p>
              <p className="pt-1">28 Av. des Pépinières</p>
              <p>94260 Fresnes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 px-8 py-5">
        <p className="text-center font-mono-brand text-xs text-cream/30">
          © 2026 Vertex Group · 28 Av. des Pépinières, 94260 Fresnes · SIREN 101 799 591
        </p>
      </div>
    </footer>
  );
}
