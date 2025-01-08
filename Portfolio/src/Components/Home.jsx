import Header from './Header';
import Hero from './Hero';

const Home = () => {
  return (
    <main className="relative z-0 bg-black">
      <div className="relative bg-hero-pattern bg-cover bg-center w-full h-full">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>
    </main>
  );
};

export default Home;
