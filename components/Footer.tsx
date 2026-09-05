import { CORREO_CONTACTO, HORAS_DE_ENTREGA } from "@/lib/contacto";

export function Footer() {
  return (
    <footer className="bg-graphite px-5 py-14 text-paper sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-full border-2 border-sky font-display text-xs text-sky">ZC</span><div><strong className="block font-display text-2xl uppercase leading-none">Zona Clara</strong><span className="text-xs font-extrabold uppercase tracking-[0.15em] text-paper/50">Coaching independiente</span></div></div><a className="mt-7 inline-block border-b border-sky pb-1 font-bold text-sky" href={`mailto:${CORREO_CONTACTO}`}>{CORREO_CONTACTO}</a><p className="mt-2 text-sm text-paper/60">Respuesta y coordinación de entrega en máximo {HORAS_DE_ENTREGA} horas hábiles.</p></div>
        <div className="grid gap-8 border-t border-paper/20 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"><div><h2 className="text-xs font-extrabold uppercase tracking-[0.17em] text-sky">Transparencia</h2><p className="mt-4 text-sm leading-6 text-paper/65">Vendemos contenido educativo en video y sesiones de acompañamiento. No vendemos insumos, equipos, cuentas, monedas V ni licencias; tampoco garantizamos resultados o un rango. Las compras de menores requieren autorización de un adulto.</p></div><div><h2 className="text-xs font-extrabold uppercase tracking-[0.17em] text-sky">Juego limpio</h2><p className="mt-4 text-sm leading-6 text-paper/65">Servicio independiente, no oficial ni respaldado por Epic Games. Fortnite y sus signos pertenecen a sus titulares. No pedimos contraseñas, accedemos a cuentas ni ofrecemos boosting, macros, scripts, mods o cheats.</p></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col gap-3 border-t border-paper/20 pt-6 text-xs font-extrabold uppercase tracking-[0.1em] text-paper/45 sm:flex-row sm:justify-between"><span>© 2026 Zona Clara</span><span>Pagos procesados por Wompi · Pago único</span></div>
    </footer>
  );
}
