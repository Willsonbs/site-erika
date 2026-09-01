import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/const';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'A consulta é online ou presencial?',
      answer: 'A Dra. Erika oferece ambas as modalidades. Você pode escolher a forma mais confortável para você. As consultas online são realizadas por videochamada segura, e as presenciais acontecem no consultório em Caruaru.',
    },
    {
      question: 'Como funciona o tratamento?',
      answer: 'O tratamento é personalizado de acordo com suas necessidades. A Dra. Erika realiza uma avaliação completa e propõe um plano de tratamento que pode incluir acompanhamento psiquiátrico, medicação quando necessária, e orientações para o cuidado emocional.',
    },
    {
      question: 'Qual é a duração de uma consulta?',
      answer: 'A consulta geralmente tem duração de 50 minutos, permitindo uma avaliação bem aprofundada e completa. As consultas subsequentes podem ter duração de 40 a 50 minutos, dependendo da necessidade.',
    },
    {
      question: 'Como agendar uma consulta?',
      answer: 'Você pode agendar sua consulta através do WhatsApp clicando no botão "Agendar Consulta" ou enviando uma mensagem para (81) 98209-5424. A Dra. Erika responderá com os horários disponíveis.',
    },
    {
      question: 'Qual é o valor da consulta?',
      answer: 'Os valores das consultas variam de acordo com o tipo de atendimento (presencial ou online). Entre em contato via WhatsApp para conhecer os valores atuais e as formas de pagamento disponíveis.',
    },
    {
      question: 'Vocês aceitam convênio?',
      answer: 'Não, a clínica trabalha apenas com atendimentos particulares.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <p className="eyebrow justify-center flex">Antes de dar o primeiro passo</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas para as dúvidas mais comuns sobre nosso atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="card-elegant border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border pt-4">
                  <p className="text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-white/70 text-lg">
              Entre em contato com a Dra. Erika via WhatsApp. Ela ficará feliz em responder todas as suas perguntas.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <MessageCircle size={17} /> Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
