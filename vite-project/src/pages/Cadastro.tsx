// Importa o hook useState para controlar estados do formulário
import { useState } from "react";

// Importa o motion para fazer animações no formulário
import { motion } from "framer-motion";

// Importa ícones que serão usados nos inputs
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

// Importa a imagem de fundo da tela
import decor1 from "../assets/Fotos/BG.png";

// Componente de Cadastro
const Cadastro: React.FC = () => {

  // Estados para armazenar os valores digitados pelo usuário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que a página recarregue
    console.log("Cadastro:", { nome, email, senha }); // Mostra os dados no console
  };

  return (
    // Container principal da página
    <div
      className="min-h-screen flex items-center justify-center px-4
                 bg-cover bg-center"
      // Define a imagem de fundo usando o arquivo importado
      style={{ backgroundImage: `url(${decor1})` }}
    >

      {/* Formulário com animação usando framer-motion */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }} // Estado inicial da animação
        animate={{ opacity: 1, y: 0 }}  // Estado final da animação
        className="auth-card w-[380px]"
      >
        {/* Título do formulário */}
        <h1 className="text-2xl text-white font-semibold text-center mb-8">
          Criar conta
        </h1>

        {/* CAMPO DE NOME */}
        <div className="relative mb-4">
          {/* Ícone de usuário */}
          <FaUser className="auth-icon left-4" />
          <input
            type="text"
            placeholder="Digite seu nome"
            className="auth-input"
            // Atualiza o estado nome conforme o usuário digita
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* CAMPO DE EMAIL */}
        <div className="relative mb-4">
          {/* Ícone de email */}
          <FaEnvelope className="auth-icon left-4" />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="auth-input"
            // Atualiza o estado email
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* CAMPO DE SENHA */}
        <div className="relative mb-6">
          {/* Ícone de cadeado */}
          <FaLock className="auth-icon left-4" />
          <input
            type="password"
            placeholder="Crie uma senha"
            className="auth-input"
            // Atualiza o estado senha
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* Botão para enviar o formulário */}
        <button className="auth-btn mb-6">
          Cadastrar
        </button>

        {/* Link para a tela de login */}
        <div className="text-center text-sm text-white/70">
          Já tem conta?{" "}
          <a href="/login" className="text-indigo-400 hover:text-indigo-300">
            Entrar
          </a>
        </div>
      </motion.form>
    </div>
  );
};

// Exporta o componente para ser usado em outras partes do projeto
export default Cadastro;
