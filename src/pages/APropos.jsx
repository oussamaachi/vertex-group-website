import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Shield, Target, Zap, Users, Hammer, Leaf } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { date: 'Février 2026', milestone: 'Création de Vertex Group', desc: 'Naissance de l\'entreprise à Fresnes (94), avec une ambition claire : bâtir avec excellence.' },
  { date: 'Mars 2026', milestone: 'Immatriculation RCS Créteil', desc: 'Inscription officielle au Registre du Commerce et des Sociétés.' },
  { date: '2026', milestone: 'Premiers chantiers IDF', desc: 'Lancement de nos premiers projets de rénovation complète en Île-de-France.' },
];

const values = [
  {
    icon: Shield,
    title: 'Interlocuteur Unique',
    desc: 'Un seul partenaire pour simplifier la gestion de votre projet et assurer une exécution fluide et professionnelle de A à Z.'
  },
  {
    icon: Hammer,
    title: 'Expertise Multidisciplinaire',
    desc: 'Maçonnerie, plomberie, électricité, peinture... Nous maîtrisons tous les corps d’état pour une cohérence parfaite.'
  },
  {
    icon: Target,
    title: 'Respect Délais & Budget',
    desc: 'Nous garantissons un résultat de qualité dans le strict respect de vos contraintes financières et temporelles.'
  },
  {
    icon: Zap,
    title: 'Travail Soigné',
    desc: 'L’utilisation de matériaux de qualité et une exécution rigoureuse pour des finitions durables et esthétiques.'
  },
];

const engagements = [
  { number: '100%', label: 'Devis détaillés et transparents' },
  { number: '24h', label: 'Réponse à toute demande' },
  { number: 'IDF', label: 'Zone d\'intervention complète' },
  { number: 'CEE', label: 'Éligibilité aux aides énergétiques' },
];

const legalData = [
  { label: 'Entreprise', value: 'Vertex Group' },
  { label: 'SIREN', value: '101 799 591' },
  { label: 'Siège social', value: '28 Avenue des Pépinières, 94260 Fresnes' },
];


export default function APropos() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const engRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.apropos-hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-anim',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 70%' }
        }
      );
    }, storyRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-item',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 70%' }
        }
      );
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 75%' }
        }
      );
    }, valuesRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.eng-item',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: engRef.current, start: 'top 75%' }
        }
      );
    }, engRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/hero-renovation.png"
            alt="Intérieur raffiné et rénové"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #1C221F 0%, rgba(44,52,48,0.55) 50%, rgba(44,52,48,0.15) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <span className="apropos-hero-anim block font-mono-brand text-xs text-paper/50 tracking-widest uppercase mb-3">Notre Histoire</span>
          <h1 className="apropos-hero-anim font-heading font-medium tracking-tight text-paper leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Rénover pour <span className="text-safety font-bold">durer.</span>
          </h1>
        </div>
      </section>

      {/* Story / Mission */}
      <section ref={storyRef} className="section-padding bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="story-anim block font-mono-brand text-xs text-safety tracking-widest uppercase mb-4">Notre Mission</span>
              <h2 className="story-anim font-heading font-bold tracking-tight text-charcoal text-3xl lg:text-4xl leading-tight mb-6">
                Un accompagnement complet pour vos travaux
              </h2>
              <p className="story-anim text-charcoal/60 leading-relaxed mb-4">
                Chaque projet est étudié avec attention afin de proposer des solutions adaptées à vos besoins et à votre budget. Notre équipe assure la coordination des différents corps de métier pour garantir un chantier organisé, sécurisé et conforme aux standards de qualité.
              </p>
              <p className="story-anim text-charcoal/60 leading-relaxed">
                Que ce soit pour moderniser un appartement, rénover un local commercial ou transformer un espace de vie, nous mettons notre savoir-faire au service de votre projet. Nous intervenons sur tous types de projets professionnels ou personnels.
              </p>
            </div>
            <div className="story-anim">
              <img
                src="/images/hero-renovation.png"
                alt="Projet de rénovation global par Vertex Group"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section-padding bg-paper-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-mono-brand text-xs text-safety tracking-widest uppercase">Expertise</span>
            <h2 className="font-heading font-bold text-charcoal text-2xl lg:text-3xl mt-3">Pourquoi nous choisir ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="value-card bg-white rounded-2xl p-8 card-shadow hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-safety/15 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-safety" />
                </div>
                <h3 className="font-heading font-bold text-charcoal text-xl mb-3">{v.title}</h3>
                <p className="text-charcoal/50 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements Chiffres */}
      <section ref={engRef} className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-[8vw]">
          <div className="text-center mb-12">
            <span className="font-mono-brand text-xs text-safety tracking-widest uppercase">Nos Engagements</span>
            <h2 className="font-heading font-bold text-paper text-2xl lg:text-3xl mt-3">Des promesses concrètes</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((e, i) => (
              <div key={i} className="eng-item text-center p-6 bg-navy/30 rounded-2xl border border-paper/10">
                <span className="block font-heading font-bold text-safety text-3xl lg:text-4xl mb-2">{e.number}</span>
                <span className="font-heading text-paper/60 text-sm">{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Image + Text */}
      <section className="section-padding bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/hero-maconnerie.png"
                alt="Travail de précision en maçonnerie"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="block font-mono-brand text-xs text-safety tracking-widest uppercase mb-4">Notre Expertise</span>
              <h2 className="font-heading font-bold tracking-tight text-charcoal text-2xl lg:text-3xl leading-tight mb-6">
                Un savoir-faire complet pour la rénovation
              </h2>
              <div className="space-y-4 text-charcoal/60 leading-relaxed">
                <p>
                  De la maçonnerie traditionnelle aux solutions de rénovation énergétique les plus performantes, Vertex Group propose une gamme complète de services adaptés aux projets résidentiels, commerciaux et industriels.
                </p>
                <p>
                  Notre approche repose sur trois piliers fondamentaux : la qualité des matériaux, la précision de l'exécution, et le respect absolu des délais. Chaque chantier est traité comme un projet unique, avec un plan d'intervention sur mesure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-paper-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono-brand text-xs text-navy/60 tracking-widest uppercase">Chronologie</span>
            <h2 className="font-heading font-bold text-charcoal text-2xl lg:text-3xl mt-3">Les étapes clés</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item flex-1 relative">
                {/* Connector line (desktop) */}
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-1/2 w-full h-px bg-navy/20" />
                )}
                <div className="relative z-10 text-center lg:px-6">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={16} className="text-paper" />
                  </div>
                  <span className="font-mono-brand text-xs text-safety font-medium">{item.date}</span>
                  <h3 className="font-heading font-bold text-charcoal text-base mt-2 mb-2">{item.milestone}</h3>
                  <p className="text-charcoal/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-24 bg-charcoal text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-[8vw]">
          <p className="font-heading font-medium tracking-tight text-paper/80 leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            « La qualité n'est jamais un accident ; c'est toujours le résultat d'une <span className="text-safety">intention élevée.</span> »
          </p>
        </div>
      </section>

      {/* Legal Table */}
      <section className="section-padding bg-navy-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono-brand text-xs text-paper/40 tracking-widest uppercase">Identité Juridique</span>
            <h2 className="font-heading font-bold text-paper text-2xl mt-3">Informations légales</h2>
          </div>
          <div className="bg-navy-dark border border-paper/10 rounded-card overflow-hidden">
            {legalData.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row px-6 py-4 ${
                  i < legalData.length - 1 ? 'border-b border-paper/10' : ''
                }`}
              >
                <span className="font-mono-brand text-xs text-paper/40 sm:w-48 flex-shrink-0 mb-1 sm:mb-0">{item.label}</span>
                <span className="font-mono-brand text-sm text-paper/80">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
