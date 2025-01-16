import React from 'react';

const TechnicalSkills = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex justify-center items-center">
      <div className="text-center w-full px-4">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="w-12 h-12 border-2 border-gray-400 rounded-lg flex items-center justify-center">
              {/* Icon placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-4">Technical Skills</h1>
          <p className="mt-2 text-orange-400 font-medium">
            Here are the Languages and Software I use
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex justify-center">
          <div className="bg-gray-900 p-6 rounded-lg border border-orange-500 w-full sm:w-3/4 lg:w-2/3">
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'Bootstrap',
                'Python',
                'Docker',
                'Git',
                'GitHub',
                'Computer Networks',
                'React.js',
                'MongoDB',
                'Figma',
                'C',
                'C++',
                'Tailwind CSS',
                

                
                'Operating System',
                'Data Structures and Algorithms',
              ].map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded-full border border-orange-500 text-sm text-gray-200 hover:bg-orange-500 hover:text-black transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;