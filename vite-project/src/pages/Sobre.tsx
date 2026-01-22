import { motion } from "framer-motion";
import foto1 from "../assets/fotos/VITA.jpeg";
import foto2 from "../assets/fotos/VITA1.jpeg";
import decor1 from "../assets/fotos/BG.png";

// Configuração simples de animação (fade + subir)
const fadeUp = {
  hidden: { opacity: 0, y: 40 }, // começa invisível e mais abaixo
  visible: { opacity: 1, y: 0 }, // aparece na posição normal
};

export default function Sobre() {
  return (
    <main className="bg-[#EBE5D9] text-[#0c0e0c]">

      {/* HERO */}
      {/* Seção inicial com imagem de fundo */}
      <section
        className="relative py-44 px-6 border-b border-black/10 overflow-hidden"
        style={{
          backgroundImage: `url(${decor1})`, // imagem de fundo
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay escuro para melhorar a leitura do texto */}
        <div className="absolute inset-0 bg-[#0c0e0c]/60" />

        {/* Conteúdo centralizado */}
        <div className="relative max-w-5xl mx-auto text-center">
          {/* Título animado */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-8xl mb-8 text-[#ebe5d9]
                       [-webkit-text-stroke:1px_black]"
          >
            Sobre a Artista
          </motion.h1>

          {/* Texto de introdução */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#ebe5d9]/80 text-lg max-w-3xl mx-auto"
          >
            Explorando múltiplos formatos criativos através da ilustração,
            arte original e processos experimentais.
          </motion.p>
        </div>
      </section>

      {/* BLOCO 1 */}
      {/* Primeira seção com texto e imagem */}
      <motion.section
        variants={fadeUp} // usa a animação definida acima
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-28 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-8xl font-display mb-8 text-[#9E83B8]">
              Vitória Azevedo
            </h2>

            {/* Parágrafos descritivos */}
            <div className="space-y-5 text-lg text-[#0c0e0c]/90 leading-relaxed">
              <p>
                Sou uma artista multipotencial com paixão por explorar
                diferentes meios de expressão criativa.
              </p>
              <p>
                Meu trabalho transita entre ilustração digital, arte
                tradicional e produtos artísticos únicos.
              </p>
            </div>
          </div>

          {/* Imagem da artista */}
          <div className="rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <img
              src={foto1} // foto da artista
              alt="Vitória Azevedo"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* BLOCO 2 */}
      {/* Segunda seção, invertendo a ordem no desktop */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-28 px-6 bg-black/5"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className="md:order-2">
            <h2 className="text-8xl font-display mb-8 text-[#9E83B8]">
              Processo Criativo
            </h2>

            <div className="space-y-5 text-lg text-[#0c0e0c]/90 leading-relaxed">
              <p>
                Cada projeto é uma oportunidade de experimentação,
                conectando técnicas tradicionais com abordagens contemporâneas.
              </p>
              <p>
                Busco criar peças que contam histórias e evocam emoções.
              </p>
            </div>
          </div>

          {/* Imagem do processo */}
          <div className="md:order-1 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
            <img
              src={foto2} // imagem do processo artístico
              alt="Processo artístico"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* PROCESSO */}
      {/* Seção que mostra as etapas do processo criativo */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Título da seção */}
          <h2 className="text-8xl font-display mb-8 text-[#9E83B8]">
            Meu Processo
          </h2>

          {/* Grid com três cards */}
          <div className="grid md:grid-cols-3 gap-10 text-[#0c0e0c]/70">

            {/* Lista das etapas do processo */}
            {[
              { title: "Pesquisa", text: "Imersão em referências, conceitos e narrativas." },
              { title: "Experimentação", text: "Testes de técnicas, materiais e abordagens." },
              { title: "Refinamento", text: "Interações até alcançar clareza e impacto." },
            ].map((item, i) => (
              /* Card individual de cada etapa */
              <div
                key={i} // chave obrigatória para listas no React
                className="bg-[#E6CFEF] rounded-2xl p-8 shadow-md"
              >
                {/* Número da etapa */}
                <span className="block text-[#9E83B8] text-xl font-semibold mb-3">
                  0{i + 1}
                </span>

                {/* Título da etapa */}
                <h3 className="text-[#0c0e0c] font-medium mb-2 text-lg">
                  {item.title}
                </h3>

                {/* Descrição da etapa */}
                <p className="text-[#0c0e0c]/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
