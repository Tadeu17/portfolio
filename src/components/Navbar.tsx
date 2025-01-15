import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <div className="text-xl font-bold text-gray-800">My Logo</div>
      <ul className="flex space-x-6 text-gray-700">
        <li>
          <a href="#about" className="hover:text-blue-600">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
