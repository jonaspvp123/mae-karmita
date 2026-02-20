import { MessageCircle } from 'lucide-react';

export default function Banner() {
  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-graphite-950 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gold-400/20">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-10 md:p-16 lg:p-20 relative z-20 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-l-[2rem] z-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <span className="text-gold-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
                Atendimento Especializado
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite mb-6 leading-tight">
                Sinta a paz e a clareza que você busca.
              </h2>
              <p className="text-offwhite-dark/80 text-lg mb-10 font-light">
                Deixe a sabedoria dos Orixás guiar seus passos. Agende agora sua consulta e dê o primeiro passo rumo ao seu equilíbrio espiritual e prosperidade.
              </p>
              <a
                href="https://wa.me/5562999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-graphite-950 font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendar Minha Consulta
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 h-[450px] md:h-auto relative order-1 md:order-2">
            {/* Gradient Overlay: Fades the image smoothly into the dark background */}
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/20 to-transparent md:bg-gradient-to-r md:from-graphite-950 md:via-graphite-950/20 md:to-transparent z-10"></div>
            
            <img 
              src="/mae-karmita.jpg" 
              alt="Mãe Karmita de Oxalá"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Fallback visual caso a imagem ainda não esteja na pasta public
                e.currentTarget.src = "https://picsum.photos/seed/karmita/800/1000";
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
