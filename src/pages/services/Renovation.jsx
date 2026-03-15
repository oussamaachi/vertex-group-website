import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Thermometer } from 'lucide-react';
import Button from '../../components/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Renovation() {
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
            src="/images/hero-renovation.png"
            alt="Rénovation Énergétique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.2) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <div className="hero-anim mb-4 inline-flex items-center justify-center w-12 h-12 bg-safety/20 rounded-xl">
            <Thermometer size={24} className="text-safety" />
          </div>
          <h1 className="hero-anim font-heading font-bold text-paper text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
            Rénovation <br/><span className="text-safety">Énergétique CEE</span>
          </h1>
          <p className="hero-anim text-paper/70 text-lg max-w-2xl">
            Optimisez les performances thermiques de votre bâtiment, réduisez vos factures et bénéficiez des aides d'État.
          </p>
        </div>
      </section>

      <section ref={contentRef} className="section-padding bg-paper">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="content-anim space-y-6">
            <h2 className="font-heading font-bold pl-4 border-l-4 border-safety text-charcoal text-2xl">Des Économies Réelles</h2>
            <p className="text-charcoal/70 leading-relaxed">
              La rénovation énergétique ne s'improvise pas. Elle nécessite un audit précis des déperditions thermiques et la mise en œuvre de solutions d'isolation performantes.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Agréé RGE, Vertex Group accompagne particuliers et syndics de copropriété dans la valorisation de leur patrimoine immobilier.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Isolation Thermique par l\'Extérieur (ITE)',
                'Isolation des combles perdus ou aménagés',
                'Isolation des planchers bas',
                'Désembouage et remplacement de VMC',
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
              <span className="font-mono-brand text-xs text-concrete block mb-2">ACCOMPAGNEMENT ADMINISTRATIF</span>
              <h3 className="font-heading font-bold text-xl mb-4">Aides & Financements</h3>
              <p className="text-paper/70 text-sm mb-6 leading-relaxed">
                Nos équipes spécialisées montent et gèrent pour vous l'intégralité des dossiers de subventions pour déduire les primes directement de votre devis.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-navy-dark p-4 rounded-xl text-center border border-paper/10">
                  <span className="block font-heading font-bold text-safety text-lg">CEE</span>
                  <span className="font-mono-brand text-[8px] text-paper/50">CERTIFICATS</span>
                </div>
                <div className="bg-navy-dark p-4 rounded-xl text-center border border-paper/10">
                  <span className="block font-heading font-bold text-safety text-lg">MR'</span>
                  <span className="font-mono-brand text-[8px] text-paper/50">MA PRIME RENOV'</span>
                </div>
              </div>
              <Button variant="safety" to="/contact" className="w-full">Estimer mes aides</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
