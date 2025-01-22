import ResumeCard from "../ResumeCard";

import SectionTitle from '../SectionTitle'

import { professionalExperience } from '@/data'
import { educationExperience as education } from '@/data'

const Resume = () => {

  return (
    <section id="career" className="container min-h-screen px-6 py-20">
      <SectionTitle title="Career" />

      {/* Experience Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {professionalExperience.map((job, index) => (
          <ResumeCard
            key={index}
            id={job.id}
            timeframe={job.timeframe}
            role={job.role}
            company={job.company}
            description={job.description}
            skills={job.skills}
          />
        ))}
      </div>

      <section id="education">
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>

        <ResumeCard
          id={education.id}
          timeframe={education.timeframe}
          role={education.role}
          company={education.company}
          description={education.description}
          skills={education.skills}
          href={education.href} />
      </section>

      <div className="pdf-preview hidden sm:block">
        <h2 className="text-2xl font-bold text-white mb-6">My CV</h2>
        <iframe
          src="/CV-custom-Tadeu-Marques-Frontend-developer.pdf#toolbar=0&view=FitH" // Customize parameters to control view
          title="Resume Preview"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        ></iframe>
        <p>
          If the preview doesnt load, you can download the CV in the following link
        </p>
      </div>

      {/* CV Download Button */}
      <div className="mt-4 text-center">
        <a
          href="/CV-custom-Tadeu-Marques-Frontend-developer.pdf#toolbar=0&view=FitH" // Ensure to add the correct path for the CV file
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-300 transition"
        >
          Download CV
        </a>
      </div>
    </section>

  );
};

export default Resume;