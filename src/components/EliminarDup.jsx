import React, { useState } from 'react';
import { getUniqueProductosByTitle } from '../firebase/db'; // Asegúrate de que esta función esté definida en tu archivo db.js

const LimpiarProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleClick = async () => {
    setLoading(true);
    setMensaje("");
    try {
      const productosUnicos = await getUniqueProductosByTitle();
      setProductos(productosUnicos);
      setMensaje(`Productos únicos cargados. Se eliminaron duplicados si había.`);
    } catch (error) {
      console.error(error);
      setMensaje("Ocurrió un error al limpiar productos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Procesando..." : "Eliminar duplicados"}
      </button>

      {mensaje && <p className="mt-4">{mensaje}</p>}

      {productos.length > 0 && (
        <ul className="mt-4">
          {productos.map((p) => (
            <li key={p.id}>
              {p.title} (ID: {p.id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LimpiarProductos;
