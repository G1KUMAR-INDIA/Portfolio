import React, { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      "https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/540982512_30978753708440018_1990247689351267436_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=HOrjccPU108Q7kNvwFqeL9T&_nc_oc=Admg7LHngZ5VdKoT1PRhOmJhnr8qem3zfFbOE3o1FOZo-k0SY3TmBqwv2Xl3DAp5ids&_nc_zt=23&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=9qNfLmFfK62N5n-KUgIm6Q&oh=00_AfgpXSq0PQkbXfKsveQDbfFqK2ILoPG9-SsL-c9ViTqpNw&oe=691008F0",
      "https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/517021068_30160716010243796_2168385817643177822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=FbkQ_gx3yMYQ7kNvwGubG5n&_nc_oc=AdmqsllKHHmbxwS3P8veifdzJCJwBA1zKAuDS5B09nEoyQWJ8e3bPWJhifFNlsmnf6c&_nc_zt=23&_nc_ht=scontent.fhyd1-4.fna&_nc_gid=4W0YUxSklIsCuIDSxZMSNA&oh=00_AfixJPfLlUbK-HIcJoaesi5rj_U-vsWU7Z0vrAgz5aZLrw&oe=6910072F",
      "https://scontent.fhyd1-2.fna.fbcdn.net/v/t39.30808-6/516769241_30160746240240773_4998683805872483623_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=KfH1tsZGJp4Q7kNvwFA5oyT&_nc_oc=Adky8pa_bKYtKTN2nd-Ps7wmCYmOgFZbuiMxzWHWp4R1KstIoLrSpUqD_0uAEf0kjxM&_nc_zt=23&_nc_ht=scontent.fhyd1-2.fna&_nc_gid=x3PUplquJWg1sy8nrV2XhA&oh=00_AfhtJn1X32uQ-W4icyJCSt2Kd-AdwamG-OnBb8Y_fcTMPA&oe=691003C4",
      "https://scontent.fhyd1-5.fna.fbcdn.net/v/t39.30808-6/513244147_30033256742989724_1644536356967472824_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=zr0JMXFYGEQQ7kNvwGNJa6z&_nc_oc=AdlJylvYHfBQNtU9GxDn59tI2d3sLl3gb0I6zzKeT-i_J-yg7IzCz5XOJAJcq73vqo8&_nc_zt=23&_nc_ht=scontent.fhyd1-5.fna&_nc_gid=aTY8A_nEZziIpdtWa10Oow&oh=00_AfiTjICWUWcpFB_Rk0zBaYDHfY0dxqS7hLmuS6xIiV80xg&oe=6910123C"
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