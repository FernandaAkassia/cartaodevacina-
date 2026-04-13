"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [n, setN] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [ddd, setDdd] = useState("");
  const [telefone, setTelefone] = useState("");

  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  async function handleSalvar(e: any) {
    e.preventDefault();

    const paciente = {
      nome: nome,
      cpf: cpf,
      cep: cep,
      endereco: endereco,
      n: n,
      estado: estado,
      cidade: cidade,
      bairro: bairro,
      ddd: ddd,
      telefone: telefone
    };

    try {
      const response = await fetch(
        `http://localhost:8080/paciente/salvar`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(paciente)
      });


      const data = await response.json();

      console.log(data);

      localStorage.setItem("usuario", JSON.stringify(data));

      router.push("/dashboard");
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor");
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 margin-top: auto ">
      <form
        onSubmit={handleSalvar}
        className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col gap-4 "
      >
        <h1 className="text-2xl font-bold text-center text-black">Salvar Paciente</h1>
       
        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="N"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="ddd"
          value={ddd}
          onChange={(e) => setDdd(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />


        <button
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          Salvar
        </button>

        {mensagem && (
          <p className="text-center text-sm text-red-500">{mensagem}</p>
        )}
      </form>
    </div>
  );
}