import React, { useState } from "react";

const EducationCareer = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const educationData = [
    {
      title: "Bachelors of Technology in Electronics and Communication",
      institution: "Chandigarh Group of Colleges Landran (Mohali)",
      duration: "2022-2026",
    },
    {
      title: "Senior Year (12th)",
      institution: "Gov.Girls Senior Secondary School",
      duration: "2022",
    },
    {
      title: "Junior Year (10th)",
      institution: "Tagore Model School",
      duration: "2019",
    },
  ];

  const careerData = [
    {
      title: "Frontend Developer",
      company: "HRT Tech Solutions",
      duration: "2023",
    },
    {
      title: "Open-Source Contributor",
      company: "GirlScript Summerof Code",
      duration: "2023",
    },
    
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Education and Career</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "Education"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            activeTab === "Career"
              ? "bg-white text-black"
              : "bg-gray-800 text-white"
          }`}
          onClick={() => setActiveTab("Career")}
        >
          Career
        </button>
      </div>
      <div className="space-y-4 w-full max-w-md">
        {activeTab === "Education" &&
          educationData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 text-2xl">🎓</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.institution}</p>
                <p className="text-sm text-gray-400">{item.duration}</p>
              </div>
            </div>
          ))}
        {activeTab === "Career" &&
          careerData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 text-2xl">💼</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.company}</p>
                <p className="text-sm text-gray-400">{item.duration}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EducationCareer;