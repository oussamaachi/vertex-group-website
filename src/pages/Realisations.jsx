import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Résidence Les Ormes',
    location: 'Fresnes (94)',
    category: 'Maçonnerie',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
    scope: 'Construction de 12 logements collectifs sur 3 niveaux. Fondations profondes, murs porteurs béton armé, planchers prédalles.',
    techniques: ['Béton armé', 'Prédalles', 'Fondations profondes'],
    outcome: 'Livré dans les délais, conformité DTU validée.'
  },
  {
    id: 2,
    title: 'Copropriété Voltaire',
    location: 'Créteil (94)',
    category: 'Rénovation',
    image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&q=80&auto=format&fit=crop',
    scope: 'Isolation thermique par l\'extérieur d\'un immeuble de 24 logements. Gain énergétique de 38% sur la première année.',
    techniques: ['ITE polystyrène', 'Enduit RPE', 'Menuiseries PVC'],
    outcome: 'Dossier CEE accepté, économies certifiées.'
  },
  {
    id: 3,
    title: 'Centre Commercial Bel Air',
    location: 'Antony (92)',
    category: 'Étanchéité',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80&auto=format&fit=crop',
    scope: 'Réfection complète de l\'étanchéité de 2 400 m² de toiture-terrasse. Membrane bicouche SBS avec isolation inversée.',
    techniques: ['Membrane SBS', 'Isolation inversée', 'Évacuations EP'],
    outcome: 'Zéro infiltration, garantie décennale.'
  },
  {
    id: 4,
    title: 'Ensemble Scolaire Jean Jaurès',
    location: 'Villejuif (94)',
    category: 'Coordination',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&q=80&auto=format&fit=crop',
    scope: 'Coordination de 8 corps de métier pour la réhabilitation complète d\'un groupe scolaire. Planning respecté à 100%.',
    techniques: ['MOE complète', 'Planning Gantt', 'Réunions hebdo'],
    outcome: 'Réception sans réserve.'
  },
  {
    id: 5,
    title: 'Villa Contemporaine',
    location: 'Bourg-la-Reine (92)',
    category: 'Maçonnerie',
    image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80&auto=format&fit=crop',
    scope: 'Construction d\'une maison individuelle contemporaine de 180 m². Toiture zinc, terrasse suspendue, garage enterré.',
    techniques: ['Béton architectonique', 'Zinc standing', 'Garage enterré'],
    outcome: 'Finitions haut de gamme, client satisfait.'
  },
  {
    id: 6,
    title: 'Résidence Haussmann',
    location: 'Paris 12ème (75)',
    category: 'Rénovation',
    image: 'https://images.unsplash.com/photo-1625722662233-297060231b85?w=800&q=80&auto=format&fit=crop',
    scope: 'Ravalement de façade et isolation thermique d\'un immeuble haussmannien classé. Travail minutieux de restauration des corniches et modénatures.',
    techniques: ['ITE pierre', 'Restauration corniches', 'Enduit chaux'],
    outcome: 'Accord ABF obtenu, -35% consommation.'
  },
];

const categories = ['Tous', 'Maçonnerie', 'Rénovation', 'Étanchéité', 'Coordination'];

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-container max-w-3xl w-full max-h-[90vh] overflow-y-auto card-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-cream rounded-full flex items-center justify-center">
          <X size={18} className="text-charcoal" />
        </button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-container" />
        <div className="p-8">
          <span className="font-mono-brand text-xs text-clay tracking-widest uppercase">{project.category}</span>
          <h3 className="font-heading font-bold text-charcoal text-2xl mt-2 mb-1">{project.title}</h3>
          <p className="font-mono-brand text-xs text-charcoal/40 flex items-center gap-1 mb-6">
            <MapPin size={12} /> {project.location}
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-6">{project.scope}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techniques.map((t) => (
              <span key={t} className="font-mono-brand text-[10px] px-3 py-1 bg-moss/10 text-moss rounded-full">{t}</span>
            ))}
          </div>
          <div className="bg-cream-dark rounded-2xl px-5 py-4">
            <span className="font-mono-brand text-xs text-moss/60 block mb-1">RÉSULTAT</span>
            <p className="font-heading font-semibold text-charcoal text-sm">{project.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Realisations() {
  const [filter, setFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  const filtered = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.real-hero-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.3 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50dvh] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop"
            alt="Réalisations de construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, #1A1A1A 0%, rgba(78,92,53,0.55) 50%, rgba(26,26,26,0.15) 100%)'
          }} />
        </div>
        <div className="relative z-10 w-full px-[8vw] pb-16">
          <span className="real-hero-anim block font-mono-brand text-xs text-cream/50 tracking-widest uppercase mb-3">Portfolio</span>
          <h1 className="real-hero-anim font-drama italic text-cream leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Des ouvrages qui <span className="text-clay font-bold">parlent d'eux-mêmes.</span>
          </h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-cream">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono-brand text-xs px-5 py-2 rounded-full transition-all duration-300 ${
                filter === cat
                  ? 'bg-moss text-cream'
                  : 'bg-cream-dark text-charcoal/50 hover:bg-moss/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-card card-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: project.id % 2 === 0 ? '320px' : '240px' }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="font-mono-brand text-[10px] text-clay tracking-widest uppercase">{project.category}</span>
                  <h3 className="font-heading font-bold text-cream text-lg mt-1">{project.title}</h3>
                  <p className="font-mono-brand text-xs text-cream/50 flex items-center gap-1 mt-1">
                    <MapPin size={10} /> {project.location}
                  </p>
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono-brand text-[10px] px-3 py-1 bg-cream/90 backdrop-blur text-moss rounded-full">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
