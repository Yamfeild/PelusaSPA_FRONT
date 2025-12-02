import React from 'react';
import { Page } from '../types';

interface Props {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col flex-1 justify-center py-5 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1 gap-12 sm:gap-16">
        
        {/* Hero Section */}
        <section className="w-full @container">
          <div 
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 text-center"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9Vkpeq0p8fEDwt7txPT7IHf6376lo4voKKuLjrdz-YSa92XKnq96nJBTihwCeQgEO3r8mQTvOxBHJ35tW2WZZMn96qB51XgHQgAFHcQBSU2KFdWUkgLTTQh3N-BvozvPVG5OA0IxNhhwxioOiVf6cEkLhw20V83ja9K-Q1-NZ_d8k0W1g0_jYareExMkWzkyPJbQyOFeWyA28npF7H5i4bnb4zjd33L8AYC1wlgDtUGhep5OPdJkt7GXvHbiHoFKrTjrIygNPejI")' }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-tighter sm:text-6xl">El paraíso de tu mejor amigo</h1>
              <p className="text-white/90 text-base font-normal leading-normal sm:text-lg">Descubre nuestros servicios premium de peluquería y spa diseñados para el bienestar y la felicidad de tu mascota.</p>
            </div>
            <button onClick={() => onNavigate(Page.BOOKING)} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
              <span className="truncate">Reservar Ahora</span>
            </button>
          </div>
        </section>

        {/* Featured Services */}
        <section className="flex flex-col gap-6">
          <div className="px-4">
            <h2 className="text-[#111618] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Nuestros Servicios Destacados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvqHdQ8MBWVBMAWTDH_Pc6OxF8mSTqKoMu7aBqaf_FHh8Wg4i_tNSq88rFYAYRlHAOc8RS_Vz5xznAKR5jOosNKkcfcmgEcnD9bscBtBqzXcWVgijvQF8wN7tqGZl6QoFiqBGusRrVx_FiRFyMeUnnVPF5cL_41ZKSTAcpLxkcVWNkwZ9cpI10XtzV9T366aqInPYaUK6syFZc8U6tdoaL_28YR12fItPE8rFYnDf-8opU9Du8uGVBtHb4i7OKCcmqgvClvbcOMhY")' }}></div>
              <div>
                <p className="text-[#111618] dark:text-white text-lg font-bold leading-normal">Baño y Secado</p>
                <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">Una limpieza profunda con productos naturales que dejan el pelaje suave y brillante.</p>
              </div>
            </div>
             {/* Card 2 */}
             <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCy7UGhNkT5__lVhh9g-AyP7E06Td9KGrjs6J-N-bqJBvZCCLa4nDH-gByihaVdlcd6tqyX4dGlEOjwDEb3ZVtx_AFFW2cg6ZzDnim2NaZBd_SoJ-u34dHOc-wNruCM6KFtu7CmlQhg-lymjugfDJagQeKnN1k9t-RhwiFFvnPE4pS9TA6dkJsM69dA0ucwSIDhEWZZpazrkMQJRev8SyfWm20UgcZNb6IrKVascj7LjuhCVStPqsxNodcyvcmYuU7Jny9n-ACnDas")' }}></div>
              <div>
                <p className="text-[#111618] dark:text-white text-lg font-bold leading-normal">Corte de Estilo</p>
                <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">Cortes modernos y personalizados realizados por nuestros estilistas expertos.</p>
              </div>
            </div>
             {/* Card 3 */}
             <div className="flex flex-col gap-3 pb-3">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5B1U4qTW2e1_D7NpPCvVr_Ge3iyJQHDhzCPQyATmzSTW90mwuV5JwfIWTDAEdqW-0E6ClSR04jSOxqQFGQz7ZpBji_Q7-XeOr8dopA4Tovp-9MGi2Zx6z50RG-PUitpAekXCDlgtgM3tl3CDUOQ9dg1cQmd9k9dtttybQz0jpGLxIR8i8hUgrLm9mf6pzde6EpumpLUR0hEtvaycTg8KvM56c89eOuut1ylksDBuRdimvXP2kO-hd8zDOCI2HlM8Iy_52FTnbkOA")' }}></div>
              <div>
                <p className="text-[#111618] dark:text-white text-lg font-bold leading-normal">Tratamiento de Spa</p>
                <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">Relajación total con masajes y tratamientos especiales para la piel y el pelo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="flex flex-col gap-8 p-4 bg-white dark:bg-background-dark/50 rounded-xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#111618] dark:text-white text-3xl font-bold leading-tight tracking-tight max-w-[720px]">¿Por qué elegir PelusaSpa?</h2>
            <p className="text-[#617c89] dark:text-gray-400 text-base font-normal leading-normal max-w-[720px]">Ofrecemos una experiencia única para tu mascota, combinando profesionalismo, cariño y los mejores productos del mercado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 shadow-sm">
              <div className="text-primary"><span className="material-symbols-outlined text-4xl">content_cut</span></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111618] dark:text-white text-base font-bold leading-tight">Expertos Estilistas</h3>
                <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">Nuestro equipo está altamente cualificado para cuidar y embellecer a tu perro.</p>
              </div>
            </div>
            {/* ... other items ... */}
             <div className="flex flex-col flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 shadow-sm">
              <div className="text-primary"><span className="material-symbols-outlined text-4xl">eco</span></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111618] dark:text-white text-base font-bold leading-tight">Productos Naturales</h3>
                <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">Solo usamos productos orgánicos y seguros para la piel sensible de tu mascota.</p>
              </div>
            </div>
             <div className="flex flex-col flex-1 gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark p-6 shadow-sm">
              <div className="text-primary"><span className="material-symbols-outlined text-4xl">favorite</span></div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#111618] dark:text-white text-base font-bold leading-tight">Ambiente Sin Estrés</h3>
                <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">Hemos creado un espacio tranquilo y amigable para que tu perro se sienta como en casa.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;