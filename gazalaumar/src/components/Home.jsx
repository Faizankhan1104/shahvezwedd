import React from 'react';
import video from '../assets/video1.mp4';

const Home = () => {
  return (
    <section id="home" className="h-screen sm:h flex items-center justify-center relative">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center text-white px-4 pt-10">
        <h1 className="text-4xl sm:text-9xl md:text-9xl lg:text-8xl font-bold mb-4">
          Gazala Parveen <br /><p className="text-xl sm:text-2xl md:text-3xl pb-4">( D/o Late Mr. Dilshad Saifi ) </p>
           Weds  <br /> Kamar Alam
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl pb-4 font-bold ">( S/o Late M. Altamash Saifi )</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Home;
