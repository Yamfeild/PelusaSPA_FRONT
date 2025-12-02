import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-background-dark/50 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="flex justify-center py-10 px-4 sm:px-10 md:px-20 lg:px-40">
        <div className="flex flex-col sm:flex-row w-full max-w-7xl justify-between items-center gap-8">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="size-5 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <p className="font-bold text-base dark:text-white">PelusaSpa</p>
            </div>
            <p className="text-sm text-[#617c89] dark:text-gray-400">© 2024 PelusaSpa. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-4">
            <div className="flex gap-4">
              <a href="#" className="text-[#617c89] dark:text-gray-400 hover:text-primary"><span className="material-symbols-outlined">public</span></a>
              <a href="#" className="text-[#617c89] dark:text-gray-400 hover:text-primary"><span className="material-symbols-outlined">share</span></a>
              <a href="#" className="text-[#617c89] dark:text-gray-400 hover:text-primary"><span className="material-symbols-outlined">mail</span></a>
            </div>
            <div className="flex gap-2 text-sm text-[#617c89] dark:text-gray-400">
              <span className="material-symbols-outlined text-base">location_on</span>
              <span>Calle Falsa 123, Springfield</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;