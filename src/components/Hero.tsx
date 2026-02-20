import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-graphite-950 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/spiritual/1920/1080?blur=2"
          alt="Ambiente espiritual"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950/80 via-graphite-950/60 to-graphite-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="block text-gold-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6">
            Consulta Espiritual em Goiânia e Online
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-offwhite leading-tight mb-8">
            Orientação Espiritual com <br className="hidden md:block" />
            <span className="text-gold-400 italic">Ética, Sigilo e Tradição</span>
          </h1>
          
          <p className="text-offwhite-dark text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Encontre clareza e caminhos abertos com Mãe Karmita de Oxalá. Mais de 25 anos de experiência guiando vidas com responsabilidade e luz.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-graphite-950 font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <MessageCircle className="mr-2 h-5 w-5" />
              Agendar no WhatsApp
            </a>
            <a
              href="#como-funciona"
              className="text-offwhite hover:text-gold-400 transition-colors uppercase tracking-widest text-sm font-medium border-b border-transparent hover:border-gold-400 pb-1"
            >
              Entenda como funciona
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gold-400/60 text-xs uppercase tracking-widest mb-2">Rolar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
