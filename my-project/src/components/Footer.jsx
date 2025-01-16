import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate();
  const start=()=>{
    navigate('/hire')
  }
  return (
    <div className="bg-gray-900 py-8 text-center border-t border-gray-800 mt-900">
      <h2 className="text-2xl font-semibold">Wanna work together?</h2>
      <p className="text-gray-400 mt-2 mb-4">Promise you that I'll reply back within 24 hours.</p>
      <button onClick={start}className="bg-orange-500 text-black px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition">
        Lets Start
      </button>
    </div>
  );
};



      
             
          
     

      <Footer />
  


export default Footer