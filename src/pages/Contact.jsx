import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Send, CheckCircle, MapPin, Clock, Phone, Mail } from 'lucide-react';

const workTypes = [
  'Maçonnerie',
  'Rénovation Énergétique',
  'Étanchéité',
  'Coordination de Chantier',
  'Fourniture de Matériaux',
  'Autre',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', workType: '', description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', workType: '', description: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero-like top area */}
      <div className="h-24 bg-charcoal" />

      <section ref={heroRef} className="relative section-padding min-h-[80dvh] bg-paper">
        {/* Subtle background texture for glass effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("/images/hero-contact.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="contact-anim">
            <span className="font-mono-brand text-xs text-navy/60 tracking-widest uppercase block mb-3">Contact</span>
            <h1 className="font-heading font-medium tracking-tight text-charcoal leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Parlons de <span className="text-safety font-bold">votre projet.</span>
            </h1>

            <div className="space-y-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-navy" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-charcoal text-sm mb-1">Adresse</h4>
                  <p className="text-charcoal/50 text-sm">28 Avenue des Pépinières<br />94260 Fresnes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={18} className="text-navy" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-charcoal text-sm mb-1">Délai de réponse</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-safety rounded-full pulse-dot"></span>
                    <span className="font-mono-brand text-xs text-charcoal/50">Réponse sous 24h</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={18} className="text-navy" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-charcoal text-sm mb-1">Téléphone</h4>
                  <p className="text-charcoal/50 text-sm">+33 1 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-navy" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-charcoal text-sm mb-1">Email</h4>
                  <p className="text-charcoal/50 text-sm">contact@vertex-group.fr</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 glass border-none rounded-2xl">
              <div className="font-mono-brand text-xs text-charcoal/40 space-y-1">
                <p>SIREN : 101 799 591</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="contact-anim">
            <form onSubmit={handleSubmit} className="glass border-white/20 rounded-container card-shadow p-8 space-y-5 relative overflow-hidden">
              <div>
                <label className="font-heading text-sm font-medium text-charcoal block mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-paper rounded-xl border border-navy/10 focus:border-navy/30 focus:outline-none transition-colors font-heading text-sm"
                  placeholder="Votre nom"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-heading text-sm font-medium text-charcoal block mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-paper rounded-xl border border-navy/10 focus:border-navy/30 focus:outline-none transition-colors font-heading text-sm"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="font-heading text-sm font-medium text-charcoal block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-paper rounded-xl border border-navy/10 focus:border-navy/30 focus:outline-none transition-colors font-heading text-sm"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div>
                <label className="font-heading text-sm font-medium text-charcoal block mb-2">Type de travaux</label>
                <select
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-paper rounded-xl border border-navy/10 focus:border-navy/30 focus:outline-none transition-colors font-heading text-sm appearance-none"
                >
                  <option value="">Sélectionnez un type</option>
                  {workTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-heading text-sm font-medium text-charcoal block mb-2">Description du projet</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-paper rounded-xl border border-navy/10 focus:border-navy/30 focus:outline-none transition-colors font-heading text-sm resize-none"
                  placeholder="Décrivez brièvement votre projet..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`btn-magnetic w-full py-4 rounded-xl font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-500 ${
                  submitted
                    ? 'bg-navy text-paper'
                    : 'bg-safety text-paper'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} className="relative z-10" /> <span className="relative z-10">Message envoyé</span>
                  </>
                ) : (
                  <>
                    <span className="btn-slide bg-navy-dark rounded-xl"></span>
                    <span className="btn-text flex items-center gap-2 relative z-10">
                      <Send size={16} /> Envoyer ma Demande
                    </span>
                  </>
                )}
              </button>
            </form>

            <p className="text-center font-mono-brand text-xs text-charcoal/30 mt-4">
              28 Avenue des Pépinières, 94260 Fresnes · SIREN 101 799 591
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
