export const testimonials = [
  {
    "quote": "I had the pleasure of working with Tadeu at Mammoth, where he brought incredible energy and focus to the team. His unwavering commitment to refining our frontend practices transformed the way we operate. Tadeu made significant contributions in selecting the optimal technology stack, aligning component architecture, and ensuring clarity in backend demands. Additionally, his ability to collaborate with design and product owners and maintain high discipline in ticket management was commendable. Beyond his technical skills, Tadeu is a caring leader who genuinely invested time in guiding and mentoring everyone he led. He was always willing to share his expertise, offer support, and foster a collaborative atmosphere. The team\'s progress over the past three years speaks volumes to his technical leadership and dedication",
    "name": "Pankaj Lal",
    "title": "Data Management Innovator at Mammoth Analytics with Deep SaaS expertise",
    "source": "https://www.linkedin.com/in/tadeumarques/",
  },
  {
    "quote": "I had the pleasure of working closely with Tadeu as my front-end manager, where he consistently demonstrated great management skills and a personable demeanor. Throughout our time working together, Tadeu exhibited a good ability to oversee and guide the front-end development projects with confidence and clarity. Tadeu\'s leadership style is marked by his human approach and affable personality, which made collaborating with him really enjoyable. He fostered an environment of open communication and mutual respect within our team, allowing for the free exchange of ideas and constructive feedback. One of Tadeu's standout qualities is his unwavering confidence in the abilities of his team members. He consistently provided encouragement and support. His optimism was infectious and served as a driving force behind our team\'s progress. Beyond his managerial skills, Tadeu's genuine concern for the well-being and professional growth of his team members was evident in his actions. He took the time to understand our individual strengths and aspirations, offering guidance tailored to each team member\'s needs. In summary, Tadeu is a effective leader who possesses the combination of managerial acumen, interpersonal skills, and genuine empathy. His confidence in his team, coupled with his optimistic outlook, creates an environment where individuals thrive and excel. Should you have any further inquiries regarding Tadeu\'s qualifications or contributions, please do not hesitate to reach out to me. I am more than happy to provide additional insight into his leadership capabilities.",
    "name": "Filipe Silva",
    "title": "Frontend developer at Mammoth Analytics",
    "source": "https://www.linkedin.com/in/tadeumarques/",
  },
  {
    "quote": "I have worked with Tadeu on frontend development. He has great skills. Working with him I learned a lot of things. He has strong work ethics. He is cordial and motivating. I always benifited talking to him on personal and techinical things. He has a good and positive vibe.",
    "name": "Pedro Braz",
    "title": "Co-founder at HelpMeChoose",
    "source": "https://www.linkedin.com/in/tadeumarques/",
  },
  {
    "quote": "His problem-solving skills are unmatched, making him a key asset to our company.",
    "name": "Yogeshwar Trehan",
    "title": "Senior Software Engineer at Mammoth Analytics",
    "source": "https://www.linkedin.com/in/tadeumarques/",
  },
  {
    "quote": "Having worked with Tadeu was a pleasure. We had an excellent partnership when jointly developing a large solution, Tadeu proved to be an excellent VueJs developer, mastering the technology with wisdom and experience.",
    "name": "Ronaldo Quionha de Jesus",
    "title": "Full Stack developer at Tips4y",
    "source": "https://www.linkedin.com/in/tadeumarques/",
  },
  {
    "quote":
      "Tadeu was a great front-end leader. He has a lot of experience mainly in design patterns and great readable code. We work together using Vuejs in which he has a lot of experience and mastery, especially with pure Javascript, which he has extensive knowledge. Always willing to help arrive at the best solution for any problem that may arise. He was a great mentor in terms of the front-end, he helped my professional development and growth! I would like to work with him again! I wish the best always!",
    "name": "Thiago Lago",
    "title": "Junior developer at Tips4y",
    "source": "https://www.linkedin.com/in/tadeumarques/",
  },
] as const;

export const socials = [
  {
    alt: 'Gmail',
    href: 'mailto:eng.tadeu.marques@gmail.com',
    icon: '/gmail_icon.svg'
  },
  {
    alt: 'LinkedIn',
    href: 'https://www.linkedin.com/in/tadeumarques/',
    icon: '/linkedin_icon.svg'
  },
  {
    alt: 'Github',
    href: 'https://github.com/Tadeu17',
    icon: '/github_icon.svg'
  },
  {
    alt: 'LinkedIn',
    href: 'https://stackoverflow.com/users/3319997/tadeu-marques',
    icon: '/stackoverflow_icon.svg'
  }
] as const

import { TRoleInfo } from "./components/types";
export const professionalExperience: TRoleInfo[] = [
  {
    id: "mammoth",
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
    // skills: ["Javascript", "Vue.js", "SCRUM", "Jira", "Figma", "Git"],
  },
  {
    id: "mammoth",
    timeframe: "Dec 2020 - Sep 2021",
    role: "Lead Frontend Developer",
    company: "Mammoth Analytics",
    description: [
      "Migrated complex AngularJS application to Vue.js for better maintainability.",
      "Designed and implemented a Design System Manager (DSM) for UI consistency.",
      "Mentored team members on modern frontend practices, boosting productivity.",
    ],
    // skills: ["Javascript", "Vue.js", "Angular js", "Design Systems", "Sass", "Git"],
  },
  {
    id: "tips4y",
    timeframe: "Aug 2020 - Nov 2020",
    role: "Lead Frontend Developer",
    company: "Tips4y",
    description: [
      "Leveraged extensive Vue.js expertise to guide and mentor a team of 4 developers, promoting best practices and team cohesion.",
      "Led the team to deliver key projects on a tight timeline for crucial clients, ensuring quality and timely completion through effective collaboration.",
      "Acted as a liaison between development and project management, enhancing communication and aligning goals.",
    ],
    // skills: ["Javascript", "Vue.js", "CSS", "Figma", "PHP", "Git"],
  },
  {
    id: "betmarkets",
    timeframe: "Apr 18 - Dec 2019",
    role: "Lead Frontend Developer",
    company: "Betmarkets",
    description: [
      "Led all frontend development and maintenance, rebuilding the full platform twice assuring responsiveness and cross platform compatibility",
      "Mentored an intern in Vue.js and frontend development, fostering both technical skills and professional growth. ",
      "The platform supported nearly €1,000,000 in user wagers prior to the next major release, highly contributing to the company’s revenue with minimal support tickets being raised for fixes in the platform",
    ],
    // skills: ["Javascript", "Vue.js", "CSS", "SASS", "amcharts", "Git"],
  },
  {
    id: "jumia",
    timeframe: "Apr 2017 - Apr 18",
    role: "Frontend Developer",
    company: "Jumia",
    description: [
      "Worked with UI / UX producing a new UI for the company’s tracking page that resulted in significant improvement in user retention from the 5 + million users of Jumia",
      "Delivered consistent design updates based on UI / UX feedback, optimizing for both desktop and mobile users.",
      "Improved efficiency on an internal platform for package processing Worked under a good Agile SCRUM oriented team."
    ],
    // skills: ["Javascript", "Angular js", "Zeplin", "CSS", "google maps", "google analytics", "gulp", "JIRA", "SCRUM", "Git"],
  },
  {
    timeframe: "Feb 2017 - Apr 2017",
    role: "Frontend Developer Intern",
    company: "Full six",
    description: [
      "(2 months isolated job) develop interfaces for a big portuguese Electricity Company (EDP).",
      "Significantly improvskills.",
    ],
    // skills: ["Javascript", "Vue.js", "HTML5", "CSS3", "Git", "Git"],
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
    // skills: ["Javascript", "Vue.js", "HTML5", "CSS3", "Git", "Git"],
  },
] as const;

export const educationExperience: TRoleInfo = {
  id: 'education',
  timeframe: "2008 - May 2014",
  role: "Student & Thesis Intern",
  company: "Cardmobili",
  description: [
    "For my Master thesis I developed an AR android feature for a company to show in real time where all the stores were located around the user.",
  ],
  skills: ["Android"],
  href: 'https://hdl.handle.net/10216/84105'
}

import { TSkillsCathegory } from './components/types'
export const skillsData: TSkillsCathegory[] = [
  {
    cathegory: "Frontend Development",
    skills: [
      { name: "Vue.js", level: "Expert" },
      { name: "Vue 3", level: "Expert" },
      { name: "Vuex", level: "Expert" },
      { name: "HTML5", level: "Expert" },
      { name: "REST APIs", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Vuetify", level: "Advanced" },
      { name: "TailwindCSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
      { name: "Sass/SCSS", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Pinia", level: "Advanced" },
      { name: "Web Performance", level: "Intermediate" },
      { name: "SEO", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Nuxt", level: "Intermediate" },
      { name: "AngularJS", level: "Intermediate" },
      { name: "Progressive Web Apps (PWAs)", level: "Intermediate" },
      { name: "Web Accessibility (WCAG)", level: "Basic" },
    ],
  },
  {
    cathegory: "Management & Leadership",
    skills: [
      { name: "Team Motivation", level: "Expert" },
      { name: "Recruitment & Hiring", level: "Expert" },
      { name: "Team Leadership", level: "Expert" },
      { name: "Agile/Scrum", level: "Advanced" },
      { name: "Conflict Resolution", level: "Advanced" },
      { name: "Cross-functional Team Management", level: "Advanced" },
      { name: "Project Planning & Roadmaps", level: "Advanced" },
      { name: "Stakeholder Communication", level: "Advanced" },
      { name: "Product Ownership", level: "Intermediate" },
      { name: "Performance Reviews", level: "Advanced" },
      { name: "Resource Allocation", level: "Advanced" },
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
] as const;

import { TProject } from "./components/types";

export const projects: TProject[] = [
  {
    id: "portfolio-project",
    title: "Portfolio",
    thumbnail: '/images/portfolio.webp',
    type: 'personal',
    href: 'https://www.tadeu-marques.com',
    github: 'https://github.com/Tadeu17/portfolio',
    description: 'My portfolio to showcase all projects I worked on and social proof testimonials while mainting very good performance for web vitals, accessibility and SEO',
    skills: ["Javascript", "Next js", "SEO", "Web Performance", "Accessibility", "Tailwind css", "React", "Analytics", "Vercel", "SCRUM", "Git", "ChatGPT", "AI"]
  },
  {
    id: "notes-project",
    title: "Notes app",
    thumbnail: '/images/notes-app.webp',
    type: 'personal',
    href: 'https://notes-app-6b807.web.app/#/',
    github: 'https://github.com/Tadeu17/vue3-notes-project',
    description: 'A simple and effective app for managing notes.',
    skills: ["Javascript", "Vue 3", "Firebase", "Vite", "CSS", "Git", "Bulma", "Vue Router"]
  },
  {
    id: "study-project",
    title: "Study app",
    thumbnail: '/images/study-app.webp',
    type: 'personal',
    href: 'https://study-web-app-cb1b5.web.app/play',
    github: 'https://github.com/Tadeu17/study-app',
    description: 'An app designed to help anyone learn whatever they want by leveraging AI.',
    skills: ["Javascript", "Vue 3", "Firebase", "Vite", "CSS", "AI", "Git", "Vue Router"]
  },
  {
    id: "mammoth-project",
    title: "Mammoth",
    thumbnail: '/images/mammoth.webp',
    type: 'professional',
    href: 'https://mammoth.io/',
    description: 'A professional data analytics platform for enterprise clients.',
    skills: ["Javascript", "Vue js", "Angular js", "Storybook", "Vuex", "Vue Router", "CSS", "SASS / SCSS", "Webpack", "Vite", "JIRA", "SCRUM", "Git", "Web Performance", "Figma"]
  },
  {
    id: "betmarkets-project",
    title: 'Betmarkets',
    thumbnail: '/images/betmarkets.webp',
    type: 'professional',
    href: 'https://www.youtube.com/watch?v=zR-3nc4ajR8&t=208s',
    description: 'A financial platform for managing investments in sports betting.',
    skills: ["Javascript", "Vue js", "Vuex", "Webpack", "Vue Router", "SASS / SCSS", "Am Charts", "Google Analytics", "Hotjar", "Git", "Figma"]
  },
  {
    id: "tips4y-project",
    title: 'Tips4y',
    thumbnail: '/images/tips4y.webp',
    type: 'professional',
    href: 'https://www.tips4y.pt/',
    description: 'Tips4y is a technology company specializing in digital solutions for the automotive aftermarket, aiming to enhance efficiency and innovate the future of automotive mobility.',
    skills: ["Javascript", "Vue js", "Vuex", "Vue Router", "Webpack", "PHP", "JIRA", "SCRUM", "Git", "Team management", "Conflict resolution"]
  },
  {
    id: "jumia-project",
    title: 'Jumia',
    thumbnail: '/images/jumia.webp',
    type: 'professional',
    href: 'https://packagetracker-services.jumia.com/#/',
    description: 'E-commerce platform connecting millions of users across Africa.',
    skills: ["Javascript", "Angular js", "Angular Forms", "Zeplin", "CSS", "google maps", "google analytics", "gulp", "JIRA", "SCRUM", "Git"]
  },
] as const;