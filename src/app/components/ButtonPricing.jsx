'use client'; // Indica que este es un componente de cliente

import { useRouter } from 'next/navigation';

function ButtonPricing() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pricing'); // Redirige a la ruta /pricing
  };

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
      onClick={handleClick}
    >
      Volver a Pricing
    </button>
  );
}

export default ButtonPricing;
