import { Firma } from "@/components/Firma";

export function Hero() {
  return (
    <section id="inicio" className="border-b-2 border-graphite bg-cloud">
      <div className="mx-auto grid min-h-[680px] max-w-[1440px] grid-cols-1 gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-12 lg:py-20">
        <div className="min-w-0 max-w-[650px]">
          <p className="mb-7 w-fit border-l-4 border-shield bg-paper px-3 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-storm">Coaching independiente · Fortnite</p>
          <h1 className="font-display text-[clamp(3.1rem,6.7vw,7rem)] uppercase leading-[0.9] tracking-[-0.055em] text-storm">Cae con un plan.<br /><span className="text-flare">Rota con</span><br />tiempo.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-graphite/75">Entrena aterrizaje, recursos, lectura de tormenta, selección de peleas y cierre. Tú juegas; nosotros ordenamos las decisiones que se repiten.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#rutas" className="border-2 border-graphite bg-flare px-6 py-4 text-center font-extrabold uppercase shadow-[6px_6px_0_#182334] active:translate-x-1 active:translate-y-1 active:shadow-none">Ver rutas de entrenamiento</a><a href="#metodo" className="border-2 border-graphite bg-paper px-6 py-4 text-center font-extrabold uppercase">Cómo funciona</a></div>
          <p className="mt-7 flex items-start gap-3 text-sm font-bold leading-6 text-storm"><span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-shield" aria-hidden="true" />Nunca pedimos tu contraseña ni jugamos clasificatoria en tu cuenta. Sin boosting, cheats ni promesas de rango.</p>
        </div>
        <div className="min-w-0 lg:pl-5"><Firma /></div>
      </div>
    </section>
  );
}
