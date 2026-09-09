import { Target, MapPin, Zap, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Ofertas adaptadas a tu perfil",
      description: "Filtramos las vacantes que mejor encajan con tu experiencia, tus preferencias de sector y tus expectativas laborales."
    },
    {
      icon: MapPin,
      title: "Encuentra oportunidades cerca de ti",
      description: "Accede a puestos de trabajo en tu ciudad o provincia, ahorrando tiempo en desplazamientos y mejorando tu concilación."
    },
    {
      icon: Zap,
      title: "Proceso rápido y sencillo",
      description: "Rellena el formulario en menos de 1 minuto sin trámites complejos y comienza a recibir convocatorias y ofertas activas."
    }
  ];

  return (
    <section id="beneficios" className="py-14 sm:py-18 bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Ventajas para candidatos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            ¿Por qué registrarte con nosotros?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Te facilitamos el acceso a cientos de puestos de trabajo vacantes en empresas de toda España.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                id={`benefit-card-${index + 1}`}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Badges de confianza complementarios */}
        <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Servicio 100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span>Empresas verificadas en España</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span>Protección de datos conforme a RGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
