import { FaMapMarkerAlt, FaClinicMedical } from "react-icons/fa";

type Shop = {
  id: number;
  name: string;
  address: string;
  mapUrl: string;
  image: string;
};

const shops: Shop[] = [
  {
    id: 1,
    name: "Farmacia Central",
    address: "Av. Principal 123",
    mapUrl: "https://maps.google.com/?q=Av.+Principal+123",
    image: "https://images.unsplash.com/photo-1648351318393-aef9b9bef19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Farmacia Norte",
    address: "Calle Norte 45",
    mapUrl: "https://maps.google.com/?q=Calle+Norte+45",
    image: "https://images.unsplash.com/photo-1648351318393-aef9b9bef19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Farmacia Sur",
    address: "Av. Sur 78",
    mapUrl: "https://maps.google.com/?q=Av.+Sur+78",
    image: "https://images.unsplash.com/photo-1648351318393-aef9b9bef19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Farmacia Este",
    address: "Calle Este 33",
    mapUrl: "https://maps.google.com/?q=Calle+Este+33",
    image: "https://images.unsplash.com/photo-1648351318393-aef9b9bef19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Farmacia Oeste",
    address: "Av. Oeste 99",
    mapUrl: "https://maps.google.com/?q=Av.+Oeste+99",
    image: "https://images.unsplash.com/photo-1648351318393-aef9b9bef19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Farmacia Plaza",
    address: "Plaza Comercial 2",
    mapUrl: "https://maps.google.com/?q=Plaza+Comercial+2",
    image: "https://images.unsplash.com/photo-1648351318393-aef9b9bef19d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

export default function Shops() {
  return (
    <section className="py-12 bg-orange-50">
      <h1 className="text-4xl font-bold text-center text-orange-700 mb-8">
        Nuestras Farmacias
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-orange-600">
                <FaClinicMedical size={24} />
                <h3 className="font-semibold text-lg">{shop.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{shop.address}</p>

              <a
                href={shop.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white transition"
              >
                <FaMapMarkerAlt />
                Ver en Mapa
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
