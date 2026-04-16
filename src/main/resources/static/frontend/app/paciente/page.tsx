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
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [complemento, setComplemento] = useState("");

  const [mensagem, setMensagem] = useState("");
  const router = useRouter();
  const [menuAberto, setMenuAberto] = useState(false);

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
      telefone: telefone,
      dataNascimento: dataNascimento,
      sexo: sexo,
      complemento: complemento
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

      alert("Paciente Cadastrado Com Sucesso");
      window.location.reload();
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor");
    }
  }


  const buscarCep = async (cep: String) => {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8)
      return;

    const response = await fetch(`http://viacep.com.br/ws/${cepLimpo}/json/`);
    const cepJson = await response.json();

    if (!cepJson.erro) {
      enderecoJson.endereco(cepJson.logradouro);
      enderecoJson.bairro(cepJson.bairro);
      enderecoJson.cidade(cepJson.localidade);
      enderecoJson.estado(cepJson.uf);
    }
  };
  const enderecoJson = {
    endereco: setEndereco,
    bairro: setBairro,
    cidade: setCidade,
    estado: setEstado,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* BOTÃO MENU */}
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="p-2 bg-gray-800 m-2 z-50 relative rounded-md">
        ☰
      </button>

      {/* OVERLAY */}
      {menuAberto && (
        <div
          onClick={() => setMenuAberto(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* MENU LATERAL */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-950 text-white p-4
       transform transition-transform duration-300 ease-in-out z-40
        ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}>
        {/* IMAGEM */}
        <img
          src="/img/IMG-20260413-WA0162.jpg"
          alt="Logo"
          className="mb-6 w-full rounded-md"
        />

        {/* BOTÕES DO MENU */}
        <div className="flex flex-col gap-2">

          <button
            onClick={() => router.push("/paciente")}
            className="w-full flex items-center gap-2 px-4 py-2
                        rounded-lg text-white bg-gradient-to-r bg-blue-600">
            Cadastro Paciente
          </button>

          <button
            onClick={() => router.push("/vacina")}
            className="w-full flex items-center gap-2 px-4 py-2 
                        rounded-lg text-gray-300 hover:bg-white/10 transition">
            Aplicar Vacina
          </button>

          <button
            onClick={() => router.push("/cartao")}
            className="w-full flex items-center gap-2 px-4 py-2 
                        rounded-lg text-gray-300 hover:bg-white/10 transition">
            Cartão Vacina
          </button>

          <button
            onClick={() => router.push("/")}
            className="blockw-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-gray-200">
            Sair
          </button>
        </div>
      </div>

      {/* ÁREA DE CONTEÚDO */}
      <div className="flex-1 flex items-center justify-center">

        {/* FORM CENTRALIZADO */}
        <form
          onSubmit={handleSalvar}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-[65%] flex flex-col gap-4">

          <div className="flex gap-1">

            <input
              className="border w-[20%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <input
              className="border  w-[45%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input type="date"
              className="border w-[20%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="DataDeNascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />

            <div className="w-[15%] flex flex-col">

              <select
                className="h-[42px] border p-3 rounded-md text-black bg-white"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
          </div>

          <div className="flex gap-1">

            <input
              className="border w-[16%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              type="text"
              placeholder="Cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={(e) => buscarCep(e.target.value)}
            />

            <input
              className="border w-[75%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)
              }
            />

            <input
              className="border w-[10%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="N"
              value={n}
              onChange={(e) => setN(e.target.value)}
            />
          </div>

          <div className="flex gap-1">

            <input
              className="border w-[30%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />

            <input
              className="border w-[30%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />

            <input
              className="border w-[40%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-1">

            <input
              className="border w-[75%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <input
              className="border w-[10%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="ddd"
              value={ddd}
              onChange={(e) => setDdd(e.target.value)}
            />

            <input
              className="border w-[15%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

          </div>

          <button
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition "
            type="submit"
          >
            Salvar
          </button>

        </form>

        {mensagem && (
          <p className="text-center text-sm text-red-500">{mensagem}</p>
        )}

      </div>
    </div>
  );
}