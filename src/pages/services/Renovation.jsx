import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BadgeEuro, Leaf, Thermometer } from 'lucide-react';
import Button from '../../components/Button';

gsap.registerPlugin(ScrollTrigger);

const fundingItems = [
  'les aides financières disponibles',
  'les travaux éligibles',
  'les économies d’énergie potentielles',
];

const supportItems = [
  'Étude de votre projet',
  'Simplification des démarches',
  'Optimisation des financements CEE',
];

export default function Renovation() {
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
      <section ref={heroRef} className="relative h-[66dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img src="/images/hero-renovation.png" alt="Rénovation énergétique CEE" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.65) 50%, rgba(15,23,42,0.16) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full px-[8vw] pb-16">
          <div className="hero-anim mb-4 inline-flex items-center justify-center w-12 h-12 bg-safety/20 rounded-xl">
            <Thermometer size={24} className="text-safety" />
          </div>
          <span className="hero-anim font-mono-brand text-xs uppercase tracking-[0.25em] text-paper" style={{ opacity: 0.5 }}>
            Rénovation Énergétique
          </span>
          <h1 className="hero-anim mt-4 font-heading font-bold text-paper text-4xl lg:text-6xl leading-tight tracking-tight">
            Certificats d&apos;Économies d&apos;Énergie
          </h1>
          <p className="hero-anim mt-5 text-paper text-lg max-w-3xl leading-relaxed" style={{ opacity: 0.72 }}>
            Réduisez vos coûts énergétiques tout en finançant vos travaux.
          </p>
        </div>
      </section>

      <section ref={contentRef} className="section-padding bg-paper">
        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="content-anim space-y-6">
            <h2 className="font-heading font-bold pl-4 border-l-4 border-safety text-charcoal text-3xl">
              Rénovation Énergétique
            </h2>
            <h3 className="font-heading font-bold text-charcoal text-2xl">
              Certificats d&apos;Économies d&apos;Énergie
            </h3>
            <p className="text-charcoal/75 leading-relaxed">
              Nous accompagnons les entreprises et acteurs du secteur tertiaire dans l’obtention de primes liées aux
              Certificats d’Économies d’Énergie (CEE).
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Ce dispositif permet de financer une partie de vos travaux d’amélioration énergétique tout en diminuant
              durablement vos consommations.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Isolation, modernisation des équipements ou optimisation des systèmes énergétiques : ces améliorations
              permettent de réaliser de véritables économies sur vos factures d’énergie tout en valorisant vos
              bâtiments.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              Notre équipe vous accompagne de l’étude jusqu’à l’obtention des primes, afin de simplifier toutes les
              démarches et optimiser les financements liés au dispositif CEE.
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              CEE : transformez vos travaux en économies durables.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {[
                'Isolation',
                'Modernisation des équipements',
                'Optimisation des systèmes énergétiques',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-concrete-light bg-white p-5 card-shadow">
                  <Leaf size={18} className="text-safety" />
                  <p className="mt-3 text-sm font-medium text-charcoal">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-anim flex flex-col gap-6">
            <div className="rounded-card border border-[#86efac]/30 bg-[#14532d] p-8 text-white card-shadow">
              <span className="font-mono-brand text-xs text-white/70 block mb-2">Primes &amp; Financement</span>
              <h3 className="font-heading font-bold text-2xl mb-4">Primes &amp; Financement</h3>
              <p className="text-white/85 leading-relaxed">
                Nous réalisons une simulation personnalisée afin d’estimer :
              </p>
              <div className="mt-6 space-y-3">
                {fundingItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                    <BadgeEuro size={16} className="text-[#bbf7d0]" />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-card card-shadow p-8 text-paper">
              <span className="font-mono-brand text-xs text-concrete block mb-2">Accompagnement complet</span>
              <h3 className="font-heading font-bold text-2xl mb-4">CEE : transformez vos travaux en économies durables.</h3>
              <div className="space-y-4">
                {supportItems.map((item) => (
                  <div key={item} className="rounded-xl border border-paper/10 bg-navy-dark px-4 py-4 text-sm text-paper" style={{ opacity: 0.8 }}>
                    {item}
                  </div>
                ))}
              </div>
              <Button variant="safety" to="/contact" className="w-full mt-8">
                Estimer mes aides
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
