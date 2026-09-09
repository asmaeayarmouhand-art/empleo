import { CheckCircle, Briefcase } from 'lucide-react';
import heroImage from '../assets/images/empleo_profesionales_espana_1788978057658.jpg';
import RegistrationForm from './RegistrationForm';

interface HeroProps {
  onFormSuccess?: (candidateName: string) => void;
}

export default function Hero({ onFormSuccess }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 sm:pt-10 sm:pb-16 bg-gradient-to-b from-slate-100/90 via-white to-slate-50 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start">
          
          {/* Columna de Información: Titular, Subtítulo, Trust Message y Visual */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-6 text-left order-1">
            
            {/* Trust Pill / Etiqueta Oficial */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-900 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Convocatorias y ofertas activas en toda España</span>
            </div>

            {/* Titular Principal Requerido */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15]">
              Encuentra tu próximo trabajo en España
            </h1>

            {/* Subtítulo Requerido */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed">
              Déjanos tus datos y te ayudaremos a encontrar oportunidades de empleo adaptadas a tu perfil y ubicación.
            </p>

            {/* Elementos visibles en Desktop en esta columna */}
            <div className="hidden lg:block space-y-6 pt-2">
              {/* Mensaje de Confianza Requerido */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100/90 flex items-start gap-3 text-sm text-blue-950 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  Déjanos tus datos y recibe información sobre nuevas oportunidades laborales.
                </span>
              </div>

              {/* Marco de Imagen Profesional con fotomontaje editorial y badges */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
                <img
                  src={heroImage}
                  alt="Profesionales y trabajadores en España"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-56 object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Badge flotante inferior */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                      ES
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Bolsa de Empleo España</p>
                      <p className="text-[10px] text-slate-500">Conectando talento con empresas</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    Activo hoy
                  </div>
                </div>

                {/* Badge flotante superior */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-blue-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow">
                  <Briefcase className="w-3 h-3 text-blue-200" />
                  <span>Nuevas vacantes diarias</span>
                </div>
              </div>

              {/* Micro-datos de confianza */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-200/80">
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">+15.000</div>
                  <div className="text-xs text-slate-500 font-medium">Candidatos activos</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">50 Provincias</div>
                  <div className="text-xs text-slate-500 font-medium">Cobertura estatal</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">100% Gratuito</div>
                  <div className="text-xs text-slate-500 font-medium">Sin intermediarios</div>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario de Registro de Candidatos (order-2 en móvil para aparecer inmediatamente tras el título) */}
          <div className="lg:col-span-6 w-full order-2">
            <RegistrationForm onSuccess={onFormSuccess} />
          </div>

          {/* En Móvil (< lg): Tarjeta de confianza y micro-estadísticas situadas debajo del formulario */}
          <div className="lg:hidden col-span-1 space-y-3.5 pt-2 order-3">
            <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-100/90 flex items-start gap-2.5 text-xs sm:text-sm text-blue-950 font-medium">
              <CheckCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>
                Déjanos tus datos y recibe información sobre nuevas oportunidades laborales.
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-3 px-2 bg-white rounded-xl border border-slate-200/80 text-center shadow-2xs">
              <div>
                <div className="text-base font-extrabold text-slate-900">+15.000</div>
                <div className="text-[10px] text-slate-500 font-medium">Candidatos</div>
              </div>
              <div className="border-x border-slate-100">
                <div className="text-base font-extrabold text-slate-900">50 Prov.</div>
                <div className="text-[10px] text-slate-500 font-medium">Cobertura</div>
              </div>
              <div>
                <div className="text-base font-extrabold text-emerald-700">100%</div>
                <div className="text-[10px] text-slate-500 font-medium">Gratuito</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
