import { useState } from "react";

export default function Chat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Hola 👋 ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Añadir mensaje del usuario
    setMessages((msgs) => [...msgs, { from: "user", text: input.trim() }]);
    setInput("");
    setSending(true);

    // Respuesta automática después de un segundo
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: "En un momento nos contactamos contigo." }]);
      setSending(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!chatOpen ? (
        <button
          onClick={() => setChatOpen(true)}
          className="bg-orange-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-orange-700 transition max-w-xs cursor-pointer"
        >
          💬 Bienvenido a tu mejor farmacia, ¿cómo te puedo ayudar?
        </button>
      ) : (
        <div className="w-90 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <header className="bg-orange-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Chat de ayuda</span>
            <button
              onClick={() => setChatOpen(false)}
              aria-label="Cerrar chat"
              className="text-xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </header>
          <div className="flex-1 p-4 overflow-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  msg.from === "user" ? "bg-orange-600 text-white ml-auto" : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {sending && (
              <div className="max-w-[80%] px-3 py-2 rounded-lg bg-gray-200 text-gray-800 animate-pulse">
                escribiendo...
              </div>
            )}
          </div>
          <footer className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-orange-500"
              disabled={sending}
            />
            <button
              onClick={sendMessage}
              disabled={sending}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition disabled:opacity-50 cursor-pointer"
            >
              Enviar
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
