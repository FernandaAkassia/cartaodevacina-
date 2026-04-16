"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();
  
  async function handleLogin(e: any) {
    e.preventDefault();

    if (!cpf || !senha) {
      setMensagem("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/profissional/login?cpf=${cpf}&senha=${senha}`
      );

      if (!response.ok) {
        setMensagem("CPF ou senha inválidos");
        return;
      }

      const data = await response.json();

      console.log(data);

      localStorage.setItem("usuario", JSON.stringify(data));

      router.push("/menu");
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center text-black">Login</h1>

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <input
          className="border p-2 rounded-md text-black bg-white placeholder-gray-600"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          Entrar
        </button>

        {mensagem && (
          <p className="text-center text-sm text-red-500">{mensagem}</p>
        )}
      </form>
    </div>
  );
}