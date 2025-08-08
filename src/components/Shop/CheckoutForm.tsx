import { useState } from "react";

interface Props {
  onCancel: () => void;
  onConfirm: (data: any) => void;
}

export default function CheckoutForm({ onCancel, onConfirm }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [focused, setFocused] = useState<"name" | "cardNumber" | "expiry" | "cvv" | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Formatea el número de tarjeta con espacios cada 4 dígitos
  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
  };

  // Formatea la fecha MM/AA
  const formatExpiry = (value: string) => {
    let val = value.replace(/\D/g, "");
    if (val.length > 2) val = val.slice(0, 2) + "/" + val.slice(2, 4);
    return val;
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Por favor ingresa tu nombre.";
    if (!form.email.trim()) {
      newErrors.email = "Por favor ingresa tu correo.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Correo inválido.";
    }
    if (paymentMethod === "card") {
      if (!form.cardNumber.replace(/\s/g, "") || form.cardNumber.replace(/\s/g, "").length < 16)
        newErrors.cardNumber = "Número de tarjeta inválido.";
      if (!form.expiry.trim()) newErrors.expiry = "Fecha de expiración requerida.";
      if (!form.cvv.trim() || form.cvv.length < 3) newErrors.cvv = "CVV inválido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onConfirm({ ...form, paymentMethod });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-orange-700 text-center">Pago de productos</h2>

      {/* Tarjeta animada */}
      {paymentMethod === "card" && (
        <div className="relative w-full h-48 mb-8 perspective">
          <div
            className={`duration-700 transform-style-preserve-3d relative w-full h-full rounded-xl shadow-xl ${
              focused === "cvv" ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">Mi Tienda</div>
                <div className="text-xs">Tarjeta de crédito</div>
              </div>
              <div className="text-xl tracking-widest font-mono select-none">
                {form.cardNumber ? form.cardNumber : "#### #### #### ####"}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs uppercase">Titular</div>
                  <div className="font-semibold">{form.name ? form.name.toUpperCase() : "NOMBRE APELLIDO"}</div>
                </div>
                <div>
                  <div className="text-xs uppercase">Expira</div>
                  <div className="font-semibold">{form.expiry ? form.expiry : "MM/AA"}</div>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl p-6 text-white transform rotate-y-180">
              <div className="bg-black h-12 rounded mb-6"></div>
              <div>
                <div className="text-xs uppercase mb-1">CVV</div>
                <div className="bg-white text-black rounded px-4 py-2 font-mono tracking-widest select-none">
                  {form.cvv ? form.cvv : "***"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Campos nombre y email */}
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="name">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
            }`}
            placeholder="Tu nombre completo"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onFocus={() => setFocused(null)}
            className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
            }`}
            placeholder="tu@email.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Método de pago */}
        <div className="mb-6">
          <p className="font-semibold mb-3">Método de pago</p>
          <label className="inline-flex items-center mr-8 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="mr-2"
            />
            Tarjeta de crédito
          </label>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="mr-2"
            />
            PayPal
          </label>
        </div>

        {/* Campos tarjeta */}
        {paymentMethod === "card" && (
          <>
            <div className="mb-6">
              <label className="block font-semibold mb-2" htmlFor="cardNumber">
                Número de tarjeta
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                maxLength={19}
                value={form.cardNumber}
                onChange={(e) =>
                  setForm({ ...form, cardNumber: formatCardNumber(e.target.value) })
                }
                onFocus={() => setFocused("cardNumber")}
                onBlur={() => setFocused(null)}
                className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.cardNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
                }`}
                placeholder="1234 5678 9012 3456"
              />
              {errors.cardNumber && <p className="text-red-600 text-sm mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="flex gap-6 mb-6">
              <div className="flex-1">
                <label className="block font-semibold mb-2" htmlFor="expiry">
                  Fecha expiración
                </label>
                <input
                  id="expiry"
                  name="expiry"
                  type="text"
                  maxLength={5}
                  value={form.expiry}
                  onChange={(e) => setForm({ ...form, expiry: formatExpiry(e.target.value) })}
                  onFocus={() => setFocused("expiry")}
                  onBlur={() => setFocused(null)}
                  className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
                    errors.expiry ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
                  }`}
                  placeholder="MM/AA"
                />
                {errors.expiry && <p className="text-red-600 text-sm mt-1">{errors.expiry}</p>}
              </div>

              <div className="flex-1">
                <label className="block font-semibold mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="password"
                  maxLength={3}
                  value={form.cvv}
                  onChange={(e) => setForm({ ...form, cvv: e.target.value })}
                  onFocus={() => setFocused("cvv")}
                  onBlur={() => setFocused(null)}
                  className={`w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 ${
                    errors.cvv ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
                  }`}
                  placeholder="***"
                />
                {errors.cvv && <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>}
              </div>
            </div>
          </>
        )}

        {paymentMethod === "paypal" && (
          <p className="mb-6 text-gray-600">
            Serás redirigido a PayPal para completar tu compra.
          </p>
        )}

        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={onCancel}
            className="py-3 px-6 border rounded hover:bg-gray-100 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-orange-600 text-white py-3 px-8 rounded hover:bg-orange-700 transition font-semibold"
          >
            Confirmar compra
          </button>
        </div>
      </form>

      {/* Estilos para la animación 3D */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
