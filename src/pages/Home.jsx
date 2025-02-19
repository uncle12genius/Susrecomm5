import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/image1.jpeg",
    title: "Sustaining Your Future",
    subtitle: "Experience the best with our innovative services and solutions.",
    buttonText: "More About Us",
  },
  {
    image: "/image2.jpg",
    title: "About Our Vision",
    subtitle: "We are dedicated to providing sustainable and efficient solutions.",
    buttonText: "More About Us",
  },
  {
    image: "/image3.jpg",
    title: "Our Expertise",
    subtitle: "Cutting-edge services tailored for you.",
    buttonText: "More About Us",
  },
  {
    image: "/image4.png",
    title: "Innovation at Its Best",
    subtitle: "Revolutionizing industries with technology and creativity.",
    buttonText: "Discover More",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images
    slides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center w-full overflow-hidden" id="Home">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt=""
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />
          ))}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            {slides[currentIndex].title}
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 animate-fade-in-up delay-100">
            {slides[currentIndex].subtitle}
          </p>
          <button
           onClick={() => navigate("./pages/About")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 animate-fade-in-up delay-200"
          >
            {slides[currentIndex].buttonText}
          </button>
        </div>
      </div>

      
    </>
  );
};

export default Hero;
