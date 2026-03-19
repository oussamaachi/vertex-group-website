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
      <div className="mx-auto max-w-lg sm:max-w-2xl max-h-[78vh] overflow-y-auto rounded-2xl border border-steel/20 bg-charcoal text-paper shadow-2xl">
        <div className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 sm:pt-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-safety/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-safety" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg">Gestion des cookies</h3>
              <p className="text-sm font-mono-brand text-paper" style={{ opacity: 0.5 }}>
                Conformité RGPD
              </p>
            </div>
          </div>
          <button onClick={rejectAll} className="p-1 text-paper transition-colors" style={{ opacity: 0.45 }} aria-label="Fermer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 sm:px-6 pb-4">
          <p className="text-sm leading-relaxed text-paper" style={{ opacity: 0.72 }}>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez accepter tous les
            cookies, les refuser, ou personnaliser vos préférences.{' '}
            <Link to="/politique-de-confidentialite" className="text-safety underline transition-colors hover:text-paper" style={{ opacity: 0.9 }}>
              En savoir plus
            </Link>
          </p>
        </div>

        {showDetails && (
          <div className="px-5 sm:px-6 pb-4 space-y-3">
            <div className="bg-navy/50 rounded-xl p-4 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-safety" />
                  <span className="font-heading font-semibold text-sm">Cookies nécessaires</span>
                </div>
                <p className="text-xs mt-1 text-paper" style={{ opacity: 0.4 }}>
                  Indispensables au fonctionnement du site.
                </p>
              </div>
              <div className="bg-safety/30 text-safety text-xs font-mono-brand px-3 py-1 rounded-full">Toujours actif</div>
            </div>

            <div className="bg-navy/50 rounded-xl p-4 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-semibold text-sm">Cookies analytiques</span>
                </div>
                <p className="text-xs mt-1 text-paper" style={{ opacity: 0.4 }}>
                  Nous aident à comprendre comment vous utilisez le site.
                </p>
              </div>
              <button
                onClick={() => setPreferences((current) => ({ ...current, analytics: !current.analytics }))}
                className={`relative h-6 w-12 rounded-full transition-colors duration-300 ${preferences.analytics ? 'bg-safety' : 'bg-steel/40'}`}
              >
                <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${preferences.analytics ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 px-5 sm:px-6 pb-5 sm:pb-6">
          <button
            onClick={acceptAll}
            className="bg-safety text-paper px-5 py-2.5 rounded-full font-heading text-sm font-semibold hover:brightness-110 transition-all whitespace-nowrap"
          >
            Tout accepter
          </button>
          <button
            onClick={rejectAll}
            className="border border-paper/20 text-paper px-5 py-2.5 rounded-full font-heading text-sm font-semibold transition-all hover:border-paper/40 hover:text-paper whitespace-nowrap"
            style={{ opacity: 0.72 }}
          >
            Tout refuser
          </button>
          {!showDetails ? (
            <button
              onClick={() => setShowDetails(true)}
              className="text-paper text-sm font-heading transition-colors underline underline-offset-2 hover:text-paper"
              style={{ opacity: 0.5 }}
            >
              Personnaliser
            </button>
          ) : (
            <button
              onClick={savePreferences}
              className="text-safety text-sm font-heading font-semibold transition-colors underline underline-offset-2 hover:text-paper"
            >
              Sauvegarder mes choix
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
