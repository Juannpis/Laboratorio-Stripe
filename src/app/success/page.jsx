// app/success/page.jsx
'use client'; // Asegúrate de que el componente se ejecute en el cliente

import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/pricing'); // Redirige a la ruta /pricing
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6">
      <div className="text-center max-w-lg">
        {/* Imagen de League of Legends */}
        <img 
          src="https://gamersrd.com/wp-content/uploads/2024/07/Cientificos-nombran-nueva-especie-en-honor-a-un-campeon-de-League-of-Legends.jpg" 
          alt="League of Legends" 
          className="rounded-lg shadow-lg mb-8" 
        />

        <h1 className="text-4xl font-bold mb-4">¡Compra Exitosa!</h1>
        <p className="text-lg mb-6">Tu compra se ha completado correctamente. ¡Gracias por tu compra!</p>
        
        {/* Botón estilizado */}
        <button 
          onClick={handleRedirect} 
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-600 transition-colors duration-300 shadow-lg"
        >
          Ir a Pricing
        </button>
      </div>
    </div>
  );
}



