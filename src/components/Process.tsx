export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Agendamento",
      description: "Entre em contato pelo WhatsApp. Nossa equipe irá agendar o melhor horário para você, seja presencial em Goiânia ou online."
    },
    {
      number: "02",
      title: "A Consulta",
      description: "Um momento de escuta ativa e conexão espiritual. Através dos búzios, identificamos a raiz das suas questões com total sigilo."
    },
    {
      number: "03",
      title: "Direcionamento",
      description: "Você sai da consulta com clareza, conselhos práticos e, se necessário, a indicação de trabalhos ou limpezas energéticas."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-offwhite-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-graphite-900 mb-4">
            Um processo <span className="italic text-gold-600">simples e acolhedor</span>
          </h2>
          <p className="text-graphite-800/70 font-light text-lg">
            Saiba o que esperar ao buscar nossa orientação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gold-400/30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-offwhite rounded-full flex items-center justify-center border border-gold-400/30 shadow-sm mb-8 relative z-10">
                <span className="font-serif text-3xl text-gold-600 italic">{step.number}</span>
              </div>
              <h3 className="font-serif text-2xl text-graphite-900 mb-4">{step.title}</h3>
              <p className="text-graphite-800 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-graphite-900 text-gold-400 font-bold uppercase tracking-widest hover:bg-graphite-800 transition-colors"
          >
            Dar o Primeiro Passo
          </a>
        </div>
      </div>
    </section>
  );
}
