import Hero from "./components/Hero";
import Sectors from "./components/Sectors";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">Tua App</a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#settori" className="hover:text-white">Settori</a>
            <a href="#contatti" className="hover:text-white">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Sectors />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
