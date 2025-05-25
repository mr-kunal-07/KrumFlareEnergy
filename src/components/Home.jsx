import Hero from './Hero';
import About from './About';
import Projects from './Projects/Projects';
import Partners from './Patners/Partners';
import AboutWebsiteStats from './AboutWebsiteStats';

const Home = () => {

  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <Projects />
      {/* <Services/> */}
      <AboutWebsiteStats />
    </div>
  );
};

export default Home;
