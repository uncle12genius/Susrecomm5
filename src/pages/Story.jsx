import React from "react";
import { useInView } from 'react-intersection-observer';

const Story = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="story" 
      ref={ref}
      className="relative flex items-center justify-center min-h-screen bg-gray-50 px-4 py-16 md:py-24"
      aria-label="Our Story"
    >
      <div className={`max-w-4xl w-full transition-opacity duration-700 ease-in-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <article className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl text-white 
          transform transition-all duration-300 hover:shadow-3xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 relative pl-8">
              <div className="absolute left-0 top-1/2 w-2 h-3/4 bg-yellow-400 transform -translate-y-1/2 rounded-full" 
                   aria-hidden="true" />
              Our Story
            </h1>
          </header>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed md:leading-8">
            <p className="text-blue-100">
              We are a Kenyan Incorporated and 100% youth-owned company endeavoring to deliver a sustainable future through innovative solutions to households and communities.
            </p>

            <p className="text-blue-100">
              Our vision is rooted in creating a sustainable world prepared for even the most extraordinary challenges. By engaging young minds and blending social, financial, environmental, and technological tools, we tackle infrastructural challenges with entrepreneurial spirit and innovation.
            </p>

            <div className="bg-blue-800/30 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Core Strategic Pillars</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {['SDG 6: Clean Water & Sanitation', 'SDG 7: Affordable Clean Energy', 
                  'SDG 9: Industry & Innovation', 'SDG 11: Sustainable Communities', 
                  'SDG 17: Partnerships'].map((sdg) => (
                  <li key={sdg} className="flex items-center">
                    <span className="text-yellow-400 mr-2">▹</span>
                    {sdg}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-blue-100">
              As impact-driven pioneers, we prioritize long-term sustainability over short-term gains. Our business model integrates sustainability experts and contractors through an efficient platform, positioning us as the partner of choice for organizations committed to lasting change.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Story;