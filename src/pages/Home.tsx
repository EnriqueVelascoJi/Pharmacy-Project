import Carrusel from "../components/Home/Carrusel";
import ProductsGrid from "../components/Home/ProductsGrid";
import Clients from "../components/Home/Clients";
import Shops from "../components/Home/Shops";
import SocialMedia from "../components/Home/SocialMedia";
import SearchBar from "../components/Home/SearchBar";
import Notice from "../components/Home/Notice";
import Navbar from "../components/Home/Navbar";

export default function Home() {
  return (
    <>
      <Notice />
      <Navbar />
      <SearchBar />
      <Carrusel />
      <ProductsGrid />
      <Shops />
      <Clients />
      <SocialMedia />
    </>
  );
}
