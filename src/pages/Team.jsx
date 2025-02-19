import React from "react";

const ProfileCard = ({ person }) => {
  return (
    <article 
      className="bg-white w-64 text-center p-6 rounded-2xl shadow-lg hover:shadow-xl 
                 transition-all duration-300 hover:-translate-y-2 focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      tabIndex="0"
    >
      <div className="relative overflow-hidden rounded-xl group">
        <img
          src={person.image}
          alt={`Portrait of ${person.name}`}
          className="w-full h-72 object-cover rounded-xl transition-transform 
                   duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-5 text-xl font-bold text-gray-800">{person.name}</h3>
      <p className="mt-2 text-base text-blue-900 font-medium">{person.title}</p>
      
      {person.linkedin && (
        <div className="mt-4">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
            aria-label={`Connect with ${person.name} on LinkedIn`}
          >
            <svg
              className="w-6 h-6 inline-block"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      )}
    </article>
  );
};

const Team = () => {
  const people = [
    {
      name: "James Ayako",
      title: "Co-founder & CEO",
      image: "jim.png",
      
    },
    {
      name: "Charles Nyamwaro",
      title: "Chief Business Development Officer",
      image: "chuck.jpg",
      
    },
    {
      name: "Florence Njoki",
      title: "Chief Operation Officer",
      image: "njoki.jpg",
      
    },
  ];

  return (
    <section 
      id="OurTeam" 
      className="py-16 px-4 bg-white"
      aria-label="Leadership Team"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Leadership Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
                      justify-items-center">
          {people.map((person, index) => (
            <ProfileCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;