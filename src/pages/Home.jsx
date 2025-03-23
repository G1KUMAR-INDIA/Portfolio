import React, { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      "https://shorturl.at/UJJ5L",
      "https://shorturl.at/A5B7l",
      "https://shorturl.at/UJJ5L",
      "https://shorturl.at/A5B7l"
    ];
    const interval = 3000;
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    useEffect(() => {
      const slideInterval = setInterval(goToNext, interval);
      return () => clearInterval(slideInterval);
    }, [currentIndex]);
    return (
      <div className="bg-[#495376] ">
        
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0 object-cover h-[700px]"
              />
            ))}
          </div>

          {/* Buttons */}
          <button onClick={goToPrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-80">
            ❮
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-80">
            ❯
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${currentIndex === idx ? "bg-white" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
        <div className="justify-items-center" width="560" height="315">            
            <p className="text-2xl text-red-500">Reddyvari Jeevan Kumar B.Tech(EEE)</p>
            <p className="text-xl text-yellow-600"  >Full Stack Developer(MERN+Python).</p>        
        </div>        
      </div>
      
    );
  };
  
  export default Home;