import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Landing from '@/components/sections/Landing';
import Resume from '@/components/sections/Resume';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';

const HomePage = () => {
  return (
    <main className="flex flex-wrap justify-center">
      <Landing />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;
