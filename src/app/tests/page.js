"use client"
import React, { useState } from "react";

const Formulario = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      foto: e.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/upload_user_product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      "token": localStorage.getItem("token"),
      "user": localStorage.getItem("user"),
      "title": formData.titulo,
      "description": formData.descripcion,
      "price": formData.precio,
      "image": formData.foto})
    })

    if (res.ok){
      console.log("data sotored"); 
      setFormData({
        titulo: "",
        descripcion: "",
        precio: "",
        foto: null,
      });
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="descripcion">Descripcion:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="foto">Foto:</label>
        <input
          type="file"
          id="foto"
          name="foto"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

