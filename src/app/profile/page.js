"use client"
import React, { useState } from 'react';

export default function ProfilePage() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const user = {
    name: "John Doe",
    bio: "Seller of unique items",
    location: "New York, USA",
    profilePic: "/path/to/profile-pic.jpg",
    listings: [
      { id: 1, title: "Vintage Camera", price: "$120"},
      { id: 2, title: "Handcrafted Pottery", price: "$45" },
      { id: 3, title: "Antique Chair", price: "$300" },
    ],
  };

  const handleDelete = (id) => {
    console.log(`Deleting item with id: ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center p-6 bg-blue-600 text-white">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left sm:ml-6">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-sm">{user.location}</p>
            <p className="mt-2">{user.bio}</p>
            <button
              onClick={() => setShowContactInfo(!showContactInfo)}
              className="mt-3 px-4 py-2 bg-gray-200 text-blue-600 rounded hover:bg-gray-300"
            >
              {showContactInfo ? 'Hide' : 'Show'} Contact Info
            </button>
          </div>
        </div>

        {/* Listings Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">Your Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {user.listings.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 text-xs"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Profile Info */}
        {showContactInfo && (
          <div className="p-6 border-t bg-gray-50">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="mt-2 text-gray-700">Email: johndoe@example.com</p>
            <p className="mt-1 text-gray-700">Phone: (123) 456-7890</p>
          </div>
        )}
      </div>
    </div>
  );
}
