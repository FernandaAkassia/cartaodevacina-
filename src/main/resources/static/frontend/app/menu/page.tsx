"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <div className="h-screen bg-gray-900 text-white">

            {/* BOTÃO MENU */}
            <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="p-2 bg-gray-800 m-2 z-50 relative rounded-md"
            >
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
                className={`fixed top-0 left-0 h-full w-64 bg-gray-950 text-white p-4 transform transition-transform duration-300 ease-in-out z-40  ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}
            >

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
                        rounded-lg text-gray-300 hover:bg-white/10 transition"
                    >
                        Cadastro Paciente
                    </button>

                    <button
                        onClick={() => router.push("/aplicarVacina")}
                        className="w-full flex items-center gap-2 px-4 py-2 
                        rounded-lg text-gray-300 hover:bg-white/10 transition"
                    >
                        Aplicar Vacina
                    </button>

                    <button
                        onClick={() => router.push("/cartaoVacina")}
                        className="w-full flex items-center gap-2 px-4 py-2 
                        rounded-lg text-gray-300 hover:bg-white/10 transition"
                    >
                        Cartão Vacina
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="rounded-lg blockw-full text-left px-4 py-2 text-red-500 hover:bg-gray-200">
                        Sair
                    </button>

                </div>
            </div>

            {/* CONTEÚDO */}
            <div className="p-6">
                <div className="bg-gray-800 p-6 rounded-x1 shadow-md">
                    <h1 className="text-2xl font-bold mb-2">Bem-vindo!</h1>
                    <p className="text-gray-300">
                        Sistema de Cartão de Vacinação
                    </p>
                </div>
            </div>

        </div>
    );
}