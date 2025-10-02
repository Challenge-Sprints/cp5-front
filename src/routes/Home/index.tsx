export default function Home () {

    return(
      <main className="py-10 px-4 flex flex-col items-center gap-8">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
         <img
  src="https://media.imperatriz.ma.gov.br/JZz1bKSZRZAqh584MxrGSE5rHHE=/750x0/novo.imperatriz.ma.gov.br/media/site/content/article/01_-_Ap%C3%B3s_inaugura%C3%A7%C3%A3o_autoridades_conheceram_instala%C3%A7%C3%B5es_e_equipamentos_do_Centro_Mariana_2.jpeg"
  alt="Centro de Diagnóstico"
  className="w-[600px] h-auto mx-auto rounded-md"
/>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Inauguração do Novo Centro de Diagnóstico
            </h2>
            <p className="text-gray-700 mb-4">
              O Hospital das Clínicas de São Paulo inaugurou seu novo Centro de Diagnóstico Avançado,
              equipado com tecnologia de ponta para exames de imagem e análises laboratoriais. A iniciativa
              visa ampliar a capacidade de atendimento e reduzir o tempo de espera para pacientes do SUS.
            </p>
            <div className="text-sm text-gray-500">
              Por Comunicação HCFMUSP • 02/10/2025
            </div>
          </div>
        </div>

        <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Campanha Outubro Rosa Começa com Ações de Prevenção
          </h2>
          <p className="text-gray-700 mb-4">
            Durante o mês de outubro, o Hospital das Clínicas promove ações de conscientização sobre o câncer de mama,
            incluindo palestras, exames gratuitos e distribuição de materiais informativos.
          </p>
          <div className="text-sm text-gray-500">
            Por Equipe de Saúde Preventiva • 01/10/2025
          </div>
        </div>

        <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-green-700 mb-2">
        Novos Residentes Iniciam Programa de Especialização
      </h2>
      <p className="text-gray-700 mb-4">
        Mais de 200 novos médicos residentes iniciaram seus programas de especialização no Hospital das Clínicas,
        abrangendo áreas como cardiologia, neurologia, pediatria e cirurgia geral.
      </p>
      <div className="text-sm text-gray-500">
        Por Coordenação de Ensino Médico • 30/09/2025
      </div>
        </div>
  </main>
)
}