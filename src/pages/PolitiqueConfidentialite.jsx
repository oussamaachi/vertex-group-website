import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PolitiqueConfidentialite() {
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
          <span className="font-mono-brand text-xs text-concrete tracking-widest uppercase">Conformité RGPD</span>
          <h1 className="font-heading font-bold text-4xl lg:text-5xl mt-4">Politique de Confidentialité</h1>
          <p className="text-paper/60 mt-4 font-heading">Dernière mise à jour : Mars 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">1. Responsable du traitement</h2>
            <div className="text-steel leading-relaxed space-y-2">
              <p>Le responsable du traitement des données personnelles est :</p>
              <p><strong className="text-charcoal">Vertex Group</strong></p>
              <p>28 Avenue des Pépinières, 94260 Fresnes</p>
              <p>E-mail : contact@vertex-group.fr</p>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">2. Données collectées</h2>
            <div className="text-steel leading-relaxed space-y-3">
              <p>Nous collectons les données suivantes dans le cadre de notre activité :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-charcoal">Données d'identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone.</li>
                <li><strong className="text-charcoal">Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de la visite.</li>
                <li><strong className="text-charcoal">Données de demande de devis :</strong> description du projet, localisation du chantier, budget estimé.</li>
              </ul>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">3. Finalités du traitement</h2>
            <div className="text-steel leading-relaxed space-y-3">
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Répondre à vos demandes de devis et de contact.</li>
                <li>Améliorer notre site web et nos services.</li>
                <li>Assurer le suivi de la relation commerciale.</li>
                <li>Respecter nos obligations légales et réglementaires.</li>
              </ul>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">4. Base légale</h2>
            <p className="text-steel leading-relaxed">
              Le traitement de vos données personnelles est fondé sur votre consentement (article 6.1.a du RGPD), l'exécution de mesures précontractuelles (article 6.1.b), ou notre intérêt légitime (article 6.1.f) à améliorer nos services et notre communication.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">5. Durée de conservation</h2>
            <div className="text-steel leading-relaxed space-y-2">
              <p>Vos données personnelles sont conservées pendant :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-charcoal">Données de contact :</strong> 3 ans à compter du dernier échange.</li>
                <li><strong className="text-charcoal">Données de navigation :</strong> 13 mois maximum.</li>
                <li><strong className="text-charcoal">Cookies :</strong> 13 mois maximum après le dépôt.</li>
              </ul>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">6. Vos droits</h2>
            <div className="text-steel leading-relaxed space-y-3">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-charcoal">Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie.</li>
                <li><strong className="text-charcoal">Droit de rectification :</strong> demander la correction de données inexactes.</li>
                <li><strong className="text-charcoal">Droit à l'effacement :</strong> demander la suppression de vos données.</li>
                <li><strong className="text-charcoal">Droit à la portabilité :</strong> recevoir vos données dans un format structuré.</li>
                <li><strong className="text-charcoal">Droit d'opposition :</strong> vous opposer au traitement de vos données.</li>
                <li><strong className="text-charcoal">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment.</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à :{' '}
                <a href="mailto:contact@vertex-group.fr" className="text-safety underline hover:text-charcoal transition-colors">
                  contact@vertex-group.fr
                </a>
              </p>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">7. Cookies</h2>
            <div className="text-steel leading-relaxed space-y-3">
              <p>Notre site utilise des cookies pour :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-charcoal">Cookies strictement nécessaires :</strong> assurer le bon fonctionnement du site.</li>
                <li><strong className="text-charcoal">Cookies analytiques :</strong> mesurer la fréquentation du site (Google Analytics).</li>
              </ul>
              <p className="mt-2">Vous pouvez gérer vos préférences via le bandeau de consentement affiché lors de votre première visite.</p>
            </div>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">8. Sécurité</h2>
            <p className="text-steel leading-relaxed">
              Vertex Group met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Notre site est sécurisé par le protocole HTTPS.
            </p>
          </div>

          <div className="legal-block">
            <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">9. Réclamation</h2>
            <p className="text-steel leading-relaxed">
              Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-safety underline hover:text-charcoal transition-colors">
                www.cnil.fr
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
