import React, { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      "https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/506475744_29898858779762855_3961873130507081082_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WZgBYDpDkycQ7kNvwEV3Vs5&_nc_oc=AdmRMe08ImBM51SlPHoOLite3pfBX2GrZx8cRDr4mkiHSbCENsieFaG5mMcLjXOLd18&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=RtqUNfEPhIHMkk32nyVj0w&oh=00_AfXXKg_QQETDnhDp4_Kz6z-Z9baLJdQ_HVy8jsubRAA1xw&oe=68993E66",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/513709152_30032979196350812_2944558715967406212_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=XHxLUuMMEKYQ7kNvwHOlHTb&_nc_oc=AdkXVUzGy0NQDClRJiGaXvJoksotzpBq4k3V7IObwzUcokf-A5FokdLQDUfJ3CxHc50&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=xFJPaUvMCDWSK5DVSwqHMw&oh=00_AfV5o97oi0xxQw3CeEGqkGS3ziEAB0s0EyJGzscPr-tK5g&oe=689923D6",
      "https://scontent.fhyd11-3.fna.fbcdn.net/v/t39.30808-6/514007251_30030832556565476_8753451128849238376_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kUU0WsidyTAQ7kNvwFhdcxx&_nc_oc=Adm6gsy-d_JVQZTWmVwPwkWnnMrsrZAJfGrl5lf-Lf4meAz61f8y3giCuk-IsHRgMtU&_nc_zt=23&_nc_ht=scontent.fhyd11-3.fna&_nc_gid=aMaIvej60MuEsvpmsFTN0g&oh=00_AfUIFkBm30BXtw8m5KZvYBi_NtnxfxiwKvas2crJOqcrnw&oe=68992D1B",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/511166786_30030500393265359_4294612683367544833_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9eae26&_nc_ohc=qIhJHtu2MOUQ7kNvwHwKIRs&_nc_oc=AdlxyMqAKgSuX2MgoczvgJrB8L80Cu0P3cQ_E01IN8AJSwGNNj7DVkBUwRF04wtRCK0&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=QX-BnuTtvdF6AdtoSM2Irg&oh=00_AfUakmo0ZbagSuOL0KyANmCU1a6zSFc_uVv-Q0r7V1Rc7w&oe=68993073"
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
            <span className="font-semibold w-24 text-blue-500 text-center">Email:</span>
            <span className="text-red-500 text-center">g1kumar215@gmail.com</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-24 text-blue-500 text-center">Phone:</span>
            <span className="text-red-500 text-center">+91-8501891921</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold w-24 text-blue-500 text-center">Address:</span>
            <span className="text-red-500 text-center">
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