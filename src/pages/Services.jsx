import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList, Droplets, Hammer, Package, Thermometer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Hammer,
    slug: '/services/maconnerie-generale',
    title: 'Travaux Tous Corps d’État',
    desc: 'Une seule équipe pour tous vos travaux de rénovation, d’aménagement et de construction.',
    badges: ['Rénovation', 'Aménagement', 'Interlocuteur unique'],
  },
  {
    icon: Thermometer,
    slug: '/services/renovation-energetique',
    title: 'Rénovation Énergétique',
    desc: 'Réduisez vos coûts énergétiques tout en finançant vos travaux grâce aux Certificats d’Économies d’Énergie.',
    badges: ['CEE', 'Tertiaire', 'Financement'],
  },
  {
    icon: Droplets,
    slug: '/services/etancheite-toitures',
    title: 'Étanchéité & Toitures-Terrasses',
    desc: 'Protection durable des bâtiments avec des solutions d’étanchéité adaptées à chaque ouvrage.',
    badges: ['Toitures', 'Façades', 'Traitement'],
  },
  {
    icon: ClipboardList,
    slug: '/services/coordination-chantier',
    title: 'Coordination de Chantier',
    desc: 'Suivi global des intervenants, des délais et du budget pour une exécution maîtrisée.',
    badges: ['Planning', 'Suivi', 'Interlocuteur unique'],
  },
  {
    icon: Package,
    slug: '/services/fourniture-materiaux',
    title: 'Fourniture & Sourcing',
    desc: 'Approvisionnement et logistique de matériaux certifiés pour sécuriser la continuité du chantier.',
    badges: ['Matériaux', 'Logistique', 'Traçabilité'],
  },
];

function ServiceCard({ service, index }) {
  return (
    <Link to={service.slug} className="service-card block group">
      <div className="h-full overflow-hidden rounded-card border border-concrete-light bg-white p-8 card-shadow transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-navy-dark text-paper flex items-center justify-center transition-colors duration-300 group-hover:bg-safety">
            <service.icon size={24} />
          </div>
          <span className="font-mono-brand text-xs text-navy/35 tracking-[0.25em]">SERV_{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className="font-heading font-bold text-charcoal text-2xl leading-tight transition-colors duration-300 group-hover:text-safety">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{service.desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.badges.map((badge) => (
            <span key={badge} className="rounded-full border border-concrete-light bg-paper-dark px-3 py-1 font-mono-brand text-[10px] text-navy">
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center text-sm font-heading font-semibold text-charcoal transition-colors duration-300 group-hover:text-safety">
          Voir les détails <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
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
      gsap.fromTo(
        '.services-hero-anim',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 78%' },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative h-[64dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="/images/vertex_services_hero_1773598898448.png" alt="Expertises Vertex Group" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.68) 52%, rgba(15,23,42,0.22) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full px-[8vw] pb-16">
          <span className="services-hero-anim block font-mono-brand text-xs uppercase tracking-[0.25em] text-paper mb-3" style={{ opacity: 0.55 }}>
            Nos pôles d’expertise
          </span>
          <h1 className="services-hero-anim font-heading font-medium tracking-tight text-paper leading-tight" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)' }}>
            Des métiers complémentaires,
            <br />
            <span className="text-safety font-bold">un pilotage unique.</span>
          </h1>
          <p className="services-hero-anim mt-5 max-w-2xl text-paper text-lg leading-relaxed" style={{ opacity: 0.72 }}>
            Nous intervenons sur vos projets de rénovation, d’amélioration énergétique, d’étanchéité et de coordination
            avec une seule exigence : la qualité d’exécution.
          </p>
        </div>
      </section>

      <section ref={gridRef} className="section-padding bg-paper">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
