"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import bgLogin from "../../public/images/bg-login.png"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 h-screen">
      <div className="absolute inset-0">
        <Image
          src={bgLogin}
          alt="Background"
          quality={100}
          fill
          priority
        />
      </div>

      <div className=" m-6 relative z-10 flex w-2/6 items-center justify-center p-6 md:p-12 bg-white bg-opacity-85 shadow-lg rounded-3xl">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-blue-900">Bem-vindo!</h2>
          <p className="mt-2 text-sm text-gray-600">
            Faça login para acessar sua conta
          </p>
          <form className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-slate-100 bg-opacity-40 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Digite seu e-mail"
            />

            <label htmlFor="password" className="mt-4 block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md bg-slate-100 bg-opacity-40 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Esqueci minha senha
              </a>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={(event) => {
                event.preventDefault();
                router.push('/avaliacao'); // Navega para a rota "/avaliacao"
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
              <FcGoogle 
                size={20}
                className="mr-2"
              />
              Continuar com o Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center rounded-md border bg-white py-2 text-gray-600 hover:bg-gray-50"
            >
              <FaGithub
                size={20}
                className="mr-2"
              />
              Continuar com o GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-10 hidden md:flex w-full md:w-1/2 flex-col items-center justify-center text-center text-white p-8">
        {/* Caso haja a vontade de colocar um texto no canto direito, por cima do background image */}
      </div>
    </div>
  );
}