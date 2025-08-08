import { FaShoppingCart } from "react-icons/fa";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  onCheckout: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeItem,
  onCheckout,
}: Props) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ backdropFilter: "blur(10px)" }} // sutil blur para elegancia
    >
      <header className="flex justify-between items-center p-5 border-b border-gray-100">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
          <FaShoppingCart /> Carrito ({cart.length})
        </h2>
        <button
          onClick={onClose}
          aria-label="Cerrar carrito"
          className="text-gray-400 hover:text-gray-700 text-3xl font-bold cursor-pointer transition"
        >
          &times;
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-400 mt-10 select-none">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-md shadow-sm"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-orange-600 font-semibold">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="w-20 text-center border border-gray-300 rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 font-semibold cursor-pointer transition"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900 self-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-right font-semibold text-lg text-gray-900">
                Total: ${total.toFixed(2)}
              </p>
              <button
                onClick={onCheckout}
                className="w-full mt-4 bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition font-semibold cursor-pointer"
              >
                Proceder al pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
