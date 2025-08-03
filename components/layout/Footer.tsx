// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-12">
      <div className="container mx-auto text-center">
        <p>© 2025 ALX Listing App. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;