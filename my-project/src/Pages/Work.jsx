import React, { useState } from 'react';

const ProjectCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Project
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const [projects] = useState([
    {
      imageSrc:'./Amazon.jpg',
      title: 'Amazon Clone',
      description: 'A User-Interface of Amazon-Clone featuring product listing for a Seamless shopping Experience a responsive design for an enhanced user experience.',
      link: 'https://papaya-custard-948f12.netlify.app/',
    },
    {
      imageSrc: './TicTacToe.jpg',
      title: 'Tic-Tac-Toe',
      description: 'Built a dynamic Tic-Tac-Toe game with an interactive user interface, implementing two-player mode and logic for detecting game outcomes such as win, lose, or draw',
      link: 'https://gleeful-kringle-d6d635.netlify.app/',
    },



    {
        imageSrc: '/KJ.jpg',
        title: 'KJ Educates',
        description: ' KJ Educates, an offline tutoring service  system that provides detailed information about tutoring services, schedules, and offerings to enhance accessibility and organization',
        link: 'https://kjeducates-bbb7e9.netlify.app/',
      },

      {
        imageSrc: './HP.jpg',
        title: 'Project 2',
        description: 'A website aimed at empowering farmers in rural areas. The platform allowed farmers to place fuel orders, connect with other farming communities in neighboring villages, and included a backend management system for handling orders efficiently.',
        link: 'https://project2.com',
      },
    // Add more project objects here
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}



        
      </div>
    </div>
  );
};

export default App;