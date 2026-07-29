import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-32">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-primary mb-2">Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground mb-10">Última atualização: 29 de julho de 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">1. Quem somos</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade se aplica ao site clinicadraerikagoncalves.com da{' '}
                <strong>Clínica Dra. Erika Gonçalves</strong> (CRM-29662/PE, CNPJ 55.176.780/0001-17), com sede em
                Caruaru, Pernambuco, doravante "Clínica", "nós".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">2. Quais dados coletamos</h2>
              <ul className="space-y-3 list-disc pl-5">
                <li className="leading-relaxed">
                  <strong>Dados de identificação</strong> que você nos fornece voluntariamente: nome completo,
                  telefone/WhatsApp e e-mail, quando preenche o formulário de contato do site.
                </li>
                <li className="leading-relaxed">
                  <strong>Dados sensíveis de saúde</strong> (art. 5º, II e art. 11 da LGPD): caso você opte por
                  relatar sintomas, diagnósticos ou histórico de saúde na mensagem do formulário ou durante uma
                  conversa pelo WhatsApp, esses dados recebem o sigilo profissional aplicável ao atendimento médico.
                </li>
                <li className="leading-relaxed">
                  <strong>Dados de navegação:</strong> páginas visitadas e informações de uso do site, coletadas por
                  meio do Google Analytics (cookies).
                </li>
                <li className="leading-relaxed">
                  <strong>E-books gratuitos:</strong> ao baixar um e-book, pedimos seu nome e e-mail. Esses dados são
                  usados apenas para liberar o download no seu navegador e não são armazenados nem enviados a
                  nenhum servidor.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">3. Para que usamos seus dados</h2>
              <ul className="space-y-3 list-disc pl-5">
                <li className="leading-relaxed">Responder às mensagens enviadas pelo formulário de contato do site.</li>
                <li className="leading-relaxed">
                  Viabilizar o primeiro contato via WhatsApp, cujo atendimento e agendamento são conduzidos
                  diretamente pela equipe da clínica, fora dos sistemas deste site.
                </li>
                <li className="leading-relaxed">
                  Entender como o site é utilizado, por meio do Google Analytics, para melhorá-lo.
                </li>
              </ul>
              <p className="leading-relaxed font-semibold text-primary mt-3">
                Não utilizamos dados de saúde para fins de marketing ou publicidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">4. Com quem compartilhamos dados</h2>
              <p className="leading-relaxed mb-3">
                Para operar o site, utilizamos os seguintes fornecedores, que atuam como operadores de dados nos
                termos da LGPD:
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li className="leading-relaxed">
                  <strong>Web3Forms</strong> — processa o envio das mensagens do formulário de contato por e-mail.
                </li>
                <li className="leading-relaxed">
                  <strong>Google Analytics</strong> (Google LLC) — coleta dados de navegação. Pode envolver
                  transferência internacional de dados; o Google adota suas próprias salvaguardas contratuais para
                  essas transferências.
                </li>
                <li className="leading-relaxed">
                  <strong>Vercel Inc.</strong> — hospeda tecnicamente o site.
                </li>
              </ul>
              <p className="leading-relaxed mt-3">
                Conversas iniciadas pelo WhatsApp acontecem diretamente no aplicativo, sujeitas à política de
                privacidade do próprio WhatsApp/Meta — este site não armazena nem tem acesso ao conteúdo dessas
                conversas.
              </p>
              <p className="leading-relaxed mt-3">
                Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais ou publicitários.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">5. Tratamento de dados sensíveis de saúde</h2>
              <p className="leading-relaxed">
                Caso você compartilhe informações de saúde no formulário de contato ou durante o atendimento, esses
                dados são tratados com o sigilo profissional exigido pelo Código de Ética Médica e pela LGPD (art.
                11), usados exclusivamente para viabilizar seu atendimento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">6. Por quanto tempo guardamos seus dados</h2>
              <p className="leading-relaxed">
                Mensagens recebidas pelo formulário de contato são mantidas pelo tempo necessário para responder ao
                seu contato. Registros de atendimento e prontuário, gerados durante a consulta médica (fora deste
                site), seguem o prazo mínimo exigido pelas normas do Conselho Federal de Medicina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">7. Seus direitos como titular de dados</h2>
              <p className="leading-relaxed mb-3">Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li className="leading-relaxed">Confirmação da existência de tratamento dos seus dados;</li>
                <li className="leading-relaxed">Acesso, correção ou atualização de dados incompletos ou incorretos;</li>
                <li className="leading-relaxed">Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li className="leading-relaxed">Portabilidade dos dados;</li>
                <li className="leading-relaxed">Revogação do consentimento;</li>
                <li className="leading-relaxed">Informação sobre com quem compartilhamos seus dados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">8. Segurança</h2>
              <p className="leading-relaxed">
                Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não
                autorizado, perda, alteração ou divulgação indevida.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">9. Como falar conosco</h2>
              <p className="leading-relaxed">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso
                encarregado de proteção de dados (DPO):
              </p>
              <p className="leading-relaxed font-semibold text-primary mt-2">
                Wilson Bernardes de Faria Santana —{' '}
                <a href="mailto:erika@clinicadraerikagoncalves.com" className="text-secondary hover:underline">
                  erika@clinicadraerikagoncalves.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">10. Alterações desta política</h2>
              <p className="leading-relaxed">
                Podemos atualizar esta política periodicamente. A data da última atualização está sempre indicada
                no topo deste documento.
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
