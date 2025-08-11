import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Components
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import WeddingDetails from './sections/WeddingDetails';
import PhotoGallery from './sections/PhotoGallery';
import Cast from './sections/Cast';
import PhotographyOrder from './sections/PhotographyOrder';
import Footer from './sections/Footer';
import InstallPWAButton from './components/InstallPWAButton';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {


  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden dart-background">
      <Navigation />
      <InstallPWAButton />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="details">
          <WeddingDetails />
        </section>

        <section id="gallery">
          <PhotoGallery />
        </section>

        <section id="cast">
          <Cast />
        </section>

        <section id="order">
          <PhotographyOrder />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
