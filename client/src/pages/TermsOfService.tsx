import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-32">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-primary mb-2">Termos de Serviço</h1>
          <p className="text-sm text-muted-foreground mb-10">Última atualização: 29 de julho de 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">1. Aceitação dos termos</h2>
              <p className="leading-relaxed">
                Ao utilizar o site clinicadraerikagoncalves.com ou iniciar contato pelo WhatsApp com a{' '}
                <strong>Clínica Dra. Erika Gonçalves</strong> (CRM-29662/PE, CNPJ 55.176.780/0001-17), você concorda
                com estes Termos de Serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">2. Natureza do serviço</h2>
              <p className="leading-relaxed">
                O site é um canal informativo e de contato. Ele disponibiliza um link direto para iniciar uma
                conversa pelo WhatsApp com a clínica, onde o atendimento inicial e o agendamento de consultas são
                conduzidos pela equipe.
              </p>
              <p className="leading-relaxed font-semibold text-primary mt-3">
                O canal de WhatsApp não substitui atendimento médico presencial ou de emergência.
              </p>
            </section>

            <section className="rounded-xl border border-amber-300 bg-amber-50 p-6">
              <h2 className="text-2xl font-bold text-amber-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="text-amber-600" size={24} />
                3. Aviso de emergência
              </h2>
              <p className="leading-relaxed text-amber-900">
                Este canal <strong>não deve ser utilizado em situações de emergência ou risco imediato à vida</strong>.
                Em caso de emergência psiquiátrica, crise ou risco de autolesão, procure imediatamente:
              </p>
              <ul className="space-y-2 list-disc pl-5 mt-3 text-amber-900">
                <li><strong>SAMU:</strong> 192</li>
                <li>
                  <strong>CVV (Centro de Valorização da Vida):</strong> 188 (ligação gratuita, 24h) ou chat em{' '}
                  <a href="https://www.cvv.org.br" target="_blank" rel="noopener noreferrer" className="underline">
                    cvv.org.br
                  </a>
                </li>
                <li>Pronto-socorro mais próximo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">4. Contato e agendamento</h2>
              <p className="leading-relaxed">
                Ao entrar em contato pelo formulário do site ou pelo WhatsApp, você se compromete a fornecer
                informações verdadeiras e atualizadas. O agendamento e eventuais alterações de horário são
                confirmados diretamente pela equipe da clínica.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">5. Propriedade intelectual</h2>
              <p className="leading-relaxed">
                Todo o conteúdo do site (textos, imagens, identidade visual) pertence à Clínica Dra. Erika Gonçalves
                e não pode ser reproduzido sem autorização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">6. Limitação de responsabilidade</h2>
              <p className="leading-relaxed">
                As informações disponibilizadas no site têm caráter informativo e não constituem aconselhamento
                médico individualizado. O diagnóstico e o tratamento são estabelecidos exclusivamente durante a
                consulta médica, presencial ou por telemedicina, conforme as normas do Conselho Federal de
                Medicina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">7. Alterações destes termos</h2>
              <p className="leading-relaxed">
                Estes termos podem ser atualizados periodicamente, com a data de última atualização sempre indicada
                no topo deste documento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">8. Contato</h2>
              <p className="leading-relaxed">
                Dúvidas sobre estes termos podem ser enviadas para:{' '}
                <a href="mailto:erika@clinicadraerikagoncalves.com" className="text-secondary hover:underline">
                  erika@clinicadraerikagoncalves.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
