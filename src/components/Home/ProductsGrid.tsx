import type { Product } from "../../types/Home/product";

type ProductWithOffer = Product & { offer?: string };

const sampleProducts: ProductWithOffer[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 50,
    image:
      "https://paracetamol.bayer.com.ar/sites/g/files/vrxlpx49506/files/2022-10/PACK%20PARACETAMOL%20BAYER.png",
    offer: "20% OFF",
  },
  {
    id: 2,
    name: "Vitamina C 1000mg",
    price: 120,
    image:
      "https://imagenproductos.s3.amazonaws.com/c-blend-vitamina-c-blifevitac240-featuredimage-b-life-c-blend-mockup-240-transparente.webp",
  },
  {
    id: 3,
    name: "Alcohol en gel 500ml",
    price: 80,
    image:
      "https://tienda.alfa-medical.com.mx/wp-content/uploads/2021/06/RnpG-SEg.jpeg",
    offer: "15% OFF",
  },
  {
    id: 4,
    name: "Ibuprofeno 400mg",
    price: 75,
    image:
      "https://sanorim.mx/cdn/shop/files/Algidol.jpg?height=533&v=1682572735",
  },
  {
    id: 5,
    name: "Crema para dolores musculares",
    price: 95,
    image:
      "https://imagenes.elpais.com/resizer/v2/MJ6XQMTIY5FZDDYEARNJX6PZ64.png?auth=5ab4a995471ae36a17ddcb70c5d95896acfaa5c9d4b715539f769870a79aacd5&width=1960",
    offer: "Oferta especial",
  },
  {
    id: 6,
    name: "Jarabe para la tos",
    price: 65,
    image:
      "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw673917cf/images/product/7501001168933_A.jpg?sw=1000&sh=1000&sm=fit",
  },
  {
    id: 7,
    name: "Electrolitos orales",
    price: 95,
    image:
      "https://difesa.mx/cdn/shop/products/Electrolitos-Reconstituyente-Electrolitico-Oral_700x700.jpg?v=1657817896",
  },
  {
    id: 8,
    name: "Vitaminas de gomitas",
    price: 65,
    image:
      "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/155991-800-450?v=638139768403800000&width=800&height=450&aspect=true",
    offer: "30% OFF",
  },
];

export default function ProductsGrid() {
  return (
    <section id="shop" className="py-16 container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-700">
        Variedad de productos
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative"
          >
            {product.offer && (
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                {product.offer}
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-60 h-45 mx-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-orange-600 font-bold">${product.price}</p>
              <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition cursor-pointer">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
