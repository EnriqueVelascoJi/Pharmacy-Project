import Slider from "react-slick";

const slides = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1672082518029-8619a2c1e9dd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "¡Gran Promoción!",
    subtitle: "Medicamentos seleccionados con hasta 50% de descuento",
    button: "Ver ofertas",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cuidamos de ti",
    subtitle: "Consulta médica gratuita en tu primera compra",
    button: "Agendar cita",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1695654390723-479197a8c4a3?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Entrega rápida",
    subtitle: "Recibe tus medicinas en menos de 24 horas",
    button: "Haz tu pedido",
  },
];

export default function Carrusel() {
  const settings = {
    dots: true, // puntos de navegación
    infinite: true,
    speed: 1000, // velocidad de transición en ms
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // activa autoplay
    autoplaySpeed: 3000, // tiempo en ms antes de cambiar de slide
    pauseOnHover: true, // se pausa si el usuario pasa el mouse encima
    arrows: false, // opcional, para quitar flechas en mobile
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-opacity-10 flex flex-col justify-center items-center text-center text-white p-4">
              <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">{slide.title}</h1>
              <p className="text-2xl mb-6 drop-shadow-md">{slide.subtitle}</p>
              <button className="bg-orange-600 px-6 py-3 rounded-lg hover:bg-orange-700 transition cursor-pointer">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
