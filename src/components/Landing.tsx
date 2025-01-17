import Image from 'next/image';

const Landing = () => {
  return (
    <section id="landing" className="w-full min-h-screen flex items-center px-6 lg:px-20 bg-black relative pt-20 lg:pt-0">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/main-background.webp"
          alt="Tadeu Marques"
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative">
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <span className="text-amber-400 font-medium tracking-wider mb-4 block">
            WELCOME!
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white">
            I&apos;m a{' '}
            <div className="text-amber-400">
              frontend
              <br />
              developer <span className="text-white/80">&</span> manager
            </div>

            <div className="flex items-center gap-3 text-white/80 justify-center lg:justify-start">
              <span>based in</span>
              <div className="flex items-center h-[0.7em] self-end mb-1">
                <Image
                  src="/portugal-flag.webp"
                  alt="Portuguese Flag"
                  width={96}
                  height={96}
                  className="h-full w-auto"
                />
              </div>
            </div>
          </h1>
          <div className="flex gap-6 mt-10 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition-colors">
              HIRE ME
            </button>
            <button className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              MY WORKS
            </button>
          </div>
        </div>

        {/* Image only visible on desktop */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative hidden lg:block">
          <Image
            src="/main-background.webp"
            alt="Tadeu Marques"
            width={500}
            height={500}
            className="w-full max-w-[600px] max-h-[600px] ml-auto object-cover rounded-full outline outline-amber-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
