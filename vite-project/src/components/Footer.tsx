import { FaInstagram, FaTwitch, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f1a] border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10
                      flex flex-col md:flex-row
                      items-center justify-between gap-6">

        {/* LOGO / TEXTO */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-semibold">
            @VitAzevedo
          </h2>
          <p className="text-white/60 text-sm mt-1">
            © {new Date().getFullYear()} Vitória Azevedo. Todos os direitos reservados.
          </p>
        </div>

        {/* LINKS */}
        <nav className="flex gap-6 text-sm text-white/70">
          <a href="/sobre" className="hover:text-indigo-400 transition">
            Sobre
          </a>
          <a href="https://wa.me/5583987005380" className="hover:text-indigo-400 transition">
            Contato
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Termos
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Privacidade
          </a>
        </nav>

        {/* REDES SOCIAIS */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/vitazevedo?igsh=MXJ3YmNrbGpqcnk5dg=="
            className="p-2 rounded-full border border-white/20
                       text-white/70 hover:text-white
                       hover:border-indigo-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/5583987005380"
            className="p-2 rounded-full border border-white/20
                       text-white/70 hover:text-white
                       hover:border-indigo-500 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.twitch.tv/vitazevedo"
            className="p-2 rounded-full border border-white/20
                       text-white/70 hover:text-white
                       hover:border-indigo-500 transition"
          >
            <FaTwitch />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
