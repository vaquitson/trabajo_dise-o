"use client"
import Navbar from '@/components/Navbar';


const MarketplaceHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center px-4 py-8">

        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black">Welcome to Our Marketplace!</h1>
          <p className="text-lg text-gray-600 mt-2">Find amazing deals on products across various categories.</p>
        </div>

        {/* Categories Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shop by Categories</h2>
          <div className="flex justify-center space-x-8">
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Electronics" className="w-32 h-32 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Electronics</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Clothing" className="w-32 h-32 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Clothing</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Books" className="w-32 h-32 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Books</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md text-center">
              <img src="https://via.placeholder.com/150" alt="Furniture" className="w-32 h-32 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Furniture</h3>
            </div>
          </div>
        </div>

        {/* Featured Items Section */}
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Item 1" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Smartphone</h3>
              <p className="text-gray-600">$499.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Item 2" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Winter Jacket</h3>
              <p className="text-gray-600">$99.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Item 3" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Bookshelf</h3>
              <p className="text-gray-600">$129.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Item 4" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Laptop</h3>
              <p className="text-gray-600">$799.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Item 5" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Coffee Maker</h3>
              <p className="text-gray-600">$49.99</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src="https://via.placeholder.com/300x200" alt="Item 6" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Air Purifier</h3>
              <p className="text-gray-600">$199.99</p>
            </div>
          </div>
        </div>

        {/* Popular Search Section */}
        <div className="w-full text-center py-10 bg-blue-50">
          <h2 className="text-2xl font-semibold text-gray-800">Popular Searches</h2>
          <p className="text-lg text-gray-600">Browse products based on popular searches</p>
          <div className="flex justify-center mt-4 space-x-8">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Electronics</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Fashion</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Home & Kitchen</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Books</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHome;
