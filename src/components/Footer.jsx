import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contatti" className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-white">Contatti</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@tua-app.it
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +39 000 000 000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Italia
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Termini e Condizioni</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white">Seguici</h4>
            <p className="mt-4 text-sm">Resta aggiornato sulle novità e i rilasci.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Tua App. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
