import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
export interface Service {
  id: string;
  name: string;
  price: number;
  icon: string;
}

export interface Customer {
  name: string;
  phone: string;
  email?: string;
}

export interface Appointment {
  services: Service[];
  customer: Customer;
  time: string;
  totalPrice: number;
}

interface TotemState {
  currentStep: 'welcome' | 'services' | 'customer' | 'time' | 'confirmation';
  selectedServices: Service[];
  customer: Customer | null;
  selectedTime: string | null;
  appointment: Appointment | null;
  isLoading: boolean;
}

// Actions
type TotemAction =
  | { type: 'SET_STEP'; payload: TotemState['currentStep'] }
  | { type: 'ADD_SERVICE'; payload: Service }
  | { type: 'REMOVE_SERVICE'; payload: string }
  | { type: 'CLEAR_SERVICES' }
  | { type: 'SET_CUSTOMER'; payload: Customer }
  | { type: 'SET_TIME'; payload: string }
  | { type: 'CREATE_APPOINTMENT' }
  | { type: 'RESET_SYSTEM' }
  | { type: 'SET_LOADING'; payload: boolean };

// Initial state
const initialState: TotemState = {
  currentStep: 'welcome',
  selectedServices: [],
  customer: null,
  selectedTime: null,
  appointment: null,
  isLoading: false,
};

// Reducer
function totemReducer(state: TotemState, action: TotemAction): TotemState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    
    case 'ADD_SERVICE':
      if (state.selectedServices.find(s => s.id === action.payload.id)) {
        return state; // Service already selected
      }
      return {
        ...state,
        selectedServices: [...state.selectedServices, action.payload],
      };
    
    case 'REMOVE_SERVICE':
      return {
        ...state,
        selectedServices: state.selectedServices.filter(s => s.id !== action.payload),
      };
    
    case 'CLEAR_SERVICES':
      return { ...state, selectedServices: [] };
    
    case 'SET_CUSTOMER':
      return { ...state, customer: action.payload };
    
    case 'SET_TIME':
      return { ...state, selectedTime: action.payload };
    
    case 'CREATE_APPOINTMENT':
      if (!state.customer || !state.selectedTime || state.selectedServices.length === 0) {
        return state;
      }
      
      const totalPrice = state.selectedServices.reduce((sum, service) => sum + service.price, 0);
      
      return {
        ...state,
        appointment: {
          services: state.selectedServices,
          customer: state.customer,
          time: state.selectedTime,
          totalPrice,
        },
        currentStep: 'confirmation',
      };
    
    case 'RESET_SYSTEM':
      return initialState;
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    default:
      return state;
  }
}

// Context
const TotemContext = createContext<{
  state: TotemState;
  dispatch: React.Dispatch<TotemAction>;
} | null>(null);

// Provider
export function TotemProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(totemReducer, initialState);

  return (
    <TotemContext.Provider value={{ state, dispatch }}>
      {children}
    </TotemContext.Provider>
  );
}

// Hook
export function useTotem() {
  const context = useContext(TotemContext);
  if (!context) {
    throw new Error('useTotem must be used within a TotemProvider');
  }
  return context;
}

// Services data
export const AVAILABLE_SERVICES: Service[] = [
  { id: '1', name: 'Corte Masculino', price: 45, icon: '✂️' },
  { id: '2', name: 'Barba Completa', price: 35, icon: '🪒' },
  { id: '3', name: 'Sobrancelha', price: 25, icon: '👁️' },
  { id: '4', name: 'Hidratação Capilar', price: 60, icon: '💧' },
  { id: '5', name: 'Corte Navalhado', price: 55, icon: '🗡️' },
  { id: '6', name: 'Luzes', price: 120, icon: '✨' },
  { id: '7', name: 'Camuflagem', price: 80, icon: '🎨' },
  { id: '8', name: 'Relaxamento', price: 90, icon: '🧘' },
  { id: '9', name: 'Penteado', price: 40, icon: '💫' },
  { id: '10', name: 'Pacote Corte + Barba', price: 70, icon: '🎯' },
];

// Available times
export const AVAILABLE_TIMES = ['10:00', '11:00', '14:00', '16:00'];