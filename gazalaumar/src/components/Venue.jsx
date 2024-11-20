import React from 'react';
import hall from '../assets/hall.jpg'

const Venue = () => {
  return (
    <section   
      id="venue"  
      className="py-20 mt-20 bg-gray-100 text-center flex justify-center items-center relative bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url(${hall})` }} // Use the imported image as background
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">VENUE</h2>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">MADINA GARDEN</h1>
        <p className="max-w-2xl mx-auto text-white text-lg sm:text-xl mb-8">
          Near Chiragiya Madarsa <br />Amba Vihar <br /> Muzaffarnagar
        </p>
        <p className="text-white text-xl sm:text-2xl italic font-semibold">
          "A celebration of love, laughter, and happily ever after."
        </p>
      </div>
    </section>
  );
};

export default Venue;
