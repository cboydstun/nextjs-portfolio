"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AdvancedProjectCard from "./AdvancedProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.",
    image: "/images/project.png",
    gitUrl: "https://github.com",
    previewUrl: "https://example.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates using Socket.io. Built with React, Express, and PostgreSQL.",
    image: "/images/project.png",
    gitUrl: "https://github.com",
    previewUrl: "https://example.com",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content generation tool leveraging OpenAI API. Features include text generation, image creation, and content optimization.",
    image: "/images/project.png",
    gitUrl: "https://github.com",
    previewUrl: "https://example.com",
    tags: ["Next.js", "OpenAI", "Tailwind", "TypeScript"],
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and reporting features.",
    image: "/images/project.png",
    gitUrl: "https://github.com",
    previewUrl: "https://example.com",
    tags: ["React", "D3.js", "Firebase"],
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with workout plans, progress tracking, and nutrition logging.",
    image: "/images/project.png",
    gitUrl: "https://github.com",
    previewUrl: "https://example.com",
    tags: ["React Native", "Redux", "Node.js"],
    tag: ["All", "Mobile"],
  },
  {
    id: 6,
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, virtual tours, and contact management.",
    image: "/images/project.png",
    gitUrl: "https://github.com",
    previewUrl: "https://example.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    tag: ["All", "Web"],
  },
];

export default function Projects() {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">My Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore my latest work showcasing modern web development, innovative solutions, and creative problem-solving.
        </p>
      </motion.div>

      {/* Filter Tags */}
      <div className="flex flex-row justify-center items-center gap-2 flex-wrap text-white my-8">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag === "Mobile"}
        />
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        layout
      >
        {filteredProjects.map((project) => (
          <AdvancedProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            tags={project.tags}
          />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 text-xl mt-12"
        >
          No projects found in this category.
        </motion.p>
      )}
    </section>
  );
}
