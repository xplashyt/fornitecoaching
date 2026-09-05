"use client";

import { useCallback, useState } from "react";
import { CheckoutPanel } from "@/components/CheckoutPanel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Icono, type IconName } from "@/components/Icono";
import { PlanCard } from "@/components/PlanCard";
import { Separador } from "@/components/Separador";
import { Tabla } from "@/components/Tabla";
import { TrustBar } from "@/components/TrustBar";
import { CORREO_CONTACTO, HORAS_DE_ENTREGA } from "@/lib/contacto";
import { rankRoute } from "@/lib/datos";
import { plans, type Plan } from "@/lib/plans";

const method = [
  {
    icon: "caida" as IconName,
    phase: "Caída",
    title: "Aterriza con salida",
    copy: "Define un punto principal, una alternativa y el momento de abandonar el botín. La primera ruta empieza antes del salto.",
    data: "Punto A · Punto B · salida",
  },
  {
    icon: "tormenta" as IconName,
    phase: "Tormenta",
    title: "Rota antes de que te obligue",
    copy: "Lee distancia, relieve y cobertura para moverte con margen. La zona segura no compensa una ruta tardía y expuesta.",
    data: "Distancia · tiempo · cobertura",
  },
  {
    icon: "pelea" as IconName,
    phase: "Pelea",
    title: "Entra con ventaja y una salida",
    copy: "Valora daño, posición y recursos antes de perseguir una eliminación. También se entrena cuándo cortar el intercambio.",
    data: "Ángulo · recursos · escape",
  },
] as const;

const loadout = [
  ["01", "Caída", "Punto principal y alternativa"],
  ["02", "Recursos", "Inventario con una función"],
  ["03", "Ruta", "Salida antes del cierre"],
  ["04", "Cobertura", "Ángulo sin regalar posición"],
  ["05", "Cierre", "Utilidad guardada para el final"],
] as const;

const delivery = [
  ["01", "Elige la ruta", "Compara alcance, duración, prácticas y modo. Cada precio es un solo cobro."],
  ["02", "Paga con tarjeta", "Escribes correo, titular y datos de tarjeta. Wompi procesa el pago; no almacenamos número ni CVC."],
  ["03", "Coordinamos contigo", `Si el pago queda aprobado, te contactamos al correo registrado en máximo ${HORAS_DE_ENTREGA} horas hábiles para acordar la entrega.`],
] as const;

const faqs = [
  {
    question: "¿Garantizan que voy a subir de rango?",
    answer: "No. El servicio organiza práctica, revisión y toma de decisiones, pero el rango depende de tu ejecución, tus partidas y los cambios del juego. No prometemos posiciones ni una victoria campal.",
  },
  {
    question: "¿Necesitan entrar a mi cuenta?",
    answer: "No. Nunca pedimos contraseña, códigos de autenticación ni acceso a tu cuenta. Tú juegas en todo momento; no ofrecemos boosting ni jugamos Clasificatoria por ti.",
  },
  {
    question: "¿Sirve para Batalla campal y Cero construcción?",
    answer: "Sí. Caída, inventario, tormenta, ángulos y cierre se trabajan en ambos modos. Cuando una práctica depende de construcción, se adapta a cobertura natural y movilidad para Cero construcción.",
  },
  {
    question: "Pagué y todavía no me contactan, ¿qué hago?",
    answer: `La coordinación es manual y puede tardar hasta ${HORAS_DE_ENTREGA} horas hábiles. Escribe a ${CORREO_CONTACTO} desde el correo usado en el pago e incluye la referencia o el comprobante.`,
  },
  {
    question: "¿Qué pasa si Wompi rechaza el pago?",
    answer: "El checkout conserva el mensaje exacto que devuelve la pasarela y explica la acción segura: corregir datos, probar una sola vez con otra tarjeta o consultar al banco. WS05 es un rechazo genérico de seguridad; no prueba por sí solo falta de fondos ni fraude.",
  },
  {
    question: "¿Puedo usar el entrenamiento en torneos?",
    answer: "El coaching y la revisión de repeticiones no sustituyen las reglas de cada competencia. Antes de competir, revisa el reglamento vigente. No apoyamos acuerdos entre rivales, exploits, macros, scripts, mods ni cheats.",
  },
] as const;

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const closeCheckout = useCallback(() => setSelectedPlan(null), []);

  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />

      <section id="metodo" className="border-b-2 border-graphite bg-cloud px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div className="min-w-0">
              <p className="text-sm font-extrabold uppercase tracking-[0.19em] text-shield">Método Zona Clara</p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[0.96] tracking-[-0.045em] text-storm sm:text-6xl">No entrenamos una partida. Entrenamos decisiones.</h2>
            </div>
            <p className="min-w-0 max-w-2xl text-lg leading-8 text-graphite/70 lg:justify-self-end">Separamos la partida en señales que puedes observar, una decisión concreta y una práctica que puedes repetir. Sin atajos, acceso a cuentas ni resultados inventados.</p>
          </div>

          <div className="mt-14 grid border-2 border-graphite lg:grid-cols-3">
            {method.map((item, index) => (
              <article key={item.phase} className={`map-folds min-w-0 bg-paper p-6 sm:p-8 ${index > 0 ? "border-t-2 border-graphite lg:border-l-2 lg:border-t-0" : ""}`}>
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-16 w-16 place-items-center border-2 border-graphite bg-sky text-storm shadow-[4px_4px_0_#182334]"><Icono name={item.icon} className="h-9 w-9" /></span>
                  <span className="font-display text-2xl text-flare">0{index + 1}</span>
                </div>
                <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.17em] text-shield">{item.phase}</p>
                <h3 className="mt-2 font-display text-3xl uppercase leading-[1.02] text-storm">{item.title}</h3>
                <p className="mt-5 leading-7 text-graphite/70">{item.copy}</p>
                <p className="mt-8 border-t-2 border-graphite/20 pt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-storm">{item.data}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid overflow-hidden border-2 border-graphite bg-graphite text-paper lg:grid-cols-[.58fr_1.42fr]">
            <div className="map-folds border-b-2 border-paper/25 p-7 sm:p-10 lg:border-b-0 lg:border-r-2">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky">Loadout de decisiones</p>
              <h3 className="mt-3 font-display text-4xl uppercase leading-none sm:text-5xl">Cinco ranuras. Cada una tiene trabajo.</h3>
              <p className="mt-5 max-w-md leading-7 text-paper/65">Una partida consistente no depende de encontrar un objeto perfecto. Depende de que cada decisión tenga una función y llegue a tiempo.</p>
            </div>
            <div className="grid sm:grid-cols-5">
              {loadout.map(([number, title, copy], index) => (
                <div key={number} className={`min-w-0 p-5 sm:p-4 lg:p-5 ${index > 0 ? "border-t border-paper/20 sm:border-l sm:border-t-0" : ""} ${index === 2 ? "bg-flare text-graphite" : ""}`}>
                  <span className={`font-display text-xl ${index === 2 ? "text-storm" : "text-sky"}`}>{number}</span>
                  <strong className="mt-8 block font-display text-base uppercase">{title}</strong>
                  <p className={`mt-2 text-xs leading-5 ${index === 2 ? "text-graphite/70" : "text-paper/55"}`}>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separador />

      <section id="rutas" className="border-b-2 border-graphite bg-cloud px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.19em] text-shield">Rutas de entrenamiento</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.96] tracking-[-0.045em] text-storm sm:text-6xl">Elige el tramo que hoy te frena.</h2>
            </div>
            <div className="max-w-2xl lg:justify-self-end">
              <p className="text-lg leading-8 text-graphite/70">Siete alcances distintos, desde una calibración puntual hasta cuatro semanas de acompañamiento. Todo es pago único.</p>
              <p className="mt-3 text-sm font-semibold text-storm">No necesitas comprar en orden. Revisa duración, modo, prácticas y entregables antes de elegir.</p>
            </div>
          </div>
          <div className="mt-14 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-12">
            {plans.map((plan, index) => <PlanCard key={plan.id} plan={plan} index={index} onSelect={setSelectedPlan} />)}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-graphite bg-paper px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-shield">Referencia de Clasificatoria</p>
              <h2 className="mt-2 font-display text-3xl uppercase leading-none text-storm">La ruta no es una promesa.</h2>
              <p className="mt-4 text-sm leading-6 text-graphite/65">Tu posición, eliminaciones, daño, rivales y círculo alcanzado pueden influir. Epic no publica una fórmula completa.</p>
            </div>
            <ol className="grid grid-cols-3 border-2 border-graphite sm:grid-cols-5 lg:grid-cols-9">
              {rankRoute.map((rank, index) => (
                <li key={rank} className={`min-w-0 px-2 py-4 text-center ${index > 0 ? "border-l border-graphite/25" : ""} ${index >= 3 ? "border-t border-graphite/25 sm:border-t-0" : ""} ${index >= 5 ? "sm:border-t lg:border-t-0" : ""}`}>
                  <span className="block text-[9px] font-extrabold tracking-[0.13em] text-flare">{String(index + 1).padStart(2, "0")}</span>
                  <strong className="mt-2 block break-words text-[10px] font-extrabold uppercase leading-4 text-storm">{rank}</strong>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-5 text-xs leading-5 text-graphite/50">Referencia consultada en septiembre de 2026. Epic puede cambiar nombres, divisiones y reglas; confirma siempre la información vigente dentro del juego.</p>
        </div>
      </section>

      <Tabla />

      <section className="border-b-2 border-graphite bg-cloud px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.19em] text-shield">Después de elegir</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.96] tracking-[-0.04em] text-storm sm:text-6xl">Tres pasos. Ninguno oculto.</h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-graphite/70">No hay cuenta, membresía ni envío automático. El pago deja un recibo en pantalla y la coordinación continúa por correo.</p>
            </div>
            <ol className="border-2 border-graphite bg-paper">
              {delivery.map(([number, title, copy], index) => (
                <li key={number} className={`grid gap-5 p-6 sm:grid-cols-[74px_210px_1fr] sm:items-start sm:p-8 ${index > 0 ? "border-t-2 border-graphite" : ""}`}>
                  <span className="font-display text-3xl text-flare">{number}</span>
                  <strong className="font-display text-xl uppercase leading-tight text-storm">{title}</strong>
                  <p className="leading-7 text-graphite/70">{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-graphite bg-sky px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-5 lg:grid-cols-2">
          <article className="border-2 border-graphite bg-paper p-7 shadow-hard sm:p-10">
            <span className="grid h-14 w-14 place-items-center border-2 border-graphite bg-shield text-graphite"><Icono name="escudo" className="h-8 w-8" /></span>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-shield">Pago y datos</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none text-storm">La tarjeta va a Wompi.</h2>
            <p className="mt-5 max-w-xl leading-7 text-graphite/70">El número y el CVC se cifran en tu navegador y se tokenizan directamente con Wompi. Nuestro servidor recibe un token, nunca esos datos sensibles. El monto se calcula de nuevo en el servidor.</p>
          </article>
          <article className="border-2 border-graphite bg-storm p-7 text-paper shadow-hard sm:p-10">
            <span className="grid h-14 w-14 place-items-center border-2 border-paper bg-flare text-graphite"><Icono name="escuadron" className="h-8 w-8" /></span>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.18em] text-sky">Integridad de juego</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-none">Tu cuenta sigue siendo tuya.</h2>
            <p className="mt-5 max-w-xl leading-7 text-paper/70">No pedimos contraseñas ni códigos, no jugamos por ti y no vendemos cuentas. El trabajo es educativo: revisar, practicar y tomar mejores decisiones dentro de las reglas.</p>
          </article>
        </div>
      </section>

      <section id="preguntas" className="border-b-2 border-graphite bg-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.64fr_1.36fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.19em] text-shield">Antes del salto</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-[0.96] tracking-[-0.04em] text-storm sm:text-6xl">Preguntas que conviene resolver.</h2>
            <a href={`mailto:${CORREO_CONTACTO}`} className="mt-8 inline-flex items-center gap-3 border-2 border-graphite bg-flare px-5 py-3 font-extrabold uppercase shadow-[4px_4px_0_#182334]"><Icono name="correo" className="h-5 w-5" />Escribir a soporte</a>
          </div>
          <div className="border-2 border-graphite">
            {faqs.map((faq, index) => (
              <details key={faq.question} className={`group bg-cloud ${index > 0 ? "border-t-2 border-graphite" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-extrabold text-storm sm:p-7"><span>{faq.question}</span><span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-graphite bg-paper text-xl leading-none group-open:bg-flare">+</span></summary>
                <p className="max-w-3xl px-5 pb-6 leading-7 text-graphite/70 sm:px-7 sm:pb-7">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-graphite bg-flare px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-storm">La próxima decisión empieza aquí</p><h2 className="mt-3 max-w-4xl font-display text-4xl uppercase leading-[0.96] text-graphite sm:text-6xl">Elige una ruta que puedas repetir, medir y corregir.</h2></div>
          <a href="#rutas" className="flex items-center justify-center gap-3 border-2 border-graphite bg-graphite px-7 py-4 font-extrabold uppercase text-paper shadow-[6px_6px_0_#2844A5]">Comparar rutas <Icono name="flecha" className="h-5 w-5" /></a>
        </div>
      </section>

      <Footer />
      <CheckoutPanel plan={selectedPlan} onClose={closeCheckout} />
    </main>
  );
}
