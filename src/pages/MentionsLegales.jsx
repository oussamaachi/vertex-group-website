import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MentionsLegales() {
  const pageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.legal-block', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-paper min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-16 bg-gradient-to-b from-navy-dark to-navy text-paper">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono-brand text-xs text-concrete tracking-widest uppercase">Informations légales</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mt-4">Mentions Légales</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">1. Éditeur du site</h2>
            <div className="text-steel leading-relaxed space-y-2">
              <p><strong className="text-charcoal">Raison sociale :</strong> Vertex Group</p>
              <p><strong className="text-charcoal">SIREN :</strong> 101 799 591</p>
              <p><strong className="text-charcoal">Siège social :</strong> 28 Avenue des Pépinières, 94260 Fresnes</p>
              <p><strong className="text-charcoal">Téléphone :</strong> 01 XX XX XX XX</p>
              <p><strong className="text-charcoal">E-mail :</strong> contact@vertexgroup.fr</p>
              <p><strong className="text-charcoal">Directeur de la publication :</strong> Le représentant légal de Vertex Group</p>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">2. Hébergement</h2>
            <div className="text-steel leading-relaxed space-y-2">
              <p><strong className="text-charcoal">Hébergeur :</strong> Cloudflare, Inc.</p>
              <p><strong className="text-charcoal">Adresse :</strong> 101 Townsend Street, San Francisco, CA 94107, États-Unis</p>
              <p><strong className="text-charcoal">Site web :</strong> www.cloudflare.com</p>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">3. Propriété intellectuelle</h2>
            <p className="text-steel leading-relaxed">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, sons, logiciels, etc.) est la propriété exclusive de Vertex Group ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Vertex Group.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">4. Limitation de responsabilité</h2>
            <p className="text-steel leading-relaxed">
              Vertex Group s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Vertex Group ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Vertex Group décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur les informations disponibles sur ce site.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">5. Données personnelles</h2>
            <p className="text-steel leading-relaxed">
              Le traitement de vos données personnelles est régi par notre{' '}
              <a href="/politique-de-confidentialite" className="text-safety underline hover:text-charcoal transition-colors">
                Politique de Confidentialité
              </a>
              , conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">6. Cookies</h2>
            <p className="text-steel leading-relaxed">
              Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment modifier vos préférences en matière de cookies via le bandeau de consentement affiché lors de votre première visite. Pour plus d'informations, consultez notre{' '}
              <a href="/politique-de-confidentialite" className="text-safety underline hover:text-charcoal transition-colors">
                Politique de Confidentialité
              </a>.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">7. Droit applicable</h2>
            <p className="text-steel leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, compétence est attribuée aux tribunaux compétents de Créteil.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
