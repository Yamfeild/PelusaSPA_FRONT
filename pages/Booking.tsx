import React from 'react';

const Booking: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center py-5 sm:py-10 px-4 sm:px-10">
      <div className="flex flex-col w-full max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Reserva tu Cita</h1>
            <p className="text-[#617c89] dark:text-gray-400 text-base font-normal">Sigue los pasos para agendar un servicio para tu mascota.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#192730] rounded-xl shadow-sm mt-8 border border-gray-200 dark:border-gray-800">
          {/* Progress */}
          <div className="flex flex-col gap-3 p-6 border-b border-[#f0f3f4] dark:border-gray-800">
            <div className="flex justify-between">
              <p className="text-[#111618] dark:text-white text-base font-medium">Paso 1 de 4: Servicio</p>
            </div>
            <div className="rounded-full bg-[#dbe2e6] dark:bg-gray-700 h-2 w-full">
              <div className="h-2 rounded-full bg-primary w-1/4"></div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-[#111618] dark:text-white text-[22px] font-bold pb-3 pt-5">1. Elige el Servicio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {[
                 { title: 'Baño y Secado', desc: 'Un baño refrescante y secado profesional.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARboBLqAwLAUDnsweGOuwahRqK4HgSaJfcFgqtXyZyhMDL5jtIKAtvSY9Mk_j5dm-6xuwCz80-qF21WwtF4qjSAQNTq174zqBW_k5GgoGKaHWJQ8olvbywTIUgXoZW310Iu09WLzwa3QtDgS64NW-aYzOShfE0xXFkmgzNuP3jVEQiAsSj1t8GCN2q6M7756z6mvZQx-5vrU0ZZJWwLjLAlwjBTlpWEy3LlH_1KjB0kykdUaz6xpAfzYZRw7F_CedfOol-izV_w_s' },
                 { title: 'Corte Completo', desc: 'Incluye baño, secado, corte de pelo y uñas.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWhIju1tkjcw7cH6yXbvMExqm1mMbNeAAyD3SObsCtNtE9rwWIOaG4y-IymVxqJgOsE1TqZLfSsCw_M-wwUYwXFvSpCdAjZiVE_ft0EQxINFPg3F1GD7xhGvH84mAjqKNfzU406G1_1Yw5Np4COw9rMzL4t-Ob1YW8ht7231ayoALcEKSez5azQrQH3jO0z4hlSnKWQCVXL9LT4c15HsejuGFj22RTBbm2YgTMyMsJ5alLd5yCuoDQbPPNQN4UQH7YBgxXQIZn60o', active: true },
                 { title: 'Tratamiento Antipulgas', desc: 'Protección completa contra pulgas y garrapatas.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkZvNP5h7w7Q683JBA5bsQRSbj-aYkg8f-CsawQStyH2XT0VS2dAIKY_-T3H4hjW96wtNYUJBwlOFC5-tLGbFKds0R1A_jM-TbvcS__dFBq2a1fxTHl9nTCAg74WwmGQi78U8pT95fc1ky1OgkpFjTjb17bKw06coEn_j9OZGpO-z_YTq5Cpvc5iw6464MK1fjanRlY-kX4r9S8TnRxtaLh8uBBC-zmregmB74DO5Gk68woWA3WDJy1cMBrdY65B_RnsPtNmUKEWQ' },
               ].map((opt, i) => (
                 <div key={i} className={`flex flex-col gap-3 p-4 border rounded-xl cursor-pointer transition-all ${opt.active ? 'border-primary bg-primary/10 dark:bg-primary/20' : 'hover:border-primary hover:bg-primary/5 border-gray-200 dark:border-gray-700'}`}>
                    <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg" style={{ backgroundImage: `url('${opt.img}')` }}></div>
                    <div>
                      <p className="text-[#111618] dark:text-white text-base font-medium">{opt.title}</p>
                      <p className="text-[#617c89] dark:text-gray-400 text-sm">{opt.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <h2 className="text-[#111618] dark:text-white text-[22px] font-bold pb-3 pt-10">2. Selecciona tu Mascota</h2>
            <div className="max-w-md">
               <label className="block text-sm font-medium text-[#617c89] dark:text-gray-400 mb-2">Mascotas registradas</label>
               <select className="form-select w-full rounded-lg border-[#dbe2e6] dark:border-gray-700 bg-white dark:bg-background-dark text-[#111618] dark:text-white focus:ring-primary focus:border-primary">
                 <option>Rocky - Golden Retriever</option>
                 <option>Luna - Caniche</option>
                 <option>Max - Pastor Alemán</option>
               </select>
               <button className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                 <span className="material-symbols-outlined text-base">add_circle</span> Añadir nueva mascota
               </button>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
               <button className="h-10 px-6 bg-gray-200 dark:bg-gray-700 text-[#111618] dark:text-white rounded-lg font-bold">Anterior</button>
               <button className="h-10 px-6 bg-primary text-white rounded-lg font-bold">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;