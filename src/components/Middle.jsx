import React from "react";
import { useNavigate } from "react-router-dom";

export default function Middle() {
  const navigate = useNavigate();
  const start = () => {
    navigate("/hire");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white mt-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
        {/* Main Box */}
        <div className="relative col-span-2 lg:col-span-1 bg-black rounded-lg shadow-lg p-6 flex flex-col items-center">
          <img
            src="https://th.bing.com/th/id/OIP.imjNrQB0ZHAAr-tsxxADegHaEa?w=318&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Developer Illustration"
          />
          <h2 className="text-4xl font-bold mt-4">Khushi Jagga</h2>
          <p className="text-gray-400 text-xl mt-2 text-center">
            An Open-Source Contributor and MERN STACK Developer
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/khushijagga21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-jagga21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a
              href="tel:+1234567890"
              className="text-gray-400 hover:text-white transition"
            >
              <i className="fas fa-phone-alt text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Work Together Box */}
        <div className="relative bg-black rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-2">Wanna work together?</h3>
          <button
            onClick={start}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition mb-6"
          >
            Let's Start
          </button>
          {/* Separate Buttons for GitHub, LinkedIn, Mail, and Call */}
          <div className="grid gap-4 w-full">
            <a
              href="https://github.com/khushijagga21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/khushi-jagga21/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
            >
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
            <a
              href="mailto:khushijagga14@gmail.com"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
            >
              <i className="fas fa-envelope mr-2"></i> Email
            </a>
            <a
              href="https://app.netlify.com/teams/khushijagga21/sites"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center justify-center"
            >
              <i className="fas fa-phone-alt mr-2"></i> Netlify
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative bg-black rounded-lg shadow-lg p-6">
          <center><h3 className="text-lg font-medium mb-4">Skills</h3></center>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* Skill Cards */}
            {[
              { name: "HTML", color: "text-red-500", icon: "fab fa-html5" },
              { name: "CSS", color: "text-blue-500", icon: "fab fa-css3-alt" },
              { name: "JavaScript", color: "text-yellow-500", icon: "fab fa-js-square" },
              { name: "React", color: "text-cyan-500", icon: "fab fa-react" },
              { name: "Bootstrap", color: "text-green-500", icon: "fab fa-node" },
              { name: "Github", color: "text-green-400", icon: "fas fa-database" },
              { name: "Git", color: "text-green-400", icon: "fas fa-database" },
              { name: "Docker", color: "text-green-400", icon: "fas fa-database" },
              { name: "Wordpress", color: "text-green-400", icon: "fas fa-database" },
              { name: "Tailwind ", color: "text-green-400", icon: "fas fa-database" },
              { name: "C", color: "text-green-400", icon: "fas fa-database" },
              { name: "MongoDB", color: "text-green-400", icon: "fas fa-database" },
              
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 text-white py-4 px-6 rounded-lg flex flex-col items-center transition transform hover:scale-105"
              >
                <i className={`${skill.icon} ${skill.color} text-3xl mb-2`}></i>
                <p className="text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
