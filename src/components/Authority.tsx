import { ShieldCheck, Clock, Globe2 } from 'lucide-react';

export default function Authority() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-gold-400" />,
      title: "25+ Anos de Tradição",
      description: "Experiência comprovada guiando pessoas através da sabedoria ancestral e respeito aos Orixás."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
      title: "Sigilo Absoluto",
      description: "Sua história e suas questões são tratadas com o mais rigoroso respeito, ética e confidencialidade."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-gold-400" />,
      title: "Presencial e Online",
      description: "Atendimentos em nosso espaço acolhedor em Goiânia ou à distância para qualquer lugar do mundo."
    }
  ];

  return (
    <section className="py-20 bg-graphite-900 relative z-20 -mt-10 mx-4 md:mx-12 lg:mx-24 rounded-t-3xl shadow-2xl border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full bg-graphite-800 border border-white/5 group-hover:border-gold-400/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-offwhite mb-3">{feature.title}</h3>
              <p className="text-offwhite-dark/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
