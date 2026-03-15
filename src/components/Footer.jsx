import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper/70 overflow-hidden">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Block */}
          <div className="space-y-5">
            <Link to="/" className="flex items-start link-lift mb-2">
              <img src="/logo-w.png" alt="Vertex Group" className="h-20 w-auto object-contain drop-shadow-sm" />
            </Link>
            <p className="font-heading font-medium tracking-tight text-paper/50 text-lg">
              Bâtisseurs d'excellence en Île-de-France.
            </p>
            <div className="flex items-center gap-2 font-mono-brand text-xs text-paper/40">
              <span className="w-2 h-2 bg-green-400 rounded-full status-dot inline-block"></span>
              Opérationnel · Disponible
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-paper text-sm tracking-widest uppercase">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Maçonnerie Générale', to: '/services/maconnerie-generale' },
                { label: 'Rénovation Énergétique', to: '/services/renovation-energetique' },
                { label: 'Étanchéité & Toitures', to: '/services/etancheite-toitures' },
                { label: 'Coordination de Chantier', to: '/services/coordination-chantier' },
                { label: 'Fourniture Matériaux', to: '/services/fourniture-materiaux' },
              ].map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm hover:text-paper transition-colors link-lift inline-block">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-paper text-sm tracking-widest uppercase">Entreprise</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'À Propos', to: '/a-propos' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm hover:text-paper transition-colors link-lift inline-block">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-paper text-sm tracking-widest uppercase">Légal</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Mentions Légales', to: '/mentions-legales' },
                { label: 'Politique de Confidentialité', to: '/politique-de-confidentialite' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm hover:text-paper transition-colors link-lift inline-block">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="space-y-1 font-mono-brand text-xs text-paper/40 leading-relaxed pt-2">
              <p>Vertex Group · SIREN : 101 799 591</p>
              <p>28 Av. des Pépinières, 94260 Fresnes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-paper/10 px-8 py-5">
        <p className="text-center font-mono-brand text-xs text-paper/30">
          © 2026 Vertex Group · 28 Av. des Pépinières, 94260 Fresnes · SIREN 101 799 591
        </p>
      </div>
    </footer>
  );
}
