import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, BadgeEuro, BriefcaseBusiness, Check, Hotel, House, Paintbrush, Store, Wrench, Zap } from 'lucide-react';
import Button from '../components/Button';
import CertBar from '../components/CertBar';

gsap.registerPlugin(ScrollTrigger);

const trades = [
  'Maçonnerie générale et aménagement',
  'Plomberie et installations sanitaires',
  'Électricité et mise aux normes',
  'Peinture et revêtements muraux',
  'Carrelage et revêtements de sols',
  'Menuiserie intérieure et extérieure',
  'Cloisons, isolation et faux plafonds',
  'Rénovation d’appartements, maisons et locaux professionnels',
  'Décoration, menuiserie',
];

const sectors = [
  { icon: House, label: 'Appartements & maisons' },
  { icon: BriefcaseBusiness, label: 'Bureaux & tertiaire' },
  { icon: Hotel, label: 'Hôtellerie & hébergement' },
  { icon: Store, label: 'Commerces & salons' },
];

const renovationHighlights = [
  { icon: Paintbrush, label: 'Peinture & finitions' },
  { icon: Zap, label: 'Électricité & mise aux normes' },
  { icon: Wrench, label: 'Aménagement intérieur' },
];

const whyChooseItems = [
  'Expertise en travaux tous corps d’état',
  'Un interlocuteur unique pour votre chantier',
  'Respect des délais et du budget',
  'Travail soigné et matériaux de qualité',
  'Accompagnement de A à Z',
];

const fundingItems = [
  'les aides financières disponibles',
  'les travaux éligibles',
  'les économies d’énergie potentielles',
];

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out', delay: 0.25 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <img src="/images/hero-home-new.png" alt="Rénovation Intérieure Premium Haut de Gamme" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/95 via-paper/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-[8vw] pb-24 lg:pb-20 pt-32">
        <div className="max-w-5xl">
          <div className="hero-anim mb-5 inline-flex items-center gap-2 px-4 py-2 border border-safety/20 bg-safety/5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-safety rounded-full pulse-dot" />
            <span className="font-mono-brand text-[11px] sm:text-xs text-charcoal tracking-wide uppercase" style={{ opacity: 0.8 }}>
              Une seule équipe pour tous vos travaux
            </span>
          </div>

          <h1
            className="hero-anim font-heading text-charcoal leading-[0.98]"
            style={{ fontSize: 'clamp(3.1rem, 7vw, 6.4rem)' }}
          >
            Experts en
            <br />
            <span className="text-safety font-semibold italic">Rénovation Intérieure</span>
          </h1>

          <p className="hero-anim mt-6 max-w-2xl text-charcoal/80 text-lg sm:text-xl leading-relaxed">
            De la conception à la réalisation, nous prenons en charge l’ensemble de vos travaux d’aménagement complet
            pour vos appartements, maisons ou locaux professionnels.
          </p>

          <div className="hero-anim mt-8 flex flex-wrap gap-3">
            <Button to="/contact" size="lg">
              Demander une étude
            </Button>
            <Button to="/services" variant="outline" size="lg" className="border-charcoal/20 text-charcoal hover:border-charcoal/40 bg-white/50 backdrop-blur-sm">
              Découvrir nos réalisations
            </Button>
          </div>

          <div className="hero-anim mt-8 flex flex-wrap gap-3">
            {['Rénovation tous corps d’état', 'Interlocuteur unique', 'Matériaux premium'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/60 px-4 py-2 text-sm text-charcoal backdrop-blur-sm shadow-sm"
              >
                <Check size={14} className="text-safety" />
                {item}
              </span>
            ))}
          </div>

          <div className="hero-anim mt-10 grid max-w-4xl grid-cols-1 md:grid-cols-3 gap-4">
            {renovationHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-concrete-light bg-white/80 p-6 backdrop-blur-md card-shadow hover:-translate-y-1 transition-transform duration-500">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-safety/10 text-safety mb-4">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-medium text-charcoal">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  Une équipe dédiée pour sublimer vos espaces avec précision et élégance.
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceOverview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.overview-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-paper">
      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8">
        <div className="overview-anim bg-white rounded-card card-shadow border border-concrete-light p-8 lg:p-10">
          <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-navy/50">Travaux Tous Corps d&apos;État</span>
          <h2 className="font-heading font-bold text-charcoal mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.3rem)' }}>
            Une seule équipe pour tous vos travaux
          </h2>
          <p className="mt-5 text-charcoal/75 leading-relaxed">
            De la conception à la réalisation, nous prenons en charge l’ensemble de vos travaux de rénovation,
            d’aménagement et de construction.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Grâce à notre expertise en tous corps d’état, nous coordonnons chaque étape du chantier afin de vous
            garantir un résultat de qualité, dans le respect des délais et de votre budget.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Notre objectif : vous offrir un interlocuteur unique pour simplifier la gestion de votre projet et assurer
            une exécution fluide et professionnelle.
          </p>

          <h3 className="mt-8 font-heading font-bold text-charcoal text-2xl">Nos prestations</h3>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Nous intervenons sur tous types de projets professionnels ou personnels, qu’il s’agisse de rénovation
            complète, d’aménagement intérieur ou de travaux spécifiques, notamment :
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {trades.map((trade) => (
              <div key={trade} className="flex items-start gap-3 rounded-2xl bg-paper-dark px-4 py-3 border border-concrete-light">
                <span className="mt-1 w-2 h-2 rounded-full bg-safety flex-shrink-0" />
                <span className="text-sm text-charcoal">{trade}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overview-anim">
          <div className="rounded-card bg-paper-dark border border-concrete-light text-charcoal p-8 lg:p-10 card-shadow h-full">
            <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-charcoal/50">
              Pourquoi nous choisir ?
            </span>
            <div className="mt-8 space-y-5">
              {whyChooseItems.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-charcoal/10 pb-5 last:border-b-0 last:pb-0">
                  <Check size={20} className="mt-0.5 text-safety flex-shrink-0" strokeWidth={2} />
                  <span className="text-charcoal/80 text-lg leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnergySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.energy-anim',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#eef3f7]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-stretch">
        <div className="energy-anim relative overflow-hidden rounded-card min-h-[420px] card-shadow">
          <img src="/images/hero-renovation.png" alt="Rénovation énergétique et certificats CEE" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10 text-charcoal">
            <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-safety" style={{ opacity: 0.9 }}>
              Rénovation Énergétique
            </span>
            <h2 className="font-heading font-bold mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)' }}>
              Réduisez vos coûts énergétiques tout en finançant vos travaux
            </h2>
            <p className="mt-4 max-w-lg text-charcoal/80 leading-relaxed">
              CEE : transformez vos travaux en économies durables.
            </p>
          </div>
        </div>

        <div className="energy-anim flex flex-col gap-6">
          <div className="bg-white rounded-card border border-concrete-light card-shadow p-8 lg:p-10">
            <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-navy/50">Certificats d&apos;Économies d&apos;Énergie</span>
            <h3 className="font-heading font-bold text-charcoal text-3xl mt-4">Réduisez vos coûts énergétiques tout en finançant vos travaux</h3>
            <p className="mt-5 text-charcoal/75 leading-relaxed">
              Nous accompagnons les entreprises et acteurs du secteur tertiaire dans l’obtention de primes liées aux
              Certificats d’Économies d’Énergie (CEE).
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              Ce dispositif permet de financer une partie de vos travaux d’amélioration énergétique tout en diminuant
              durablement vos consommations.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              Isolation, modernisation des équipements ou optimisation des systèmes énergétiques : ces améliorations
              permettent de réaliser de véritables économies sur vos factures d’énergie tout en valorisant vos
              bâtiments.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              Notre équipe vous accompagne de l’étude jusqu’à l’obtention des primes, afin de simplifier toutes les
              démarches et optimiser les financements liés au dispositif CEE.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              CEE : transformez vos travaux en économies durables.
            </p>
          </div>

          <div className="rounded-card border border-safety/20 bg-safety/5 text-charcoal p-8 lg:p-10 card-shadow">
            <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-safety">Primes &amp; Financement</span>
            <h3 className="font-heading font-bold text-2xl mt-4">Simulation personnalisée</h3>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Nous réalisons une simulation personnalisée afin d’estimer :
            </p>
            <div className="mt-6 space-y-3">
              {fundingItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 border border-concrete-light">
                  <BadgeEuro size={16} className="text-safety" />
                  <span className="text-sm text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sector-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal text-paper overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="sector-anim max-w-3xl">
          <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-paper" style={{ opacity: 0.4 }}>
            Champs d&apos;intervention
          </span>
          <h2 className="font-heading font-bold mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>
            Des espaces de vie aux environnements professionnels
          </h2>
          <p className="mt-5 text-paper leading-relaxed" style={{ opacity: 0.68 }}>
            Nous intervenons aussi bien sur des appartements, maisons et projets de rénovation intérieure que sur des
            bureaux, hôtels, commerces ou salons. Notre approche reste celle d’une entreprise capable de coordonner
            tous les corps d’état avec un seul interlocuteur.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector) => (
            <div key={sector.label} className="sector-anim rounded-3xl border border-paper/10 bg-paper/5 p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-safety/15 text-safety flex items-center justify-center">
                <sector.icon size={22} />
              </div>
              <p className="mt-4 font-heading font-semibold text-xl">{sector.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Protocol() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.protocol-anim',
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Étude du projet',
      text: 'Chaque projet est étudié avec attention afin de proposer des solutions adaptées à vos besoins et à votre budget.',
    },
    {
      number: '02',
      title: 'Coordination des métiers',
      text: 'Notre équipe assure la coordination des différents corps de métier pour garantir un chantier organisé, sécurisé et conforme aux standards de qualité.',
    },
    {
      number: '03',
      title: 'Réalisation fluide',
      text: 'Que ce soit pour moderniser un appartement, rénover un local commercial ou transformer un espace de vie, nous mettons notre savoir-faire au service de votre projet.',
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="protocol-anim max-w-3xl">
          <span className="font-mono-brand text-xs tracking-[0.25em] uppercase text-navy/50">Un accompagnement complet</span>
          <h2 className="font-heading font-bold text-charcoal mt-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Un accompagnement complet
          </h2>
          <p className="mt-5 text-charcoal/75 leading-relaxed">
            Chaque projet est étudié avec attention afin de proposer des solutions adaptées à vos besoins et à votre
            budget.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Notre équipe assure la coordination des différents corps de métier pour garantir un chantier organisé,
            sécurisé et conforme aux standards de qualité.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Que ce soit pour moderniser un appartement, rénover un local commercial ou transformer un espace de vie,
            nous mettons notre savoir-faire au service de votre projet.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="protocol-anim rounded-card border border-concrete-light bg-white p-8 card-shadow">
              <span className="font-mono-brand text-xs text-safety tracking-[0.25em]">{step.number}</span>
              <h3 className="font-heading font-bold text-charcoal text-2xl mt-4">{step.title}</h3>
              <p className="mt-4 text-charcoal/70 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy-dark section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="cta-anim font-heading font-medium tracking-tight text-paper leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}>
          Votre projet mérite un <span className="text-safety font-bold">interlocuteur unique</span>
        </h2>
        <p className="cta-anim mt-6 text-paper text-lg leading-relaxed" style={{ opacity: 0.55 }}>
          Travaux tous corps d’état, rénovation intérieure ou amélioration énergétique : nous vous accompagnons de A à Z.
        </p>
        <div className="cta-anim mt-10">
          <Button to="/contact" size="xl">
            Parler de votre projet <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
        <p className="cta-anim font-mono-brand text-xs text-paper mt-6 tracking-wide" style={{ opacity: 0.3 }}>
          Réponse rapide · Étude personnalisée · Devis gratuit
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <EnergySection />
      <Sectors />
      <Protocol />
      <CertBar />
      <GetStarted />
    </>
  );
}
