import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { date: 'Février 2026', milestone: 'Création de Vertex Group', desc: 'Naissance de l\'entreprise à Fresnes (94).' },
  { date: 'Mars 2026', milestone: 'Immatriculation RCS', desc: 'Inscription au R.C.S. Créteil.' },
  { date: '2026', milestone: 'Premiers chantiers IDF', desc: 'Lancement des premières opérations en Île-de-France.' },
];

const legalData = [
  { label: 'Dénomination', value: 'Vertex Group' },
  { label: 'SIREN', value: '101 799 591' },
  { label: 'RCS', value: 'R.C.S. Créteil' },
  { label: 'Forme juridique', value: 'SAS à associé unique' },
  { label: 'Capital social', value: '1 000,00 €' },
  { label: 'Siège social', value: '28 Avenue des Pépinières, 94260 Fresnes' },
  { label: 'Dirigeant', value: 'Salim Abdallah, Président' },
];


export default function APropos() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const timelineRef = useRef(null);

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

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=1920&q=80&auto=format&fit=crop"
            alt="Construction durable"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #1A1A1A 0%, rgba(78,92,53,0.55) 50%, rgba(26,26,26,0.15) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <span className="apropos-hero-anim block font-mono-brand text-xs text-cream/50 tracking-widest uppercase mb-3">Notre Histoire</span>
          <h1 className="apropos-hero-anim font-drama italic text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Construits pour <span className="text-clay font-bold">durer.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="section-padding bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="story-anim font-drama italic text-charcoal/80 text-2xl lg:text-3xl leading-relaxed mb-8">
            Vertex Group naît en février 2026 d'une vision simple : apporter la rigueur de l'ingénierie de précision aux chantiers de construction et de rénovation en Île-de-France.
          </p>
          <p className="story-anim text-charcoal/50 leading-relaxed">
            Fondée par Salim Abdallah à Fresnes (94), l'entreprise réunit des compétences en maçonnerie, rénovation énergétique, étanchéité et coordination de chantier. Notre engagement : des ouvrages durables, exécutés avec rigueur, dans le respect des normes et des délais.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section-padding bg-cream-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono-brand text-xs text-moss/60 tracking-widest uppercase">Chronologie</span>
            <h2 className="font-heading font-bold text-charcoal text-2xl lg:text-3xl mt-3">Les étapes clés</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item flex-1 relative">
                {/* Connector line (desktop) */}
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-1/2 w-full h-px bg-moss/20" />
                )}
                <div className="relative z-10 text-center lg:px-6">
                  <div className="w-10 h-10 bg-moss rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={16} className="text-cream" />
                  </div>
                  <span className="font-mono-brand text-xs text-clay font-medium">{item.date}</span>
                  <h3 className="font-heading font-bold text-charcoal text-base mt-2 mb-2">{item.milestone}</h3>
                  <p className="text-charcoal/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigeant Card */}
      <section className="section-padding bg-cream">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-card card-shadow p-8">
            <div className="w-20 h-20 bg-moss/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-heading font-bold text-moss text-2xl">SA</span>
            </div>
            <h3 className="font-heading font-bold text-charcoal text-xl">Salim Abdallah</h3>
            <span className="font-mono-brand text-xs text-moss/60">Président</span>
            <p className="text-charcoal/50 text-sm mt-4 leading-relaxed">
              Fondateur et dirigeant de Vertex Group, Salim Abdallah porte une vision de construction alliant précision technique et engagement durable.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-24 bg-charcoal text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-[8vw]">
          <p className="font-drama italic text-cream/80 leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            « La qualité n'est jamais un accident ; c'est toujours le résultat d'une <span className="text-clay">intention élevée.</span> »
          </p>
        </div>
      </section>

      {/* Legal Table */}
      <section className="section-padding bg-moss-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono-brand text-xs text-cream/40 tracking-widest uppercase">Identité Juridique</span>
            <h2 className="font-heading font-bold text-cream text-2xl mt-3">Informations légales</h2>
          </div>
          <div className="bg-moss-dark border border-cream/10 rounded-card overflow-hidden">
            {legalData.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row px-6 py-4 ${
                  i < legalData.length - 1 ? 'border-b border-cream/10' : ''
                }`}
              >
                <span className="font-mono-brand text-xs text-cream/40 sm:w-48 flex-shrink-0 mb-1 sm:mb-0">{item.label}</span>
                <span className="font-mono-brand text-sm text-cream/80">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
