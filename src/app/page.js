"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

// Translations object
const translations = {
  en: {
    welcome: "Welcome to Our Marketplace!",
    description: "Find amazing deals on products across various categories.",
    featured: "Featured Items",
    newArrivals: "New Arrivals",
    discounted: "Discounted Items",
  },
  es: {
    welcome: "¡Bienvenido a nuestro Mercado!",
    description: "Encuentra ofertas increíbles en productos de varias categorías.",
    featured: "Artículos Destacados",
    newArrivals: "Nuevas Llegadas",
    discounted: "Artículos con Descuento",
  },
  fr: {
    welcome: "Bienvenue sur notre marché!",
    description: "Trouvez des offres incroyables sur des produits dans diverses catégories.",
    featured: "Articles en vedette",
    newArrivals: "Nouveaux Arrivages",
    discounted: "Articles en Promotion",
  },
};

const MarketplaceHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [language, setLanguage] = useState("en"); // Default language is English
  const router = useRouter();

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const featuredItems = [
    {
      id: 1,
      name: "Smartphone",
      price: "$499.99",
      description: "A cutting-edge smartphone with all the latest features.",
      ranking: 4.5,
      img: "https://ventaselectronicas.cl/wp-content/uploads/2024/08/NOVA-Y60.png", // Web image URL
    },
    {
      id: 2,
      name: "Used Laptop",
      price: "$99.99",
      description: "It died during my operating system class",
      ranking: 4.2,
      img: "https://preview.redd.it/old-laptop-v0-4cj6dli8q5id1.jpeg?auto=webp&s=b839283e028bd9107a205ae44f8d8a63b37fe78a", // Web image URL
    },
    {
      id: 3,
      name: "Used TV control",
      price: "$10.99",
      description: "Only works with chinese TV's.",
      ranking: 4.8,
      img: "https://i.ebayimg.com/images/g/mBQAAOSwxQ1iDqSE/s-l400.jpg", // Web image URL
    },
  ];

  const newItems = [
    {
      id: 4,
      name: "Gaming Headset",
      price: "$79.99",
      description: "Immerse yourself in games with high-quality audio.",
      ranking: 4.3,
      img: "https://i.ebayimg.com/images/g/JnkAAOSw-5Vil62Q/s-l400.jpg", // Web image URL
    },
    {
      id: 5,
      name: "Gaming Microphone",
      price: "$39.99",
      description: "Slightly old, but still works like a charm.",
      ranking: 4.7,
      img: "https://i.redd.it/vs5xt4v43yk71.jpg", // Web image URL
    },
    {
      id: 6,
      name: "Desk Lamp",
      price: "$29.99",
      description: "Brighten your workspace with this modern desk lamp.",
      ranking: 4.1,
      img: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/60a1dbc90e2403598c37670b/5cf3c803811cd91fa6db.jpg/fit=cover,w=800,h=800", // Web image URL
    },
  ];

  const discountedItems = [
    {
      id: 7,
      name: "Noise Cancelling Headphones",
      originalPrice: "$299.99",
      discountedPrice: "$199.99",
      description: "Experience superior sound quality and noise cancellation.",
      ranking: 4.6,
      img: "https://di2ponv0v5otw.cloudfront.net/posts/2023/04/22/644450d3046d74f98975742a/m_wp_644450e791e0538db84d4ba6.webp", // Web image URL
    },
    {
      id: 8,
      name: "Office Chair",
      originalPrice: "$249.99",
      discountedPrice: "$179.99",
      description: "Ergonomic and comfortable office chair for long hours.",
      ranking: 4.4,
      img: "https://i.ebayimg.com/images/g/PhAAAOSwY99jZDp6/s-l400.jpg", // Web image URL
    },
    {
      id: 9,
      name: "Personal Fan",
      originalPrice: "$10.00",
      discountedPrice: "$4.99",
      description: "It saved me from many hot summers",
      ranking: 4.7,
      img: "https://www.thespruce.com/thmb/1vRDJD9EQT6Ksemfs0DHCOAdysA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spr-shark-flexbreeze-fan-test-jenica-currie-8-c9ea69d28a73470b8bbb7a6188a20159.jpeg", // Web image URL
    },
  ];

  // Fallback image in case the image fails to load
  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RrfUJ2KHwV7syR1UOAugabeOzzr5tYqMhw&s"; // You can use your default image URL here

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = Array(fullStars).fill("★").join("") + (halfStar ? "☆" : "");
    return stars.padEnd(5, "☆"); // Ensure a total of 5 stars
  };

  const { welcome, description, featured, newArrivals, discounted } = translations[language];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">{welcome}</h1>
          <p className="text-lg text-gray-600 mt-2">{description}</p>
        </div>

        {/* Featured Items Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{featured}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                  onError={(e) => e.target.src = defaultImage} // Set default image on error
                />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-yellow-500">{renderStars(item.ranking)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{newArrivals}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                  onError={(e) => e.target.src = defaultImage} // Set default image on error
                />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-yellow-500">{renderStars(item.ranking)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Discounted Items Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{discounted}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {discountedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
                onClick={() => handleClick(item)}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                  onError={(e) => e.target.src = defaultImage} // Set default image on error
                />
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">
                  <span className="line-through">{item.originalPrice}</span> {item.discountedPrice}
                </p>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-yellow-500">{renderStars(item.ranking)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHome;
