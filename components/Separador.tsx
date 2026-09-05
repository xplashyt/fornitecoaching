const phases = ["Caída", "Recursos", "Tormenta", "Pelea", "Cierre"];

export function Separador() {
  return (
    <div className="overflow-hidden border-y-2 border-graphite bg-sky py-4" aria-hidden="true">
      <div className="mx-auto flex min-w-[780px] max-w-[1120px] items-center justify-center gap-2 px-8">
        {phases.map((phase, index) => (
          <div key={phase} className={`relative w-[190px] border-2 border-graphite p-3 ${index === 2 ? "-translate-y-2 bg-flare shadow-[4px_4px_0_#182334]" : "bg-paper"}`}>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-storm">Ranura {index + 1}</span>
            <strong className="mt-1 block font-display text-sm uppercase text-graphite">{phase}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
