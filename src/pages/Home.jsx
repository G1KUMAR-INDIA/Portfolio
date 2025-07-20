import React, { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      "https://scontent.fhyd11-3.fna.fbcdn.net/v/t39.30808-6/506466994_29898858783096188_3718211834621654900_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=IhWJC9jiXekQ7kNvwFKuKpe&_nc_oc=Adkhgg6TX6EckrOqladYVbvh3x0xfFb3xRGFVyqunxA2kr1nXTSyhhLRmi71LlmmOWk&_nc_zt=23&_nc_ht=scontent.fhyd11-3.fna&_nc_gid=t6wxUH0X4OJVRynn9Wo5hQ&oh=00_AfR2CB9hoDoiwXTdroeMKmBrBHKXoM4l58e9nUPG66Kz-w&oe=68817DC5",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/518194915_30242990122016384_8975327782193021292_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=MDn3ZoMIM50Q7kNvwF8jfOL&_nc_oc=Admt6DNi9YuPhE_m5GtRnshauk91BwmrkjNO2xoiPVjtrKZdbuLRRl5Pym-do1wf6wo&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=crZedS4i6BPMlkErUgjpCw&oh=00_AfRfLAxCOJO027PhBEoR7Di4Z5LkqN3Le_6VjOJCk5AG3g&oe=68815EEA",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/513709152_30032979196350812_2944558715967406212_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=HFKE9s-GDTgQ7kNvwG7a-Su&_nc_oc=Admab8Zx3A8OJur9RoHC778AniDx0CRp_jc8tMy7dsSw03o5hOSKxewbFWQ3SQxC1XI&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=aFFxEh9JzJmsfM69Pe8JgA&oh=00_AfTP1U8F1ONBfdALh2zxzxVbELFsun6rfdEtatBJV71CIQ&oe=688168D6",
      "https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/517021068_30160716010243796_2168385817643177822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=W0PGZGCWyW0Q7kNvwFpzvfR&_nc_oc=AdlbtGYdGvjP_pFHKkw4wMt-BV3340pDlfTrUo26ZsGlaSFV3hMXtNIuTYze2g5eAl8&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=8t42D5-D0DpdtplvWpvOOA&oh=00_AfS34coHmXPpAoGkbP_0qsRCkrXHSEcWGsW2i7MMrR0hlA&oe=68816CEF"
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
            <p className="text-2xl text-red-500">Reddyvari Jeevan Kumar <sub>B.Tech(EEE)</sub></p>
            <p className="text-xl text-yellow-600"  >Full Stack Developer(MERN+Python).</p>        
        <div className="flex">
            <span className="font-semibold w-24 text-red-500">Email:</span>
            <span className="text-red-500">g1kumar215@gmail.com</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold w-24 text-red-500">Address:</span>
            <span className="text-red-500">
              #2-85, KVS Street, 2nd Cross,<br />
              Oldpet, Palamaner,<br />
              Chittoor Dist, Andhra Pradesh - 517408
            </span>
          </div>
        </div>  
              
      </div>
      
    );
  };
  
  export default Home;