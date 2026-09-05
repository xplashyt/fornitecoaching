export interface StormDecision {
  phase: string;
  signal: string;
  decision: string;
  avoid: string;
}

export const stormDecisions: StormDecision[] = [
  {
    phase: "Antes del salto",
    signal: "Ruta, rivales cercanos y dos salidas posibles",
    decision: "Elegir punto principal y alternativa antes de caer",
    avoid: "Cambiar de destino tarde sin avisar al equipo"
  },
  {
    phase: "Inventario inicial",
    signal: "Curación, movilidad, alcance y cobertura disponibles",
    decision: "Ordenar ranuras y definir qué recurso todavía falta",
    avoid: "Seguir buscando botín sin una hora clara de salida"
  },
  {
    phase: "Tormenta intermedia",
    signal: "Distancia, relieve, rutas ocupadas y movilidad",
    decision: "Rotar por cobertura antes de que el mapa obligue",
    avoid: "Cruzar tarde por el camino más corto y visible"
  },
  {
    phase: "Círculos finales",
    signal: "Zona siguiente, recursos, altura y equipos restantes",
    decision: "Guardar utilidad y moverse con una prioridad acordada",
    avoid: "Perseguir una eliminación lejos de la zona segura"
  }
];

export const rankRoute = [
  "Bronce",
  "Plata",
  "Oro",
  "Platino",
  "Diamante",
  "Élite",
  "As",
  "Unreal",
  "Leyendas de Unreal"
];
