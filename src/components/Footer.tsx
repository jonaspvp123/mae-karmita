import { Instagram, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-graphite-950 pt-20 pb-10 border-t border-white/10 text-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-gold-400 mb-6">
              Mãe Karmita
            </h2>
            <p className="text-offwhite-dark/60 font-light leading-relaxed mb-6 max-w-sm">
              Orientação espiritual séria, ética e fundamentada na tradição. Um porto seguro para quem busca luz e caminhos abertos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-graphite-900 flex items-center justify-center border border-white/10 hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:contato@maekarmita.com.br" className="w-10 h-10 rounded-full bg-graphite-900 flex items-center justify-center border border-white/10 hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-offwhite">Navegação</h3>
            <ul className="space-y-3">
              {['Início', 'Sobre', 'Atendimentos', 'Depoimentos', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-offwhite-dark/60 hover:text-gold-400 transition-colors font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-offwhite">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-offwhite-dark/60 font-light">
                  Atendimento Presencial em Goiânia, GO<br />
                  <span className="text-sm">(Endereço completo após agendamento)</span>
                </span>
              </li>
              <li>
                <a 
                  href="https://wa.me/5562999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-graphite-950 transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-offwhite-dark/40 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Mãe Karmita de Oxalá. Todos os direitos reservados.
          </p>
          <p className="text-offwhite-dark/40 text-sm font-light">
            Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
