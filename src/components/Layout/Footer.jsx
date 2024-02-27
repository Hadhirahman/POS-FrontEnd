// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>&copy; 2024 Restaurant POS</p>
          <p>All rights reserved</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <p>Contact Us: support@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
