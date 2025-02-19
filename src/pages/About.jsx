import React from 'react';
import { FaBullseye, FaLightbulb, FaHandshake, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const cards = [
    {
      title: "OUR MISSION",
      content:
        "To design, recommend, and implement sustainable infrastructural solutions for individuals, households, and communities across Africa.",
      icon: <FaBullseye className="text-4xl" aria-hidden="true" />,
      color: "bg-blue-600",
    },
    {
      title: "OUR VISION",
      content: "Africa's hub of sustainable infrastructural solutions.",
      icon: <FaLightbulb className="text-4xl" aria-hidden="true" />,
      color: "bg-blue-800",
    },
  ];

  const coreValues = [
    { title: "Partnership", content: "We foster collaborations for impactful results.", icon: <FaHandshake aria-hidden="true" /> },
    { title: "Results", content: "Delivering measurable impacts for sustainable futures.", icon: <FaChartLine aria-hidden="true" /> },
    { title: "Integrity", content: "Upholding transparency and accountability.", icon: <FaShieldAlt aria-hidden="true" /> },
    { title: "Trust", content: "Building trust as the foundation of our operations.", icon: <FaShieldAlt aria-hidden="true" /> },
    { title: "Efficiency", content: "Delivering economic and effective solutions.", icon: <FaBolt aria-hidden="true" /> },
  ];

  return (
    <section 
      ref={ref} 
      id="About" 
      className={`w-full min-h-screen p-8 text-center transition-opacity duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="About Section"
    >
      {/* Mission & Vision Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
        {cards.map((card, index) => (
          <article
            key={index}
            className={`w-full md:w-80 h-72 p-6 text-white rounded-lg shadow-lg transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl ${card.color}`}
            tabIndex="0"
          >
            <div className="mb-4" aria-hidden="true">{card.icon}</div>
            <h2 className="text-xl font-bold uppercase mb-2">{card.title}</h2>
            <p className="text-base leading-relaxed">{card.content}</p>
          </article>
        ))}
      </div>

      {/* Core Values Section */}
      <div className="w-full py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 py-4">
          {coreValues.map((value, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-center min-h-64 bg-blue-900 text-white rounded-lg 
                p-6 text-center shadow-md hover:scale-105 hover:shadow-lg transition-transform cursor-pointer"
              tabIndex="0"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{value.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
              <p className="text-base leading-normal">{value.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;