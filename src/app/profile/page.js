"use client";
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const translations = {
  en: {
    name: "John Doe",
    location: "New York, USA",
    bio: "Seller of unique items",
    contactInfo: "Contact Information",
    email: "Email: johndoe@example.com",
    phone: "Phone: (123) 456-7890",
    experience: "Years of Experience: 5 years",
    about: "I have a passion for unique and vintage items. I strive to provide the best quality products and customer service.",
    addItem: "Add Item",
    yourListings: "Your Listings",
    delete: "Delete",
    edit: "Edit",
    showContact: "Show Contact Info",
    hideContact: "Hide Contact Info",
    itemTitle: "Item Title",
    itemPrice: "Item Price",
    add: "Add",
    update: "Update",
    cancel: "Cancel",
    uploadImage: "Upload Image",
  },
  es: {
    name: "Juan Doe",
    location: "Nueva York, EE.UU.",
    bio: "Vendedor de artículos únicos",
    contactInfo: "Información de contacto",
    email: "Correo electrónico: johndoe@example.com",
    phone: "Teléfono: (123) 456-7890",
    experience: "Años de experiencia: 5 años",
    about: "Tengo una pasión por artículos únicos y vintage. Me esfuerzo por    proporcionar la mejor calidad de productos y atención al cliente.",
    addItem: "Agregar artículo",
    yourListings: "Tus anuncios",
    delete: "Eliminar",
    edit: "Editar",
    showContact: "Mostrar información de contacto",
    hideContact: "Ocultar información de contacto",
    itemTitle: "Título del artículo",
    itemPrice: "Precio del artículo",
    add: "Agregar",
    update: "Actualizar",
    cancel: "Cancelar",
    uploadImage: "Subir imagen",
  },
  fr: {
    name: "Jean Doe",
    location: "New York, États-Unis",
    bio: "Vendeur d'articles uniques",
    contactInfo: "Informations de contact",
    email: "Email: johndoe@example.com",
    phone: "Téléphone: (123) 456-7890",
    experience: "Années d'expérience: 5 ans",
    about: "J'ai une passion pour les articles uniques et vintage. Je m'efforce de fournir la meilleure qualité de produits et de service client.",
    addItem: "Ajouter un article",
    yourListings: "Vos annonces",
    delete: "Supprimer",
    edit: "Modifier",
    showContact: "Afficher les coordonnées",
    hideContact: "Masquer les coordonnées",
    itemTitle: "Titre de l'article",
    itemPrice: "Prix de l'article",
    add: "Ajouter",
    update: "Mettre à jour",
    cancel: "Annuler",
    uploadImage: "Télécharger l'image",
  }
};

export default function ProfilePage() {
  const [language, setLanguage] = useState("en"); // Default language is English
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [listings, setListings] = useState([
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [profilePic, setProfilePic] = useState("/path/to/profile-pic.jpg");
  const [reviews, setReviews] = useState([]); // Reviews state
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const 
  handleDelete = (id) => {
    setListings(listings.filter(item => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setItemTitle(item.title);
    setItemPrice(item.price);
    setItemImage(null); // Reset the image input for editing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: editingItem ? editingItem.id : listings.length + 1,
      title: itemTitle,
      price: itemPrice,
      image: itemImage ? URL.createObjectURL(itemImage) : editingItem?.image, // Use uploaded image or existing image
    };
    if (editingItem) {
      // Update existing item
      setListings(listings.map(item => (item.id === editingItem.id ? newItem : item)));
      setEditingItem(null);
    } else {
      // Add new item
      setListings([...listings, newItem]);
    }
    resetForm();
  };

  const resetForm = () => {
    setEditingItem(null);
    setItemTitle("");
    setItemPrice("");
    setItemImage(null);
  };

  const handleImageChange = (e) => {
    setItemImage(e.target.files[0]); // Set the selected file
  };

  const resetReviewForm = () => {
    setReviewName("");
    setReviewRating("");
    setReviewComment("");
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: reviewName,
      rating: reviewRating,
      comment: reviewComment,
    };
    setReviews([...reviews, newReview]);
    resetReviewForm();
  };


  const user = {
    name: translations[language].name,
    location: translations[language].location,
    bio: translations[language].bio,
  };

  function MyApp() {
    const [language, setLanguage] = useState("en");}
  
  return (
    <div className="bg-gray-100">
     <Navbar setLanguage={setLanguage} language={language} />
      {/* Language Selector */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center p-6 bg-blue-600 text-white">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left sm:ml-6">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-sm text-gray-800">{user.location}</p>
            <p className="mt-2 text-sm sm:text-base text-gray-800">{user.bio}</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))}
              className="mt-3 border p-2 rounded"
            />
          </div>
        </div>

        {/* Contact Information */}
        {showContactInfo && (
          <div className="p-6 border-t bg-gray-50">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{translations[language].contactInfo}</h2>
            <p className="mt-2 text-gray-700">{translations[language].email}</p>
            <p className="mt-1 text-gray-700">{translations[language].phone}</p>
            <p className="mt-1 text-gray-700">{translations[language].experience}</p>
            <p className="mt-1 text-gray-700">{translations[language].about}</p>
          </div>
        )}

        {/* Show Contact Info Button */}
        <div className="p-6 border-t bg-gray-50 text-center">
          <button
            onClick={() => setShowContactInfo(!showContactInfo)}
            className="px-4 py-2 bg-gray-200 text-blue-600 rounded hover:bg-gray-300"
          >
            {showContactInfo ? translations[language].hideContact : translations[language].showContact}
          </button>
        </div>

        {/* Listings Section */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-center sm:text-left text-black">{translations[language].yourListings}</h2>
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col sm:flex-row mb-4">
              <input
                type="text"
                placeholder={translations[language].itemTitle}
                value={itemTitle}
                onChange={(e) => setItemTitle(e.target.value)}
                required
                className="border p-2 mr-2 rounded flex-1 mb-2 sm:mb-0 text-black"
              />
              <input
                type="text"
                placeholder={translations[language].itemPrice}
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)}
                required
                className="border p-2 mr-2 rounded flex-1 mb-2 sm:mb-0 text-black"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="border p-2 rounded flex-1 mb-2 sm:mb-0"
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
                {editingItem ? translations[language].update : translations[language].addItem}
              </button>
              {editingItem && (
                <button onClick={resetForm} className="ml-2 px-4 py-2 bg-red-600 text-white rounded">
                  {translations[language].cancel}
                </button>
              )}
            </div>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {listings.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-xs"
                >
                  {translations[language].delete}
                </button>
                <button
                  onClick={() => handleEdit(item)}
                  className="absolute bottom-2 right-2 bg-yellow-600 text-white rounded-full p-1 text-xs"
                >
                  {translations[language].edit}
                </button>
              </div>
            ))}
          </div>
        </div>
         {/* Review Section */}
         <div className="p-6 border-t bg-gray-50">
          <h2 className="text-xl font-bold mb-4 text-center sm:text-left text-black">Reviews</h2>

          {/* Review Form */}
          <form onSubmit={handleReviewSubmit} className="mb-6">
            <div className="flex flex-col sm:flex-row mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                required
                className="border p-2 mr-2 rounded flex-1 mb-2 sm:mb-0"
              />
              <input
                type="number"
                placeholder="Rating (1-5)"
                value={reviewRating}
                onChange={(e) => setReviewRating(e.target.value)}
                required
                min="1"
                max="5"
                className="border p-2 mr-2 rounded flex-1 mb-2 sm:mb-0"
              />
            </div>
            <textarea
              placeholder="Write your review here..."
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              required
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-center">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                Submit Review
              </button>
            </div>
          </form>

          {/* Display Reviews */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border p-4 rounded-lg bg-white shadow">
                <h3 className="font-bold text-gray-900">{review.name}</h3>
                <p className="text-gray-700">Rating: {review.rating}/5</p>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
