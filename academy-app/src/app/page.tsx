"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import bgLogin from "../../public/images/bg-login2.jpeg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="relative flex w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src={bgLogin}
          alt="Background"
          quality={100}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Sessão de login */}
      <div className="relative z-10 flex w-6/12 items-center justify-center ml-auto bg-white shadow-lg p-6 md:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-900">Bem-vindo!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Faça login para acessar sua conta
          </p>
          <form className="mt-6">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full rounded-md bg-slate-100 bg-opacity-40 shadow-sm focus:outline-none"
              placeholder="Digite seu e-mail"
            />

            <label
              htmlFor="password"
              className="mt-4 text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full rounded-md bg-slate-100 bg-opacity-40 shadow-sm focus:outline-none"
              placeholder="Digite sua senha"
            />

            <div className="mt-4 flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                Lembrar de mim
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Esqueci minha senha
            </a>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={(event) => {
                event.preventDefault();
                router.push("/avaliacao"); // Navega para a rota "/avaliacao"
              }}
            >
              Entrar
            </button>
          </form>

          <div className="mt-6">
            <button
              type="button"
              className="mb-2 w-full flex items-center justify-center rounded-md border bg-white py-2 text-gray-600 hover:bg-gray-50"
            >
              <FcGoogle size={20} className="mr-2" />
              Continuar com o Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center rounded-md border bg-white py-2 text-gray-600 hover:bg-gray-50"
            >
              <FaGithub size={20} className="mr-2" />
              Continuar com o GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
