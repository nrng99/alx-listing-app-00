// components/layout/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">ALX</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-red-500">Rooms</a>
          <a href="#" className="text-gray-600 hover:text-red-500">Mansion</a>
          <a href="#" className="text-gray-600 hover:text-red-500">Countryside</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center border rounded-full px-4 py-2">
          <input type="text" placeholder="Search..." className="outline-none" />
          <button className="text-gray-500"></button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-gray-600 hover:text-red-500">Sign In</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;