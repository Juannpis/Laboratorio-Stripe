import { Stripe } from 'stripe';
import ButtonCheckout from '../components/ButtonCheckout';

async function loadPrices() {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const pricesData = await stripe.prices.list();

    // Mapear los precios para incluir los nombres y las imágenes de los productos
    const pricesWithProductNames = await Promise.all(
        pricesData.data.map(async (price) => {
            const product = await stripe.products.retrieve(price.product);
            return {
                id: price.id,
                unit_amount: price.unit_amount,
                currency: price.currency,
                productName: product.name,
                image: product.images[0] 
            };
        })
    );
    return pricesWithProductNames;
}

async function PricingPage() {
    const prices = await loadPrices();

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Últimas Skins Agregadas</h1>
                <p className="text-gray-600 mt-2">Descubre nuestras mejores ofertas</p>
            </header>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {prices.map((price) => (
                    <div
                        key={price.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={price.image}
                            alt={price.productName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700 truncate">
                                {price.productName}
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Precio: ${(price.unit_amount / 100).toFixed(2)} {price.currency.toUpperCase()}
                            </p>
                            <div className="mt-4">
                                <ButtonCheckout
                                    priceId={price.id}
                                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingPage;
