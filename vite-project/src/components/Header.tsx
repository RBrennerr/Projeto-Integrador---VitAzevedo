import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export function Header() {
  const { items } = useCartStore();

  return (
    <header className="border-b border-[#9E83B8] bg-[#EBE5D9]">
      <nav className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/android-chrome-192x192.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="font-display text-6xl text-[#9E83B8] ">
            Vitória Azevedo
          </h1>

        </div>

        {/* Menu */}
        <div className="flex gap-6 text-base text-[#0c0e0c] items-center">

          <Link to="/portfolio" className="nav-link">Portfólio</Link>
          <Link to="/sobre" className="nav-link">Sobre</Link>
          <Link to="/loja" className="nav-link">Loja</Link>

          {/* Carrinho */}
          <div className="relative group">
            <Link to="/carrinho" className="nav-link relative">
              Carrinho
              {items.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-[#9E83B8] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>

            <div className="absolute right-0 mt-2 w-64 bg-[#EBE5D9] text-[#0c0e0c] rounded shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto z-50">
              {items.length === 0 ? (
                <p className="p-4 text-center text-sm">Carrinho vazio</p>
              ) : (
                <ul className="p-2 max-h-60 overflow-auto">
                  {items.map((p) => (
                    <li key={p.id} className="flex justify-between py-1 border-b border-black/10">
                      <span>{p.nome}</span>
                      <span>{p.quantidade}x</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <Link to="/login" className="nav-link">Login</Link>
        </div>

      </nav>
    </header>
  );
}
