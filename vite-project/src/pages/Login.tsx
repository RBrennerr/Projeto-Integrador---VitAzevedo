import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaFacebook, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import decor1 from "../assets/fotos/BG.png";

// Página de login
export default function Login() {
  const [email, setEmail] = useState(""); // email digitado
  const [password, setPassword] = useState(""); // senha digitada
  const [show, setShow] = useState(false); // controla se a senha aparece

  return (
    <div
      className="relative min-h-[100svh] flex items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${decor1})` }} // fundo da página
    >
      {/* Overlay para dar contraste */}
      <div className="absolute inset-0 bg-black/60" />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative auth-card w-full max-w-md"
      >
        <h1 className="text-2xl text-white font-semibold text-center mb-8">
          Acesse sua conta
        </h1>

        {/* E-mail */}
        <div className="relative mb-4">
          <FaUser className="auth-icon left-4" />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // atualiza o email
            className="auth-input"
          />
        </div>

        {/* Senha */}
        <div className="relative mb-4">
          <FaLock className="auth-icon left-4" />
          <input
            type={show ? "text" : "password"} // alterna visibilidade
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
          <button
            type="button"
            onClick={() => setShow(!show)} // mostra/esconde senha
            className="auth-icon right-4 hover:text-white"
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex justify-between text-sm text-white/70 mb-6">
          <label className="flex gap-2 items-center">
            <input type="checkbox" className="accent-indigo-500" />
            Lembrar
          </label>
          <button type="button">Esqueci a senha</button>
        </div>

        <button className="auth-btn mb-6">Entrar</button>

        <div className="flex gap-3 mb-6">
          {[FcGoogle, FaFacebook, FaInstagram].map((Icon, i) => (
            <button key={i} className="social-btn">
              <Icon />
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-white/70">
          Não tem conta?{" "}
          <a href="/Cadastro" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Cadastre-se
          </a>
        </p>
      </motion.form>
    </div>
  );
}
