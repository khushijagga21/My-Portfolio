import React from "react";
import Image1 from "./Images/1.jpg"

const projects = [
  {
    title: "Chit-Chatty",
    description: "Real-Time message sending app. Write to anyone from anywhere.",
    image: Image1, // Replace with actual image URLs
    link: "https://papaya-custard-948f12.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing my projects and skills.",
    image: "https://via.placeholder.com/400",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-Commerce App",
    description: "An e-commerce platform with secure payment and inventory management.",
    image: "https://via.placeholder.com/400",
    link: "https://ecommerce-app-link.com",
  },
  {
    title: "Invoice Manager",
    description: "An app to manage invoices using OCR and NER technology.",
    image: "https://via.placeholder.com/400",
    link: "https://invoice-manager-app.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app displaying real-time forecasts using OpenWeather API.",
    image: "https://via.placeholder.com/400",
    link: "https://weather-dashboard-link.com",
  },
  {
    title: "Fuel Order App",
    description:
      "An app for farmers to place fuel orders, integrating maps and delivery tracking.",
    image: "https://via.placeholder.com/400",
    link: "https://fuel-order-app.com",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Your Portfolio</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#work" className="hover:text-gray-400">Work</a>
          <a href="#about" className="hover:text-gray-400">About</a>
        </nav>
        <a
          href="/hire-me"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Hire Me
        </a>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <section id="work" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-400 mb-8">
            A collection of my work, showcasing real-world applications.
          </p>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}