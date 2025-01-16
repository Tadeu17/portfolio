"use client";

import { useEffect, useState } from 'react';
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between min-h-20">
            <span className="md:w-auto h-20 flex items-center text-2xl font-bold text-white">Tadeu</span>

            <div className='md:hidden h-20 flex-grow'></div>

            {/* Menu Container */}
            <div
              className={`absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-sm
    transform transition-all duration-500 overflow-hidden
    ${isMenuOpen ? 'max-h-[100vh] ease-in' : 'max-h-0 ease-out'}`}
            >
              {/* Menu Items */}
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col gap-y-4">
                  {['landing', 'about', 'resume', 'skills', 'projects', 'contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item}`}
                      className="relative inline-block px-1 py-2 group w-fit"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span
                        className={`text-sm font-medium 
                          ${activeSection === item ? 'text-yellow-500' : 'text-white'}`
                        }
                      >
                        {item.toUpperCase()}
                      </span>
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-yellow-500 transition-all duration-1000 ease-in-out
                                  ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'}`
                        }
                        style={{
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:w-auto md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-20 flex gap-1 items-center text-gray-400 hover:text-white"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
                MENU
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
