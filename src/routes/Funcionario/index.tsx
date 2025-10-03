import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Funcionario = {
  id: number;
  nome: string;
  cargo: string;
  setor: string;
  turno: string;
  salario: number;
};

export default function Funcionario() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/Funcionarios")
      .then((resp) => resp.json())
      .then((data) => setFuncionarios(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id: number) => {
    fetch(`http://localhost:3000/Funcionarios/${id}`, { method: "DELETE" })
      .then(() => setFuncionarios((prev) => prev.filter((f) => f.id !== id)))
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-3/4 mt-8 p-8 m-auto">
      <h1 className="text-green-700 text-4xl text-center font-bold mb-8">Lista de Funcionários</h1>

      <Link to="/formulario" className="p-2.5 bg-green-600 text-white font-bold rounded-md">
        Inserir Funcionário
      </Link>

      <table className="w-full border-2 border-gray-400 m-auto my-5">
        <thead>
          <tr className="bg-green-700 text-white *:p-2.5">
            <th>Nome</th>
            <th>Cargo</th>
            <th>Setor</th>
            <th>Turno</th>
            <th>Salário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((f) => (
            <tr key={f.id} className="even:bg-gray-100 *:text-center *:p-2.5">
              <td>{f.nome}</td>
              <td>{f.cargo}</td>
              <td>{f.setor}</td>
              <td>{f.turno}</td>
              <td>R$ {f.salario.toFixed(2)}</td>
              <td>
                <Link
                  to={`/formulario/${f.id}`}
                  className="m-1 bg-blue-600 text-white px-2 py-1 rounded-md hover:font-bold"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(f.id)}
                  className="m-1 bg-red-600 text-white px-2 py-1 rounded-md hover:font-bold"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-700 text-white text-center *:p-2.5">
            <td colSpan={6}>Funcionários cadastrados no sistema</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
