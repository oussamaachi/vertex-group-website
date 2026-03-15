import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ClipboardList } from 'lucide-react';
import Button from '../../components/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Coordination() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.content-anim',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 70%' }
        }
      );
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative h-[60dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/hero-coordination.png"
            alt="Coordination de Chantier"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.2) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <div className="hero-anim mb-4 inline-flex items-center justify-center w-12 h-12 bg-safety/20 rounded-xl">
            <ClipboardList size={24} className="text-safety" />
          </div>
          <h1 className="hero-anim font-heading font-bold text-paper text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
            Coordination <br/><span className="text-concrete-light">& Gestion de Chantier</span>
          </h1>
          <p className="hero-anim text-paper/70 text-lg max-w-2xl">
            Maîtrise d'œuvre d'exécution. Nous pilotons vos travaux de A à Z avec un suivi rigoureux des plannings et budgets.
          </p>
        </div>
      </section>

      <section ref={contentRef} className="section-padding bg-paper">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="content-anim space-y-6">
            <h2 className="font-heading font-bold pl-4 border-l-4 border-safety text-charcoal text-2xl">Un Chantier sous Contrôle</h2>
            <p className="text-charcoal/70 leading-relaxed">
              Évitez les retards, les dépassements budgétaires et les malfaçons. Notre cellule de pilotage organise l'intervention des différents corps d'état avec des méthodologies d'ingénierie stricte.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Nous assumons la responsabilité du planning et de la conformité de bout en bout de la chaîne.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Établissement du planning (diagramme de Gantt)',
                'Animation des réunions de chantier (CR hébdo)',
                'Contrôle réglementaire et sécuritaire',
                'Suivi administratif et financier (SIT)',
                'OPR et levée des réserves',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded bg-safety flex-shrink-0" />
                  <span className="text-charcoal text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="content-anim">
            <div className="bg-navy rounded-card card-shadow p-8 text-paper">
              <span className="font-mono-brand text-xs text-concrete block mb-2">ENGAGEMENTS</span>
              <h3 className="font-heading font-bold text-xl mb-4">Pilotage Transparent</h3>
              <p className="text-paper/70 text-sm mb-6 leading-relaxed">
                Une communication fluide est la clé d'un projet réussi. Un interlocuteur unique vous est dédié.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-navy-dark p-4 rounded-xl border border-paper/10 flex justify-between items-center">
                  <span className="font-heading font-semibold text-paper text-sm">Rapports Hebdomadaires</span>
                  <span className="font-mono-brand text-[8px] text-safety bg-safety/10 px-2 py-1 rounded">RÉGULIER</span>
                </div>
                <div className="bg-navy-dark p-4 rounded-xl border border-paper/10 flex justify-between items-center">
                  <span className="font-heading font-semibold text-paper text-sm">Gestion des Aléas</span>
                  <span className="font-mono-brand text-[8px] text-safety bg-safety/10 px-2 py-1 rounded">PROACTIVE</span>
                </div>
              </div>
              <Button variant="safety" to="/contact" className="w-full">Parler à un conducteur</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
