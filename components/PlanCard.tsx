import { Icono } from "@/components/Icono";
import { formatCOP, type Plan } from "@/lib/plans";

const layouts = ["md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-12 xl:col-span-8", "md:col-span-5 xl:col-span-4", "md:col-span-6", "md:col-span-6"] as const;

export function PlanCard({ plan, index, onSelect }: { plan: Plan; index: number; onSelect: (plan: Plan) => void }) {
  return (
    <article className={`relative flex min-w-0 flex-col border-2 border-graphite ${layouts[index % layouts.length]} ${plan.popular ? "bg-storm text-paper xl:grid xl:grid-cols-[.86fr_1.14fr]" : "bg-paper"}`}>
      <div className={`map-folds flex min-w-0 flex-col p-6 sm:p-8 ${plan.popular ? "border-b-2 border-paper/25 xl:border-b-0 xl:border-r-2" : "border-b-2 border-graphite"}`}>
        <div className="mb-7 flex items-start justify-between gap-4"><span className={`text-xs font-extrabold uppercase tracking-[0.17em] ${plan.popular ? "text-sky" : "text-storm"}`}>{plan.signal}</span><span className={`grid h-11 w-11 place-items-center rounded-full border-[3px] font-display text-xs ${plan.popular ? "border-flare bg-flare text-graphite" : "border-storm text-storm"}`}>{String(index + 1).padStart(2, "0")}</span></div>
        {plan.popular && <p className="mb-3 w-fit bg-sky px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-graphite">Ruta central</p>}
        <h3 className="font-display text-3xl uppercase leading-[1.02] tracking-[-0.035em] sm:text-4xl">{plan.name}</h3>
        <p className={`mt-5 max-w-lg leading-6 ${plan.popular ? "text-paper/75" : "text-graphite/70"}`}>{plan.summary}</p>
        <div className="mt-auto pt-9"><p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${plan.popular ? "text-paper/55" : "text-storm/60"}`}>Pago único</p><p className={`font-display text-4xl tracking-[-0.05em] sm:text-5xl ${plan.popular ? "text-flare" : "text-storm"}`}>{formatCOP(plan.priceCOP)}</p></div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
        <dl className={`grid grid-cols-3 gap-1 ${plan.popular ? "text-paper" : "text-graphite"}`}>{[[String(plan.modules).padStart(2,"0"),"Bloques"],[String(plan.exercises).padStart(2,"0"),"Prácticas"],[plan.duration,"Duración"]].map(([value,label]) => <div key={label} className={`min-w-0 border-2 p-3 ${plan.popular ? "border-paper/30" : "border-graphite/25"}`}><dt className={`text-[9px] font-extrabold uppercase tracking-[0.12em] ${plan.popular ? "text-sky" : "text-storm/60"}`}>{label}</dt><dd className="mt-1 truncate font-display text-base uppercase">{value}</dd></div>)}</dl>
        <ul className="my-6 space-y-3">{plan.includes.map((item) => <li key={item} className="flex gap-3 text-sm leading-5"><span className={`mt-1.5 h-3 w-3 shrink-0 border-2 ${plan.popular ? "border-sky bg-sky" : "border-shield bg-shield"}`} aria-hidden="true" /><span>{item}</span></li>)}</ul>
        <div className="mt-auto flex flex-col gap-4 border-t border-current/20 pt-5 sm:flex-row sm:items-end sm:justify-between"><div><p className={`text-[10px] font-extrabold uppercase tracking-[0.13em] ${plan.popular ? "text-paper/55" : "text-storm/60"}`}>Modo · jugadores</p><p className="mt-1 text-sm font-extrabold uppercase">{plan.mode} · {plan.players}</p></div><button type="button" onClick={() => onSelect(plan)} aria-label={`Elegir ${plan.name}`} className={`flex items-center justify-center gap-3 border-2 px-5 py-3 font-extrabold uppercase transition-transform hover:-translate-y-0.5 ${plan.popular ? "border-flare bg-flare text-graphite" : "border-graphite bg-graphite text-paper"}`}>Abrir mapa <Icono name="flecha" className="h-5 w-5" /></button></div>
      </div>
    </article>
  );
}
