"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [lote, setLote] = useState("");
  const [vacinas, setVacinas] = useState<Vacina[]>([]);
  const [vacinaSelecionada, setVacinaSelecionada] = useState("");
  const [ubs, setUbs] = useState<Vacina[]>([]);
  const [ubsSelecionada, setUbsSelecionada] = useState("");
  const [ubsDigitada, setUbsDigitada] = useState("");
  const [dataDeAplicacao, setDataDeAplicacao] = useState("");
  const [dataDeAplicacaoVolta, setDataDeAplicacaoVolta] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();
  const [menuAberto, setMenuAberto] = useState(false);
  const [nomeProfissional, setNomeProfissional] = useState(() => {
    const usuario = localStorage.getItem("usuario");
    return usuario ? JSON.parse(usuario).nome : "";
  });
  const [registroProfissional, setRegistroProfissional] = useState(() => {
    const usuario = localStorage.getItem("usuario");
    return usuario ? JSON.parse(usuario).registro : "";
  });
  const paciente = {
    nome: nome,
    cpf: cpf
  };
  console.log(localStorage.getItem("usuario"))
  const pacienteSet = {
    nome: setNome
  }

  type Vacina = {
    id: number;
    nome: string;
    categoria: string;
  };

  type Ubs = {
    id: number;
    nome: string;
  };


  async function handleSalvar(e: any) {
    e.preventDefault();

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


  const buscarCpf = async (cpf: String) => {

    const response = await fetch(`http://localhost:8080/paciente/buscar_cpf?cpf=${cpf}`);
    const retornoCpf = await response.json();

    if (retornoCpf) {
      buscarVacina()
      pacienteSet.nome(retornoCpf.nome);

    }
  };

  const buscarVacina = async () => {

    const response = await fetch(`http://localhost:8080/vacina/pegarTodas`);
    const retornoVacina = await response.json();

    setVacinas(retornoVacina);

  };

  const buscarUbs = async (ubs: String) => {

    if (ubs.length < 6) return;


    const response = await fetch(`http://localhost:8080/ubs/encontrar?palavra=${ubs}`);
    const retornoUbs = await response.json();

    setUbs(retornoUbs);


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
            onClick={() => router.push("/aplicarVacina")}
            className="w-full flex items-center gap-2 px-4 py-2 
                        rounded-lg text-gray-300 hover:bg-white/10 transition">
            Aplicar Vacina
          </button>

          <button
            onClick={() => router.push("/cartaoVacina")}
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
              onBlur={(e) => buscarCpf(e.target.value)}

            />

            <input
              className="border  w-[45%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              disabled
            />

            <input type="date"
              className="border w-[20%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="DataDeAplicacao"
              value={dataDeAplicacao}
              onChange={(e) => setDataDeAplicacao(e.target.value)}
              
            />
            <input type="date"
              min={dataDeAplicacao}
              className="border w-[20%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="DataDeAplicacaoVolta"
              value={dataDeAplicacaoVolta}
              onChange={(e) => setDataDeAplicacaoVolta(e.target.value)}
            />
          </div>

          <div className="flex gap-1">

            <select
              className="border p-2 rounded-md text-black bg-white"
              value={vacinaSelecionada}
              onChange={(e) => setVacinaSelecionada(e.target.value)}
            >
              <option value="">Selecione uma vacina</option>

              {vacinas.map((vacina, index) => (
                <option key={index} value={vacina.id}>
                  {vacina.nome + " - " + vacina.categoria}
                </option>
              ))}
            </select>

            <input
              className="border  w-[10%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="lote"
              value={lote}
              onChange={(e) => setLote(e.target.value)}

            />

            <input
              className="border  w-[40%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="nomeProfissional"
              value={nomeProfissional}
              disabled
            />

            <input
              className="border  w-[25%] p-2 rounded-md text-black bg-white placeholder-gray-600"
              placeholder="registroProfissional"
              value={registroProfissional}
              disabled
            />


          </div>
          <div className="flex gap-1">

            <div className="w-[70%] relative ">

              <input
                className="border w-full p-2 rounded-md text-black bg-white"
                placeholder="Digite a UBS"
                value={ubsDigitada}
                onChange={(e) => {
                  setUbsDigitada(e.target.value);
                  buscarUbs(e.target.value);
                }}
              />

              {ubs.length > 0 && (
                <div className="absolute w-full bg-white border rounded-md mt-1 z-10">
                  {ubs.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer text-black"
                      onClick={() => {
                        setUbsDigitada(item.nome);
                        setUbsSelecionada(item.id.toString());
                        setUbs([]); // limpa lista
                      }}
                    >
                      {item.nome}
                    </div>
                  ))}
                </div>
              )}

            </div>
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