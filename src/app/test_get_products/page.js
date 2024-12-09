"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TestPage() {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isDeleting, setIsDeleting] = useState(false); // Estado para controlar la acción de eliminar
  const [isAdding, setIsAdding] = useState(false); // Estado para controlar la acción de agregar
  const [newProduct, setNewProduct] = useState({ title: "", description: "", price: "", image: "" }); // Estado para el nuevo producto

  const [userName, setUserName] = useState("");
  const [validUser, setValidUser] = useState(null);
  const router = useRouter();

  async function check_token_and_user(){
    const token = localStorage.getItem("token");
    const locasStorageUser = localStorage.getItem("user");

    if (token === null || locasStorageUser === null){
      setValidUser(false);
      console.log("token null o user null")
      return
    }
    setUserName(locasStorageUser)
    const res = await fetch("api/verifie_user_token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"user": locasStorageUser, "token": token})
    })

    if (res.ok){
      console.log("res ok")
      setValidUser(true);
    } else {
      console.log("no res ok")
      setValidUser(false)
    }
    
  }



  // Función para obtener datos
  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      const res = await fetch("/api/get_user_products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, token }),
      });

      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
        check_token_and_user(); 
      }

      const jsonData = await res.json();
      setData(jsonData); // Almacenar los datos obtenidos en el estado
    } catch (err) {
      return null
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
          token: localStorage.getItem("token"),
          user: localStorage.getItem("user"),
        }),
      });

      if (!res.ok) {
        check_token_and_user(); 
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

  // Función para agregar un producto
  const addProduct = async () => {
    setIsAdding(true);
    try {
      const res = await fetch("/api/upload_user_product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
          user: localStorage.getItem("user"),
          title: newProduct.title,
          description: newProduct.title,
          price: newProduct.price,
          image: newProduct.image
        }),
      });

      if (!res.ok) {
        check_token_and_user(); 
        throw new Error(`Error al agregar producto: ${res.status}`);
      }

      const addedProduct = {
          title: newProduct.title,
          description: newProduct.title,
          price: newProduct.price,
          image: newProduct.image
        }

      // Actualizar la lista localmente
      setData((prevData) => ({
        ...prevData,
        products: [...prevData.products, addedProduct],
      }));
      setNewProduct({ title: "", description: "", price: "", image: "" }); // Limpiar formulario
    } catch (err) {
      setError(err.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    check_token_and_user(); 
    console.log("user state " + validUser)
    getData();
  }, []);


  if (validUser === false){
    router.push("/login")
    return null
  } else if (validUser === null){
    return (<p>loading ...</p>)
  }


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
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {isAdding ? "Cerrar" : "Agregar Producto"}
          </button>
        </div>
        {isAdding && (
          <div className="bg-white p-6 shadow-md rounded-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Nuevo Producto</h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Título"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className="p-2 border rounded-md"
              />
              <textarea
                placeholder="Descripción"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                className="p-2 border rounded-md"
              ></textarea>
              <input
                type="number"
                placeholder="Precio"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="p-2 border rounded-md"
              />
              <input
                type="file"
                accept="image/*"

                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setNewProduct({ ...newProduct, image: file.name });
                  }
                }}

                className="p-2 border rounded-md"
              />
              <button
                onClick={addProduct}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                {isAdding ? "Guardando..." : "Guardar Producto"}
              </button>
            </div>
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

