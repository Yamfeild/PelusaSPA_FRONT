import React from 'react';

const Store: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 xl:w-1/5 space-y-8">
          {/* Search */}
          <div>
             <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-gray-500 dark:text-gray-400 flex bg-white dark:bg-background-dark items-center justify-center pl-4 rounded-l-lg border border-gray-200 dark:border-gray-700 border-r-0">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-l-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark h-full placeholder:text-gray-500 px-2" placeholder="Buscar productos..." />
                </div>
             </label>
          </div>
          
          {/* Categories */}
          <div>
            <h2 className="text-xl font-bold leading-tight pb-3 text-gray-900 dark:text-white">Categorías</h2>
            <div className="space-y-1">
              {['Shampoos y Cuidado', 'Collares y Accesorios', 'Snacks y Premios', 'Juguetes'].map((cat, i) => (
                <label key={i} className="flex items-center gap-x-3 py-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox h-5 w-5 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary" defaultChecked={i===0} />
                  <p className="text-base font-normal">{cat}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h2 className="text-xl font-bold leading-tight pb-3 text-gray-900 dark:text-white">Rango de Precio</h2>
            <div className="relative pt-1">
              <input type="range" min="0" max="100" className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                <span>$0</span>
                <span>$100+</span>
              </div>
            </div>
          </div>

          <button className="w-full h-11 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
            Aplicar Filtros
          </button>
        </aside>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4 xl:w-4/5">
          <div className="flex flex-wrap justify-between items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-800">
            <p className="text-4xl font-black text-gray-900 dark:text-white">Productos para tu Mascota</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Ordenar por:</span>
              <select className="form-select rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark text-sm">
                <option>Recomendados</option>
                <option>Precio: Menor a Mayor</option>
                <option>Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 pt-8">
            {[
              { title: 'Shampoo Hipoalergénico', price: '$15.99', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLCRzIbTVuQFpvDkS9DVdyv5aOpARr7CIqtZ-aBhz_1LuLhPzt2Y8eu9ar7Sogjk3Acpk0tDePAC0LBSeChGBdtgdoBuHPhp70DSR2naP1Sqp1fLPLYBqS85FE_yiWllGkjMtRC7FEuXJDoDFeVbsudj9bKCknl2jaTQIXVU8Pk3p5ZpXpOwarkc1xRxSCtfm6HCxHaopcGuC74-YIDYngp2ALaBKvqeJpsdCGrlvxJA5-SMM6H-2dNtJJ-tNgD70oWt6IV5QBvN8' },
              { title: 'Juguetes Interactivos', price: '$22.50', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD52Hm_-uvoxo7UC2UTzrYph3gItYO6zLrrwnnas8Dw5ODKfWsStsyat-de9g4SnsS-Y82cwjD9XsIbRUZ3p0Vqf6v_-FINaC8sN-_kwpKb_oqusPHHIVInIT8gGSdQukD8LMELpa_FTh1OLCQyfIr4vC6nTT79-2h9yuRHyt3TU2949kJehdHchvDodpUAf6d70G9u3mG9omLIRrlUOAmFGIjZbD5ol3eEDVeoFhq_3EAU-jMRy3mRSJgUepLHp-bYTfO0YBL3BJA' },
              { title: 'Collar de Cuero Premium', price: '$35.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBkVLupXQeoW4SWscvWicJSf46Za85c66whDdQ-8qmkKOb519u9D-3nAFNFSj2nAj5LUyUbauqqSGqsC5QS1bJJaJPCyqKfA1ft8ZjGtJBviI56lGRS3UFQGe3drWnkuR18pa5yfInH0bQX9UWyHgperR5dZ1WMydUijVI2VnMDAfs_Dlww0TzqjB6CoHyzYK7g5b7F2MK3e7QEJcOll4FVjUGfmaj1ribi15iGvghwlw3IAsZyE0InRh06X04s02LISC4ABc1I0Y' },
              { title: 'Snacks Naturales de Pollo', price: '$9.99', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5AxbzDdHFs8mrcJtNxf7EHLnwM9Vzml_zITbgFkqzCKTz3xK9VzPhDm2tQfmGd0bBFKM0Ip2GKX_nTwniR5kMaef2rNCZ-4PKccyvJaO8UMSNE0lJr7YZrgwAS_SUnAxxJ6VzmRa-m_aPg4MEd3KPgeWOF8JaWemFEt_073624nIjZIrqSp3KXFF9-Zato2z2Dr8fUO1SBdIX99qFFVGXUn25lQiHZTwj8o6iRFSiezW4u8BcJgwxWdphkZZhEtCgoydAjtRsWlQ' },
              { title: 'Cama Acolchada Suave', price: '$49.90', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWse2bZkU6iJvd72PGtQsq152t_uI9J4uf2ITjuFIb2aTWPP0n65r_IKGok5o4_XgAUKRfbdj0da_sSLsEz6cMEi4aaGQaNrHgT4xs5QmKvWb4f2dYXVnbHbwAUsHK4jNQQPckefveYkjhWXhZW9El0uRIQQm1OA3Tq5YstSOpv1jKE6zMq6tLmj_6D6PYGGBq-QiWufVBcLyg85KVR3AS2WUGAfrnUm0tH_shAawcziwYQvh51fNCdwOt4xftW0cBcVSSP0aoC2o' },
              { title: 'Comedero Doble de Acero', price: '$18.75', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1Vbnm5x6xv7jE_vDYVHjzMwgkosCUA8LuOv1KfmFtzVuwjUagBl-imb1POjScq2clXZs6G-czXsataJZFAN-9w3AvtO5vwBYF1OJZzztVN7M8Ro43Aka2MEpSm4ptRYfKCyhasuMqtHchkdxQ8VUrLzrtGxrYFxhDiUYTCSvVEXJ2znn29u5AwF-c625c5naCDwA2P8OpBmp7YDHGL8s6IgveNuurDzZZerfL_kHx2OIewnCbLZUAa1GAcWynyP6an9HFzLYr3qo' }
            ].map((prod, i) => (
              <div key={i} className="bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group">
                <div className="relative overflow-hidden">
                  <img src={prod.img} alt={prod.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{prod.title}</h3>
                  <p className="text-xl font-black text-gray-900 dark:text-white mt-auto mb-4">{prod.price}</p>
                  <button className="w-full flex items-center justify-center gap-2 h-11 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;