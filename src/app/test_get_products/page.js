"use client";

import React, { useState, useEffect } from "react";

export default function TestPage() {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener datos
  const getData = async () => {
    try {
      const res = await fetch("/api/get_user_products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "hola" }), // Stringificar el cuerpo
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

  // Llamar a `getData` al cargar el componente
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Resultados</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Mostrar datos obtenidos
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

