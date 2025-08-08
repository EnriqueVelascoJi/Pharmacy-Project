import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  integrated?: boolean;
}

export default function WhatsAppButton({ integrated = false }: WhatsAppButtonProps) {
  if (integrated) {
    // Estilo para botón integrado en contenido
    return (
      <a
        href="https://wa.me/5211234567890?text=Hola,%20quiero%20más%20información."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        title="Contactar por WhatsApp"
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="font-semibold">Contáctanos por WhatsApp</span>
      </a>
    );
  }

  // Estilo flotante (default)
  return (
    <a
      href="https://wa.me/5211234567890?text=Hola,%20quiero%20más%20información."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg z-50 transition"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="font-semibold">WhatsApp</span>
    </a>
  );
}
