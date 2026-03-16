import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hammer, Thermometer, Droplets, ClipboardList, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Hammer,
    slug: '/services/maconnerie-generale',
    title: 'Maçonnerie & Rénovation',
    desc: 'Restructurez et optimisez vos espaces. Des ouvertures de murs porteurs aux aménagements intérieurs, nous assurons des ouvrages durables et précis.',
    badges: ['Ouvertures', 'Second Œuvre', 'Aménagements'],
  },
  {
    icon: Thermometer,
    slug: '/services/renovation-energetique',
    title: 'Rénovation Énergétique',
    desc: 'Isolation thermique performante et montage de vos dossiers CEE / MaPrimeRénov\' pour des économies d\'énergie rapides.',
    badges: ['ITE', 'Isolation Combles', 'CEE'],
  },
  {
    icon: Droplets,
    slug: '/services/etancheite-toitures',
    title: 'Étanchéité & Toitures-Terrasses',
    desc: 'Protégez vos bâtiments de l\'eau. Traitement des toitures, terrasses et façades pour prévenir et traiter toute infiltration.',
    badges: ['Membranes SBS', 'Étanchéité Liquide', 'Recherche de fuites'],
  },
  {
    icon: ClipboardList,
    slug: '/services/coordination-chantier',
    title: 'Coordination & Rénovation Globale',
    desc: 'Nous pilotons tous les corps d\'état (Peinture, Électricité, Sols) pour vous livrer un projet clé en main, sans surprise et sans intermédiaire.',
    badges: ['Tous Corps d\'État', 'Suivi de Chantier', 'Clé en main'],
  },
  {
    icon: Package,
    slug: '/services/fourniture-materiaux',
    title: 'Fourniture de Matériaux',
    desc: 'Approvisionnez facilement vos chantiers avec nos filières pro. Nous fournissons des matériaux normés aux meilleurs tarifs.',
    badges: ['Sourcing industriel', 'Livraison Grues', 'Normes NF/CE'],
  },
];

function ServiceCard({ service, index }) {
  return (
    <Link to={service.slug} className="service-card block group">
      <div className="bg-white rounded-card card-shadow border border-concrete-light p-8 h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:border-safety/30 hover:-translate-y-1 relative overflow-hidden">
        {/* Hover Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-safety/5 rounded-bl-[100px] -z-0 transition-transform duration-500 group-hover:scale-150" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-navy-dark rounded-2xl flex items-center justify-center flex-shrink-0 text-paper transition-transform duration-500 group-hover:bg-safety group-hover:-rotate-6">
              <service.icon size={24} />
            </div>
            <span className="font-mono-brand text-xs text-navy/40 font-medium tracking-widest block">
              SERV_{String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="font-heading font-bold text-charcoal text-xl mb-3 group-hover:text-safety transition-colors delay-100">{service.title}</h3>
          <p className="text-charcoal/60 leading-relaxed mb-6 flex-grow text-sm">{service.desc}</p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {service.badges.map((badge) => (
              <span key={badge} className="font-mono-brand text-[10px] px-3 py-1 bg-paper-dark text-navy rounded border border-concrete-light">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center font-heading font-semibold text-sm text-charcoal group-hover:text-safety transition-colors">
            Voir les détails <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 75%' }
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/hero-home.png"
            alt="Chantiers et Pôles d'Expertise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.15) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <span className="services-hero-anim block font-mono-brand text-xs text-paper/50 tracking-widest uppercase mb-3">Nos Pôles d'Expertise</span>
          <h1 className="services-hero-anim font-heading font-medium tracking-tight text-paper leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Cinq métiers, <span className="text-safety font-bold">une exigence.</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={gridRef} className="section-padding bg-paper">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}
