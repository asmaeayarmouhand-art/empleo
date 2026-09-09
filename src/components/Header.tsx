import { Briefcase, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onScrollToForm: () => void;
}

export default function Header({ onScrollToForm }: HeaderProps) {
  return (
    <header 
      id="header-principal"
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-15 sm:h-18 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          id="brand-logo"
          className="flex items-center gap-2.5 sm:gap-3 group"
          aria-label="Empleo España - Inicio"
        >
          <div className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-xs shadow-blue-900/20 group-hover:bg-blue-800 transition-colors shrink-0">
            <Briefcase className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
              Empleo<span className="text-blue-700">España</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase mt-0.5 sm:mt-1">
              Portal Nacional de Empleo
            </span>
          </div>
        </a>

        {/* Minimal Nav / CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a 
              href="#beneficios" 
              className="hover:text-blue-900 transition-colors"
            >
              Ventajas
            </a>
          </nav>

          <button
            type="button"
            id="btn-header-buscar-empleo"
            onClick={onScrollToForm}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-xs shadow-blue-900/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap min-h-[38px] sm:min-h-[42px]"
          >
            <span>Inscribirme</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
