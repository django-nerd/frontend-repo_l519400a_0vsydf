import { ArrowRight } from "lucide-react";

export default function SectorCard({ title, description, bullets, cta }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200/10 bg-slate-900/60 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{background:"radial-gradient(600px 300px at 20% 10%, rgba(99,102,241,0.15), transparent)"}} />
      <div className="relative">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-slate-300">{description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {bullets?.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="#contatti" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
            {cta || "Scopri di più"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
