import { Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{background:"radial-gradient(1000px 600px at 10% 10%, rgba(99,102,241,0.3), transparent)",}} />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Soluzione all-in-one per Food, Beauty e Shop
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Mostra il potenziale della tua app con una vetrina moderna
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Delivery, prenotazioni e acquisti digitali: tutto in un'unica esperienza fluida e intuitiva. I tuoi clienti scoprono, scelgono e confermano in autonomia.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#settori" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <Rocket className="h-4 w-4" />
              Esplora le soluzioni
            </a>
            <a href="#contatti" className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-slate-500">
              Guarda come funziona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
