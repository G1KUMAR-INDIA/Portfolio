import React, { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/485172394_28743793171936094_110492441108540876_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Dcs8DKIgJdYQ7kNvwF0zv7O&_nc_oc=Adl1uXssJ9zij3-SP2xK1BXYGUGT05ZYsbiVw40VNWmQDH6170knmhC5ZwSiemxoOH4&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=pbWfCHio1-GjeahmPH_Opg&oh=00_AfKFvaLu7oBkZkUr-lQ0qglONmyD1d8CAk1I5lGbKY8Nww&oe=683B38DE",
      "https://scontent.fhyd11-3.fna.fbcdn.net/v/t39.30808-6/480533412_28394900356825379_5719216809915053471_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=LHUKGgA4UFcQ7kNvwEgokCY&_nc_oc=Adk-svlJsoXUQiS3rfdIY0lPBuDvlT86uw4lln76xQONG1KaJw-wGEO2OX0imICqLgQ&_nc_zt=23&_nc_ht=scontent.fhyd11-3.fna&_nc_gid=8s77lZVSxY9smHHM0ozXOg&oh=00_AfJzY_bOuxUHpOOj2dDIhuxPrxo_awPeQ5TZk2U_OEhcsQ&oe=683B276C",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/499041636_29456202824028455_8953120491937841290_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ZqgH56OWri0Q7kNvwFcO5P6&_nc_oc=AdlSO6fR0mDhWUGCDJ66-2mSqobH-Qkf17Y-it4h_O7FJBXgcUCevDvIgadr-ZxTQvg&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=T78OMQX4gXxHWjLJoYOKhw&oh=00_AfIKwSFXD4i-f7K0GIbMqQAhCHa0PuSxZFzY93et5jNFUQ&oe=683B38DA",
      "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/04/0-cl7fc6pt1MHjIF4K.png"
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