"use client"

import { useState } from "react";
import Image from "next/image";

import { projects } from '@/data'

import { TProject } from "../types";

interface TProjectProps {
  project: TProject
}

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Projects</h2>
      <p className="text-center text-white mb-6">Thumbnails below showcase the actual projects and code I worked on.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<TProjectProps> = ({ project }) => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <article
      id={project.id}
      className="bg-gray-800 border-2 border-amber-400 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-all flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-48">
        <Image
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
        <p className="text-sm text-gray-500 italic capitalize mb-2">{project.type}</p>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Skills Section */}
        <div className="skills mb-4">
          <p className="text-sm text-gray-400 mb-2">Skills:</p>
          <div className="flex flex-wrap gap-2">
            {project.skills
              .slice(0, showAllSkills ? project.skills.length : 5)
              .map((skill: string, skillIndex: number) => (
                <span
                  key={skillIndex}
                  className="bg-amber-400 text-gray-800 text-sm font-semibold px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
          </div>

          {/* Show More / Show Less Toggle */}
          {project.skills.length > 5 && (
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="text-sm text-amber-300 underline hover:text-yellow-400 mt-2"
            >
              {showAllSkills ? "Show Less" : "Show More"}
            </button>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between gap-4 mt-auto">
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 underline hover:text-yellow-300"
          >
            View Project
          </a>

          {/* GitHub Link for Personal Projects */}
          {project.type === "personal" && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/github_icon.svg"
                alt="GitHub"
                width={26}
                height={26}
                className="bg-amber-400 rounded-full p-0.5 hover:opacity-80"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projects;
