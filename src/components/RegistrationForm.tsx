import { useState, type FormEvent } from 'react';
import { 
  User, 
  MapPin, 
  Briefcase, 
  AlertCircle, 
  Lock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CandidateFormData, FormErrors } from '../types';
import { CONFIRMATION_URL } from '../config';

interface RegistrationFormProps {
  onSuccess?: (candidateName: string) => void;
}

const CIUDADES_POPULARES = [
  'Madrid', 
  'Barcelona', 
  'Valencia', 
  'Sevilla', 
  'Málaga', 
  'Zaragoza', 
  'Bilbao', 
  'Alicante'
];

const PUESTOS_EJEMPLOS = [
  'Mozo/a de almacén',
  'Cuidador',
  'Camarero/a',
  'Construcción / obra',
  'Limpieza',
  'Repartidor/a',
  'Dependiente/a',
  'Socorrista',
  'Administrativo/a',
  'Hostelería',
  'Otro'
];

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState<CandidateFormData>({
    nombre: '',
    ciudad: '',
    puestoSector: '',
    telefono: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validación de teléfono español (móviles 6xx, 7xx; fijos 8xx, 9xx; con o sin prefijo +34)
  const validateSpanishPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
    const spanishRegex = /^(\+34|0034)?[6789]\d{8}$/;
    return spanishRegex.test(cleaned);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Este campo es obligatorio.';
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'Por favor, introduce un nombre válido.';
    }

    // 2. Ciudad
    if (!formData.ciudad.trim()) {
      newErrors.ciudad = 'Este campo es obligatorio.';
    }

    // 3. Puesto o sector profesional
    if (!formData.puestoSector.trim()) {
      newErrors.puestoSector = 'Este campo es obligatorio.';
    }

    // 4. Número de teléfono
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Este campo es obligatorio.';
    } else if (!validateSpanishPhone(formData.telefono)) {
      newErrors.telefono = 'Introduce un número de teléfono válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Si hay errores, hacer foco en el primer error
      const firstErrorKey = Object.keys(errors)[0];
      const errorElement = document.getElementById(`field-${firstErrorKey}`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Guardar los datos para registro local del aspirante
    try {
      const stored = localStorage.getItem('empleo_espana_candidatos');
      const list = stored ? JSON.parse(stored) : [];
      list.push({
        ...formData,
        fecha: new Date().toISOString()
      });
      localStorage.setItem('empleo_espana_candidatos', JSON.stringify(list));
    } catch {
      // Ignorar restricciones de almacenamiento local
    }

    // Redirigir directamente al enlace sin mostrar modal previo
    try {
      window.location.href = CONFIRMATION_URL;
    } catch {
      window.open(CONFIRMATION_URL, '_blank', 'noopener,noreferrer');
    }

    if (onSuccess) {
      onSuccess(formData.nombre);
    }
  };

  const selectCiudad = (ciudad: string) => {
    setFormData((prev) => ({ ...prev, ciudad }));
    if (errors.ciudad) {
      setErrors((prev) => ({ ...prev, ciudad: undefined }));
    }
  };

  const selectSector = (puesto: string) => {
    setFormData((prev) => ({ ...prev, puestoSector: puesto === 'Otro' ? '' : puesto }));
    if (errors.puestoSector) {
      setErrors((prev) => ({ ...prev, puestoSector: undefined }));
    }
    if (puesto === 'Otro') {
      const inputEl = document.getElementById('field-puestoSector') as HTMLInputElement;
      if (inputEl) {
        inputEl.focus();
      }
    }
  };

  return (
    <div 
      id="formulario-registro" 
      className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl shadow-slate-200/80 border border-slate-200/90 p-4 sm:p-6 sm:p-8 relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Barra superior de acento */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900"></div>

      {/* Cabecera del formulario */}
      <div className="text-left mb-4 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-blue-100/70 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-700" />
          Inscripción Gratuita
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Formulario de Registro de Candidatos
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-1">
          Completa tus datos a continuación para acceder a oportunidades laborales disponibles en tu provincia.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
            
            {/* 1. Campo Nombre */}
            <div id="grupo-nombre" className="space-y-1.5 sm:space-y-2">
              <label 
                htmlFor="field-nombre" 
                className="block text-sm font-bold text-slate-900"
              >
                1. Nombre completo <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="field-nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => {
                    setFormData({ ...formData, nombre: e.target.value });
                    if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                  }}
                  placeholder="Escribe tu nombre y apellidos"
                  className={`w-full pl-11 pr-3.5 py-3 sm:py-3.5 text-slate-900 bg-slate-50/60 hover:bg-white focus:bg-white rounded-xl border text-base transition-colors outline-hidden ${
                    errors.nombre 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100' 
                      : 'border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-100'
                  }`}
                  aria-invalid={Boolean(errors.nombre)}
                  aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                />
              </div>
              {errors.nombre && (
                <p id="error-nombre" className="text-xs font-semibold text-red-600 flex items-center gap-1.5 pt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.nombre}</span>
                </p>
              )}
            </div>

            {/* 2. Campo Ciudad */}
            <div id="grupo-ciudad" className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="field-ciudad" 
                  className="block text-sm font-bold text-slate-900"
                >
                  2. Ciudad de residencia o búsqueda <span className="text-red-600" aria-hidden="true">*</span>
                </label>
              </div>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="field-ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={(e) => {
                    setFormData({ ...formData, ciudad: e.target.value });
                    if (errors.ciudad) setErrors({ ...errors, ciudad: undefined });
                  }}
                  placeholder="¿En qué ciudad buscas trabajo?"
                  className={`w-full pl-11 pr-3.5 py-3 sm:py-3.5 text-slate-900 bg-slate-50/60 hover:bg-white focus:bg-white rounded-xl border text-base transition-colors outline-hidden ${
                    errors.ciudad 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100' 
                      : 'border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-100'
                  }`}
                  aria-invalid={Boolean(errors.ciudad)}
                  aria-describedby={errors.ciudad ? 'error-ciudad' : undefined}
                />
              </div>

              {/* Sugerencias rápidas de ciudades */}
              <div className="pt-0.5">
                <span className="text-xs text-slate-500 font-medium mr-1.5">Sugerencias:</span>
                <div className="inline-flex flex-wrap gap-1 mt-1">
                  {CIUDADES_POPULARES.map((ciudad) => {
                    const isSelected = formData.ciudad.toLowerCase() === ciudad.toLowerCase();
                    return (
                      <button
                        type="button"
                        key={ciudad}
                        id={`btn-ciudad-${ciudad.toLowerCase()}`}
                        onClick={() => selectCiudad(ciudad)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer active:scale-95 touch-manipulation ${
                          isSelected
                            ? 'bg-blue-900 text-white border-blue-900 font-semibold'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {ciudad}
                      </button>
                    );
                  })}
                </div>
              </div>

              {errors.ciudad && (
                <p id="error-ciudad" className="text-xs font-semibold text-red-600 flex items-center gap-1.5 pt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.ciudad}</span>
                </p>
              )}
            </div>

            {/* 3. Campo Puesto o sector profesional */}
            <div id="grupo-puesto" className="space-y-1.5 sm:space-y-2">
              <label 
                htmlFor="field-puestoSector" 
                className="block text-sm font-bold text-slate-900"
              >
                3. Puesto o sector profesional <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <div className="relative rounded-xl shadow-2xs">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="field-puestoSector"
                  name="puestoSector"
                  value={formData.puestoSector}
                  onChange={(e) => {
                    setFormData({ ...formData, puestoSector: e.target.value });
                    if (errors.puestoSector) setErrors({ ...errors, puestoSector: undefined });
                  }}
                  placeholder="¿En qué puesto o sector quieres trabajar?"
                  className={`w-full pl-11 pr-3.5 py-3 sm:py-3.5 text-slate-900 bg-slate-50/60 hover:bg-white focus:bg-white rounded-xl border text-base transition-colors outline-hidden ${
                    errors.puestoSector 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100' 
                      : 'border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-100'
                  }`}
                  aria-invalid={Boolean(errors.puestoSector)}
                  aria-describedby={errors.puestoSector ? 'error-puesto' : undefined}
                />
              </div>

              {/* Botones de sectores frecuentes */}
              <div className="pt-0.5 space-y-1">
                <span className="text-xs text-slate-500 font-medium">Sectores más demandados en España:</span>
                <div className="flex flex-wrap gap-1">
                  {PUESTOS_EJEMPLOS.map((puesto) => {
                    const isSelected = formData.puestoSector === puesto;
                    return (
                      <button
                        type="button"
                        key={puesto}
                        id={`btn-puesto-${puesto.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        onClick={() => selectSector(puesto)}
                        className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer active:scale-95 touch-manipulation ${
                          isSelected
                            ? 'bg-blue-900 text-white border-blue-900 font-semibold shadow-xs'
                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                        }`}
                      >
                        {puesto}
                      </button>
                    );
                  })}
                </div>
              </div>

              {errors.puestoSector && (
                <p id="error-puesto" className="text-xs font-semibold text-red-600 flex items-center gap-1.5 pt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.puestoSector}</span>
                </p>
              )}
            </div>

            {/* 4. Campo Número de teléfono */}
            <div id="grupo-telefono" className="space-y-1.5 sm:space-y-2">
              <label 
                htmlFor="field-telefono" 
                className="block text-sm font-bold text-slate-900"
              >
                4. Número de teléfono de contacto <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <div className="relative rounded-xl shadow-2xs">
                {/* Indicador de España +34 */}
                <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                  <span className="flex items-center gap-1 text-slate-700 text-xs sm:text-sm font-bold bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    <span className="text-sm sm:text-base" role="img" aria-label="Bandera de España">🇪🇸</span>
                    <span>+34</span>
                  </span>
                </div>
                <input
                  type="tel"
                  id="field-telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={(e) => {
                    setFormData({ ...formData, telefono: e.target.value });
                    if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                  }}
                  placeholder="Ej. 612 345 678"
                  className={`w-full pl-20 sm:pl-22 pr-3.5 py-3 sm:py-3.5 text-slate-900 bg-slate-50/60 hover:bg-white focus:bg-white rounded-xl border text-base transition-colors outline-hidden ${
                    errors.telefono 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-100' 
                      : 'border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-100'
                  }`}
                  aria-invalid={Boolean(errors.telefono)}
                  aria-describedby={errors.telefono ? 'error-telefono' : undefined}
                />
              </div>
              <p className="text-[11px] text-slate-600">
                Se admiten números de teléfono fijos y móviles de España (ej. 612 345 678 o 912 345 678).
              </p>
              {errors.telefono && (
                <p id="error-telefono" className="text-xs font-semibold text-red-600 flex items-center gap-1.5 pt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.telefono}</span>
                </p>
              )}
            </div>

            {/* Botón Principal CTA Requerido: "Confirmar mis datos" */}
            <div className="pt-2">
              <button
                type="submit"
                id="btn-confirmar-mis-datos"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-4 sm:px-6 py-3.5 sm:py-4.5 rounded-xl sm:rounded-2xl bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-blue-900/25 hover:shadow-blue-900/35 transition-all cursor-pointer disabled:opacity-75 group min-h-[48px] sm:min-h-[52px]"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Procesando solicitud...</span>
                  </span>
                ) : (
                  <>
                    <span>Confirmar mis datos</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Garantía de Seguridad y Confianza */}
            <div className="pt-1 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-600">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Tus datos están protegidos y cifrados con seguridad SSL de 256 bits.</span>
            </div>

          </form>
    </div>
  );
}
