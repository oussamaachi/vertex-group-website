export default function CertBar() {
  const items = [
    { badge: 'RCS', text: '101 799 591 · R.C.S. Créteil' },
    { badge: 'SAS', text: 'Capital 1 000 € · Associé unique' },
    { badge: 'CEE', text: "Éligible Certificats d'Économies d'Énergie" },
    { badge: 'IDF', text: 'Île-de-France · Grand Paris' },
  ];

  return (
    <section className="bg-moss">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.badge}
            className={`flex items-center gap-4 px-8 py-6 ${
              i < items.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-white/15' : ''
            }`}
          >
            <div className="w-10 h-10 bg-clay rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="font-mono-brand text-xs font-medium text-cream">{item.badge}</span>
            </div>
            <p className="font-mono-brand text-xs text-cream/80 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
