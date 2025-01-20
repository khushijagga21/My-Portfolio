import React, { useState } from "react";

const EducationCareer = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const educationData = [
    {
      title: "Bachelor's of Technology in Electronics and Communication",
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
      company: "GirlScript Summer of Code",
      duration: "2023",
    },
  ];

  const hackathonsData = [
    {
      title: "Bajaj HackRx 5.0",
      description:
        "I was a finalist in HackRx 5.0, where my team ranked among the top 22 out of 700+ participants. During the hackathon, we developed an innovative Invoice AI that utilized OCR and NER to convert invoices into structured Excel formats.",
    },
    {
      title: "HP Power Lab",
      description:
        "Participated in the HP Hackathon, where my team reached the semi-finals. We developed a website for farmers to order fuel, connect with farming communities, and manage orders.",
    },
    
  ];

  const experienceData = [
    {
      title: "Subject Matter Expert",
      company: "Chegg",
      duration: "April 2023-Nov 2024",
      logo: "./chegg.jpg",
      description:
        "Worked as a Subject Matter Expert in Computer Science, solving problems on the portal with over 80% accuracy.",
    },
    {
      title: "Open-Source Contributor",
      company: "GirlScript Summerof Code",
      duration: "May 2024-July 2024",
      logo: "./GirlScript.jpg",
      description:
        "Developed a website for farmers to order fuel, connect with communities, and manage orders during the HP Hackathon.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">Education, Career, & Events</h1>
      <div className="flex space-x-4 mb-6">
        {["Education", "Career", "Hackathons", "Experience"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === tab
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4 w-full max-w-lg">
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

        {activeTab === "Hackathons" &&
          hackathonsData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 text-2xl">🏆</div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}

        {activeTab === "Experience" &&
          experienceData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 flex items-start space-x-4"
            >
              <img
                src={item.logo}
                alt={`${item.company} logo`}
                className="h-12 w-12 rounded-full border border-gray-700"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.company}</p>
                <p className="text-sm text-gray-400">{item.duration}</p>
                <br/>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EducationCareer;
