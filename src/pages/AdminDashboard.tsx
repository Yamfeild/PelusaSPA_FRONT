import React from 'react';
import { Page } from '../types';

interface Props {
  onNavigate: (page: Page) => void;
}

const AdminDashboard: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex min-h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen w-64 flex-shrink-0 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 shadow-sm hidden lg:block">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 px-3 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGOk-XpmHCBZC6Ou83qrwmMUpt_ro4lbizxJC1TXtSe_vSpO6lyTYtuLU1tJ9Rv17G58r-JHvCArhHZoYDYqU5L7Bv6AlWgCApT2I4FyVmXnG97UL3y7nH3vtgkCLlFmJv358e_jrxu_8edXGnhuijsAej7KlmGr3LwvQONK7hGJR7TrIjbSMEfW-iATyUvOPvTIjBaDCFtbLy87j2mlJXtEmMr9ibQLmKTMo2TbaObbXNHaK3sWgyy2WhntzqwAYgat-gq3MO3nA")' }}></div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-base font-bold">PelusaSpa</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Panel Admin</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">
                <span className="material-symbols-outlined">grid_view</span> Dashboard
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">calendar_month</span> Citas
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">group</span> Clientes
              </a>
               <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">pets</span> Mascotas
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-1">
             <a onClick={() => onNavigate(Page.PROFILE)} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer">
                <span className="material-symbols-outlined">arrow_back</span> Volver al sitio
             </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Toolbar */}
        <header className="sticky top-0 z-10 flex justify-between items-center gap-4 px-6 py-3 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
           <div className="flex-1">
              <div className="relative max-w-xs">
                 <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                 <input type="text" className="w-full pl-10 pr-4 py-2 text-sm border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary" placeholder="Buscar..." />
              </div>
           </div>
           <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"><span className="material-symbols-outlined">notifications</span></button>
              <button className="flex items-center justify-center rounded-lg h-10 bg-primary text-white gap-2 px-4 hover:bg-primary/90 text-sm font-bold">
                 <span className="material-symbols-outlined text-lg">add</span> Nueva Cita
              </button>
           </div>
        </header>

        <div className="flex-1 p-6 lg:p-8">
           <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                 <h1 className="text-slate-900 dark:text-white text-3xl font-bold">Hola, Admin</h1>
                 <p className="text-slate-500 dark:text-slate-400">Resumen de la actividad de hoy.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                 {[
                   { title: 'Citas Hoy', val: '12', change: '+10%', up: true },
                   { title: 'Mascotas', val: '8', change: '-5%', up: false },
                   { title: 'Ingresos', val: '$550', change: '+15%', up: true },
                   { title: 'Cumpleaños', val: '3', text: 'Próximos 7 días' }
                 ].map((stat, i) => (
                   <div key={i} className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                      <p className="text-slate-700 dark:text-slate-300 font-medium">{stat.title}</p>
                      <p className="text-3xl font-bold text-slate-900 dark:text-white my-2">{stat.val}</p>
                      {stat.change && (
                        <p className={`text-sm font-medium flex items-center gap-1 ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                           <span className="material-symbols-outlined text-base">{stat.up ? 'arrow_upward' : 'arrow_downward'}</span> {stat.change}
                        </p>
                      )}
                      {stat.text && <p className="text-slate-500 text-sm">{stat.text}</p>}
                   </div>
                 ))}
              </div>

              {/* Table */}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Próximas Citas</h2>
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                       <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <tr>
                             <th className="px-6 py-3">Hora</th>
                             <th className="px-6 py-3">Mascota / Cliente</th>
                             <th className="px-6 py-3">Servicio</th>
                             <th className="px-6 py-3">Estado</th>
                             <th className="px-6 py-3 text-right">Acciones</th>
                          </tr>
                       </thead>
                       <tbody>
                          {[
                            { time: '09:00 AM', pet: 'Rocky', owner: 'Ana Pérez', svc: 'Baño y Corte', status: 'Confirmada', color: 'blue' },
                            { time: '10:30 AM', pet: 'Luna', owner: 'Carlos Gómez', svc: 'Corte de Uñas', status: 'Completada', color: 'green' },
                            { time: '11:00 AM', pet: 'Max', owner: 'Laura Fernandez', svc: 'Baño Completo', status: 'En Progreso', color: 'yellow' },
                            { time: '01:00 PM', pet: 'Bella', owner: 'Juan Rodríguez', svc: 'Baño y Corte', status: 'Cancelada', color: 'red' },
                          ].map((row, i) => (
                             <tr key={i} className="border-b border-gray-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-slate-700/50">
                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{row.time}</td>
                                <td className="px-6 py-4">
                                   <div className="font-medium text-slate-900 dark:text-white">{row.pet}</div>
                                   <div className="text-xs">{row.owner}</div>
                                </td>
                                <td className="px-6 py-4">{row.svc}</td>
                                <td className="px-6 py-4">
                                   <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-${row.color}-100 text-${row.color}-800`}>{row.status}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                   <button className="p-1.5 hover:bg-slate-100 rounded-md"><span className="material-symbols-outlined text-xl">edit</span></button>
                                   <button className="p-1.5 hover:bg-slate-100 rounded-md"><span className="material-symbols-outlined text-xl">delete</span></button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;