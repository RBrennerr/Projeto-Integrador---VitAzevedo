import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import decor1 from "../assets/fotos/BG.png";
import art1 from "../assets/fotos/20.jpeg";
import art2 from "../assets/fotos/21.jpeg";
import art3 from "../assets/fotos/22.jpeg";
import art4 from "../assets/fotos/3.jpeg";
import art5 from "../assets/fotos/4.jpeg";
import art6 from "../assets/fotos/46.jpg";
import art7 from "../assets/fotos/8.jpeg";
import art8 from "../assets/fotos/41.jpg";
import art9 from "../assets/fotos/14.jpeg";
import art10 from "../assets/fotos/30.jpeg";
import art11 from "../assets/fotos/31.jpg";
import art12 from "../assets/fotos/32.jpg";

// Lista de imagens usadas na galeria
const obras = [
  art1, art2, art3, art4, art5, art6,
  art7, art8, art9, art10, art11, art12,
];

export default function Portfolio() {
  // Guarda a imagem aberta no lightbox (ou null quando fechado)
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="bg-[#EBE5D9] text-[#0c0e0c]">
      {/* HERO */}
      <section
        className="relative py-44 px-6 border-b border-black/10 overflow-hidden"
        style={{ background: `url(${decor1}) center/cover no-repeat` }} // fundo do hero
      >
        <div className="absolute inset-0 bg-[#0c0e0c]/60" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-7xl md:text-8xl mb-10 text-[#f8f8f8] [-webkit-text-stroke:1px_black]"
          >
            Artista Multipotencial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/70 text-lg"
          >
            Ilustrações, impressões e artes originais
          </motion.p>
        </div>
      </section>

      {/* INTRO DA GALERIA */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-[#8759b3]">
            Ilustrações, Impressões
          </h2>
        </motion.div>
      </section>

      {/* GALERIA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {obras.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-black/10"
            >
              <img
                src={img}
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Botão para abrir a imagem em tela cheia */}
              <button
                onClick={() => setLightbox(img)} // abre o lightbox
                className="absolute bottom-3 right-3 p-2 rounded-full bg-black/30 opacity-30 hover:opacity-100 transition"
                aria-label="Ampliar imagem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth={2}
                  className="w-6 h-6"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)} // fecha ao clicar
          >
            <img
              src={lightbox}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
