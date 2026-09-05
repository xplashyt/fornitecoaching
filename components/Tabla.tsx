import { stormDecisions } from "@/lib/datos";

export function Tabla() {
  return (
    <section id="atlas" className="border-b-2 border-graphite bg-storm px-5 py-20 text-paper sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><div><p className="text-sm font-extrabold uppercase tracking-[0.19em] text-sky">Hoja de tormenta</p><h2 className="mt-3 font-display text-5xl uppercase leading-[0.98] tracking-[-0.04em] sm:text-6xl">La zona siguiente se juega antes de que cierre.</h2></div><p className="max-w-2xl text-lg leading-7 text-paper/70 lg:justify-self-end">No es una receta automática. Es una lista de señales para revisar la ruta, explicar la decisión y detectar por qué llegaste tarde.</p></div>
        <div className="mt-12 min-w-0 overflow-x-auto border-2 border-paper/35">
          <table className="w-full min-w-[880px] border-collapse text-left"><thead className="bg-graphite text-sky"><tr>{["Fase","Señal visible","Decisión útil","Evita"].map((heading) => <th key={heading} className="border-r border-paper/20 px-5 py-4 text-xs font-extrabold uppercase tracking-[0.15em] last:border-r-0">{heading}</th>)}</tr></thead><tbody>{stormDecisions.map((row,index) => <tr key={row.phase} className="border-t border-paper/25"><td className="px-5 py-5 align-top"><span className="mr-3 text-xs font-extrabold text-flare">{String(index+1).padStart(2,"0")}</span><strong className="font-display text-base uppercase">{row.phase}</strong></td><td className="px-5 py-5 text-paper/75">{row.signal}</td><td className="px-5 py-5 font-semibold">{row.decision}</td><td className="px-5 py-5 text-paper/65">{row.avoid}</td></tr>)}</tbody></table>
        </div>
        <p className="mt-4 text-xs leading-5 text-paper/55">Punto de partida para revisar partidas. Mapa, botín, movilidad y tormenta pueden cambiar cada temporada.</p>
      </div>
    </section>
  );
}
