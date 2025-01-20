import React from 'react';
import {Link}from 'react-router-dom'

function Navbar() {
  return (
    
<nav className="bg-gray-600 text-white p-6  fixed top-0 left-0 right-0 z-50 bg-black text-white p-6" > 
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-3xl font-bold">KJ</h1> 
    <div className="flex space-x-4"> 
      <Link to="/" className="hover:text-gray-200 text-xl">Home</Link>
      <Link to="/projects" className="hover:text-gray-200 text-xl">Work</Link>
      <Link to="/about" className="hover:text-gray-200 text-xl">About</Link>
      <Link to="/hire" className="hover:text-gray-200 text-xl">Hire me</Link>
    </div>
    
  </div>
</nav>



  );
}

export default Navbar;