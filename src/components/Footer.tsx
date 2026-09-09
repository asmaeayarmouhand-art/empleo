import { Briefcase, Shield } from 'lucide-react';
import { ModalType } from '../types';

interface FooterProps {
  onOpenLegalModal: (type: ModalType) => void;
}

export default function Footer({ onOpenLegalModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-principal" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo e Identidad */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Empleo España
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Conectamos personas con oportunidades laborales.
            </p>
          </div>

          {/* Enlaces Legales Requeridos */}
          <nav 
            id="nav-footer-legales"
            aria-label="Enlaces legales y de privacidad"
            className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium"
          >
            <button
              id="btn-footer-politica-privacidad"
              type="button"
              onClick={() => onOpenLegalModal('privacidad')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de privacidad
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              id="btn-footer-aviso-legal"
              type="button"
              onClick={() => onOpenLegalModal('aviso-legal')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Aviso legal
            </button>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <button
              id="btn-footer-politica-cookies"
              type="button"
              onClick={() => onOpenLegalModal('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de cookies
            </button>
          </nav>
        </div>

        {/* Copyright y Nota Territorial */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Empleo España. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>Portal de empleo para el territorio nacional español</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
