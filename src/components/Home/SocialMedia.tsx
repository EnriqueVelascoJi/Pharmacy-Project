import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function SocialMedia() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={28} />,
      url: "https://www.facebook.com/tuFarmacia",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={28} />,
      url: "https://www.instagram.com/tuFarmacia",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-90",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={28} />,
      url: "https://www.tiktok.com/@tuFarmacia",
      color: "bg-black hover:bg-gray-800",
    },
  ];

  return (
    <section className="bg-orange-50 py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">
        Visita nuestras redes sociales
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-3 p-6 rounded-xl shadow-md text-white transition transform hover:scale-105 ${social.color}`}
          >
            {social.icon}
            <span className="text-lg font-semibold">{social.name}</span>
            <span className="text-sm opacity-80">Síguenos aquí</span>
          </a>
        ))}
      </div>
    </section>
  );
}
