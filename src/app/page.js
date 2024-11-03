// pages/index.js
"use client"
import Link from 'next/link';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">Welcome to Our Marketplace!</h1>
      </div>
    </div>
  );
}
