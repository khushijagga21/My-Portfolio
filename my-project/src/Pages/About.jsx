import React from "react";

export default function AboutSection() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl">
        {/* Icon Section */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <img src="https://saurabh-dhyani.vercel.app/about.svg"></img>
          </div>
        </div>
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-4">Little Bit About Me ...</h1>
        {/* Description Section */}
        <div className="text-center text-gray-400 leading-7">
          <p>
            Hi there! I’m khushi Jagga, a MERN Stack Developer, Open Source Contributor and a Freelancer
          
          </p>
          <p className="mt-4">
            With over 1 years of experience in Chegg as a Subject Matter Expert, Where I solved various problems of Computer Science on the Company's Portal with accuracy of 4 out of 5
          </p>
          <p className="mt-4">
          Worked as a Frontend Developer Intern at HRT Tech Solutions, where I developed and optimized user interfaces, ensuring seamless functionality and a responsive design for web applications.
          </p>
          <p className="mt-4">
            Whether it’s untangling tricky algorithms or designing seamless web experiences, I thrive
            when the world is asleep, turning ideas into reality one line of code at a time.
          </p>
          <p className="mt-4">
            My mission? To deliver solutions that are not only functional but also intuitive,
            proving that the best work often happens under the glow of the moon and a bright monitor.
          </p>
        </div>
      </div>
    </div>
  );
}