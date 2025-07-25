import { useContext } from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { CartContext } from '../CartContext';
import { addDocumentToCollection } from '../firebase/db';


function OrdenCompra(){ 
    // Generar la orden de compra (nombre, email, direccion, items(itemID, cantidad) ) y guardarle en firebase 
    const { getItems, getTotalPrice, clearCart } = useContext(CartContext);
    const location = useLocation();
    const [items_, setItems] = useState([]);
    const [orderID, setOrderID] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [clienteData, setClienteData] = useState({});
    const hasProcessedOrder = useRef(false); // Bandera para evitar doble procesamiento
    
    useEffect(() => {
        // Si ya procesamos la orden, no la procesamos de nuevo
        if (hasProcessedOrder.current) return;
        
        // Obtener datos del state de la navegación
        const { clienteData: cliente, carrito, total } = location.state || {};
        
        const items_ = carrito || getItems() || [];
        setItems(items_);
        setTotalPrice(total || getTotalPrice());
        setClienteData(cliente || {});
        
        const items = [];
        items_.map((item) => {
            // Generar la orden de compra
            items.push({
                itemID: item.id,
                price: item.price,
                quantity: item.quantity
            });
        });
        const order = {
            name: cliente?.nombre || "Nombre del Cliente",
            email: cliente?.email || "Email del Cliente",
            address: cliente?.direccion || "Direccion del Cliente",
            items: items
        };
        
        // Guardar la orden de compra en firebase
            hasProcessedOrder.current = true; // Marcar como procesado PARA EVITAR DUPLICAR REGISTROS EN FIREBASE
            const orderID = addDocumentToCollection("ventas", order);
            setOrderID(orderID);
            // Limpiar el carrito
            clearCart();
    }, [location.state]);

    return (
    <div className="flex flex-col gap-8">
        {/* Datos del Cliente */}
        <div className="bg-base-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Datos del Cliente</h2>
            <div className="space-y-2">
                <p><strong>Nombre:</strong> {clienteData.nombre || '-'}</p>
                <p><strong>Email:</strong> {clienteData.email || '-'}</p>
                <p><strong>Dirección:</strong> {clienteData.direccion || '-'}</p>
            </div>
        </div>
        
        {/* Carrito */}
        <div className="bg-base-200 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Orden de Compra # {orderID}</h2>
            {/* Ejemplo de items */}
            <ul className="divide-y divide-base-300 mb-4">
                {items_.map((item) => (
                    <li className="py-2 flex justify-between" key={item.id}>
                        <span>{item.title}</span>
                        <span>x {item.quantity} $ {(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$ {totalPrice.toFixed(2)}</span>
            </div>
        </div>
    </div>
    );
}

export default OrdenCompra;