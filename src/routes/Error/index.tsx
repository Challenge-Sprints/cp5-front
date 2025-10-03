import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Erro 404</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Opa! A página que você tentou acessar não foi encontrada ou ocorreu um erro inesperado.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
 