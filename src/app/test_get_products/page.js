"use client";

import React, { useState, useEffect } from "react";

export default function TestPage() {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isDeleting, setIsDeleting] = useState(false); // Estado para controlar la acción de eliminar


  // Función para obtener datos
  const getData = async () => {
    try {
      const token = localStorage.getItem("token")
      const user = localStorage.getItem("user")

      const res = await fetch("/api/get_user_products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          "user": user,
          "token": token
        })
      });

      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
      }

      const jsonData = await res.json();
      setData(jsonData); // Almacenar los datos obtenidos en el estado
    } catch (err) {
      setError(err.message); // Manejar errores
    }
  };

  // Función para eliminar un producto
  const deleteProduct = async (title) => {
    setIsDeleting(true);
    try {
      const res = await fetch("/api/delete_user_product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "title": title,
          "token": localStorage.getItem("token"),
          "user": localStorage.getItem("user")
          }),
      });

      if (!res.ok) {
        throw new Error(`Error al eliminar producto: ${res.status}`);
      }

      // Eliminar el producto localmente después de una respuesta exitosa
      setData((prevData) => ({
        ...prevData,
        products: prevData.products.filter((product) => product.title !== title),
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Lista de Productos
        </h1>
        {error && (
          <div className="bg-red-100 text-red-800 p-4 rounded-md">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}
        {!data ? (
          <p className="text-gray-600 text-center animate-pulse">Cargando datos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  {product.image && typeof product.image === "string" ? (
                    <img
                      src={`http://localhost:3000/uploads/${product.image}`}
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">Sin imagen</span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {product.description || "Sin descripción"}
                </p>
                <p className="text-blue-500 font-semibold">${product.price}</p>
                <button
                  onClick={() => deleteProduct(product.title)}
                  className={`mt-4 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 ${
                    isDeleting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isDeleting}
                >
                  {isDeleting ? "Eliminando..." : "Eliminar"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

