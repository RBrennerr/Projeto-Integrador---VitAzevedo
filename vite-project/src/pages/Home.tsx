import { motion, useScroll, useTransform } from "framer-motion";
import decor1 from "../assets/fotos/BG.png";

// Página inicial do site
export default function Home() {

  // Pega a posição do scroll da página
  const { scrollY } = useScroll();

  // Cria um movimento leve no background conforme o scroll
  // Quanto mais rola a página, mais o fundo desce um pouco
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <main className="bg-[#EBE5D9] text-[#0c0e0c]">

      {/* SEÇÃO PRINCIPAL / HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

        {/* Background com efeito parallax */}
        <motion.div
          style={{ y }} // aplica o movimento no eixo Y
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            // imagem de fundo da página
            style={{ backgroundImage: `url(${decor1})` }}
          />
        </motion.div>

        {/* Camada escura por cima da imagem */}
        <div className="absolute inset-0 bg-[#0f0f1a]/60" />

        {/* Conteúdo principal da página */}
        <div className="relative text-center flex flex-col items-center px-6">

          {/* Título com animação de entrada */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} // começa invisível e mais embaixo
            animate={{ opacity: 1, y: 0 }}  // aparece subindo
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl text-white mb-16 leading-none"
          >
            Bem-vindo ao meu mundo criativo
          </motion.h1>

          {/* Botão/Link para o portfólio */}
          <motion.a
            href="/portfolio"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.08 }} // aumenta um pouco ao passar o mouse
            whileTap={{ scale: 0.95 }}   // diminui ao clicar
            className="
              inline-block
              border-2 border-white
              text-white
              px-12 py-4
              rounded-full
              text-lg
              tracking-wide
              hover:bg-white
              hover:text-[#0f0f1a]
              transition-all
              duration-300
            "
          >
            Conheça meu trabalho
          </motion.a>
        </div>
      </section>
    </main>
  );
}
