import React from 'react';
import { Page } from '../types';

interface PublicHeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ currentPage, onNavigate }) => {
  const getLinkClass = (page: Page) => {
    const baseClass = "text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer";
    return currentPage === page 
      ? `${baseClass} text-primary font-bold` 
      : `${baseClass} text-gray-800 dark:text-gray-200`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-center px-4 sm:px-10">
        <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap py-3">
          <div className="flex items-center gap-4 text-[#111618] dark:text-white cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">PelusaSpa</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-9">
            <a onClick={() => onNavigate(Page.HOME)} className={getLinkClass(Page.HOME)}>Inicio</a>
            <a onClick={() => onNavigate(Page.SERVICES)} className={getLinkClass(Page.SERVICES)}>Servicios</a>
            <a onClick={() => onNavigate(Page.ABOUT)} className={getLinkClass(Page.ABOUT)}>Nosotros</a>
            <a onClick={() => onNavigate(Page.STORE)} className={getLinkClass(Page.STORE)}>Tienda</a>
            <a onClick={() => onNavigate(Page.CONTACT)} className={getLinkClass(Page.CONTACT)}>Contacto</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate(Page.BOOKING)}
              className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
            >
              <span className="truncate">Reservar Cita</span>
            </button>
            <button onClick={() => onNavigate(Page.PROFILE)} className="p-2 text-gray-600 hover:text-primary">
               <span className="material-symbols-outlined">person</span>
            </button>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;