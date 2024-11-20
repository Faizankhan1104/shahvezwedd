import React from 'react';
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic6.jpg';
import image3 from '../assets/pic.jpg';
import image4 from '../assets/pic4.jpg';
import image5 from '../assets/pic7.jpg';


const Relatives = () => {
  return (
    <section id="relatives" className="py-20 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start">
        {/* Collage of Images */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="grid grid-cols-2 gap-4">
            <img src={image1} alt="Relative 1" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image2} alt="Relative 2" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image3} alt="Relative 3" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image4} alt="Relative 4" className="w-full h-auto rounded-lg shadow-lg" />
            <img src={image5} alt="Relative 5" className="w-full h-auto rounded-lg shadow-lg mt-[-6rem]" />

          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 lg:ml-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Relatives</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            We are excited to celebrate this day with our loved ones, including family and friends who have supported us throughout our journey.
          </p>

          {/* RSVP Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">RSVP</h3>

            <div className="text-gray-700">
              <p>M. Naushad Saifi</p>
              <p>M. Shamshad Saifi</p>
              <p>M. Babbu Saifi</p>
              <p>M. Imran Saifi</p>
              
            </div>

          </div>

          {/* WBCF Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">WBCF</h3>
            <p className="text-gray-700">
              All friends and relatives are welcome to join us in celebrating this wonderful occasion. We cherish every one of you who has been part of our journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relatives;
