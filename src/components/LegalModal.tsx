import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      id="legal-modal-overlay"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
        id="legal-modal-content"
      >
        <button
          id="btn-close-legal-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacidad' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-blue-900">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Política de Privacidad y Protección de Datos</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Responsable del Tratamiento:</strong> Empleo España.
              </p>
              <p>
                <strong>Finalidad del Tratamiento:</strong> Gestionar el registro de personas interesadas en oportunidades laborales en territorio español, facilitar el contacto para puestos afines y remitir comunicaciones relacionadas con procesos de selección laboral.
              </p>
              <p>
                <strong>Legitimación:</strong> Consentimiento expreso del interesado al marcar la casilla de aceptación y enviar el formulario de registro.
              </p>
              <p>
                <strong>Conservación de los Datos:</strong> Los datos se conservarán durante el tiempo necesario para la intermediación laboral o hasta que el usuario solicite su supresión.
              </p>
              <p>
                <strong>Derechos:</strong> Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos reconocidos en el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPD-GDD).
              </p>
              <p>
                Garantizamos la confidencialidad y seguridad de la información proporcionada.
              </p>
            </div>
          </div>
        )}

        {type === 'aviso-legal' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-blue-900">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-700">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Aviso Legal</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                El presente sitio web <strong>Empleo España</strong> tiene como objetivo orientar y conectar a demandantes de empleo con ofertas laborales vigentes en las diferentes provincias y comunidades autónomas de España.
              </p>
              <p>
                <strong>Condiciones de Uso:</strong> El acceso y uso de este portal confiere la condición de usuario e implica la aceptación plena de las presentes condiciones. El servicio para candidatos es 100% gratuito.
              </p>
              <p>
                <strong>Propiedad Intelectual:</strong> Todos los contenidos, logotipos, diseños y textos son propiedad de Empleo España o de sus respectivos titulares de derechos, quedando prohibida su reproducción sin autorización previa.
              </p>
            </div>
          </div>
        )}

        {type === 'cookies' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-blue-900">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-700">
                <Cookie className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Política de Cookies</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Este sitio web utiliza cookies técnicas y analíticas necesarias para optimizar la experiencia de navegación, asegurar el correcto funcionamiento del formulario de registro y medir de forma agregada el tráfico.
              </p>
              <p>
                <strong>Cookies Técnicas:</strong> Permiten la navegación y el uso de las diferentes opciones y servicios de la página web.
              </p>
              <p>
                Puedes configurar o rechazar el uso de cookies a través de los ajustes de tu navegador web en cualquier momento.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            id="btn-understand-legal"
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
