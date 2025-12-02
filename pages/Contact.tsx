import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center mb-12 lg:mb-16">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111618] dark:text-white sm:text-5xl lg:text-6xl">Contáctanos</h1>
        <p className="mt-4 text-[#617c89] dark:text-gray-400 text-lg font-normal leading-normal">Estamos aquí para ayudarte. Rellena el formulario o utiliza nuestros datos de contacto.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Form */}
        <div className="lg:col-span-3 bg-white dark:bg-background-dark/50 p-6 sm:p-8 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-2xl font-bold mb-6 dark:text-white">Enviar un mensaje</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <p className="text-base font-medium leading-normal pb-2 dark:text-gray-300">Nombre</p>
                <input type="text" className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-[#111618] dark:text-white h-12" placeholder="Tu nombre completo" />
              </label>
              <label className="flex flex-col">
                <p className="text-base font-medium leading-normal pb-2 dark:text-gray-300">Email</p>
                <input type="email" className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-[#111618] dark:text-white h-12" placeholder="tu.correo@ejemplo.com" />
              </label>
            </div>
            <label className="flex flex-col">
              <p className="text-base font-medium leading-normal pb-2 dark:text-gray-300">Asunto</p>
              <input type="text" className="form-input w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-[#111618] dark:text-white h-12" placeholder="¿En qué podemos ayudarte?" />
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium leading-normal pb-2 dark:text-gray-300">Mensaje</p>
              <textarea className="form-textarea w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 text-[#111618] dark:text-white min-h-36 p-4" placeholder="Escribe tu consulta aquí..."></textarea>
            </label>
            <button className="w-full h-12 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-background-dark/50 p-6 sm:p-8 rounded-xl shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-200/50 dark:border-gray-700/50">
             <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-2L8JK9lvAIQ07gXJUYwFPJiAOs4dQJXXNh0fKUtkFVoM6mALukGpLHWgS_HMZ-u4Iiw3SIY4ymY2vhVzEPlZe2cbFxyEwDKIFB8W8382BkQ-Xbt1AxNG-8beY_DgrZYpFDd5qiFgLy3YUyph1yD4TTXQNcokNMkuJ4ZK21nE_BrFMKPbokiSDtB8d-eQnn2vrJ9sgp6elJSQ-xpbHKNBNx_idQvWs9_Czq4zzxH8jCmtGPCUaQKcibf_ru3swP-Qh-ZfDqeK7ak" alt="Map" className="w-full h-full object-cover" />
             </div>
             <div className="space-y-4">
                {[
                  { icon: 'location_on', title: 'Ubicación', text: 'Av. Siempre Viva 742, Ciudad Ejemplo' },
                  { icon: 'schedule', title: 'Horarios', text: 'Lunes a Sábado: 9:00 - 18:00' },
                  { icon: 'call', title: 'Teléfono', text: '+123 456 7890' },
                  { icon: 'mail', title: 'Email', text: 'contacto@pelusaspa.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1">{item.icon}</span>
                    <div>
                      <h4 className="font-bold dark:text-white">{item.title}</h4>
                      <p className="text-[#617c89] dark:text-gray-400">{item.text}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;