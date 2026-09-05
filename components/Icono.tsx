export type IconName = "caida" | "tormenta" | "pelea" | "escuadron" | "tarjeta" | "correo" | "flecha" | "escudo";

export function Icono({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "square" as const, strokeLinejoin: "miter" as const };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      {name === "caida" && <><path d="M12 2v13M7 10l5 5 5-5M4 21h16" {...common} /><path d="m4 5 3-2 3 2-3 2ZM14 5l3-2 3 2-3 2Z" {...common} /></>}
      {name === "tormenta" && <><circle cx="12" cy="12" r="9" {...common} /><circle cx="12" cy="12" r="5" {...common} /><path d="m13 7-4 6h4l-2 5 5-7h-4Z" {...common} /></>}
      {name === "pelea" && <><path d="m4 20 6-6M14 10l6-6M6 3l15 15M3 6l3-3M18 21l3-3" {...common} /><path d="m4 14 6 6M14 4l6 6" {...common} /></>}
      {name === "escuadron" && <><circle cx="7" cy="8" r="3" {...common} /><circle cx="17" cy="8" r="3" {...common} /><path d="M2 21v-2c0-3 2-5 5-5s5 2 5 5v2M12 19c0-3 2-5 5-5s5 2 5 5v2" {...common} /></>}
      {name === "tarjeta" && <><rect x="2" y="5" width="20" height="14" {...common} /><path d="M2 9h20M6 15h5" {...common} /></>}
      {name === "correo" && <><path d="M2 5h20v14H2Z" {...common} /><path d="m3 7 9 7 9-7" {...common} /></>}
      {name === "flecha" && <><path d="M3 12h17M14 6l6 6-6 6" {...common} /></>}
      {name === "escudo" && <><path d="M12 2 20 5v6c0 5-3.2 8.8-8 11-4.8-2.2-8-6-8-11V5Z" {...common} /><path d="m8.5 12 2.2 2.2 4.8-5" {...common} /></>}
    </svg>
  );
}
