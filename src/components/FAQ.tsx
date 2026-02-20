import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a consulta online? É tão eficaz quanto a presencial?",
      answer: "Sim, a consulta online tem a mesma eficácia. A energia e a conexão espiritual não dependem de distância física. O atendimento é feito por videochamada (WhatsApp ou Zoom), com a mesma dedicação, sigilo e tempo da consulta presencial."
    },
    {
      question: "Onde fica o espaço de atendimento presencial?",
      answer: "Nosso espaço sagrado está localizado em Goiânia, GO. O endereço completo e as instruções de chegada são fornecidos no momento da confirmação do agendamento para garantir a privacidade de todos os consulentes."
    },
    {
      question: "Vocês garantem resultados em trabalhos amorosos?",
      answer: "Trabalhamos com ética e verdade. Não fazemos falsas promessas de 'trazer amor em 24h'. A espiritualidade atua abrindo caminhos e removendo obstáculos, sempre respeitando o livre-arbítrio e o merecimento de cada um. O oráculo dirá o que é possível ser feito."
    },
    {
      question: "Qual o valor da consulta e formas de pagamento?",
      answer: "Os valores são informados diretamente pelo nosso atendimento no WhatsApp. Aceitamos PIX, transferência bancária e cartões de crédito. O pagamento é realizado no momento do agendamento para reservar seu horário."
    },
    {
      question: "Preciso me preparar de alguma forma para a consulta?",
      answer: "Recomendamos apenas que você esteja em um local tranquilo, onde não seja interrompido, e que esteja com o coração aberto. Anotar suas principais dúvidas antes da consulta também ajuda a aproveitar melhor o tempo."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-graphite-950 text-offwhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Dúvidas <span className="italic text-gold-400">Frequentes</span>
          </h2>
          <p className="text-offwhite-dark/70 font-light">
            Transparência é fundamental em nosso trabalho.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden bg-graphite-900"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-offwhite-dark/70 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
