import { CheckCircle, ArrowRight } from 'lucide-react';
import { CONFIRMATION_URL } from '../config';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName: string;
}

export default function SuccessModal({ isOpen, onClose, candidateName }: SuccessModalProps) {
  if (!isOpen) return null;

  const handleContinue = () => {
    // Redirección directa y segura a CONFIRMATION_URL
    try {
      window.location.href = CONFIRMATION_URL;
    } catch {
      window.open(CONFIRMATION_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      id="modal-exito-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div 
        id="modal-exito-tarjeta"
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Icono de verificación verde / azul */}
        <div className="w-18 h-18 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 border-4 border-emerald-100">
          <CheckCircle className="w-10 h-10 stroke-[2.2]" />
        </div>

        {/* Mensaje de éxito requerido textualmente */}
        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
          Registro completado
        </span>
        
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
          ¡Datos enviados correctamente!
        </h3>

        {candidateName && (
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Gracias, {candidateName}
          </p>
        )}

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          Gracias por confiar en nosotros. Te contactaremos cuando haya una oportunidad que pueda encajar con tu perfil.
        </p>

        {/* Botón requerido: "Continuar" que usa CONFIRMATION_URL */}
        <a
          id="btn-modal-continuar"
          href={CONFIRMATION_URL}
          onClick={(e) => {
            // Permite navegación nativa o ejecución directa
            e.preventDefault();
            handleContinue();
          }}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold text-base shadow-lg shadow-blue-900/25 transition-all cursor-pointer"
        >
          <span>Continuar</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        <div className="mt-4 text-xs text-slate-600">
          Haz clic en Continuar para completar el acceso a la red de ofertas.
        </div>
      </div>
    </div>
  );
}
