import Image from 'next/image';

const projects = [
  {
    title: "Notes app",
    thumbnail: '/images/notes-app.webp',
    type: 'personal',
    href: 'https://notes-app-6b807.web.app/#/',
    github: 'https://github.com/Tadeu17/vue3-notes-project',
    description: 'A simple and effective app for managing notes efficiently.',
  },
  {
    title: "Study app",
    thumbnail: '/images/study-app.webp',
    type: 'personal',
    href: 'https://study-web-app-cb1b5.web.app/play',
    github: 'https://github.com/Tadeu17/study-app',
    description: 'An app designed to help students plan their study schedules.',
  },
  {
    title: "Mammoth",
    thumbnail: '/images/mammoth.webp',
    type: 'professional',
    href: 'https://mammoth.io/',
    description: 'A professional analytics platform for enterprise clients.',
  },
  {
    title: 'Betmarkets',
    thumbnail: '/images/betmarkets.webp',
    type: 'professional',
    href: 'https://www.youtube.com/watch?v=zR-3nc4ajR8&t=208s',
    description: 'A financial platform for managing investments in sports betting.',
  },
  {
    title: 'Tips4y',
    thumbnail: '/images/tips4y.webp',
    type: 'professional',
    href: 'https://www.tips4y.pt/',
    description: 'A smart tips platform that helps users achieve their goals.',
  },
  {
    title: 'Jumia',
    thumbnail: '/images/jumia.webp',
    type: 'professional',
    href: 'https://packagetracker-services.jumia.com/#/',
    description: 'E-commerce platform connecting millions of users across Africa.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Projects</h2>
      <p className='text-center text-white mb-6'>Thumbnails below show case the actual projects and code I worked on</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 border-2 border-amber-400 rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition-all"
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
            <div className="p-4">
              <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
              <p className="text-sm text-gray-500 italic capitalize mb-2">{project.type}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {/* Links */}
              <div className="flex items-center justify-between gap-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline hover:text-yellow-300"
                >
                  View Project
                </a>

                {/* GitHub Link for Personal Projects */}
                {project.type === 'personal' && project.github && (
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
