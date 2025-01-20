"use client"

import React from 'react';
import { useState } from "react";

import SectionTitle from '../SectionTitle'

type Skill = {
  name: string;
  level: string;
};

type SkillsCathegory = {
  cathegory: string;
  skills: Skill[];
};


const skillsData: SkillsCathegory[] = [
  {
    cathegory: "Frontend Development",
    skills: [
      { name: "Vue.js", level: "Expert" },
      { name: "Vue 3", level: "Expert" },
      { name: "HTML5", level: "Expert" },
      { name: "REST APIs", level: "Expert" }, // New
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "TailwindCSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" }, // New
      { name: "Sass/SCSS", level: "Advanced" }, // New
      { name: "CSS3", level: "Advanced" },
      { name: "Pinia", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Nuxt", level: "Intermediate" },
      { name: "AngularJS", level: "Intermediate" }, // New
      { name: "Progressive Web Apps (PWAs)", level: "Intermediate" }, // New
      { name: "SEO", level: "Intermediate" }, // New
      { name: "Web Accessibility (WCAG)", level: "Basic" }, // New
    ],
  },
  {
    cathegory: "Management & Leadership",
    skills: [
      { name: "Team Motivation", level: "Expert" }, // New
      { name: "Recruitment & Hiring", level: "Expert" }, // New
      { name: "Team Leadership", level: "Expert" },
      { name: "Agile/Scrum", level: "Advanced" },
      { name: "Conflict Resolution", level: "Advanced" }, // New
      { name: "Cross-functional Team Management", level: "Advanced" },
      { name: "Project Planning & Roadmaps", level: "Advanced" }, // New
      { name: "Stakeholder Communication", level: "Advanced" }, // New
      { name: "Product Ownership", level: "Intermediate" },
      { name: "Performance Reviews", level: "Advanced" }, // New
      { name: "Resource Allocation", level: "Advanced" }, // New
    ],
  },
  {
    cathegory: "Tools & Platforms",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "JIRA", level: "Advanced" },
      { name: "Vite", level: "Intermediate" },
      { name: "Vitest", level: "Intermediate" },
      { name: "Webpack", level: "Intermediate" },
      { name: "Figma", level: "Intermediate" },
      { name: "Storybook", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" }, // New
      { name: "Firebase", level: "Basic" },
      { name: "Vercel", level: "Basic" },
      { name: "Postman", level: "Basic" }, // New
    ],
  },
];


const Skills: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const [isExpandedDesktop, setIsExpandedDesktop] = useState(false);

  const toggleCathegory = (cathegory: string) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [cathegory]: !prevState[cathegory],
    }));
  };

  const toggleAllCategories = () => {
    setIsExpandedDesktop((prevState) => !prevState);
  };

  return (
    <section id="skills" className="container min-h-screen px-6 py-20">
      <SectionTitle title="About Me" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skillsData.map((cathegory) => {
          const isExpandedMobile = expandedCategories[cathegory.cathegory];

          return (
            <div
              key={cathegory.cathegory}
              className="bg-gray-800 border-2 border-amber-400 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                {cathegory.cathegory}
              </h3>
              <ul className="space-y-3">
                {cathegory.skills.map((skill, index) => (
                  <li
                    key={skill.name}
                    className={`flex justify-between items-center text-lg ${index >= 5 && !isExpandedDesktop && !isExpandedMobile
                      ? "hidden"
                      : ""
                      }`}
                  >
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-gray-400">({skill.level})</span>
                  </li>
                ))}
              </ul>
              {/* Mobile Expand/Collapse Button */}
              <div className="text-center mt-4 md:hidden">
                <button
                  onClick={() => toggleCathegory(cathegory.cathegory)}
                  className="px-4 py-2 bg-amber-400 text-black font-bold rounded-md hover:bg-amber-300 transition"
                >
                  {isExpandedMobile ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Expand/Collapse Button */}
      <div className="text-center mt-8 hidden md:block">
        <button
          onClick={toggleAllCategories}
          className="px-6 py-3 bg-amber-400 text-black font-bold rounded-md hover:bg-amber-300 transition"
        >
          {isExpandedDesktop ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Skills;
