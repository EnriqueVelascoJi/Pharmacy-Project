import AppRouter from "./routes/AppRouter";
import Footer from "./components/Home/Footer";
import Chat from "./components/Home/Chat";
export default function App() {
    
  return (
    <div className="font-sans">
      <main className="pt-[100px]">
        <AppRouter />
      </main>
        <Chat />
        <Footer />
    </div>
  );
}
