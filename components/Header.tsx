function Mark() {
  return (
    <span className="relative block h-10 w-10 rounded-full border-2 border-graphite bg-storm" aria-hidden="true">
      <span className="absolute inset-[6px] rounded-full border-2 border-sky" />
      <span className="absolute inset-[14px] rounded-full bg-flare" />
    </span>
  );
}

export function Header() {
  return (
    <header className="relative z-20 border-b-2 border-graphite bg-paper">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Zona Clara, inicio">
          <Mark />
          <span className="font-display text-lg uppercase tracking-[-0.03em] text-storm">Zona <span className="text-flare">Clara</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-bold lg:flex" aria-label="Navegación principal">
          <a href="#metodo" className="hover:text-storm">Método</a>
          <a href="#rutas" className="hover:text-storm">Entrenamientos</a>
          <a href="#atlas" className="hover:text-storm">Atlas</a>
          <a href="#preguntas" className="hover:text-storm">Preguntas</a>
        </nav>
        <a href="#rutas" className="border-2 border-graphite bg-flare px-4 py-2 text-sm font-extrabold uppercase shadow-[4px_4px_0_#182334] active:translate-x-1 active:translate-y-1 active:shadow-none">
          <span className="sm:hidden">Ver rutas</span><span className="hidden sm:inline">Elegir entrenamiento</span>
        </a>
      </div>
    </header>
  );
}
