import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center md:text-left">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm">
            We are a leading online retailer, providing a wide range of products for all your needs.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Customer Service</h2>
          <ul className="text-sm">
            <li><a href="/help">Help &amp; FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/returns">Returns &amp; Exchanges</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Shop</h2>
          <ul className="text-sm">
            <li><a href="/products">All Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/deals">Deals &amp; Promotions</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <ul className="text-sm">
            <li><a href="/social/facebook">Facebook</a></li>
            <li><a href="/social/twitter">Twitter</a></li>
            <li><a href="/social/instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs">&copy; {new Date().getFullYear()} Amazon-style Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
