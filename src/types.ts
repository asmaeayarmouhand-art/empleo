export interface CandidateFormData {
  nombre: string;
  ciudad: string;
  puestoSector: string;
  telefono: string;
}

export interface FormErrors {
  nombre?: string;
  ciudad?: string;
  puestoSector?: string;
  telefono?: string;
}

export type ModalType = 'privacidad' | 'aviso-legal' | 'cookies' | null;
