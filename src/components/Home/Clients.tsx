import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  id: number;
  name: string;
  comment: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María López",
    comment: "Excelente servicio y atención personalizada. Siempre encuentro lo que necesito.",
    image: "https://images.unsplash.com/photo-1652394871044-dec10bff6158?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Juan Pérez",
    comment: "Las farmacias están muy bien ubicadas y el personal es muy amable.",
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Ana Torres",
    comment: "Gran variedad de productos y precios accesibles. ¡Muy recomendado!",
    image: "https://images.unsplash.com/photo-1551524779-dc6cc00eb2bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Clients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section className="py-12 bg-white">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-8">
        Lo que dicen nuestros clientes
      </h1>

      <div className="max-w-2xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center text-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full object-cover shadow-md mx-auto"
              />
              <FaQuoteLeft className="text-orange-500 text-3xl" />
              <p className="text-gray-700 italic">{t.comment}</p>
              <span className="font-semibold text-orange-600">{t.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
