// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-3xl mx-auto flex justify-between">
          <div className="text-xl font-bold">Marketplace</div>
          <div>
            <Link href="/" className="mr-4 hover:text-gray-300">Home</Link>
            <Link href="/profile" className= "mr-4 hover:text-gray-300">Profile</Link>
            <Link href="/login" className="hover:text-gray-300">Login</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Our Marketplace!</h1>
      </div>
    </div>
  );
}
