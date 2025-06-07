import React, { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/504908142_29766864382962296_8270298358466246260_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=55OJpfGqDKkQ7kNvwH2V9UH&_nc_oc=Adlrh5RMk4pf1Tq19Ta2TnZ04NVo6kv5SqOf51ru_cKHUBOYrF8G8JzYGUrd6gz5j3s&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=8UnYRLRDQL03E8Sp3Ks-oQ&oh=00_AfPikAAjpvO7AXsZVtiHiAQ7YOinlw5HZ4zT7MpH4iplnA&oe=6849D25B",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/485172394_28743793171936094_110492441108540876_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=5LPndvfh724Q7kNvwFt8b_v&_nc_oc=AdkdSQhMbwQgxsz6qtO6DBY9xJiardeLjDH6BHSs2GULrFyzZc8V8ZJq6pfitCVRChQ&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=4vAN9uPO0XZBfkaj33m0Mg&oh=00_AfOxOHtkveL8QLC6sjdgHYq93yKEbXKOWX8hx8CY8ojO2Q&oe=6849F19E",
      "https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/505374460_29766871136294954_246729196674067234_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=zDnKc7F4mvAQ7kNvwFi0U8D&_nc_oc=Adn47L-Q6GTHI5WwDGfbIjKrp5zi5SwfRvCre0h-L78R5OB2wbzIZ5QswgCcK33-qOE&_nc_zt=23&_nc_ht=scontent.fhyd11-2.fna&_nc_gid=-ccDts-sxAqgpmKlR4uO0w&oh=00_AfPdBL9ZrLri_gp0be6iqPOBuyiHQs1_NmSdYdAOhBV5SA&oe=6849ECA2",
      "https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/499041636_29456202824028455_8953120491937841290_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Wq5JEbaDzEIQ7kNvwG7_ezw&_nc_oc=Adn-3mHYFI8WHmJtiq5KIZYVgpMajB0LzTljJKvvkdnIBZUolMdDOfuidteoEpXqG18&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=HjAW8p5x0GWTv_MiD43vfQ&oh=00_AfMibp2W9kZpUxFYZnKAHmbS3tttTkAhGR9REuZvCrfdfA&oe=6849F19A"
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