import React from "react";

export default function SkillsSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl">
        {/* Icon Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v18h16.5V3H3.75z"
              />
            </svg>
          </div>
        </div>
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-6">Skills and Expertise</h1>
        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skill Box 1 */}
          <div className="border border-gray-600 rounded-lg p-4 flex items-center space-x-4">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 11.25l2.25 2.25L15 9M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Problem Solving</h3>
              <p className="text-gray-400 text-sm">
                Innovative problem-solving and impactful solutions for a better
                experience.
              </p>
            </div>
          </div>
          {/* Skill Box 2 */}
          <div className="border border-gray-600 rounded-lg p-4 flex items-center space-x-4">
            <div className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 12.75v1.5h-7.5v-1.5m3.75-5.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Analytical Abilities</h3>
              <p className="text-gray-400 text-sm">
                Abilities to diagnose technology issues and fix them.
              </p>
            </div>
          </div>
          {/* Skill Box 3 */}
          <div className="border border-gray-600 rounded-lg p-4 flex items-center space-x-4">
            <div className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 4.5h16.5m-16.5 6h16.5m-16.5 6h16.5"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Project Management</h3>
              <p className="text-gray-400 text-sm">
                Ability to make professional plans, set and reach goals.
              </p>
            </div>
          </div>
          {/* Skill Box 4 */}
          <div className="border border-gray-600 rounded-lg p-4 flex items-center space-x-4">
            <div className="text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 6h.01m6.938-6.938a7.5 7.5 0 11-10.621 0"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Curiosity</h3>
              <p className="text-gray-400 text-sm">
                Finding enjoyment in learning new things and how things work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}