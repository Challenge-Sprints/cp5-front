import { useState } from "react";

export default function Funcionario() {
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "João Silva", cargo: "Enfermeiro", setor: "Emergência" },
    { id: 2, nome: "Maria Oliveira", cargo: "Médica", setor: "Cardiologia" },
    { id: 3, nome: "Carlos Souza", cargo: "Técnico de Enfermagem", setor: "UTI" },
    { id: 4, nome: "Ana Pereira", cargo: "Fisioterapeuta", setor: "Reabilitação" },
    { id: 5, nome: "Pedro Santos", cargo: "Recepcionista", setor: "Atendimento" },
  ]);

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [formData, setFormData] = useState({ nome: "", cargo: "", setor: "" });

const excluirFuncionario = (id: number) => {
    setFuncionarios(funcionarios.filter((f) => f.id !== id));
  };

const editarFuncionario = (id: number) => {
    const funcionario = funcionarios.find((f) => f.id === id);
    if (funcionario) {
      setEditandoId(id);
      setFormData({
        nome: funcionario.nome,
        cargo: funcionario.cargo,
        setor: funcionario.setor,
      });
    }
  };

const salvarEdicao = () => {
    setFuncionarios(
      funcionarios.map((f) =>
        f.id === editandoId ? { ...f, ...formData } : f
      )
    );
    setEditandoId(null);
  };

const inserirFuncionario = () => {
    const novoId = funcionarios.length + 1;
    setFuncionarios([
      ...funcionarios,
      { id: novoId, nome: `Novo Funcionário ${novoId}`, cargo: "Cargo", setor: "Setor" },
    ]);
  };

  return (
    <main className="py-10 px-4 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Lista de Funcionários
      </h1>

      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={inserirFuncionario}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          + Inserir Novo Funcionário
        </button>

        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Cargo</th>
              <th className="px-4 py-2 text-left">Setor</th>
              <th className="px-4 py-2 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((f) => (
              <tr key={f.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{f.id}</td>

                {/* Nome */}
                <td className="px-4 py-2">
                  {editandoId === f.id ? (
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    f.nome
                  )}
                </td>

                {/* Cargo */}
                <td className="px-4 py-2">
                  {editandoId === f.id ? (
                    <input
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    f.cargo
                  )}
                </td>

                {/* Setor */}
                <td className="px-4 py-2">
                  {editandoId === f.id ? (
                    <input
                      type="text"
                      value={formData.setor}
                      onChange={(e) => setFormData({ ...formData, setor: e.target.value })}
                      className="border p-1 rounded w-full"
                    />
                  ) : (
                    f.setor
                  )}
                </td>

                {/* Botões */}
                <td className="px-4 py-2 flex justify-center gap-2">
                  {editandoId === f.id ? (
                    <button
                      onClick={salvarEdicao}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                      Salvar
                    </button>
                  ) : (
                    <button
                      onClick={() => editarFuncionario(f.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Editar
                    </button>
                  )}
                  <button
                    onClick={() => excluirFuncionario(f.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
