import { FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  category: string; // Ej: "Medicamentos", "Vitaminas", "Cosméticos"
  disease: string;  // Ej: "Diabetes", "Hipertensión", "Gripe"
}


interface Props {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCart }: Props) {
  return (
    <div className="rounded-lg shadow-md hover:shadow-2xl hover:scale-[1.03] transform transition duration-300 ease-in-out p-5 flex flex-col bg-white">
      {/* Aquí podrías agregar un badge de oferta si quieres */}
      {/* <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Oferta</div> */}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
        loading="lazy"
      />

      <h3 className="text-xl font-bold mb-1 text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>

      <p className="text-orange-600 font-extrabold text-2xl mb-4">${product.price.toFixed(2)}</p>

      <div className="mt-auto flex justify-between items-center gap-4">
        <button
          onClick={() => onViewDetails(product)}
          className="text-gray-600 hover:text-orange-600 underline text-sm font-medium transition cursor-pointer"
          aria-label={`Ver detalles de ${product.name}`}
        >
          Ver detalles
        </button>
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-semibold shadow-md hover:shadow-lg cursor-pointer"
          aria-label={`Añadir ${product.name} al carrito`}
        >
          <FaShoppingCart />
          Añadir
        </button>
      </div>
    </div>
  );
}
