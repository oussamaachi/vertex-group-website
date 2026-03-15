import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import CertBar from '../components/CertBar';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════  HERO  ═══════════ */
function Hero() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ken Burns
      gsap.fromTo(imgRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 2.5, ease: 'power2.out' }
      );
      // Stagger entrance
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] overflow-hidden flex items-end">
      {/* Background Image */}
      <div ref={imgRef} className="absolute inset-0">
        <img
          src="/images/hero-home.png"
          alt="Chantier de construction au coucher du soleil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, #0B1120 0%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.15) 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[8vw] pb-32 lg:pb-24">
        <div className="max-w-3xl">
          <div className="hero-anim mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
            <span className="w-2 h-2 bg-concrete-light rounded-full"></span>
            <span className="font-mono-brand text-xs text-paper/70">Entreprise de construction · IDF</span>
          </div>
          <h1 className="hero-anim font-heading font-bold text-paper text-xl sm:text-2xl tracking-tight leading-tight mb-2" style={{ letterSpacing: '-0.03em' }}>
            Bâtir l'Avenir
          </h1>
          <p className="hero-anim font-heading font-medium tracking-tight text-paper" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05 }}>
            Maçonnerie Générale &<br />
            <span className="text-safety">Rénovation Énergétique.</span>
          </p>
          <p className="hero-anim mt-6 text-paper/60 text-base sm:text-lg max-w-xl leading-relaxed">
            Des ouvrages durables, une expertise certifiée en Île-de-France.<br />
            Gros Œuvre · Rénovation CEE · Étanchéité
          </p>
          <div className="hero-anim mt-8">
            <Button to="/contact" size="lg">
              Demander un Devis Gratuit →
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Pill - Bottom Right */}
      <div className="hero-anim absolute bottom-8 right-8 hidden md:flex items-center gap-6 px-6 py-3 rounded-full glass">
        {['Devis Gratuit', 'CEE Éligible', 'Zone IDF'].map((stat, i) => (
          <span key={stat} className="font-mono-brand text-xs text-paper/70 flex items-center gap-3">
            {i > 0 && <span className="w-px h-4 bg-paper/20" />}
            {stat}
          </span>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="w-2 h-2 bg-safety rounded-full pulse-dot" />
        <span className="font-mono-brand text-[8px] sm:text-[10px] text-paper/40 tracking-widest uppercase">Défiler</span>
      </div>
    </section>
  );
}

/* ═══════════  FEATURES  ═══════════ */

function DiagnosticShuffler() {
  const [active, setActive] = useState(0);
  const labels = ['Fondations & radiers', 'Murs porteurs & refends', 'Dalles, chapes & reprises'];

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % labels.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-card card-shadow border border-navy/10 p-8 flex flex-col h-full">
      {/* Shuffling cards */}
      <div className="relative h-40 mb-6">
        {labels.map((label, i) => {
          const offset = (i - active + labels.length) % labels.length;
          return (
            <div
              key={label}
              className="absolute top-0 left-0 right-0 bg-paper-dark rounded-2xl px-5 py-4 border border-navy/10 transition-all"
              style={{
                transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.04})`,
                zIndex: labels.length - offset,
                opacity: offset === 0 ? 1 : 0.6 - offset * 0.15,
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <span className="font-mono-brand text-xs text-navy/60 block mb-1">INSPECTION {String(i + 1).padStart(2, '0')}</span>
              <span className="font-heading font-semibold text-charcoal text-sm">{label}</span>
            </div>
          );
        })}
      </div>
      <h3 className="font-heading font-bold text-charcoal text-xl mb-2">Maçonnerie Générale</h3>
      <p className="text-charcoal/60 text-sm leading-relaxed">Gros œuvre conforme DTU, exécuté avec précision.</p>
    </div>
  );
}

function TelemetryTypewriter() {
  const messages = [
    'Audit thermique en cours...',
    'Pont thermique détecté : façade nord',
    'Solution CEE identifiée : ITE éligible',
    'Économies projetées : -38 % / an',
    'Dossier MaPrimeRénov\' : prêt à soumettre',
  ];
  const [lines, setLines] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (msgIndex >= messages.length) {
      const timer = setTimeout(() => {
        setLines([]);
        setCharIndex(0);
        setMsgIndex(0);
      }, 2500);
      return () => clearTimeout(timer);
    }

    const currentMsg = messages[msgIndex];
    if (charIndex < currentMsg.length) {
      const timer = setTimeout(() => setCharIndex(charIndex + 1), 30);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, currentMsg]);
        setCharIndex(0);
        setMsgIndex(msgIndex + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [charIndex, msgIndex]);

  const currentTyping = msgIndex < messages.length ? messages[msgIndex].slice(0, charIndex) : '';

  return (
    <div className="bg-white rounded-card card-shadow border border-navy/10 p-8 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 bg-safety rounded-full pulse-dot"></span>
        <span className="font-mono-brand text-xs text-safety font-medium">Live Diagnostic</span>
      </div>
      <div className="bg-charcoal rounded-2xl p-5 h-44 shrink-0 overflow-hidden mb-6">
        <div className="font-mono-brand text-xs text-paper/60 space-y-1.5">
          {lines.map((line, i) => (
            <p key={i} className="text-concrete-light/80">→ {line}</p>
          ))}
          {msgIndex < messages.length && (
            <p className="text-paper">
              → {currentTyping}<span className="blink-cursor text-safety">█</span>
            </p>
          )}
        </div>
      </div>
      <h3 className="font-heading font-bold text-charcoal text-xl mb-2">Rénovation Énergétique</h3>
      <p className="text-charcoal/60 text-sm leading-relaxed">Éligible CEE & MaPrimeRénov'. Économies garanties.</p>
    </div>
  );
}

function CursorScheduler() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const tasks = ['Fondations', 'Gros Œuvre', 'Étanchéité', 'Réception'];
  const [activeTask, setActiveTask] = useState(0);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTask((prev) => {
        if (prev >= tasks.length - 1) {
          setValidated(true);
          setTimeout(() => {
            setValidated(false);
            setActiveTask(0);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-card card-shadow border border-navy/10 p-8 flex flex-col h-full">
      {/* Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-7 gap-1 mb-3">
          {days.map((d, i) => (
            <span key={i} className="font-mono-brand text-[10px] text-charcoal/40 text-center">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }, (_, i) => {
            const taskIndex = Math.floor(i / 7);
            const isActive = taskIndex === activeTask;
            return (
              <div
                key={i}
                className={`h-6 rounded transition-all duration-500 ${
                  isActive ? 'bg-safety/80' : 'bg-paper-dark'
                }`}
              />
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {tasks.map((task, i) => (
            <span
              key={task}
              className={`font-mono-brand text-[10px] px-2 py-0.5 rounded-full transition-all duration-300 ${
                i === activeTask ? 'bg-safety text-paper' : 'bg-paper-dark text-charcoal/40'
              }`}
            >
              {task}
            </span>
          ))}
        </div>
      </div>
      {validated && (
        <div className="mb-4 px-3 py-2 bg-navy/10 rounded-xl text-center">
          <span className="font-mono-brand text-xs text-navy font-medium">✓ Planning validé</span>
        </div>
      )}
      <h3 className="font-heading font-bold text-charcoal text-xl mb-2 mt-auto">Coordination de Chantier</h3>
      <p className="text-charcoal/60 text-sm leading-relaxed">Pilotage complet, de la pose des fondations à la réception.</p>
    </div>
  );
}

function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-paper">
      <div className="text-center mb-16">
        <span className="font-mono-brand text-xs text-navy/60 tracking-widest uppercase">Nos Expertises</span>
        <h2 className="font-heading font-bold text-charcoal mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Trois piliers d'excellence
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="feature-card"><DiagnosticShuffler /></div>
        <div className="feature-card"><TelemetryTypewriter /></div>
        <div className="feature-card"><CursorScheduler /></div>
      </div>
    </section>
  );
}

/* ═══════════  PHILOSOPHY  ═══════════ */
function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current.querySelectorAll('.word');
      gsap.fromTo(words,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const statement2 = 'Chez Vertex Group, nous nous concentrons sur : la';
  const statement2Words = statement2.split(' ');

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 bg-charcoal overflow-hidden">
      {/* Concrete texture overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'url("/images/hero-home.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-[8vw] text-center">
        <p className="text-paper/45 text-lg sm:text-xl leading-relaxed mb-8">
          La plupart des chantiers se concentrent sur : la rapidité d'exécution.
        </p>
        <div className="w-16 h-px bg-safety mx-auto mb-8" />
        <p className="font-heading font-medium tracking-tight text-paper leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          {statement2Words.map((w, i) => (
            <span key={i} className="word inline-block mr-[0.3em]">{w}</span>
          ))}
          <span className="word inline-block text-safety font-bold mr-[0.3em]">durabilité</span>
          <span className="word inline-block">de chaque ouvrage.</span>
        </p>
      </div>
    </section>
  );
}

/* ═══════════  PROTOCOL (Sticky Stacker)  ═══════════ */
function Protocol() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            endTrigger: cards[cards.length - 1],
            end: 'top top',
          });
          gsap.to(card, {
            scale: 0.90,
            opacity: 0,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const protocols = [
    {
      num: '01',
      title: 'Diagnostic & Étude',
      desc: 'Visite sur site, analyse technique, étude de faisabilité. Identification précise de vos besoins avant tout engagement.',
    },
    {
      num: '02',
      title: 'Devis & Planification',
      desc: 'Chiffrage détaillé, phasage des travaux, sélection des matériaux. Transparence totale sur les coûts et les délais.',
    },
    {
      num: '03',
      title: 'Exécution & Réception',
      desc: 'Chantier maîtrisé, contrôles qualité à chaque étape. Livraison dans les délais convenus, avec garanties complètes.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative">
      {protocols.map((p, i) => (
        <div key={p.num} className="protocol-card h-screen bg-navy-dark flex items-center overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-[8vw] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Canvas / Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <ProtocolVisual index={i} />
            </div>
            {/* Content */}
            <div className="text-paper">
              <span className="font-mono-brand text-xs text-concrete/60 tracking-widest">{p.num}</span>
              <h3 className="font-heading font-bold text-3xl lg:text-4xl mt-3 mb-6">{p.title}</h3>
              <p className="text-paper/60 text-lg leading-relaxed max-w-md">{p.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function ProtocolVisual({ index }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    let frame = 0;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      frame++;

      if (index === 0) {
        // Rotating concentric rings
        const cx = size / 2, cy = size / 2;
        for (let r = 3; r > 0; r--) {
          ctx.beginPath();
          ctx.arc(cx, cy, 40 + r * 45, 0, Math.PI * 2);
          ctx.strokeStyle = r === 2 ? '#EA580C' : 'rgba(148,163,184,0.4)';
          ctx.lineWidth = r === 2 ? 2 : 1;
          ctx.stroke();
        }
        // Tick marks
        for (let i = 0; i < 36; i++) {
          const angle = (i * 10 + frame * 0.3) * Math.PI / 180;
          const r1 = 155, r2 = 170;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
          ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
          ctx.strokeStyle = 'rgba(148,163,184,0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      } else if (index === 1) {
        // Scanning laser on dot grid
        const cols = 14, rows = 9;
        const gap = size / (cols + 1);
        const laserX = ((frame * 2) % size);
        // Grid lines
        for (let x = 1; x <= cols; x++) {
          ctx.beginPath();
          ctx.moveTo(x * gap, 0);
          ctx.lineTo(x * gap, size);
          ctx.strokeStyle = 'rgba(242,240,233,0.06)';
          ctx.stroke();
        }
        for (let y = 1; y <= rows; y++) {
          ctx.beginPath();
          ctx.moveTo(0, y * (size / (rows + 1)));
          ctx.lineTo(size, y * (size / (rows + 1)));
          ctx.strokeStyle = 'rgba(242,240,233,0.06)';
          ctx.stroke();
        }
        // Dots
        for (let x = 1; x <= cols; x++) {
          for (let y = 1; y <= rows; y++) {
            const dx = x * gap, dy = y * (size / (rows + 1));
            const dist = Math.abs(dx - laserX);
            const glow = dist < 30;
            ctx.beginPath();
            ctx.arc(dx, dy, glow ? 4 : 2, 0, Math.PI * 2);
            ctx.fillStyle = glow ? '#EA580C' : 'rgba(148,163,184,0.3)';
            ctx.fill();
          }
        }
        // Laser line
        ctx.beginPath();
        ctx.moveTo(laserX, 0);
        ctx.lineTo(laserX, size);
        ctx.strokeStyle = 'rgba(234,88,12,0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        // Leveling Tool (Niveau à bulle)
        const cx = size / 2, cy = size / 2;
        const width = 200, height = 60, radius = 30;
        
        // Draw the body of the level
        ctx.beginPath();
        ctx.roundRect(cx - width/2, cy - height/2, width, height, radius);
        ctx.strokeStyle = 'rgba(148,163,184,0.3)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Draw the inner glass tube
        const tubeWidth = 100, tubeHeight = 30;
        ctx.beginPath();
        ctx.roundRect(cx - tubeWidth/2, cy - tubeHeight/2, tubeWidth, tubeHeight, 15);
        ctx.fillStyle = 'rgba(242,240,233,0.02)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(148,163,184,0.1)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw the structural markers on the tube
        ctx.beginPath();
        ctx.moveTo(cx - 20, cy - tubeHeight/2);
        ctx.lineTo(cx - 20, cy + tubeHeight/2);
        ctx.moveTo(cx + 20, cy - tubeHeight/2);
        ctx.lineTo(cx + 20, cy + tubeHeight/2);
        ctx.strokeStyle = 'rgba(148,163,184,0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Animate the bubble
        // Bubble moves based on a sine wave but eventually centers (simulating stabilization)
        const stabilizationPhase = Math.min(frame * 0.02, 1); // 0 to 1
        const sway = Math.sin(frame * 0.05) * 40 * (1 - stabilizationPhase); 
        // add a tiny continuous micro-jitter so it feels "live"
        const jitter = Math.sin(frame * 0.1) * 2;
        
        const bubbleX = cx + sway + jitter;
        
        ctx.beginPath();
        ctx.arc(bubbleX, cy, 10, 0, Math.PI * 2);
        ctx.fillStyle = '#EA580C';
        ctx.shadowColor = '#EA580C';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [index]);

  return <canvas ref={canvasRef} className="w-full max-w-[400px] aspect-square rounded-3xl" />;
}

/* ═══════════  GET STARTED  ═══════════ */
function GetStarted() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gs-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy-dark section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="gs-anim font-heading font-medium tracking-tight text-paper leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          Votre projet mérite une <span className="text-safety font-bold">fondation solide.</span>
        </h2>
        <p className="gs-anim text-paper/50 text-lg mb-10">
          Contactez-nous pour une étude gratuite et sans engagement.
        </p>
        <div className="gs-anim">
          <Button to="/contact" size="xl">
            Demander un Devis Gratuit →
          </Button>
        </div>
        <p className="gs-anim font-mono-brand text-xs text-paper/30 mt-6 tracking-wide">
          Réponse sous 24h · Devis gratuit · Sans engagement
        </p>
      </div>
    </section>
  );
}

/* ═══════════  HOME PAGE  ═══════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <CertBar />
      <GetStarted />
    </>
  );
}
