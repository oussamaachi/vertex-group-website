import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets } from 'lucide-react';
import Button from '../../components/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Etancheite() {
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
            src="/images/hero-etancheite.png"
            alt="Étanchéité & Imperméabilisation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.2) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <div className="hero-anim mb-4 inline-flex items-center justify-center w-12 h-12 bg-safety/20 rounded-xl">
            <Droplets size={24} className="text-safety" />
          </div>
          <h1 className="hero-anim font-heading font-bold text-paper text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
            Étanchéité <br/><span className="text-concrete-light">& Toitures-Terrasses</span>
          </h1>
          <p className="hero-anim text-paper/70 text-lg max-w-2xl">
            Imperméabilisation, déshumidification et traitement de vos toitures, façades et ouvrages enterrés.
          </p>
        </div>
      </section>

      <section ref={contentRef} className="section-padding bg-paper">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="content-anim space-y-6">
            <h2 className="font-heading font-bold pl-4 border-l-4 border-safety text-charcoal text-2xl">Protéger votre bâtiment</h2>
            <p className="text-charcoal/70 leading-relaxed">
              L'eau est le principal ennemi des structures. Nous mettons en œuvre des systèmes d'étanchéité hautement techniques pour garantir la protection durable de vos biens.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Interventions sur toitures accessibles et inaccessibles, recherche de fuites, et traitement curatif des remontées capillaires.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Membranes bitumineuses bicouches (SBS / APP)',
                'Étanchéité liquide intégrale (SEL)',
                'Cuvelage d\'ouvrages enterrés et parkings',
                'Déshumidification et assèchement',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded bg-safety flex-shrink-0" />
                  <span className="text-charcoal text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="content-anim">
            <div className="bg-white rounded-card card-shadow p-8 border border-concrete-light">
              <span className="font-mono-brand text-xs text-navy/50 mb-2 block">DÉMARCHE QUALITÉ</span>
              <h3 className="font-heading font-bold text-charcoal text-xl mb-4">Mise en Œuvre & Tests</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-concrete-light pb-2">
                  <span className="text-sm font-medium text-charcoal/80">Diagnostic Humidité</span>
                  <span className="font-mono-brand text-xs px-2 py-1 bg-green-100 text-green-700 rounded text-center">COMPLET</span>
                </div>
                <div className="flex justify-between items-center border-b border-concrete-light pb-2">
                  <span className="text-sm font-medium text-charcoal/80">Essais de mise en eau</span>
                  <span className="font-mono-brand text-xs px-2 py-1 bg-green-100 text-green-700 rounded text-center">INCLUS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-charcoal/80">Garantie Décennale</span>
                  <span className="font-mono-brand text-xs px-2 py-1 bg-green-100 text-green-700 rounded text-center">SYSTÉMATIQUE</span>
                </div>
              </div>
              <Button to="/contact" className="w-full">Intervention ou Devis</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
