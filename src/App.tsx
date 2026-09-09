/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SuccessModal from './components/SuccessModal';
import LegalModal from './components/LegalModal';
import Footer from './components/Footer';
import { ModalType } from './types';
import { Shield } from 'lucide-react';

export default function App() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [activeLegalModal, setActiveLegalModal] = useState<ModalType>(null);

  // Take the visitor directly to the Formulario de Registro de Candidatos upon opening the page
  useEffect(() => {
    const timer = setTimeout(() => {
      const formElement = document.getElementById('formulario-registro');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario-registro');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const nameInput = document.getElementById('field-nombre');
      if (nameInput) {
        nameInput.focus();
      }
    }
  };

  const handleFormSuccess = (name: string) => {
    setCandidateName(name);
    setIsSuccessOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-900 selection:text-white">
      {/* 1. Header */}
      <Header onScrollToForm={scrollToForm} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Top Hero Section with Registration Form at the top */}
        <Hero onFormSuccess={handleFormSuccess} />

        {/* 3. Benefits / trust section */}
        <Benefits />

        {/* 4. Privacy Notice Section (Específico según estructura) */}
        <section 
          id="seccion-aviso-privacidad" 
          aria-label="Información legal sobre protección de datos"
          className="py-8 bg-slate-100/80 border-t border-slate-200/80 text-xs text-slate-600"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Shield className="w-4 h-4 text-blue-900" />
                <span>Información Básica sobre Protección de Datos (RGPD / LOPD-GDD)</span>
              </div>
              <p className="leading-relaxed">
                <strong>Responsable:</strong> Empleo España. 
                <strong> Finalidad:</strong> Tramitar tu solicitud de intermediación laboral y remitirte ofertas de empleo coincidentes con tu perfil profesional y ubicación. 
                <strong> Legitimación:</strong> Tu consentimiento libre y explícito. 
                <strong> Destinatarios:</strong> Entidades empleadoras colaboradoras para fines de selección. 
                <strong> Derechos:</strong> Puedes acceder, rectificar y suprimir tus datos solicitándolo a través de nuestros canales oficiales.
              </p>
              <div className="pt-1 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('privacidad')}
                  className="text-blue-900 font-semibold underline hover:text-blue-700 cursor-pointer"
                >
                  Leer Política de Privacidad Completa
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Success State Modal */}
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)}
        candidateName={candidateName}
      />

      {/* Modales de Políticas Legales */}
      <LegalModal 
        type={activeLegalModal} 
        onClose={() => setActiveLegalModal(null)} 
      />

      {/* 7. Footer */}
      <Footer onOpenLegalModal={(type) => setActiveLegalModal(type)} />
    </div>
  );
}
