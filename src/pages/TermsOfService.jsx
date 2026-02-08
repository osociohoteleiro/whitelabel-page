import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const TermsOfService = () => {
  const lastUpdated = '5 de janeiro de 2025'

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">MV</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">MV$</h1>
              <p className="text-xs text-gray-500">Maquina de Vendas</p>
            </div>
          </Link>
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Termos de Servico</h1>
          <p className="text-gray-500 mb-8">Ultima atualizacao: {lastUpdated}</p>

          <div className="prose prose-gray max-w-none space-y-8">

            {/* Introducao */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Aceitacao dos Termos</h2>
              <p className="text-gray-600 leading-relaxed">
                Ao acessar ou utilizar a plataforma <strong>MV$ - Maquina de Vendas</strong>,
                voce concorda em ficar vinculado a estes Termos de Servico. Se voce nao concordar com qualquer
                parte destes termos, nao podera acessar ou utilizar nossos servicos.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Estes termos se aplicam a todos os usuarios, incluindo visitantes, clientes e qualquer pessoa
                que acesse ou utilize nossos servicos.
              </p>
            </section>

            {/* Descricao do Servico */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Descricao do Servico</h2>
              <p className="text-gray-600 leading-relaxed">
                MV$ e uma plataforma de automacao de vendas e atendimento que oferece:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li>Sistema de atendimento ao cliente via WhatsApp, Instagram e Facebook Messenger</li>
                <li>Gerenciamento de comentarios em posts do Instagram e Facebook</li>
                <li>Automacao de respostas com Inteligencia Artificial</li>
                <li>Gestao de leads e funil de vendas</li>
                <li>Ferramentas de marketing e campanhas</li>
                <li>Criacao de anuncios automatizados</li>
                <li>Relatorios e metricas de desempenho</li>
              </ul>
            </section>

            {/* Conta do Usuario */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Conta do Usuario</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3.1 Registro</h3>
              <p className="text-gray-600 leading-relaxed">
                Para utilizar nossos servicos, voce deve criar uma conta fornecendo informacoes precisas
                e completas. Voce e responsavel por manter a confidencialidade de sua senha e por todas
                as atividades realizadas em sua conta.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3.2 Elegibilidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Voce deve ter pelo menos 18 anos e capacidade legal para celebrar contratos para utilizar
                nossos servicos. Ao criar uma conta em nome de uma empresa, voce declara ter autoridade
                para vincular essa entidade a estes termos.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">3.3 Seguranca da Conta</h3>
              <p className="text-gray-600 leading-relaxed">
                Voce deve notificar-nos imediatamente sobre qualquer uso nao autorizado de sua conta
                ou qualquer outra violacao de seguranca. Nao seremos responsaveis por perdas decorrentes
                do uso nao autorizado de sua conta.
              </p>
            </section>

            {/* Uso Aceitavel */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Uso Aceitavel</h2>
              <p className="text-gray-600 leading-relaxed">
                Voce concorda em utilizar nossos servicos apenas para fins legitimos e de acordo com
                estes termos. E proibido:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li>Violar leis aplicaveis ou regulamentos</li>
                <li>Enviar mensagens nao solicitadas (spam) ou conteudo abusivo</li>
                <li>Tentar acessar contas de outros usuarios sem autorizacao</li>
                <li>Interferir ou interromper a integridade ou desempenho do servico</li>
                <li>Usar o servico para transmitir virus ou codigo malicioso</li>
                <li>Coletar dados de outros usuarios sem consentimento</li>
                <li>Violar direitos de propriedade intelectual de terceiros</li>
                <li>Usar o servico para fins ilegais ou fraudulentos</li>
              </ul>
            </section>

            {/* Integracao WhatsApp/Instagram/Messenger */}
            <section className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Uso do WhatsApp, Instagram e Facebook Messenger</h2>
              <p className="text-gray-600 leading-relaxed">
                Ao conectar suas contas do WhatsApp Business, Instagram Business e/ou Paginas do Facebook
                a nossa plataforma, voce concorda em:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Cumprir todas as politicas do WhatsApp Business, Instagram Business e Facebook Pages</li>
                <li>Obter consentimento adequado antes de enviar mensagens aos seus clientes</li>
                <li>Nao enviar conteudo proibido ou mensagens em massa nao solicitadas</li>
                <li>Manter suas credenciais de acesso seguras</li>
                <li>Ser responsavel por todo conteudo enviado atraves de sua conta</li>
                <li>Autorizar o processamento de mensagens diretas (DMs) do Instagram e Facebook Messenger para fins de atendimento</li>
                <li>Autorizar o processamento de comentarios em posts do Instagram e Facebook para fins de atendimento e engajamento</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Violacoes das politicas do WhatsApp, Instagram ou Facebook podem resultar na suspensao de sua conta
                nessas plataformas. Nao somos responsaveis por acoes tomadas pelo Meta/WhatsApp/Instagram/Facebook
                contra sua conta.
              </p>
            </section>

            {/* Pagamento */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Pagamentos e Faturamento</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">6.1 Planos e Precos</h3>
              <p className="text-gray-600 leading-relaxed">
                Os precos dos nossos planos estao disponiveis em nosso site. Reservamo-nos o direito de
                modificar precos mediante aviso previo de 30 dias.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">6.2 Cobrancas</h3>
              <p className="text-gray-600 leading-relaxed">
                As cobrancas sao realizadas de forma recorrente conforme o plano escolhido. Voce autoriza
                a cobranca automatica no metodo de pagamento cadastrado.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">6.3 Reembolsos</h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecemos periodo de teste gratuito em alguns planos. Apos o periodo de teste ou primeira
                cobranca, nao oferecemos reembolsos, exceto quando exigido por lei.
              </p>
            </section>

            {/* Propriedade Intelectual */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Propriedade Intelectual</h2>
              <p className="text-gray-600 leading-relaxed">
                Todo o conteudo, recursos e funcionalidades da plataforma, incluindo mas nao limitado a
                design, codigo, texto, graficos e logos, sao de propriedade exclusiva de MV$ - Maquina de Vendas
                e protegidos por leis de propriedade intelectual.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Voce nao pode copiar, modificar, distribuir, vender ou alugar qualquer parte de nossos
                servicos sem nossa autorizacao expressa por escrito.
              </p>
            </section>

            {/* Conteudo do Usuario */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Seu Conteudo</h2>
              <p className="text-gray-600 leading-relaxed">
                Voce mantem a propriedade de todo conteudo que envia, publica ou exibe atraves de nossos
                servicos. Ao utilizar nossa plataforma, voce nos concede uma licenca nao exclusiva para
                usar, armazenar e processar esse conteudo para fornecer nossos servicos.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Voce e inteiramente responsavel pelo conteudo que compartilha e deve garantir que possui
                todos os direitos necessarios para esse compartilhamento.
              </p>
            </section>

            {/* Limitacao de Responsabilidade */}
            <section className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitacao de Responsabilidade</h2>
              <p className="text-gray-600 leading-relaxed">
                NA MAXIMA EXTENSAO PERMITIDA POR LEI:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Nossos servicos sao fornecidos "como estao" e "conforme disponibilidade"</li>
                <li>Nao garantimos que o servico sera ininterrupto ou livre de erros</li>
                <li>Nao somos responsaveis por acoes de terceiros (incluindo Meta/WhatsApp/Instagram)</li>
                <li>Nossa responsabilidade total esta limitada ao valor pago nos ultimos 12 meses</li>
                <li>Nao somos responsaveis por danos indiretos, incidentais ou consequenciais</li>
              </ul>
            </section>

            {/* Indenizacao */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Indenizacao</h2>
              <p className="text-gray-600 leading-relaxed">
                Voce concorda em indenizar e isentar MV$ de quaisquer reclamacoes, danos,
                perdas e despesas decorrentes de: (a) seu uso dos servicos; (b) violacao destes termos;
                (c) violacao de direitos de terceiros; (d) conteudo enviado atraves de sua conta.
              </p>
            </section>

            {/* Modificacoes */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Modificacoes do Servico</h2>
              <p className="text-gray-600 leading-relaxed">
                Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto de nossos
                servicos a qualquer momento. Faremos esforcos razoaveis para notifica-lo sobre mudancas
                significativas com antecedencia.
              </p>
            </section>

            {/* Rescisao */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Rescisao</h2>
              <p className="text-gray-600 leading-relaxed">
                Voce pode encerrar sua conta a qualquer momento atraves das configuracoes ou entrando
                em contato conosco. Podemos suspender ou encerrar sua conta se violar estes termos,
                mediante aviso previo quando possivel.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Apos a rescisao, seu direito de usar os servicos cessara imediatamente. As disposicoes
                que por sua natureza devam sobreviver a rescisao permanecerao em vigor.
              </p>
            </section>

            {/* Disposicoes Gerais */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Disposicoes Gerais</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">13.1 Lei Aplicavel</h3>
              <p className="text-gray-600 leading-relaxed">
                Estes termos sao regidos pelas leis da Republica Federativa do Brasil. Qualquer disputa
                sera resolvida no foro da comarca de Florianopolis/SC.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">13.2 Acordo Integral</h3>
              <p className="text-gray-600 leading-relaxed">
                Estes Termos de Servico, junto com nossa Politica de Privacidade, constituem o acordo
                integral entre voce e MV$ em relacao ao uso de nossos servicos.
              </p>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">13.3 Alteracoes</h3>
              <p className="text-gray-600 leading-relaxed">
                Podemos atualizar estes termos periodicamente. Notificaremos sobre mudancas significativas
                por e-mail ou atraves de aviso em nossa plataforma. O uso continuado apos as alteracoes
                constitui aceitacao dos novos termos.
              </p>
            </section>

            {/* Contato */}
            <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Contato</h2>
              <p className="text-gray-600 leading-relaxed">
                Para duvidas sobre estes Termos de Servico:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:contato@osociohoteleiro.com.br" className="text-primary-600 hover:underline">
                    contato@osociohoteleiro.com.br
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Empresa:</strong> Wg Solucoes Tecnologicas LTDA
                </p>
                <p className="text-gray-700">
                  <strong>Suporte:</strong>{' '}
                  <a href="mailto:suporte@osociohoteleiro.com.br" className="text-primary-600 hover:underline">
                    suporte@osociohoteleiro.com.br
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>2024 MV$ - Maquina de Vendas. Todos os direitos reservados.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-primary-600 hover:underline">Politica de Privacidade</Link>
            <span>|</span>
            <Link to="/" className="text-primary-600 hover:underline">Voltar ao site</Link>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default TermsOfService
