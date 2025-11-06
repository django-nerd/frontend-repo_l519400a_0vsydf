import SectorCard from "./SectorCard";

export default function Sectors() {
  return (
    <section id="settori" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Cosa puoi fare con la tua app</h2>
          <p className="mt-3 text-slate-300">Tre settori, un'unica piattaforma: semplifica l'esperienza del cliente e aumenta le conversioni.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SectorCard
            title="Food e Ristorazione"
            description="Ordini e prenotazioni in autonomia con anteprima menu."
            bullets={[
              "Delivery con tracciamento",
              "Prenotazione tavolo smart",
              "Menu digitale aggiornabile",
            ]}
            cta="Scopri il flusso Food"
          />
          <SectorCard
            title="Beauty e Benessere"
            description="Prenotazioni rapide scegliendo operatore e orario."
            bullets={[
              "Calendario in tempo reale",
              "Selezione professionista",
              "Promemoria automatici",
            ]}
            cta="Scopri il flusso Beauty"
          />
          <SectorCard
            title="Shop e Retail"
            description="Acquisti dal catalogo e pagamenti digitali in-app."
            bullets={[
              "Catalogo con varianti",
              "Carrello e checkout",
              "Pagamenti sicuri",
            ]}
            cta="Scopri il flusso Shop"
          />
        </div>
      </div>
    </section>
  );
}
