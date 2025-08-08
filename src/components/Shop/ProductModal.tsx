import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTags, FaHeartbeat, FaListUl, FaDollarSign, FaTimes } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  category: string;
  disease: string;
}

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: Props) {
  if (!product) return null;

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center flex items-center justify-center">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-800/50  transition-opacity"
            aria-hidden="true"
          />

          {/* Trick to center modal */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <div className="inline-block align-middle bg-white rounded-lg shadow-xl max-w-5xl w-full p-8 max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold transition"
              aria-label="Cerrar modal"
            >
              <FaTimes />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Imagen alineada verticalmente */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-80 object-contain rounded-lg shadow-sm"
                loading="lazy"
              />

              {/* Detalles */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <FaListUl className="text-orange-600" /> Características:
                    </h3>
                    {/* Alineado a la izquierda (default) */}
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-left">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="flex items-center gap-2 text-orange-600 font-semibold text-lg">
                    <FaTags /> Categoría: <span className="text-gray-800 font-normal">{product.category}</span>
                  </p>
                  <p className="flex items-center gap-2 text-orange-600 font-semibold text-lg">
                    <FaHeartbeat /> Enfermedad: <span className="text-gray-800 font-normal">{product.disease}</span>
                  </p>
                  <p className="flex items-center gap-2 text-orange-600 font-bold text-2xl mt-4">
                    <FaDollarSign /> ${product.price.toFixed(2)}
                  </p>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="mt-6 cursor-pointer bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-semibold shadow-md w-full"
                    aria-label={`Añadir ${product.name} al carrito`}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
