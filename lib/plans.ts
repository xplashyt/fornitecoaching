export interface Plan {
  id: string;
  name: string;
  priceCOP: number;
  modules: number;
  summary: string;
  includes: string[];
  popular?: boolean;
  duration: string;
  exercises: number;
  mode: string;
  players: string;
  signal: string;
}

export const plans: Plan[] = [
  {
    id: "zcl-ajuste-controles",
    name: "Ajuste de controles",
    priceCOP: 4000,
    modules: 1,
    summary: "Una revisión breve para que sensibilidad, cámara y atajos no estorben tu ejecución.",
    includes: [
      "Lista guiada de controles y sensibilidad",
      "Prueba de apuntado, movimiento y edición",
      "Tres ajustes para practicar durante una semana",
      "Entrega digital coordinada por correo"
    ],
    duration: "35 min",
    exercises: 3,
    mode: "Batalla campal + Cero construcción",
    players: "1 jugador",
    signal: "Calibración"
  },
  {
    id: "zcl-ruta-caida",
    name: "Ruta de caída",
    priceCOP: 10000,
    modules: 2,
    summary: "Un sistema para aterrizar, reunir recursos y salir con una ruta, no con improvisación.",
    includes: [
      "Lectura de la ruta inicial y punto de caída",
      "Prioridad de recursos según el modo",
      "Plan de salida si el aterrizaje se disputa",
      "Hoja de práctica para siete partidas"
    ],
    duration: "1 h 15",
    exercises: 7,
    mode: "Inicio de partida",
    players: "1 jugador",
    signal: "Aterrizaje"
  },
  {
    id: "zcl-pelea-cobertura",
    name: "Pelea con cobertura",
    priceCOP: 25000,
    modules: 3,
    summary: "Aprende a crear un ángulo, intercambiar daño y salir antes de regalar la partida.",
    includes: [
      "Distancia, ángulos y exposición",
      "Construcción defensiva o cobertura natural",
      "Inventario para corto, medio alcance y utilidad",
      "Criterios para continuar o cortar una pelea"
    ],
    duration: "2 h 10",
    exercises: 10,
    mode: "Batalla campal + Cero construcción",
    players: "1 jugador",
    signal: "Combate"
  },
  {
    id: "zcl-ruta-clasificatoria",
    name: "Ruta de clasificatoria",
    priceCOP: 69900,
    modules: 6,
    summary: "El recorrido completo para conectar controles, caída, inventario, tormenta y revisión propia.",
    includes: [
      "Diagnóstico de hábitos y objetivo de práctica",
      "Controles, apuntado y movimiento esencial",
      "Aterrizaje, recursos y ruta de salida",
      "Lectura de tormenta y rotaciones",
      "Selección de peleas y cierre",
      "Plantilla para revisar tus partidas"
    ],
    popular: true,
    duration: "5 h 30",
    exercises: 21,
    mode: "Ruta completa",
    players: "1 jugador",
    signal: "Sistema"
  },
  {
    id: "zcl-analisis-partida",
    name: "Análisis de partida",
    priceCOP: 100000,
    modules: 4,
    summary: "Revisión enfocada en tus partidas para encontrar la decisión que más veces te deja fuera.",
    includes: [
      "Revisión de hasta dos partidas grabadas",
      "Mapa de tres errores prioritarios",
      "Sesión individual de retroalimentación",
      "Rutina personalizada por modo",
      "Resumen de decisiones por correo"
    ],
    duration: "90 min en vivo",
    exercises: 8,
    mode: "1 a 1",
    players: "1 jugador",
    signal: "Revisión"
  },
  {
    id: "zcl-duo-escuadra",
    name: "Dúo y escuadra",
    priceCOP: 150000,
    modules: 5,
    summary: "Una sesión para ordenar posiciones, llamadas, enfoque de blancos y rotaciones compartidas.",
    includes: [
      "Responsabilidades dentro del equipo",
      "Pings, llamadas y prioridad de información",
      "Apertura, apoyo y recuperación de compañero",
      "Revisión de una partida del grupo",
      "Protocolo corto de práctica"
    ],
    duration: "2 h en vivo",
    exercises: 12,
    mode: "Equipo",
    players: "Hasta 4",
    signal: "Coordinación"
  },
  {
    id: "zcl-temporada",
    name: "Temporada acompañada",
    priceCOP: 494000,
    modules: 8,
    summary: "Cuatro semanas de observación y ajuste para convertir partidas sueltas en un proceso.",
    includes: [
      "Diagnóstico inicial completo",
      "Seis sesiones de trabajo en vivo",
      "Revisión semanal de partidas",
      "Objetivos medibles por bloque",
      "Ajuste de ruta según la temporada",
      "Cierre con plan para continuar sin acompañamiento"
    ],
    duration: "4 semanas",
    exercises: 28,
    mode: "Seguimiento",
    players: "1 jugador",
    signal: "Proceso"
  }
];

export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

export function getPlan(planId: string) {
  return plans.find((plan) => plan.id === planId);
}
