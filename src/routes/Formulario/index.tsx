import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type Funcionario = {
  nome: string;
  cargo: string;
  setor: string;
  turno: string;
  salario: string;
};

export default function Formulario() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<Funcionario>({
    nome: "",
    cargo: "",
    setor: "",
    turno: "",
    salario: ""
  });

  const metodo = id ? "PUT" : "POST";

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/Funcionarios/${id}`)
        .then((resp) => resp.json())
        .then((data) => setForm({ ...data, salario: String(data.salario) }))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const funcionario = {
      ...form,
      salario: Number(form.salario)
    };

    fetch(`http://localhost:3000/Funcionarios/${id ?? ""}`, {
      method: metodo,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(funcionario)
    })
      .then(() => navigate("/funcionarios"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-2xl m-auto my-7">
      <h1 className="text-green-700 text-4xl text-center font-bold mb-8">
        {id ? "Editar Funcionário" : "Cadastrar Funcionário"}
      </h1>

      <form className="border-2 border-gray-400 rounded-md p-4" onSubmit={handleSubmit}>
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          type="text"
          name="nome"
          value={form.nome}
          placeholder="Nome"
          onChange={handleChange}
          required
        />
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          type="text"
          name="cargo"
          value={form.cargo}
          placeholder="Cargo"
          onChange={handleChange}
          required
        />
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          type="text"
          name="setor"
          value={form.setor}
          placeholder="Setor"
          onChange={handleChange}
          required
        />
        <select
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-2"
          name="turno"
          value={form.turno}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o turno</option>
          <option value="Diurno">Diurno</option>
          <option value="Tarde">Tarde</option>
          <option value="Noturno">Noturno</option>
          <option value="Integral">Integral</option>
        </select>
        <input
          className="border-2 border-gray-400 rounded-md p-2 w-full mb-4"
          type="number"
          name="salario"
          value={form.salario}
          placeholder="Salário"
          onChange={handleChange}
          step="0.01"
          required
        />
        <button type="submit" className="bg-green-600 text-white font-bold py-2 px-4 rounded-md mr-3">
          Enviar
        </button>
        <Link to="/funcionarios" className="bg-red-600 text-white font-bold py-2 px-4 rounded-md">
          Cancelar
        </Link>
      </form>
    </div>
  );
}
