import { CartContext } from "../CartContext";
import { useContext, useEffect } from "react";

function Cart() {
const { getItems, clearCart, addToCart } = useContext(CartContext);


return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-base-300">Carrito de Compras</h1>
            <p className=" text-base-300">Aquí se mostrarán los productos agregados al carrito.</p>
            {/* Aquí puedes agregar más lógica para mostrar los productos del carrito */}
            <ul className="list bg-base-100 rounded-box shadow-md mt-4 text-lg ">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Artículos en Carrito de Compras</li>
                
                {
                getItems().length === 0 ? (
                    <div className="text-center p-4">
                        <p className="text">Todavía no hay productos en el carrito.</p>
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
                            <div>{item.title}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">$ {item.price * item.quantity}</div>
                        </div>
                        <button className="btn btn-square btn-ghost" onClick={() => alert('Producto agregado')}>
                            -
                        </button>
                        <button className="btn btn-square btn-ghost disabled">
                            {item.quantity}
                        </button>
                        <button className="btn btn-square btn-ghost" onClick={() => alert('Producto eliminado')}>
                            +
                        </button>
                    </li>
                    ))}
                    <div className="divider"></div>
                    <li key='total' className="list-row">
                        <div className="text">Total</div>
                        <div className="text">$ {getItems().reduce((total, item) => total + (item.price * item.quantity), 0)}</div>
                    </li>
                    </>
                )
                }


            {/* Iniciar la compra */}
            </ul>
            {
                getItems().length != 0 ? (
                    <div className="mt-6">
                        <button className="btn btn-primary w-full">Proceder al Pago</button>
                    </div>
                ) : 
                (
                <div className="mt-6">
                    <button className="btn btn-primary w-full btn-disabled" tabIndex="-1" role="button" aria-disabled="true">Proceder al Pago</button>
                </div>
                )
            }
            {/* limpiar carrito */}
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