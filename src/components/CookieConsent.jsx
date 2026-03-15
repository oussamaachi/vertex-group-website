import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Shield } from 'lucide-react';

const COOKIE_KEY = 'vertex_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so the popup doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    setPreferences({ necessary: true, analytics: true });
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, analytics: true, date: new Date().toISOString() }));
    setVisible(false);
  };

  const rejectAll = () => {
    setPreferences({ necessary: true, analytics: false });
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, analytics: false, date: new Date().toISOString() }));
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...preferences, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-slide-up">
      <div className="max-w-2xl mx-auto bg-charcoal text-paper rounded-2xl shadow-2xl border border-steel/20 overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-safety/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-safety" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg">Gestion des cookies</h3>
              <p className="text-paper/50 text-sm font-mono-brand">Conformité RGPD</p>
            </div>
          </div>
          <button onClick={rejectAll} className="text-paper/40 hover:text-paper/80 transition-colors p-1" aria-label="Fermer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-4">
          <p className="text-paper/60 text-sm leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez accepter tous les cookies, les refuser, ou personnaliser vos préférences.{' '}
            <Link to="/politique-de-confidentialite" className="text-safety underline hover:text-paper/90 transition-colors">
              En savoir plus
            </Link>
          </p>
        </div>

        {/* Details Panel */}
        {showDetails && (
          <div className="px-6 pb-4 space-y-3">
            <div className="bg-navy/50 rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-safety" />
                  <span className="font-heading font-semibold text-sm">Cookies nécessaires</span>
                </div>
                <p className="text-paper/40 text-xs mt-1">Indispensables au fonctionnement du site.</p>
              </div>
              <div className="bg-safety/30 text-safety text-xs font-mono-brand px-3 py-1 rounded-full">Toujours actif</div>
            </div>

            <div className="bg-navy/50 rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-semibold text-sm">Cookies analytiques</span>
                </div>
                <p className="text-paper/40 text-xs mt-1">Nous aident à comprendre comment vous utilisez le site.</p>
              </div>
              <button
                onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${preferences.analytics ? 'bg-safety' : 'bg-steel/40'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${preferences.analytics ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="px-6 pb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={acceptAll}
            className="bg-safety text-paper px-5 py-2.5 rounded-full font-heading text-sm font-semibold hover:brightness-110 transition-all"
          >
            Tout accepter
          </button>
          <button
            onClick={rejectAll}
            className="border border-paper/20 text-paper/70 px-5 py-2.5 rounded-full font-heading text-sm font-semibold hover:border-paper/40 hover:text-paper transition-all"
          >
            Tout refuser
          </button>
          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              className="text-paper/50 text-sm font-heading hover:text-paper/80 transition-colors underline underline-offset-2"
            >
              Personnaliser
            </button>
          ) : (
            <button
              onClick={savePreferences}
              className="text-safety text-sm font-heading font-semibold hover:text-paper transition-colors underline underline-offset-2"
            >
              Sauvegarder mes choix
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
