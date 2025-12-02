import React from 'react';
import { Page } from '../types';

interface Props {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-10 md:gap-12 px-4 sm:px-10 md:px-20 lg:px-40 py-10 md:py-16">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex w-full flex-col gap-3 text-center items-center">
          <p className="text-gray-900 dark:text-gray-100 text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Nuestros Servicios para tu Mejor Amigo</p>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
            Descubre nuestra gama de servicios profesionales de aseo y nuestra filosofía de cuidado y amor por cada mascota.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[
          { icon: 'shower', title: 'Baño y Secado', price: '$15.000', desc: 'Un baño refrescante con productos de alta calidad.' },
          { icon: 'content_cut', title: 'Corte y Estilo', price: '$25.000', desc: 'Un corte de pelo profesional para que luzca increíble.' },
          { icon: 'auto_awesome', title: 'Grooming Completo', price: '$40.000', desc: 'El paquete completo de belleza y bienestar.' },
          { icon: 'spa', title: 'Tratamientos de Spa', price: '$30.000', desc: 'Mimos y relajación con nuestros tratamientos especiales.' },
          { icon: 'dentistry', title: 'Limpieza Dental', price: '$20.000', desc: 'Cuidado oral para una sonrisa sana y un aliento fresco.' },
          { icon: 'pets', title: 'Corte de Uñas', price: '$10.000', desc: 'Mantén sus patitas saludables y cómodas.' }
        ].map((service, index) => (
          <div key={index} className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="text-primary"><span className="material-symbols-outlined">{service.icon}</span></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-bold leading-tight text-gray-900 dark:text-gray-100">{service.title}</h2>
              <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">Desde {service.price}. {service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/20 dark:bg-primary/10 rounded-xl mt-8">
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 sm:gap-8 sm:px-10 sm:py-20 text-center items-center">
            <h1 className="text-gray-900 dark:text-gray-100 text-[32px] font-bold leading-tight sm:text-4xl sm:font-black tracking-[-0.033em] max-w-2xl">
              ¿Listo para consentir a tu mascota?
            </h1>
            <p className="text-gray-800 dark:text-gray-200 text-base font-normal leading-normal max-w-2xl">Agenda una cita hoy mismo y dale a tu mejor amigo el cuidado que se merece.</p>
            <button 
              onClick={() => onNavigate(Page.BOOKING)}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-primary text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
            >
              <span className="truncate">Agendar cita</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;