import React from 'react';
import { Page } from '../types';

interface Props {
  onNavigate: (page: Page) => void;
}

const Profile: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-10 w-full flex-1">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-10">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Mi Perfil y Mascotas</h1>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">Gestiona tu información y la de tus mascotas.</p>
          </div>
          <button 
            onClick={() => onNavigate(Page.ADMIN)}
            className="text-sm text-primary underline"
          >
            (Ir a Vista Admin)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Info */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-900/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Información del Cliente</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-t border-gray-200 dark:border-gray-800 py-2">
                  <span className="text-gray-500 text-sm">Nombre</span>
                  <span className="text-gray-900 dark:text-white font-medium text-sm">Ana García</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 dark:border-gray-800 py-2">
                  <span className="text-gray-500 text-sm">Email</span>
                  <span className="text-gray-900 dark:text-white font-medium text-sm">ana.garcia@email.com</span>
                </div>
                <div className="flex justify-between border-t border-b border-gray-200 dark:border-gray-800 py-2">
                  <span className="text-gray-500 text-sm">Teléfono</span>
                  <span className="text-gray-900 dark:text-white font-medium text-sm">+123 456 7890</span>
                </div>
              </div>
              <button className="mt-6 w-full flex items-center justify-center gap-2 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-bold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined text-lg">edit</span> Editar Perfil
              </button>
            </div>
          </div>

          {/* Pets */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gray-900 dark:text-white text-lg font-bold">Mis Mascotas</h2>
              <button className="flex items-center gap-2 h-10 px-4 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90">
                <span className="material-symbols-outlined text-lg">add</span> Registrar Mascota
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pet 1 */}
              <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqRmOa8MbYZKVfAVPvY9PvqAbRUoO5nBQcfDL6hgAwCdrU5hfE8u9uk3Cg4whyZMkoS5XPI6oPOqLTog7_GqmKlRjTkWNdtBFqA8aZTZzMm4W8A5CeGwmWcP0KizY1kDbJvPW63DWPhNR22yMDwzA5aVknyti_g-iir8jlrBxt1uxcIi6dAD5GwJEMdPnqCVMdtd3a8kt6fqWcOqY-c3rV9sCcq3ElkGvny9OZrmT0h2Yyb3fr-kzxkB8nQplWC5pgayI7zHxSg40")' }}></div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Max</p>
                    <p className="text-sm text-gray-500">Golden Retriever</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-700 dark:text-gray-300">
                  <p><span className="font-semibold text-gray-500">Edad:</span> 5 años</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 flex items-center justify-center gap-1 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-base">edit</span> Editar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                     <span className="material-symbols-outlined text-base">receipt_long</span> Historial
                  </button>
                </div>
              </div>

               {/* Pet 2 */}
               <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwSpx4dAtTVxxqmUINUAvHclztzz7rIFQXa-9-Z0eD2FPjY4WGiMOx5nCbQ1gQiyTDscmodJOS9LArevItmWLoR-gVjyu_jonBIKkV_q8JtUcixUW-sBnphCmey0ilfI6YIb7nN1WJb6gQ5E1bJHDcHjK5_9ZBiIrjyBYWlK-bkt-WJnLMTeNyybSDXlW8zS4cVoKTb58N_aPdNcBYZBkF0IdCRh4Wuv_T1u0sCBB_3E30RAh0U0-cuYMyP3Oi7mifQChw17tQVOo")' }}></div>
                  <div>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Luna</p>
                    <p className="text-sm text-gray-500">Beagle</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-700 dark:text-gray-300">
                  <p><span className="font-semibold text-gray-500">Edad:</span> 2 años</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 flex items-center justify-center gap-1 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-base">edit</span> Editar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 h-9 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                     <span className="material-symbols-outlined text-base">receipt_long</span> Historial
                  </button>
                </div>
              </div>

               {/* Add Pet */}
               <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/30 p-5 min-h-[260px] text-center">
                  <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
                     <span className="material-symbols-outlined text-3xl">pets</span>
                  </div>
                  <div>
                    <p className="text-base font-bold dark:text-white">¿Tienes otra mascota?</p>
                    <p className="text-sm text-gray-500">Añádela para gestionar sus citas.</p>
                  </div>
                  <button className="flex items-center gap-2 h-9 px-4 mt-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium">
                    <span className="material-symbols-outlined text-lg">add</span> Registrar
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;