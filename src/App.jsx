import React, { useEffect, useRef } from 'react';
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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  const appRef = useRef(null);
  const dartBoardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll configuration
      gsap.config({
        autoSleep: 60,
        force3D: false,
        nullTargetWarn: false
      });

      // Dramatic page load animation with staggered reveal
      const tl = gsap.timeline();

      tl.fromTo(appRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.inOut"
        }
      );

      // Animate dart boards
      dartBoardsRef.current.forEach((board, index) => {
        // Initial position
        gsap.set(board, {
          rotation: index * 45,
          scale: 0.9,
          opacity: 0
        });

        // Animate in
        gsap.to(board, {
          rotation: index * 45 + 360,
          scale: 1,
          opacity: 0.1,
          duration: 2,
          delay: 0.5 + (index * 0.2),
          ease: "power2.inOut"
        });

        // Continuous rotation and pulse
        gsap.to(board, {
          rotation: `+=${360}`,
          duration: 120,
          repeat: -1,
          ease: "none"
        });

        gsap.to(board, {
          scale: 1.05,
          opacity: 0.15,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      // Create golden particles with more variety
      const createGoldenParticles = () => {
        for (let i = 0; i < 8; i++) {
          const particle = document.createElement('div');
          particle.className = 'absolute rounded-full';

          // More variety in particles
          const particleType = Math.random();

          if (particleType > 0.7) {
            // Gold dot
            particle.style.width = `${Math.random() * 6 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.background = 'var(--gold)';
          } else if (particleType > 0.4) {
            // Heart
            particle.innerHTML = '♥';
            particle.style.color = 'var(--gold)';
            particle.style.fontSize = `${Math.random() * 16 + 10}px`;
          } else if (particleType > 0.2) {
            // Wine dot
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.background = 'var(--wine)';
          } else {
            // Star
            particle.innerHTML = '✦';
            particle.style.color = 'var(--gold)';
            particle.style.fontSize = `${Math.random() * 14 + 8}px`;
          }

          particle.style.position = 'fixed';
          particle.style.pointerEvents = 'none';
          particle.style.zIndex = '999';
          particle.style.left = `${Math.random() * 100}vw`;
          particle.style.top = `${window.innerHeight + 20}px`;
          particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
          particle.style.filter = 'blur(1px)';

          document.body.appendChild(particle);

          // More dynamic animation
          gsap.to(particle, {
            y: -window.innerHeight - 100,
            x: `+=${(Math.random() - 0.5) * 300}`,
            rotation: Math.random() * 720 - 360,
            opacity: 0,
            duration: 10 + Math.random() * 15,
            ease: "power1.inOut",
            onComplete: () => {
              document.body.removeChild(particle);
            }
          });
        }
      };

      // Create particles periodically
      const particleInterval = setInterval(createGoldenParticles, 5000);
      // Create initial batch
      createGoldenParticles();

      // Parallax scrolling effect for dart boards
      dartBoardsRef.current.forEach((board, index) => {
        gsap.to(board, {
          y: `${(index % 2 === 0 ? '+' : '-')}=${100 + (index * 50)}`,
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
            ease: "none"
          }
        });
      });

      // Refresh ScrollTrigger on resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearInterval(particleInterval);
      };

    }, appRef);

    return () => ctx.revert();
  }, []);

  const addToDartBoardsRef = (el) => {
    if (el && !dartBoardsRef.current.includes(el)) {
      dartBoardsRef.current.push(el);
    }
  };

  return (
    <div ref={appRef} className="min-h-screen bg-dark text-white overflow-hidden dart-background">
      {/* Dart board background elements */}
      <div ref={addToDartBoardsRef} className="dart-board dart-board-top-left"></div>
      <div ref={addToDartBoardsRef} className="dart-board dart-board-top-right"></div>
      <div ref={addToDartBoardsRef} className="dart-board dart-board-bottom-left"></div>
      <div ref={addToDartBoardsRef} className="dart-board dart-board-bottom-right"></div>
      <div ref={addToDartBoardsRef} className="dart-board dart-board-center"></div>

      <Navigation />

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
