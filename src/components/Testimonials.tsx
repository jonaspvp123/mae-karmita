import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Eu estava perdida profissionalmente e com a vida amorosa estagnada. A consulta com Mãe Karmita me trouxe uma paz que eu não sentia há anos. Em poucos meses, seguindo suas orientações, tudo começou a fluir.",
      author: "Juliana M.",
      location: "Goiânia, GO"
    },
    {
      text: "Fiz meu atendimento online pois moro fora do Brasil. A precisão dos búzios e o acolhimento dela ultrapassaram a tela. Senti como se estivesse lá presencialmente. Recomendo de olhos fechados.",
      author: "Carlos E.",
      location: "Lisboa, Portugal"
    },
    {
      text: "O que mais me impressionou foi a ética. Sem promessas absurdas, apenas a verdade e o direcionamento correto. O trabalho de limpeza energética mudou a atmosfera da minha casa e da minha família.",
      author: "Ana Paula S.",
      location: "Brasília, DF"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-graphite-900">
            Vidas <span className="italic text-gold-600">Transformadas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-graphite-900/5 relative"
            >
              <Quote className="w-10 h-10 text-gold-400/20 absolute top-6 left-6" />
              <p className="text-graphite-800 font-light leading-relaxed relative z-10 mt-4 mb-8 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-graphite-900/10 pt-6">
                <p className="font-semibold text-graphite-900 uppercase tracking-wider text-sm">
                  {testimonial.author}
                </p>
                <p className="text-graphite-800/60 text-xs mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
