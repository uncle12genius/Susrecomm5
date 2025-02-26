import React from 'react';
import { FaBullseye, FaLightbulb, FaHandshake, FaChartLine, FaShieldAlt, FaBolt } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  
  const cards = React.useMemo(() => [
    {
      title: "Vision",
      content: "To become the largest website design firm by emphasizing innovative thinking to establish ourselves as a worldwide recognized company by offering the highest standard services and solutions.",
      icon: <FaLightbulb className="text-orange-500 text-4xl" />, 
      color: "bg-[#000072]", 
      position: "left", 
    },
    {
      title: "Mission",
      content: "To provide customer-centric, result-oriented, cost-competitive, innovative, and functional IT solutions to our valuable worldwide customers.",
      icon: <FaBullseye className="text-orange-500 text-4xl" />, 
      color: "bg-[#000072]", 
      position: "right", 
    },
  ], []);

  const coreValues = React.useMemo(() => [
    { title: "Partnership", content: "We foster collaborations for impactful results.", icon: <FaHandshake /> },
    { title: "Results", content: "Delivering measurable impacts for sustainable futures.", icon: <FaChartLine /> },
    { title: "Integrity", content: "Upholding transparency and accountability.", icon: <FaShieldAlt /> },
    { title: "Trust", content: "Building trust as the foundation of our operations.", icon: <FaShieldAlt /> },
    { title: "Efficiency", content: "Delivering economic and effective solutions.", icon: <FaBolt /> },
  ], []);

  return (
    <section 
      ref={ref} 
      id="About" 
      className={`w-full py-12 px-4 sm:px-8 text-center transition-all duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      aria-label="About Section"
    >
      {/* Mission & Vision Cards (Side by Side) */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-6">
        {cards.map((card, index) => (
          <article
            key={index}
            className={`w-full lg:w-1/2 h-72 p-6 text-white rounded-full shadow-lg transition-all duration-300 
              transform hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-xl ${card.color} 
              flex flex-col items-center justify-center`}
            tabIndex={0}
            role="article"
            style={{ 
              position: card.position === 'left' ? 'relative' : 'relative',
              left: card.position === 'left' ? '0' : 'auto',
              right: card.position === 'right' ? '0' : 'auto',
            }}
          >
            <div 
              className="mb-4" 
              role="img" 
              aria-label={`${card.title} icon`}
            >
              {card.icon}
            </div>
            <h2 className="text-xl font-bold uppercase mb-2">{card.title}</h2>
            <p className="text-base leading-relaxed text-center">{card.content}</p>
          </article>
        ))}
      </div>

      {/* Core Values Section  */}
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6 py-4">
          {coreValues.map((value, index) => (
            <article
              key={index}
              className="flex flex-col items-center justify-center min-h-64 bg-blue-900 text-white rounded-lg 
                p-6 text-center shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
              tabIndex={0}
              role="article"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="text-4xl mb-4" 
                role="img" 
                aria-label={`${value.title} icon`}
              >
                {value.icon}
              </div>
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