import { useState } from "react";
import Notice from "../components/Home/Notice";
import Navbar from "../components/Home/Navbar";
import WhatsAppButton from "../components/Contact/WhatsAppButton";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Por favor ingresa tu nombre.";
    if (!form.email.trim()) {
      newErrors.email = "Por favor ingresa tu correo.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Correo inválido.";
    }
    if (!form.message.trim()) newErrors.message = "Por favor escribe tu mensaje.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Aquí iría el envío real del formulario (API, email, etc)
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
        <Notice />
        <Navbar />
        <section id="contact" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Formulario */}
            <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white p-8 rounded-lg shadow-lg"
            >
                {submitted && (
                <p className="mb-6 p-3 bg-green-100 text-green-700 rounded">
                    ¡Gracias por contactarnos! Te responderemos pronto.
                </p>
                )}
                <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                    Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
                    }`}
                    placeholder="Tu nombre completo"
                />
                {errors.name && (
                    <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
                </div>
                <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
                    }`}
                    placeholder="tu@email.com"
                />
                {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                    Mensaje
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 ${
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-400"
                    }`}
                    placeholder="Escribe tu mensaje aquí..."
                />
                {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
                </div>
                <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                Enviar mensaje
                </button>
            </form>

            {/* Info y mapa */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-orange-700 mb-4">Información de contacto</h3>
                <p className="mb-3">
                    <strong>Dirección:</strong> Av. Salud 123, Ciudad, País
                </p>
                <p className="mb-3">
                    <strong>Teléfono:</strong> <a href="tel:+521234567890" className="text-orange-600 hover:underline">+52 123 456 7890</a>
                </p>
                <p className="mb-3">
                    <strong>Email:</strong> <a href="mailto:contacto@farmaciasalud.com" className="text-orange-600 hover:underline">contacto@farmaciasalud.com</a>
                </p>
                <p>
                    <strong>Horario de atención:</strong> Lun - Vie 9:00am - 7:00pm
                </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                    title="Mapa ubicación farmacia"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.2392123186187!2d-99.13320848469522!3d19.432607386889224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff33f8c0c3d3%3A0xb4c377ee6a1e9245!2sAv.+Salud+123%2C+Ciudad!5e0!3m2!1ses!2smx!4v1691568600000!5m2!1ses!2smx"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
            </div>
        </div>
        </section>

         {/* Aquí el botón integrado, sin fixed */}
        <div className="flex justify-center mt-6">
            <WhatsAppButton integrated />
        </div>
    </>
  );
}
