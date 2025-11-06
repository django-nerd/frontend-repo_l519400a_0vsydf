import { CheckCircle2 } from "lucide-react";

const features = [
  "Prenotazioni e ordini in autonomia",
  "Pagamenti digitali sicuri",
  "Cataloghi e menu aggiornabili in tempo reale",
  "Notifiche e conferme istantanee",
];

export default function Features() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Perché sceglierci</h2>
            <p className="mt-4 text-slate-300">
              Una piattaforma flessibile che si adatta ai tuoi processi: dall'acquisizione al pagamento, tutto è ottimizzato per la conversione.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-400" />
                  <span className="text-slate-200">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-inner">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-slate-900 p-4">
                <div className="text-3xl font-bold text-white">+35%</div>
                <div className="mt-1 text-xs text-slate-400">Tasso di conversione</div>
              </div>
              <div className="rounded-lg bg-slate-900 p-4">
                <div className="text-3xl font-bold text-white">-40%</div>
                <div className="mt-1 text-xs text-slate-400">Tempi di gestione</div>
              </div>
              <div className="rounded-lg bg-slate-900 p-4">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="mt-1 text-xs text-slate-400">Prenotazioni attive</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 text-sm text-slate-300">
              Dati indicativi per illustrare come l'automazione può migliorare i risultati.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
