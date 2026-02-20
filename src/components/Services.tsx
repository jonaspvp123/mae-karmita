import { Sparkles, Heart, Shield, Compass } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Consulta de Búzios",
      description: "Orientação profunda através do oráculo sagrado. Descubra as influências do momento, caminhos abertos e conselhos dos Orixás para suas decisões."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Orientação Amorosa",
      description: "Clareza para relacionamentos. Entenda bloqueios afetivos, compatibilidade espiritual e caminhos para a harmonia no amor."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Limpeza Energética",
      description: "Remoção de cargas negativas, inveja e estagnação. Banhos e rituais para restaurar sua vitalidade e atrair prosperidade."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trabalhos Espirituais",
      description: "Intervenções éticas e focadas no bem. Abertura de caminhos financeiros, proteção espiritual e equilíbrio familiar."
    }
  ];

  return (
    <section id="atendimentos" className="py-24 bg-graphite-950 text-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 font-semibold tracking-[0.2em] uppercase text-sm">
            Nossos Serviços
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Como podemos <span className="italic text-gold-400">te ajudar hoje?</span>
          </h2>
          <p className="mt-6 text-offwhite-dark/70 font-light text-lg">
            Atendimentos personalizados para a sua necessidade, sempre com foco no seu livre-arbítrio e evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 md:p-10 bg-graphite-900 border border-white/5 hover:border-gold-400/50 transition-all duration-500 rounded-2xl"
            >
              <div className="w-14 h-14 bg-graphite-800 rounded-full flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-offwhite-dark/60 font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <a 
                href={`https://wa.me/5562999999999?text=Olá, gostaria de saber mais sobre ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-gold-400 uppercase tracking-wider hover:text-gold-300 transition-colors"
              >
                Agendar Consulta <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
