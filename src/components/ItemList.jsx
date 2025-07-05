'use client'
import { Link } from "react-router";

function ItemList( { items }) {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Productos</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items.map((product) => (
            <Link 
            to={`/item/${product.id}`}
            key={product.id} className="group">
              <img
                alt={product.title}
                src={product.image}
                className="aspect-square w-full rounded-lg bg-base-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-base-content">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-primary">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;