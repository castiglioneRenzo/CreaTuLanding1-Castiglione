'use client'
import RatingStars from "./RatingStars";
import RatingHalfStars from "./RatingHalfStars";
import ItemCount from "./ItemCount";
import { Button } from "@headlessui/react";
import { CartContext } from "../CartContext";
import { useContext, useState } from "react";

function capitalizeFirstLetter(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function ItemDetail( { item }) {
//     const features = [
//     { name: 'Categoria', description: item?.category },
//     { name: 'Puntuacion', description: item?.rating?.rate },
// ];
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-base-100">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt={item?.title}
            src={item?.image}
            className="rounded-lg bg-base-200"
          />
        </div>

        <div>
            <h2 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">{item?.title}</h2>
            <div className="divider divider-neutral"></div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"> $ {item?.price} </h2>
            <p className="mt-4 text-base-content">
                {item?.description}
            </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

              <div key="Categoria" className="border-t border-base-200 pt-4">
                <dt className="font-medium text-base-content">Categoría</dt>
                 <dd className="mt-2 text-sm text-base-content">{capitalizeFirstLetter(item?.category)}</dd>
              </div>

              <div key="Puntuacion" className="border-t border-base-200 pt-4">
                <dt className="font-medium text-base-content">Puntuación</dt>
                 <dd className="mt-2 text-sm text-base-content">                    
                    <RatingHalfStars rating={item?.rating?.rate} />
                    {item?.rating?.rate} 
                 </dd>
              </div>

          </dl>
          {/* ItemCount */}
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div key="Cantidad" className="border-t border-base-200 pt-4">
              <dt className="font-medium text-base-content">Cantidad</dt>
                <dd className="mt-2 text-sm text-base-300">
                  <ItemCount count={count} setCount={setCount} />
                </dd>
            </div>
          {/* Boton Agregar al Carrito */}
            <div key="Comprar" className="border-t border-base-200 pt-4">
              <dt className="font-medium text-base-content invisible">.</dt>
                <dd className="mt-2 text-sm text-base-300">
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      addToCart({...item, quantity: count});
                      alert(`Agregado ${count} ${item?.title} al carrito`);
                    }}
                  >
                    Agregar al Carrito
                  </button>
                </dd>
            </div>
          </dl>
        </div>
        
      </div>
    </div>
  )
}

export default ItemDetail;