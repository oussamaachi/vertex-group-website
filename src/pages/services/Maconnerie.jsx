import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Hammer, Hotel, House, BriefcaseBusiness, Paintbrush, Store, Wrench, Zap } from 'lucide-react';
import Button from '../../components/Button';

gsap.registerPlugin(ScrollTrigger);

const services = [
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
  { icon: BriefcaseBusiness, label: 'Bureaux & espaces tertiaires' },
  { icon: Hotel, label: 'Hôtellerie & hébergement' },
  { icon: Store, label: 'Commerces & salons' },
];

const highlights = [
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

export default function Maconnerie() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.content-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 75%' },
        }
      );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative min-h-[100dvh] md:h-[72dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0b1120 0%, #111827 52%, #1f2937 100%)',
            }}
          />
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full blur-3xl" style={{ background: 'rgba(234,88,12,0.18)' }} />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full blur-3xl" style={{ background: 'rgba(248,250,252,0.08)' }} />
          <div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(248,250,252,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.08) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>

        <div className="relative z-10 w-full px-[8vw] pb-12 md:pb-16 pt-28 md:pt-0">
          <div className="hero-anim mb-4 inline-flex items-center justify-center w-12 h-12 bg-safety/20 rounded-xl">
            <Hammer size={24} className="text-safety" />
          </div>
          <span className="hero-anim font-mono-brand text-xs uppercase tracking-[0.25em] text-paper" style={{ opacity: 0.5 }}>
            Une seule équipe pour tous vos travaux
          </span>
          <h1 className="hero-anim mt-4 font-heading font-bold text-paper text-4xl lg:text-6xl leading-tight tracking-tight">
            Travaux Tous Corps d&apos;État
          </h1>
          <p className="hero-anim mt-5 text-paper text-lg max-w-3xl leading-relaxed" style={{ opacity: 0.72 }}>
            De la conception à la réalisation, nous prenons en charge l’ensemble de vos travaux de rénovation,
            d’aménagement et de construction.
          </p>
          <div className="hero-anim mt-8 grid max-w-4xl grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-paper/12 bg-paper/8 p-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-safety/15 text-safety">
                  <item.icon size={20} />
                </div>
                <p className="mt-4 font-heading text-xl font-semibold text-paper">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contentRef} className="section-padding bg-paper">
        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1.15fr_0.85fr] gap-10">
          <div className="content-anim space-y-6">
            <h2 className="font-heading font-bold pl-4 border-l-4 border-safety text-charcoal text-3xl">
              Une seule équipe pour tous vos travaux
            </h2>
            <p className="text-charcoal/75 leading-relaxed">
              De la conception à la réalisation, nous prenons en charge l’ensemble de vos travaux de rénovation,
              d’aménagement et de construction.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Grâce à notre expertise en tous corps d’état, nous coordonnons chaque étape du chantier afin de vous
              garantir un résultat de qualité, dans le respect des délais et de votre budget.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Notre objectif : vous offrir un interlocuteur unique pour simplifier la gestion de votre projet et
              assurer une exécution fluide et professionnelle.
            </p>

            <div className="pt-2">
              <h3 className="font-heading font-bold text-charcoal text-2xl mb-4">Nos prestations</h3>
              <p className="text-charcoal/75 leading-relaxed mb-5">
                Nous intervenons sur tous types de projets professionnels ou personnels, qu’il s’agisse de rénovation
                complète, d’aménagement intérieur ou de travaux spécifiques, notamment :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-concrete-light bg-white p-4">
                    <span className="w-2 h-2 mt-2 rounded-full bg-safety flex-shrink-0" />
                    <span className="text-sm text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-anim flex flex-col gap-6">
            <div className="bg-navy rounded-card card-shadow p-8 text-paper">
              <span className="font-mono-brand text-xs text-concrete block mb-2">Pourquoi nous choisir ?</span>
              <h3 className="font-heading font-bold text-2xl mb-5">Pourquoi nous choisir ?</h3>
              <div className="space-y-4">
                {whyChooseItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-paper/10 pb-4 last:border-b-0 last:pb-0">
                    <Check size={16} className="mt-1 text-safety flex-shrink-0" />
                    <span className="text-paper" style={{ opacity: 0.8 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Button to="/contact" className="w-full mt-8">
                Demander un devis
              </Button>
            </div>

            <div className="bg-white rounded-card card-shadow p-8 border border-concrete-light">
              <span className="font-mono-brand text-xs text-navy/50 block mb-2">Un accompagnement complet</span>
              <h3 className="font-heading font-bold text-charcoal text-2xl mb-5">Un accompagnement complet</h3>
              <p className="text-charcoal/75 leading-relaxed">
                Chaque projet est étudié avec attention afin de proposer des solutions adaptées à vos besoins et à
                votre budget.
              </p>
              <p className="mt-4 text-charcoal/75 leading-relaxed">
                Notre équipe assure la coordination des différents corps de métier pour garantir un chantier organisé,
                sécurisé et conforme aux standards de qualité.
              </p>
              <p className="mt-4 text-charcoal/75 leading-relaxed">
                Que ce soit pour moderniser un appartement, rénover un local commercial ou transformer un espace de
                vie, nous mettons notre savoir-faire au service de votre projet.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {sectors.map((sector) => (
                  <div key={sector.label} className="rounded-2xl bg-paper-dark px-4 py-4 border border-concrete-light">
                    <div className="w-10 h-10 rounded-xl bg-safety/10 text-safety flex items-center justify-center">
                      <sector.icon size={18} />
                    </div>
                    <p className="mt-3 text-sm font-medium text-charcoal">{sector.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
