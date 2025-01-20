"use client"

import { useState } from 'react';

import Image from 'next/image';
import SectionTitle from '../SectionTitle'

const About = () => {
  const [view, setView] = useState<'development' | 'management'>('development');

  const content = {
    development: (
      <>
        <p className="text-gray-300 mb-4">
          I specialize in building scalable, user-focused web applications using Vue.js, TypeScript, and TailwindCSS. With 10+ years of professional experience, I thrive on delivering high-quality solutions for complex challenges.
        </p>
        <ul className="text-gray-50 space-y-2">
          <li><strong>Professional Experience:</strong> 10+ years</li>
          <li><strong>Expertise:</strong> Vue.js, TypeScript, TailwindCSS</li>
          <li><strong>Achievements:</strong> Delivered performant, responsive, accessible, and user-friendly apps</li>
          <li><strong>Hobbies:</strong> Entrepreneurship, martial arts, travel</li>
        </ul>
      </>
    ),
    management: (
      <>
        <p className="text-gray-300 mb-4">
          As an engineering manager, I excel at mentoring teams, fostering collaboration, and aligning technical efforts with strategic goals. My leadership approach emphasizes innovation, efficiency, and growth.
        </p>
        <ul className="text-gray-50 space-y-2">
          <li><strong>Leadership:</strong> Team mentoring, roadmap planning</li>
          <li><strong>Collaboration:</strong> Cross-functional team alignment</li>
          <li><strong>Achievements:</strong> Improved team productivity, reduced onboarding time, optimized processes</li>
          <li><strong>Hobbies:</strong> Entrepreneurship, martial arts, travel</li>
        </ul>
      </>
    ),
  };

  return (
    <section id="about" className="container min-h-screen px-6 py-20 flex flex-col md:flex-row">
      <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
        <Image
          src="/tadeu.webp"
          alt="Tadeu Marques"
          width={256}
          height={256}
          className="w-72 h-72 rounded-xl object-cover shadow-[3px_3px_0px_0px] shadow-amber-400 "
        />
        {/* <span className='text-white'>teste</span> */}
      </div>

      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <SectionTitle title="About Me" />
        <label className="mb-2 flex justify-center items-center cursor-pointer lg:justify-start">
          <div
            className="relative inline-block w-[200px] h-8 bg-gray-400 rounded-full transition"
            onClick={() => setView(view === 'development' ? 'management' : 'development')}
          >
            {/* Background Words */}
            <div className="absolute w-full h-full flex justify-between px-1">
              <span className={`w-24 text-center text-sm font-medium leading-8 z-10 ${view === 'development' ? 'text-white' : 'text-gray-600'}`}>
                Development
              </span>
              <span className={`w-24 text-center text-sm font-medium leading-8 z-10 ${view === 'management' ? 'text-white' : 'text-gray-600'}`}>
                Management
              </span>
            </div>

            {/* Sliding Highlight */}
            <span
              className={`absolute top-1 left-1 w-24 h-6 bg-amber-400 rounded-full transition-transform 
                ${view === 'management' ? 'translate-x-24' : 'translate-x-0'}`}
            />
          </div>
        </label>


        {content[view]}
      </div>
    </section>

  );
};

export default About;