export default function About() {
  return (
    <section id="sobre" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-t-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img
                src="https://picsum.photos/seed/wisdom/800/1200"
                alt="Mãe Karmita de Oxalá"
                className="w-full h-full object-cover filter sepia-[0.2]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute top-1/4 -left-8 w-24 h-24 border border-gold-400/30 rounded-full z-20"></div>
          </div>

          {/* Text Column */}
          <div>
            <div className="mb-8">
              <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm">
                Nossa História
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl text-graphite-900 leading-tight">
                Guiada pela paz e sabedoria de <span className="italic text-gold-600">Oxalá</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-graphite-800 font-light text-lg leading-relaxed">
              <p>
                Com mais de duas décadas de dedicação à espiritualidade, Mãe Karmita construiu sua trajetória fundamentada na verdade, no amor e no respeito ao próximo.
              </p>
              <p>
                Sua missão é ser um canal de luz para aqueles que buscam respostas, cura e direcionamento. Trabalhando sempre com energias limpas e dentro dos preceitos éticos da religião, ela oferece um porto seguro para corações aflitos.
              </p>
              <p>
                "Acredito que a espiritualidade não deve trazer medo, mas sim clareza. Meu compromisso é com a sua evolução e o seu bem-estar, orientando seus passos para que você mesmo construa um caminho de prosperidade."
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-graphite-900/10">
              <p className="font-serif text-2xl text-graphite-900 italic">
                "A luz que te guia é mais forte que os obstáculos do caminho."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
