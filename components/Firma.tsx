const rings = [
  { size: "82%", left: "7%", top: "9%", color: "border-storm/55", delay: "60ms" },
  { size: "61%", left: "25%", top: "20%", color: "border-sky", delay: "180ms" },
  { size: "40%", left: "42%", top: "35%", color: "border-shield", delay: "300ms" },
  { size: "21%", left: "55%", top: "46%", color: "border-flare", delay: "420ms" },
];

export function Firma() {
  return (
    <figure className="border-2 border-graphite bg-paper p-3 shadow-hard sm:p-5" aria-labelledby="atlas-title">
      <div className="mb-3 flex items-center justify-between border-b-2 border-graphite pb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-storm">
        <figcaption id="atlas-title">Atlas de tormenta // ZC</figcaption><span className="text-flare">Ruta confirmada</span>
      </div>
      <div className="map-folds relative aspect-[5/4] overflow-hidden bg-[#dbe9eb]" role="img" aria-label="Mapa abstracto con cuatro círculos seguros y una ruta de rotación">
        <div className="absolute inset-[7%] bg-shield/35 [clip-path:polygon(8%_16%,35%_3%,60%_10%,91%_5%,97%_31%,84%_50%,94%_76%,66%_91%,40%_82%,18%_96%,4%_70%,12%_48%,0_31%)]" />
        <div className="absolute left-[14%] top-[24%] h-[58%] w-[68%] rotate-[-13deg] border-t-4 border-dashed border-graphite/65" aria-hidden="true" />
        {rings.map((ring) => <span key={ring.size} className={`zone-ring absolute aspect-square rounded-full border-[5px] ${ring.color}`} style={{ width: ring.size, left: ring.left, top: ring.top, animationDelay: ring.delay }} />)}
        <span className="absolute left-[13%] top-[63%] grid h-10 w-10 rotate-45 place-items-center border-2 border-graphite bg-flare shadow-[3px_3px_0_#182334]"><span className="-rotate-45 text-[9px] font-extrabold uppercase">Caída</span></span>
        <span className="absolute right-[24%] top-[40%] grid h-10 w-10 place-items-center rounded-full border-2 border-graphite bg-paper text-xs font-black text-storm shadow-[3px_3px_0_#182334]">02</span>
        <span className="absolute bottom-[17%] right-[12%] border-2 border-graphite bg-graphite px-3 py-2 text-right text-[10px] font-extrabold uppercase tracking-[0.1em] text-paper"><span className="block text-sky">Zona segura</span>rota antes del cierre</span>
        <div className="absolute left-4 top-4 grid grid-cols-5 gap-1" aria-hidden="true">{[0,1,2,3,4].map((slot) => <span key={slot} className={`h-7 w-7 border-2 border-graphite ${slot < 3 ? "bg-storm" : "bg-paper"}`} />)}</div>
      </div>
    </figure>
  );
}
