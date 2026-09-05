const facts = [
  ["01", "Pago único", "Sin membresía, renovación ni cobros automáticos."],
  ["02", "Tarjeta con Wompi", "Los datos sensibles no pasan por nuestro servidor."],
  ["03", "Entrega por correo", "Coordinamos contigo después de aprobarse el pago."],
] as const;

export function TrustBar() {
  return (
    <section aria-label="Datos del servicio" className="border-b-2 border-graphite bg-paper">
      <div className="mx-auto grid max-w-[1440px] divide-y-2 divide-graphite sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">{facts.map(([number,title,copy]) => <div key={number} className="grid grid-cols-[44px_1fr] gap-4 px-5 py-7 sm:px-7 lg:px-10"><span className="font-display text-xl text-flare">{number}</span><div><h2 className="font-display text-sm uppercase text-storm">{title}</h2><p className="mt-1 text-sm leading-5 text-graphite/65">{copy}</p></div></div>)}</div>
    </section>
  );
}
