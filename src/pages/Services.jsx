import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hammer, Thermometer, Droplets, ClipboardList, Package, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Hammer,
    title: 'Maçonnerie Générale & Gros Œuvre',
    desc: 'Construction neuve, extensions, reprises en sous-œuvre. Nous réalisons tous types de travaux de maçonnerie : fondations, murs porteurs, dalles béton, élévations et finitions. Chaque ouvrage est exécuté dans le strict respect des normes DTU en vigueur.',
    steps: ['Étude de sol & fondations', 'Élévation des murs & dalles', 'Finitions & contrôle qualité'],
    badges: ['DTU', 'Décennale'],
  },
  {
    icon: Thermometer,
    title: 'Rénovation Énergétique',
    desc: 'Isolation thermique par l\'extérieur (ITE), isolation des combles et planchers, remplacement des menuiseries. Nous accompagnons chaque projet de l\'audit énergétique jusqu\'à l\'obtention des aides CEE et MaPrimeRénov\', pour des économies pouvant atteindre 40% par an.',
    steps: ['Audit énergétique complet', 'Mise en œuvre des travaux d\'isolation', 'Montage dossiers CEE & MaPrimeRénov\''],
    badges: ['CEE', 'MaPrimeRénov\'', 'RGE'],
  },
  {
    icon: Droplets,
    title: 'Étanchéité & Toitures-Terrasses',
    desc: 'Imperméabilisation de toitures-terrasses, ouvrages enterrés, façades et sous-sols. Traitement de la déshumidification et des infiltrations. Nous garantissons une protection durable contre les eaux, avec des solutions adaptées à chaque configuration.',
    steps: ['Diagnostic des infiltrations', 'Application des membranes & traitements', 'Tests d\'étanchéité & garantie'],
    badges: ['Décennale', 'DTU série 43'],
  },
  {
    icon: ClipboardList,
    title: 'Coordination & Gestion de Chantier',
    desc: 'Maîtrise d\'œuvre d\'exécution, planification détaillée, suivi de chantier et coordination des corps de métier. Du premier coup de pioche à la réception des travaux, nous assurons un pilotage rigoureux pour respecter les délais et les budgets.',
    steps: ['Planification & phasage', 'Coordination des intervenants', 'Réception & levée de réserves'],
    badges: ['MOE'],
  },
  {
    icon: Package,
    title: 'Fourniture de Matériaux',
    desc: 'Sourcing, approvisionnement et livraison sur chantier de matériaux de construction, d\'isolation et d\'étanchéité. Nous sélectionnons des matériaux certifiés auprès de fournisseurs de confiance pour garantir qualité et traçabilité.',
    steps: ['Sélection & devis fournisseurs', 'Logistique & livraison chantier', 'Contrôle qualité à réception'],
    badges: ['Traçabilité'],
  },
];

function ServiceAccordion({ service, isOpen, onToggle, index }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-moss/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 py-8 px-6 text-left hover:bg-cream-dark/50 transition-colors duration-300"
      >
        <div className="w-14 h-14 bg-moss/10 rounded-2xl flex items-center justify-center flex-shrink-0">
          <service.icon size={24} className="text-moss" />
        </div>
        <div className="flex-1">
          <span className="font-mono-brand text-xs text-moss/50 block mb-1">SERVICE {String(index + 1).padStart(2, '0')}</span>
          <h3 className="font-heading font-bold text-charcoal text-lg lg:text-xl">{service.title}</h3>
        </div>
        <div className="text-moss/40">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? '600px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-8 pl-[5.5rem]">
          <p className="text-charcoal/60 leading-relaxed mb-6 max-w-2xl">{service.desc}</p>

          {/* Steps */}
          <div className="space-y-3 mb-6">
            {service.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-mono-brand text-xs text-clay w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-charcoal/70">{step}</span>
              </div>
            ))}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.badges.map((badge) => (
              <span key={badge} className="font-mono-brand text-[10px] px-3 py-1 bg-moss/10 text-moss rounded-full">
                {badge}
              </span>
            ))}
          </div>

          <Button to="/contact" size="sm" variant="clay">
            Demander un Devis pour ce Service →
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80&auto=format&fit=crop"
            alt="Chantier de construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #1A1A1A 0%, rgba(78,92,53,0.55) 50%, rgba(26,26,26,0.15) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <span className="services-hero-anim block font-mono-brand text-xs text-cream/50 tracking-widest uppercase mb-3">Nos Métiers</span>
          <h1 className="services-hero-anim font-drama italic text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Cinq métiers, <span className="text-clay font-bold">une exigence.</span>
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto bg-white rounded-container card-shadow overflow-hidden">
          {services.map((service, i) => (
            <ServiceAccordion
              key={i}
              service={service}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
