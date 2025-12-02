import React from 'react';
import { Page } from '../types';

interface Props {
  onNavigate: (page: Page) => void;
}

const About: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
       <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
         
         {/* Hero */}
         <div className="@container py-10 sm:py-16">
            <div className="flex flex-col gap-6 px-4 md:flex-row-reverse md:items-center">
               <div 
                 className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:w-1/2 md:aspect-square" 
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr2AWgGQ58iwQeRpqGbG5gOZDexkPSugqkJo42YjL9FsyzaQVeGbwQHbXdtNcsbJHpD6PoNuqDmAxiEy7sPd0OB-fgggxN3uFSpywqe9oHwZIfJWmQtnwr3GcUkeGzdeLmg2IK9PiDUc3wDwoCdU15lRN6hvIcGf-Hdb6VKeCLhukp4r7n_Igk2a186td1M__xDMST9RtlDJWm-aX-G9TrlpdXL-8wYm_8yL3k03WC6SG-S8V5wfe4q4vJg-NgmapnygKGBejn-wg")' }}
               ></div>
               <div className="flex flex-col gap-6 md:w-1/2 justify-center">
                  <div className="flex flex-col gap-2 text-left">
                     <h1 className="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">Conoce a la familia PelusaSpa</h1>
                     <h2 className="text-[#111618] dark:text-white/70 text-base font-normal leading-normal sm:text-lg">Apasionados por el cuidado y bienestar de tu mejor amigo.</h2>
                  </div>
                  <button onClick={() => onNavigate(Page.SERVICES)} className="flex w-fit min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold">
                    Nuestros Servicios
                  </button>
               </div>
            </div>
         </div>

         {/* Story */}
         <div className="px-4 py-10 sm:py-16">
            <h2 className="text-[#111618] dark:text-white text-[22px] font-bold leading-tight pb-3">Nuestra Historia</h2>
            <p className="text-[#111618] dark:text-white/70 text-base font-normal leading-relaxed">PelusaSpa nació de un amor profundo por los animales y el deseo de crear un espacio seguro, profesional y amigable donde cada mascota es tratada como parte de nuestra familia.</p>
         </div>

         {/* Values */}
         <div className="px-4 py-10">
            <h2 className="text-[#111618] dark:text-white text-[22px] font-bold text-center pb-6">Nuestra Misión y Valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { icon: 'favorite', title: 'Bienestar Animal', text: 'La salud y felicidad de tu mascota es nuestra prioridad.' },
                 { icon: 'star', title: 'Excelencia', text: 'Contamos con estilistas certificados y productos de alta gama.' },
                 { icon: 'shield', title: 'Seguridad', text: 'Creamos un ambiente tranquilo y seguro.' }
               ].map((val, i) => (
                 <div key={i} className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-white/10">
                    <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary mb-4">
                       <span className="material-symbols-outlined">{val.icon}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#111618] dark:text-white">{val.title}</h3>
                    <p className="text-sm text-[#111618] dark:text-white/70">{val.text}</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Team */}
         <div className="px-4 py-10">
            <h2 className="text-[#111618] dark:text-white text-[22px] font-bold text-center pb-6">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
               {[
                 { name: 'Ana Pérez', role: 'Groomer Principal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxZpVdhCctLX_lSshhUGE7VqHDQMG034wkTXSm1Zyu1afherXjT_MJaAGOzcpexrJUt5yRZHXiUFSnVDhF0T0g6k1YI4C511NhgfIuhskoti2L1LQtnNTSOpRvn9TxsYUZxpxmGApMk4jiggP5mRm9Z1_lzAn870WUhgB85J8zXBDHkfDPzP2TeMpY-xpS37OWaNgx3CwQBmlwq_KsQJlrYa02X7u4XNiFirm9LDTfnPAzcCmHmwdgESITJJPVv1R6YOUnkfFPSSo' },
                 { name: 'Carlos López', role: 'Especialista en Cortes', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5IT86MFtuFUFFjHcSWISOEqYB_axusB72dvnkbBHHzp42gou5v8IVOo0dORZ_QxowE_MBTib8TLIU0uWpqnr7KZMge4otC4VcrK0lNzjcd4x4EHbcs9efESclcrKHOqmbU8CVR4es1d0nCLnDA3hL9k0CQ1KQ9Yfv7PMFnRimJFpSrNg5isaLD77uwXwSwC0lAq_3LnmQz2_Ht19A_O14XSHJcq0g8vkDq7rcS6WrixNv7zot9lJH-_xkJi11czYQ4BD2LJ0nCfE' },
                 { name: 'Sofía García', role: 'Asistente de Baño', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANpoHjGb4kvtVP1_ESUH6DDNomyYWf18h6Kgc-NGtcB5mf_XbJiVL3VleWnY1o3Wu9iQ1ERdOsmdaU62FHjc_qARKmWrB-8c9pyWmimY8W1v2aqNRU4F2mfDTFxBiuH_wfNXdB6g1_hgc_ZnaAV-njiViKzGmX21SF0PzsxsSFOsHGyWNucgu73JN3RpZHBtGm-W8SH_H-S5zMypFjMy5DAUxw3bIyTC10YdYpoi9zZ-RyqewvsuvC3LGiD8kK42NYzOeW2d6UKCo' }
               ].map((member, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-4 bg-cover bg-center" style={{ backgroundImage: `url('${member.img}')` }}></div>
                    <h3 className="font-bold text-lg text-[#111618] dark:text-white">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                 </div>
               ))}
            </div>
         </div>
       </div>
    </div>
  );
};

export default About;