import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
        <header className="bg-gradient-to-b from-blue-50 via-white to-blue-100 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 md:mb-0">Hospital das Clínicas</h1>
        <nav>
          <ul className="flex flex-wrap gap-4 text-blue-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors duration-200">
                Início
              </Link>
            </li>
            <li>
              <Link to="/funcionarios" className="hover:text-blue-500 transition-colors duration-200">
                Funcionário
              </Link>
            </li>
            <li>
              <Link to="/agendamento" className="hover:text-blue-500 transition-colors duration-200">
                Agendamento
              </Link>
            </li>
            <li>
              <Link to="/consultas" className="hover:text-blue-500 transition-colors duration-200">
                Consultas
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-500 transition-colors duration-200">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-blue-500 transition-colors duration-200">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/quemsomos" className="hover:text-blue-500 transition-colors duration-200">
                Quem Somos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
