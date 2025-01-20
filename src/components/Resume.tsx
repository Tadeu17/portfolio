import ResumeCard from "./ResumeCard";

import { TRoleInfo } from "./types";

const Resume = () => {
  const professionalExperience: TRoleInfo[] = [
    {
      timeframe: "Sep 2021 - May 2024",
      role: "Frontend Manager",
      company: "Mammoth Analytics",
      description: [
        "Led a team of 4 frontend developers and implemented SCRUM processes.",
        "Reduced company onboarding time from 3 months to 2 weeks.",
        "Enhanced cross-team collaboration to deliver scalable, high-performance and efficient solutions.",
        "Reduced development time in some features from 3 months to 3-4 weeks",
        "Improved code efficiency by reducing bundling size and compilation time by 10x"
      ],
      skills: ["Javascript", "Vue.js", "SCRUM", "Jira", "Figma", "Git"],
    },
    {
      timeframe: "Dec 2020 - Sep 2021",
      role: "Lead Frontend Developer",
      company: "Mammoth Analytics",
      description: [
        "Migrated complex AngularJS application to Vue.js for better maintainability.",
        "Designed and implemented a Design System Manager (DSM) for UI consistency.",
        "Mentored team members on modern frontend practices, boosting productivity.",
      ],
      skills: ["Javascript", "Vue.js", "Angular js", "Design Systems", "Sass", "Git"],
    },
    {
      timeframe: "Aug 2020 - Nov 2020",
      role: "Lead Frontend Developer",
      company: "Tips4y",
      description: [
        "Leveraged extensive Vue.js expertise to guide and mentor a team of 4 developers, promoting best practices and team cohesion.",
        "Led the team to deliver key projects on a tight timeline for crucial clients, ensuring quality and timely completion through effective collaboration.",
        "Acted as a liaison between development and project management, enhancing communication and aligning goals.",
      ],
      skills: ["Javascript", "Vue.js", "CSS", "Figma", "PHP", "Git"],
    },
    {
      timeframe: "Apr 18 - Dec 2019",
      role: "Lead Frontend Developer",
      company: "Betmarkets",
      description: [
        "Led all frontend development and maintenance, rebuilding the full platform twice assuring responsiveness and cross platform compatibility",
        "Mentored an intern in Vue.js and frontend development, fostering both technical skills and professional growth. ",
        "The platform supported nearly €1,000,000 in user wagers prior to the next major release, highly contributing to the company’s revenue with minimal support tickets being raised for fixes in the platform",
      ],
      skills: ["Javascript", "Vue.js", "CSS", "SASS", "amcharts", "Git"],
    },
    {
      timeframe: "Apr 2017 - Apr 18",
      role: "Frontend Developer",
      company: "Jumia",
      description: [
        "Worked with UI / UX producing a new UI for the company’s tracking page that resulted in significant improvement in user retention from the 5 + million users of Jumia",
        "Delivered consistent design updates based on UI / UX feedback, optimizing for both desktop and mobile users.",
        "Improved efficiency on an internal platform for package processing Worked under a good Agile SCRUM oriented team."
      ],
      skills: ["Javascript", "Angular js", "Zeplin", "CSS", "google maps", "google analytics", "gulp", "JIRA", "SCRUM", "Git"],
    },
    {
      timeframe: "Feb 2017 - Apr 2017",
      role: "Frontend Developer Intern",
      company: "Full six",
      description: [
        "(2 months isolated job) develop interfaces for a big portuguese Electricity Company (EDP).",
        "Significantly improvskills.",
      ],
      skills: ["Javascript", "Vue.js", "HTML5", "CSS3", "Git", "Git"],
    },
    {
      timeframe: "Aug 2014 - Jun 2016",
      role: "Frontend Developer Intern",
      company: "Positive Blue",
      description: [
        "Developed user-friendly interfaces for CRM applications.",
        "Learned and applied foundational knowledge of Vue.js a",
        "Created a commercial flow of expenses management and a users’ profile and interaction dashboard.",
      ],
      skills: ["Javascript", "Vue.js", "HTML5", "CSS3", "Git", "Git"],
    },
  ];



  return (
    <section id="resume" className="container min-h-screen px-6 py-20">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">Resume</h2>

      {/* Experience Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {professionalExperience.map((job, index) => (
          <ResumeCard
            key={index}
            timeframe={job.timeframe}
            role={job.role}
            company={job.company}
            description={job.description}
            skills={job.skills}
          />
        ))}
      </div>

      <div className="pdf-preview hidden sm:block">
        <h3 className="text-2xl font-bold text-yellow-400 mb-6">My CV</h3>
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