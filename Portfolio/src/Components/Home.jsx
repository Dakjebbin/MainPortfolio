

import About from './About';
import Header from './Header';
import Hero from './Hero';
import Work from './Work';

const Home = () => {
  return (
    <main className="relative z-0 ">
      <div className="relative bg-hero-pattern bg-cover bg-center w-full h-full">
     
        <div className="z-0">
          <Header />
          <Hero />
        </div>
      </div>
      <div className='bg-gradient-to-br from-[rgb(37,7,59)] to-[#512e68]'>
   <About/> 
      <Work/>
      </div>
    </main>
  );
};

export default Home;
