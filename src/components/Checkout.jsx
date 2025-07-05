import { useContext } from "react";
import { CartContext } from "../CartContext";

function Checkout() {

    const { getItems, getTotalPrice } = useContext(CartContext);

    return (
    <div className="checkout">
        <h1 className="text-2xl font-bold mb-4">Finalizar compra</h1>
        <p className="text-base-content mb-6">Completa tu compra proporcionando tus datos a continuación.</p>
        {/* Agrega aquí tu formulario de checkout o componentes */}
        <div className="flex flex-col md:flex-row gap-8">
            {/* Formulario */}
            <div className="flex-1">
                <form className="space-y-4 bg-base-200 p-6 rounded-lg shadow">
                    <div>
                        <label className="block mb-1 font-medium">Nombre</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Correo electrónico</label>
                        <input type="email" className="input input-bordered w-full" placeholder="tu@email.com" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Dirección</label>
                        <input type="text" className="input input-bordered w-full" placeholder="Dirección de envío" />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Finalizar compra</button>
                </form>
            </div>
            {/* Divisor */}
            <div className="hidden md:flex flex-col justify-center px-4">
                <div className="w-px h-full bg-base-300"></div>
            </div>
            {/* Carrito */}
            <div className="flex-1">
                <div className="bg-base-200 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Tu carrito</h2>
                    {/* Ejemplo de items */}
                    <ul className="divide-y divide-base-300 mb-4">
                        {getItems().map((item) => (
                            <li className="py-2 flex justify-between" key={item.id}>
                                <span>{item.title}</span>
                                <span>x {item.quantity} $ {(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$ {getTotalPrice().toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Checkout;