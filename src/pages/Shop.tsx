import { useState,useMemo } from "react";
import ProductCard from "../components/Shop/ProductCard";
import ProductModal from "../components/Shop/ProductModal";
import CartSidebar from "../components/Shop/CartSidebar";
import CheckoutForm from "../components/Shop/CheckoutForm";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../components/Home/Navbar";
import Notice from "../components/Home/Notice";
import Pagination from "../components/Shop/Pagination";
import ShopFilters from "../components/Shop/ShopFilters";
import SearchBar from "../components/Shop/SearchBar";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  category: string; // Ej: "Medicamentos", "Vitaminas", "Cosméticos"
  disease: string;  // Ej: "Diabetes", "Hipertensión", "Gripe"
}


const products: Product[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 50,
    image:
      "https://paracetamol.bayer.com.ar/sites/g/files/vrxlpx49506/files/2022-10/PACK%20PARACETAMOL%20BAYER.png",
    description: "Alivio rápido para dolores leves y fiebre.",
    features: ["Tabletas de 500mg", "No exceder 6 dosis al día", "Apto para adultos"],
    category: "Medicamentos",
    disease: "Dolor y fiebre",
  },
  {
    id: 2,
    name: "Vitamina C 1000mg",
    price: 120,
    image:
      "https://imagenproductos.s3.amazonaws.com/c-blend-vitamina-c-blifevitac240-featuredimage-b-life-c-blend-mockup-240-transparente.webp",
    description: "Refuerza tu sistema inmunológico.",
    features: ["Tabletas efervescentes", "Dosis diaria recomendada", "Sin gluten"],
    category: "Vitaminas",
    disease: "Refuerzo inmune",
  },
  {
    id: 3,
    name: "Alcohol en gel 500ml",
    price: 80,
    image:
      "https://tienda.alfa-medical.com.mx/wp-content/uploads/2021/06/RnpG-SEg.jpeg",
    description: "Antiséptico para manos con glicerina hidratante.",
    features: ["Base alcohol 70%", "No reseca la piel", "Aprobado por Salud"],
    category: "Cuidado personal",
    disease: "Prevención de infecciones",
  },
  {
    id: 4,
    name: "Ibuprofeno 400mg",
    price: 75,
    image:
      "https://sanorim.mx/cdn/shop/files/Algidol.jpg?height=533&v=1682572735",
    description: "Antiinflamatorio y analgésico efectivo.",
    features: ["Tabletas de 400mg", "Alivio de inflamación", "No tomar con alcohol"],
    category: "Medicamentos",
    disease: "Dolor e inflamación",
  },
  {
    id: 5,
    name: "Crema para dolores musculares",
    price: 95,
    image:
      "https://imagenes.elpais.com/resizer/v2/MJ6XQMTIY5FZDDYEARNJX6PZ64.png?auth=5ab4a995471ae36a17ddcb70c5d95896acfaa5c9d4b715539f769870a79aacd5&width=1960",
    description: "Alivio tópico para músculos y articulaciones.",
    features: ["Fácil absorción", "Efecto rápido", "Sin olor fuerte"],
    category: "Medicamentos",
    disease: "Dolor muscular",
  },
  {
    id: 6,
    name: "Jarabe para la tos",
    price: 65,
    image:
      "https://www.cityclub.com.mx/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw673917cf/images/product/7501001168933_A.jpg?sw=1000&sh=1000&sm=fit",
    description: "Jarabe calmante para tos seca y productiva.",
    features: ["Sabor agradable", "Para adultos y niños", "Sin azúcar"],
    category: "Medicamentos",
    disease: "Tos y resfriado",
  },
  {
    id: 7,
    name: "Electrolitos orales",
    price: 95,
    image:
      "https://difesa.mx/cdn/shop/products/Electrolitos-Reconstituyente-Electrolitico-Oral_700x700.jpg?v=1657817896",
    description: "Rehidratación oral rápida y efectiva.",
    features: ["Polvo para reconstituir", "Sabor cítrico", "Aprobado por Salud"],
    category: "Medicamentos",
    disease: "Deshidratación",
  },
  {
    id: 8,
    name: "Vitaminas de gomitas",
    price: 65,
    image:
      "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/155991-800-450?v=638139768403800000&width=800&height=450&aspect=true",
    description: "Vitaminas multinutricionales en gomitas deliciosas.",
    features: ["Para niños y adultos", "Sin gluten", "Sabor frutal"],
    category: "Vitaminas",
    disease: "Bienestar general",
  },
  {
    id: 9,
    name: "Crema hidratante facial",
    price: 150,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Hidrata y protege tu piel todo el día.",
    features: ["Sin parabenos", "No grasa", "Apta para piel sensible"],
    category: "Cuidado personal",
    disease: "Piel seca",
  },
  {
    id: 10,
    name: "Protector solar SPF50",
    price: 200,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Protección solar alta para todo tipo de piel.",
    features: ["Resistente al agua", "No deja sensación grasa", "Apto para rostro y cuerpo"],
    category: "Cuidado personal",
    disease: "Protección solar",
  },
  {
    id: 11,
    name: "Spray nasal descongestionante",
    price: 120,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Alivio rápido para congestión nasal.",
    features: ["Uso adulto", "Sin efectos secundarios", "Sin perfume"],
    category: "Medicamentos",
    disease: "Congestión nasal",
  },
  {
    id: 12,
    name: "Termómetro digital",
    price: 350,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Medición rápida y precisa de temperatura corporal.",
    features: ["Pantalla LCD", "Apagado automático", "Precisión alta"],
    category: "Equipo médico",
    disease: "Monitoreo de salud",
  },
  {
    id: 13,
    name: "Curitas adhesivas",
    price: 40,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Curitas hipoalergénicas para heridas menores.",
    features: ["Pack de 50 unidades", "Resistente al agua", "Suave con la piel"],
    category: "Cuidado personal",
    disease: "Cuidado de heridas",
  },
  {
    id: 14,
    name: "Multivitamínico adulto",
    price: 180,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Suplemento diario para energía y salud general.",
    features: ["Tabletas fáciles de tragar", "Vitaminas y minerales", "Apto para adultos"],
    category: "Vitaminas",
    disease: "Bienestar general",
  },
  {
    id: 15,
    name: "Gel antiinflamatorio",
    price: 110,
    image: "https://dummyimage.com/400x400/cccccc/000000&text=Sin+imagen",
    description: "Alivio tópico para dolores musculares y articulares.",
    features: ["Efecto rápido", "Fácil aplicación", "Sin olor fuerte"],
    category: "Medicamentos",
    disease: "Dolor muscular",
  },
];


interface CartItem extends Product {
  quantity: number;
}

const PRODUCTS_PER_PAGE = 6;

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productModalOpen, setProductModalOpen] = useState(false);


  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Estados nuevos
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [categoryFilter, setCategoryFilter] = useState("Todos");
  const [diseaseFilter, setDiseaseFilter] = useState("Todas");

  const [showCartFeedback, setShowCartFeedback] = useState(false);

  // Filtrado de productos
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        categoryFilter === "Todos" || product.category === categoryFilter;

      const matchesDisease =
        diseaseFilter === "Todas" || product.disease === diseaseFilter;

      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "0-50" && product.price <= 50) ||
        (priceFilter === "51-100" && product.price >= 51 && product.price <= 100) ||
        (priceFilter === "101-200" && product.price >= 101 && product.price <= 200) ||
        (priceFilter === "201+" && product.price >= 201);

      return matchesSearch && matchesCategory && matchesDisease && matchesPrice;
    });
  }, [search, priceFilter, categoryFilter, diseaseFilter]);


  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Funciones carrito (sin cambios)
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    // Mostrar animación y mensaje
    setShowCartFeedback(true);
    setTimeout(() => setShowCartFeedback(false), 1000); // desaparece en 3s
  };

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Abrir modal detalle producto
  const viewDetails = (product: Product) => {
    setSelectedProduct(product);
    setProductModalOpen(true);
  };

  // Abrir carrito
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  // Checkout
  const openCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const closeCheckout = () => setCheckoutOpen(false);

  const confirmOrder = (data: any) => {
    console.log("Compra confirmada:", data);
    setOrderConfirmed(true);
    setCheckoutOpen(false);
    setCart([]);
  };



  return (
    <>
      <Navbar />
      <Notice />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="flex justify-between items-center p-6 sticky top-0 z-30">
          <h1 className="text-3xl font-bold text-orange-600 cursor-pointer">Mi Tienda</h1>
          <button
            onClick={openCart}
            className={`cursor-pointer relative flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors duration-300 text-orange-600 hover:text-orange-700 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              showCartFeedback ? "animate-pulse" : ""
            }`}
            aria-label="Abrir carrito"
          >
            <FaShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center font-bold shadow">
                {cart.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            )}

            {showCartFeedback && (
              <span className="absolute -bottom-8 right-0 bg-orange-600 text-white px-3 py-1 rounded shadow-lg text-sm font-semibold animate-fadeInOut pointer-events-none select-none">
                Ver mi carrito
              </span>
            )}
          </button>
        </header>
        <SearchBar
          value={search}
          onChange={setSearch}
          onSubmit={() => console.log("Buscando:", search)}
        />

        <main className="container mx-auto px-6 py-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Columna de filtros */}
            <div className="md:col-span-1">
              <ShopFilters
                priceFilter={priceFilter}
                onPriceFilterChange={setPriceFilter}
                categoryFilter={categoryFilter}
                onCategoryFilterChange={setCategoryFilter}
                diseaseFilter={diseaseFilter}
                onDiseaseFilterChange={setDiseaseFilter}
              />
            </div>

            {/* Columna de productos */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={viewDetails}
                      onAddToCart={addToCart}
                    />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">
                    No se encontraron productos.
                  </p>
                )}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

          </div>
        </main>


        <ProductModal
          product={selectedProduct}
          isOpen={productModalOpen}
          onClose={() => setProductModalOpen(false)}
          onAddToCart={addToCart}
        />

        <CartSidebar
          isOpen={cartOpen}
          onClose={closeCart}
          cart={cart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          onCheckout={openCheckout}
        />

        {checkoutOpen && (
          <div className="fixed inset-0 bg-gray-800/50  flex items-center justify-center z-50 p-4">
            <CheckoutForm onCancel={closeCheckout} onConfirm={confirmOrder} />
          </div>
        )}

        {orderConfirmed && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 animate-fadeIn">
            ¡Gracias por tu compra!
            <button
              className="ml-4 font-bold"
              onClick={() => setOrderConfirmed(false)}
              aria-label="Cerrar notificación"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </>
  );
}