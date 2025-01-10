

import About from './About';
import Header from './Header';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="relative z-0 bg-[#272c39]">
      <div className="relative bg-hero-pattern bg-cover bg-center w-full h-full">
        <div className="absolute inset-0 bg-black opacity-50 z-0">
          
        </div>
        <div className="relative z-0">
          <Header />
          <Hero />
        </div>
      </div>
   <About/>
    </main>
  );
};

export default Home;
