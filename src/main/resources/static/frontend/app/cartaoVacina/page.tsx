"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


type Registro = {
  id: number;
  paciente: {
    nome: string;
    cpf: string;
  };
  vacina: {
    nome: string;
    categoria: string;
  };
  ubs: {
    nome: string;
  };
  profissional: {
    nome: string;
    registro: string;
  };
  dataAplicacao: string;
  dataRetorno: string;
};

export default function CartaoVacina() {
  const [cpf, setCpf] = useState("");
  const [dados, setDados] = useState<Registro[]>([]);
  const [loading, setLoading] = useState(false);
  const [buscou, setBuscou] = useState(false);
  const router = useRouter();
  const [menuAberto, setMenuAberto] = useState(false);


  const buscarCartao = async () => {
    if (!cpf) {
      alert("Digite um CPF");
      return;
    }

    setLoading(true);
    setBuscou(true);

    try {
      const response = await fetch(
        `http://localhost:8080/cartaovacina/buscar?cpf=${cpf}`
      );

      const data = await response.json();

      setDados(data);
    } catch (error) {
      console.log("Erro ao buscar");
      setDados([]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">

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

      <div className=" flex flex-col items-center justify-center">        <h1 className="text-3xl font-bold mb-6">
        Histórico de Aplicação
      </h1>

        {/* 🔍 BUSCA POR CPF */}
        <div className="flex gap-2 mb-6">
          <input
            className="border w-[100%] p-2 rounded-md text-black bg-white placeholder-gray-600"
            placeholder="Digite o CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <button
            onClick={buscarCartao}
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition "
          >
            Buscar
          </button>
        </div>

        {/* ⏳ LOADING */}
        {loading && <p>Carregando...</p>}

        {/* ❌ SEM RESULTADO */}
        {buscou && !loading && dados.length === 0 && (
          <p>Nenhum histórico encontrado</p>
        )}

        {/* ✅ RESULTADO */}
        {dados.length > 0 && (
          <>
            {/* DADOS DO PACIENTE */}
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <p><strong>Nome:</strong> {dados[0].paciente.nome}</p>
              <p><strong>CPF:</strong> {dados[0].paciente.cpf}</p>
            </div>

            {/* HISTÓRICO */}
            {dados.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 p-4 rounded-lg mb-4"
              >
                <p><strong>Vacina:</strong> {item.vacina.nome}</p>
                <p><strong>Categoria:</strong> {item.vacina.categoria}</p>
                <p><strong>UBS:</strong> {item.ubs.nome}</p>
                <p><strong>Profissional:</strong> {item.profissional.nome}</p>
                <p><strong>Registro:</strong> {item.profissional.registro}</p>
                <p><strong>Data Aplicação:</strong> {item.dataAplicacao}</p>
                <p><strong>Data Retorno:</strong> {item.dataRetorno}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}