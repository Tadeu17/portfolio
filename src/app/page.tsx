import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Landing from '@/components/Landing';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';

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
