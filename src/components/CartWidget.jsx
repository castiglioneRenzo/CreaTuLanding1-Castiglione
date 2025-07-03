'use client'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router';

function CartWidget() {
  const { getQuantityTotal, getItems } = useContext(CartContext);
  const items = getItems != null ? getItems() : [];
  const navigate = useNavigate();

  let cartItemsContent;
  if (items.length > 0) {
    cartItemsContent = (
      <>
      {items.map((item) => (
        <li key={item.id}>
        <a className="flex items-center gap-2">
          <img src={item.image} alt={item.title} className="w-8 h-8 rounded" />
          <span>{item.title}</span>
          <span className="text-sm text-gray-500">x{item.quantity}</span>
        </a>
        </li>
      ))}
      <div className="divider"></div>
      <li>
        <span
        className="text-gray-500"
        onClick={() => navigate('/cart')}
        >
        Ir al Carrito
        </span>
      </li>
      </>
    );
    } 
    else {
    cartItemsContent = (
      <li>
        <span className="text-gray-500">No items in cart</span>
      </li>
    );
  }

  return (
    <div>
      <button
        type="button"
        className="btn relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
        popoverTarget="cart-dropdown"
        style={{ anchorName: "--anchor-1" }}
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <div className="relative">
          <ShoppingCartIcon className="h-8 w-8 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {getQuantityTotal() > 0 ? getQuantityTotal() : 0}
          </span>
        </div>
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="cart-dropdown"
        style={{ positionAnchor: "--anchor-1" }}
      >
        {cartItemsContent}
      </ul>
    </div>
  );
}
export default CartWidget;