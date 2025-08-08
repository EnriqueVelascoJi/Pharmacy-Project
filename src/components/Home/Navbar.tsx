import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-white shadow-md fixed w-full top-[28px] z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">Farmacias Lara+</h1>
        <ul className="flex gap-6">
          <li><a onClick={() => navigate("/home")} className="hover:text-orange-600 cursor-pointer">Inicio</a></li>
          <li><a onClick={() => navigate("/shop")} className="hover:text-orange-600 cursor-pointer">Tienda</a></li>
          <li><a onClick={() => navigate("/contact")} className="hover:text-orange-600 cursor-pointer">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}