import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Politica de Privacidade</h1>
          <p className="text-gray-500 mb-8">Ultima atualizacao: {lastUpdated}</p>

          <div className="prose prose-gray max-w-none space-y-8">

            {/* Introducao */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introducao</h2>
              <p className="text-gray-600 leading-relaxed">
                A <strong>MV$ - Maquina de Vendas</strong> ("nos", "nosso" ou "Empresa") opera a plataforma de
                automacao de vendas e atendimento e servicos relacionados. Esta Politica de Privacidade explica como coletamos,
                usamos, armazenamos e protegemos suas informacoes pessoais quando voce utiliza nossos servicos.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Ao utilizar nossos servicos, voce concorda com a coleta e uso de informacoes de acordo com esta
                politica. Recomendamos a leitura completa deste documento.
              </p>
            </section>

            {/* Dados Coletados */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Dados que Coletamos</h2>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.1 Informacoes de Cadastro</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Nome completo e nome da empresa</li>
                <li>Endereco de e-mail</li>
                <li>Numero de telefone/WhatsApp</li>
                <li>Cargo ou funcao na empresa</li>
                <li>Endereco comercial</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.2 Dados de Comunicacao (WhatsApp, Instagram e Facebook Messenger)</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mensagens enviadas e recebidas atraves da plataforma (WhatsApp, Instagram DM e Facebook Messenger)</li>
                <li>Comentarios em posts do Instagram e Facebook das paginas conectadas</li>
                <li>Arquivos de midia compartilhados (fotos, videos, documentos)</li>
                <li>Dados de contatos e conversas com clientes</li>
                <li>Historico de atendimento e interacoes</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.3 Dados de Uso da Plataforma</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Logs de acesso e atividades no sistema</li>
                <li>Configuracoes de preferencias</li>
                <li>Dados de desempenho e metricas de atendimento</li>
                <li>Informacoes do dispositivo e navegador</li>
              </ul>
            </section>

            {/* Como Usamos */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Como Usamos Seus Dados</h2>
              <p className="text-gray-600 leading-relaxed">Utilizamos suas informacoes para:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li>Fornecer e manter nossos servicos de automacao</li>
                <li>Processar e gerenciar comunicacoes com clientes via WhatsApp, Instagram e Facebook Messenger</li>
                <li>Gerenciar e responder comentarios em posts do Instagram e Facebook</li>
                <li>Oferecer atendimento automatizado com Inteligencia Artificial</li>
                <li>Enviar notificacoes sobre leads, vendas e servicos</li>
                <li>Gerar relatorios e metricas de desempenho</li>
                <li>Melhorar continuamente nossos servicos</li>
                <li>Cumprir obrigacoes legais e regulatorias</li>
              </ul>
            </section>

            {/* Integracao com Meta/WhatsApp/Instagram/Messenger */}
            <section className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Integracao com Meta (WhatsApp, Instagram e Facebook Messenger)</h2>
              <p className="text-gray-600 leading-relaxed">
                Nossa plataforma se integra com os servicos da <strong>Meta Platforms, Inc.</strong> (WhatsApp Business API,
                Instagram Messaging API e Facebook Messenger API) para permitir a comunicacao com seus clientes e gerenciamento
                de interacoes nas redes sociais. Ao utilizar essas funcionalidades:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Suas mensagens diretas (DMs) do Instagram, mensagens do Facebook Messenger e mensagens do WhatsApp sao processadas atraves das APIs oficiais da Meta</li>
                <li>Comentarios em posts do Instagram e Facebook sao coletados e podem ser respondidos atraves da plataforma</li>
                <li>Os dados de conversas e comentarios sao armazenados em nossos servidores para historico e continuidade do atendimento</li>
                <li>Respeitamos todas as politicas de uso do WhatsApp Business, Instagram Business e Facebook Pages</li>
                <li>Voce pode desconectar suas contas a qualquer momento atraves das configuracoes</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Exclusao de dados via Meta:</strong> Quando voce solicita a exclusao de seus dados diretamente pelo
                Facebook ou Instagram, recebemos essa solicitacao automaticamente atraves de callback e processamos a exclusao
                de acordo com nossa politica de retencao.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Para mais informacoes sobre como a Meta processa dados, consulte a{' '}
                <a
                  href="https://www.whatsapp.com/legal/business-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Politica do WhatsApp Business
                </a>, a{' '}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Politica de Privacidade da Meta
                </a>{' '}e os{' '}
                <a
                  href="https://developers.facebook.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Termos da Plataforma Meta para Desenvolvedores
                </a>.
              </p>
            </section>

            {/* Armazenamento */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Armazenamento e Seguranca</h2>
              <p className="text-gray-600 leading-relaxed">
                Seus dados sao armazenados de forma segura em servidores protegidos:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li><strong>Banco de dados:</strong> PostgreSQL com criptografia em repouso</li>
                <li><strong>Arquivos de midia:</strong> Amazon Web Services (AWS S3) com criptografia AES-256</li>
                <li><strong>Transmissao:</strong> Criptografia TLS/SSL em todas as comunicacoes</li>
                <li><strong>Acesso:</strong> Autenticacao por tokens JWT e controle de permissoes</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Mantemos medidas de seguranca tecnicas e organizacionais para proteger seus dados contra
                acesso nao autorizado, alteracao, divulgacao ou destruicao.
              </p>
            </section>

            {/* Compartilhamento */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Compartilhamento de Dados</h2>
              <p className="text-gray-600 leading-relaxed">
                Nao vendemos suas informacoes pessoais. Podemos compartilhar dados apenas com:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li><strong>Provedores de servico:</strong> AWS, Meta (WhatsApp/Instagram), SendGrid para e-mails</li>
                <li><strong>Cumprimento legal:</strong> Quando exigido por lei ou ordem judicial</li>
                <li><strong>Protecao de direitos:</strong> Para proteger a seguranca de usuarios e da plataforma</li>
              </ul>
            </section>

            {/* Retencao */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Retencao de Dados</h2>
              <p className="text-gray-600 leading-relaxed">
                Mantemos seus dados pelo tempo necessario para fornecer nossos servicos:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li><strong>Dados de conta:</strong> Enquanto a conta estiver ativa</li>
                <li><strong>Mensagens e historico:</strong> 2 anos apos a ultima interacao</li>
                <li><strong>Logs de sistema:</strong> 90 dias para fins de seguranca</li>
                <li><strong>Backups:</strong> 30 dias apos a exclusao</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Apos a exclusao da conta, seus dados serao removidos em ate 30 dias, exceto quando
                a retencao for exigida por lei.
              </p>
            </section>

            {/* Direitos LGPD */}
            <section className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Seus Direitos (LGPD)</h2>
              <p className="text-gray-600 leading-relaxed">
                De acordo com a Lei Geral de Protecao de Dados (LGPD), voce tem direito a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li><strong>Acesso:</strong> Solicitar uma copia dos seus dados pessoais</li>
                <li><strong>Correcao:</strong> Corrigir dados incompletos ou incorretos</li>
                <li><strong>Exclusao:</strong> Solicitar a exclusao dos seus dados</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogacao:</strong> Revogar o consentimento a qualquer momento</li>
                <li><strong>Informacao:</strong> Saber com quem seus dados foram compartilhados</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Para exercer qualquer desses direitos, entre em contato atraves do e-mail:{' '}
                <a href="mailto:privacidade@osociohoteleiro.com.br" className="text-green-600 hover:underline font-medium">
                  privacidade@osociohoteleiro.com.br
                </a>
              </p>
            </section>

            {/* Exclusao de Dados */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Exclusao de Dados</h2>
              <p className="text-gray-600 leading-relaxed">
                Voce pode solicitar a exclusao dos seus dados de tres formas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li><strong>Pelo sistema:</strong> Acesse Configuracoes da conta e solicite a exclusao</li>
                <li><strong>Por e-mail:</strong> Envie solicitacao para privacidade@osociohoteleiro.com.br</li>
                <li><strong>Via Facebook/Instagram:</strong> Solicite a exclusao diretamente nas configuracoes de privacidade do Facebook ou Instagram - processaremos automaticamente</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Apos a solicitacao, seus dados serao permanentemente excluidos em ate 30 dias.
                Voce recebera uma confirmacao por e-mail quando o processo for concluido.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Codigo de confirmacao:</strong> Ao solicitar exclusao via Facebook/Instagram, voce recebera um
                codigo de confirmacao que pode ser usado para verificar o status da sua solicitacao.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Cookies e Tecnologias Similares</h2>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                <li>Manter voce conectado ao sistema (cookies de sessao)</li>
                <li>Lembrar suas preferencias de configuracao</li>
                <li>Analisar o uso da plataforma para melhorias</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Voce pode configurar seu navegador para recusar cookies, mas isso pode afetar
                a funcionalidade do sistema.
              </p>
            </section>

            {/* Menores */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Menores de Idade</h2>
              <p className="text-gray-600 leading-relaxed">
                Nossos servicos sao destinados a empresas e profissionais.
                Nao coletamos intencionalmente dados de menores de 18 anos. Se tomarmos conhecimento
                de que coletamos dados de um menor, tomaremos medidas para excluir essas informacoes.
              </p>
            </section>

            {/* Alteracoes */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Alteracoes nesta Politica</h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos atualizar esta Politica de Privacidade periodicamente. Notificaremos sobre
                mudancas significativas por e-mail ou atraves de aviso destacado em nossa plataforma.
                Recomendamos revisar esta politica regularmente.
              </p>
            </section>

            {/* Contato */}
            <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Contato</h2>
              <p className="text-gray-600 leading-relaxed">
                Para duvidas, solicitacoes ou reclamacoes sobre esta Politica de Privacidade:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-700">
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:privacidade@osociohoteleiro.com.br" className="text-primary-600 hover:underline">
                    privacidade@osociohoteleiro.com.br
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Empresa:</strong> Wg Solucoes Tecnologicas LTDA
                </p>
                <p className="text-gray-700">
                  <strong>Encarregado de Dados (DPO):</strong>{' '}
                  <a href="mailto:dpo@osociohoteleiro.com.br" className="text-primary-600 hover:underline">
                    dpo@osociohoteleiro.com.br
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
            <Link to="/terms-of-service" className="text-primary-600 hover:underline">Termos de Servico</Link>
            <span>|</span>
            <Link to="/" className="text-primary-600 hover:underline">Voltar ao site</Link>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default PrivacyPolicy
