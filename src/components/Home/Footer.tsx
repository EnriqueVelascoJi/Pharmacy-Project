export default function Footer() {
  return (
    <footer id="contact" className="bg-orange-700 text-white py-6 mt-16">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Farmacia Salud+. Todos los derechos reservados.</p>
        <p>Contacto: contacto@farmaciasalud.com</p>
      </div>
    </footer>
  );
}
