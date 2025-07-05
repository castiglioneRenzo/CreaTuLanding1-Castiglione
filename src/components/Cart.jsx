import { useNavigate } from "react-router";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function Cart() {
const { getItems, clearCart, getTotalPrice } = useContext(CartContext);
const navigate = useNavigate();


return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="bg-base-100 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-base-content">Carrito de Compras</h1>
            <p className="text-base-content">Aquí se mostrarán los productos agregados al carrito.</p>
            <ul className="list bg-base-100 rounded-box shadow-md mt-4 text-lg">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Artículos en Carrito de Compras</li>
                {
                getItems().length === 0 ? (
                    <div className="text-center p-4">
                        <p className="text-base-content">Todavía no hay productos en el carrito.</p>
                    </div>
                )
                :
                (
                    <>
                    {getItems().map((item) => (
                    <li key={item.id} className="list-row">
                        <div>
                            <img className="size-10 rounded-box" src={item.image} alt={item.title} />
                        </div>
                        <div>
                            <div className="text-base-content">{item.title}</div>
                            <div className="text-xs uppercase font-semibold text-base-content">$ {(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                        <button className="btn btn-square btn-ghost disabled">
                            {item.quantity}
                        </button>
                    </li>
                    ))}
                    <div className="divider"></div>
                    <li key='total' className="list-row">
                        <div className="text-base-content">Total</div>
                        <div className="text-base-content">$ {getTotalPrice().toFixed(2)}</div>
                    </li>
                    </>
                )
                }
            </ul>
            {
                getItems().length !== 0 ? (
                    <div className="mt-6">
                        <button className="btn btn-primary w-full"
                                onClick={() => navigate('/checkout') }
                        >
                            Proceder al Pago
                        </button>
                    </div>
                ) :
                (
                <div className="mt-6">
                    <button className="btn btn-primary w-full btn-disabled" tabIndex="-1" role="button" aria-disabled="true">Proceder al Pago</button>
                </div>
                )
            }
            <div className="mt-4">
                <button className="btn btn-secondary w-full" onClick={() => {
                    alert('Carrito limpiado');
                    clearCart();
                    }
                }>
                    Limpiar Carrito
                </button>
            </div>
        </div>
    </div>
);
}

export default Cart;