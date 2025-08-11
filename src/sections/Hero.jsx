import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Calendar, MapPin, Clock, Target, ArrowDown } from 'lucide-react';
import SplittableText from '../components/SplittableText';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const nameContainerRef = useRef(null);
  const davidNameRef = useRef(null);
  const ruthNameRef = useRef(null);
  const ampersandRef = useRef(null);
  const dateCardRef = useRef(null);
  const venueCardRef = useRef(null);
  const quoteRef = useRef(null);
  const targetRingsRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animated dart board rings
      const rings = targetRingsRef.current.querySelectorAll('.target-ring');
      gsap.set(rings, { scale: 0, opacity: 0 });

      gsap.to(rings, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.5
      });

      // Continuous subtle rotation for rings
      rings.forEach((ring, index) => {
        gsap.to(ring, {
          rotation: (index % 2 === 0) ? 360 : -360,
          duration: 120 + (index * 20),
          repeat: -1,
          ease: "none"
        });
      });

      // Names animation with split text effect
      const davidLetters = davidNameRef.current.querySelectorAll('.letter');
      const ruthLetters = ruthNameRef.current.querySelectorAll('.letter');

      gsap.set([davidLetters, ruthLetters, ampersandRef.current], { opacity: 0, y: 50 });

      // David's name animation
      gsap.to(davidLetters, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 1
      });

      // Ampersand animation
      gsap.to(ampersandRef.current, {
        opacity: 1,
        y: 0,
        scale: 1.2,
        duration: 1,
        ease: "back.out(2)",
        delay: 1.8
      });

      // Ruth's name animation
      gsap.to(ruthLetters, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "back.out(1.7)",
        delay: 2
      });

      // Gold shimmer effect on names
      gsap.to([davidNameRef.current, ruthNameRef.current], {
        backgroundPosition: '200% center',
        duration: 4,
        repeat: -1,
        ease: "linear",
        delay: 3
      });

      // Quote animation with typewriter effect
      const quote = quoteRef.current;
      const quoteText = quote.querySelector('p');
      const originalText = quoteText.textContent;
      quoteText.textContent = '';

      let i = 0;
      const typeWriter = () => {
        if (i < originalText.length) {
          quoteText.textContent += originalText.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        } else {
          // Add the underline after typing is complete
          gsap.to(quote.querySelector('.underline'), {
            width: '100px',
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          });
        }
      };

      // Start typewriter after a delay
      setTimeout(typeWriter, 3000);

      // Cards animation with 3D effect
      gsap.set([dateCardRef.current, venueCardRef.current], { 
        opacity: 0, 
        y: 100,
        rotationX: 20,
        transformPerspective: 1000
      });

      gsap.to(dateCardRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 3.5
      });

      gsap.to(venueCardRef.current, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 3.8
      });

      // Hover effects for cards
      [dateCardRef.current, venueCardRef.current].forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(212, 175, 55, 0.3)',
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 10px rgba(212, 175, 55, 0.2)',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Floating elements with dynamic movement
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          gsap.set(element, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          });

          gsap.to(element, {
            opacity: 0.6,
            duration: 1,
            delay: 4 + (index * 0.2)
          });

          gsap.to(element, {
            x: `+=${(Math.random() - 0.5) * 200}`,
            y: `+=${(Math.random() - 0.5) * 200}`,
            rotation: Math.random() * 360,
            duration: 20 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });

      // Scroll indicator animation
      const scrollIndicator = document.querySelector('.scroll-indicator');
      gsap.fromTo(scrollIndicator,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 4.5
        }
      );

      // Continuous bounce animation for arrow
      gsap.to(scrollIndicator.querySelector('svg'), {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToFloatingRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden dart-background py-20">
      {/* Target rings background */}
      <div ref={targetRingsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="target-ring absolute w-[800px] h-[800px] rounded-full border-4 border-white/50"></div>
        <div className="target-ring absolute w-[600px] h-[600px] rounded-full border-4 border-white/50"></div>
        <div className="target-ring absolute w-[400px] h-[400px] rounded-full border-4 border-white/50"></div>
        <div className="target-ring absolute w-[200px] h-[200px] rounded-full border-4 border-white/50"></div>
        <div className="target-ring absolute w-[100px] h-[100px] rounded-full bg-gold"></div>
      </div>

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={addToFloatingRefs}
          className="absolute pointer-events-none"
        >
          {i % 3 === 0 ? (
            <Heart fill="var(--gold)" size={16 + i * 3} className="text-gold" />
          ) : i % 3 === 1 ? (
            <Target size={14 + i * 3} className="text-gold" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-gold"></div>
          )}
        </div>
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Main content container with modern layout */}
        <div className="flex flex-col items-center">
          {/* Quote with typewriter effect */}
          <div ref={quoteRef} className="mb-12 text-center">
            <p className="text-gold font-script text-xl sm:text-2xl md:text-3xl mb-4 opacity-90 min-h-[40px]"></p>
            <div className="underline w-0 h-0.5 bg-gold mx-auto rounded-full opacity-0"></div>
          </div>

          {/* Names with modern styling */}
          <div ref={nameContainerRef} className="mb-16 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* David's name */}
              <SplittableText
                ref={davidNameRef}
                as="h1"
                text="David Yaw"
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold font-black"
              />

              {/* Ampersand */}
              <div 
                ref={ampersandRef} 
                className="text-5xl md:text-6xl font-script text-gold my-2 md:my-0"
              >
                &
              </div>

              {/* Ruth's name */}
              <SplittableText
                ref={ruthNameRef}
                as="h1"
                text="Ruth Mamley"
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold font-black"
              />
            </div>

            {/* Wedding announcement */}
            <div className="mt-8 mb-12">
              <p className="text-white font-serif text-xl md:text-2xl mb-4 animate-fadeIn font-black text-gold animate-delay-3">
                are joyfully getting married
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className="w-16 h-0.5 bg-gold"></div>
                <Target className="w-6 h-6 text-gold animate-pulse" />
                <div className="w-16 h-0.5 bg-gold"></div>
              </div>
            </div>
          </div>

          {/* Info cards with modern design */}
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Date card */}
            <div 
              ref={dateCardRef} 
              className="glass-modern-gold rounded-3xl p-8 md:p-10 shadow-xl border border-gold/30 transform transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-dark-gold-gradient flex items-center justify-center shadow-lg">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-gold text-sm uppercase tracking-widest font-medium">
                    Save the Date
                  </h3>
                  <p className="text-white/70 text-xs">
                    Join us on our special day
                  </p>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-4xl md:text-5xl font-serif text-white mb-2">
                  August <span className="text-gold">16</span>
                </p>
                <p className="text-6xl font-serif text-gold mb-2">
                  2025
                </p>
                <p className="text-white/70 text-lg">
                  Saturday
                </p>
              </div>

              {/* Time information */}
              <div className="mt-6 pt-6 border-t border-gold/20">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-gold text-sm uppercase tracking-widest font-medium">
                      Ceremony Time
                    </p>
                    <p className="text-white/70 text-xs">
                      Please arrive by 11:00 AM
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-serif text-white text-center">
                  <span className="text-gold">11:00</span> PM
                </p>
              </div>
            </div>

            {/* Venue card */}
            <div 
              ref={venueCardRef} 
              className="glass-modern-gold rounded-3xl p-8 md:p-10 shadow-xl border border-gold/30 transform transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-dark-wine-gradient flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-gold text-sm uppercase tracking-widest font-medium">
                    Ceremony Venue
                  </h3>
                  <p className="text-white/70 text-xs">
                    Where we'll exchange our vows
                  </p>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-serif text-gold mb-3">
                  Kingdom Hall of Jehovah's Witnesses
                </h3>
                <div className="inline-block px-4 py-2 rounded-full bg-dark/50 border border-gold/20 text-white/80 text-sm mb-4">
                  Mandela High Street, Ashiaman
                </div>
                <p className="text-white/70">
                  Close to the ASHMA Office
                </p>
              </div>

              {/* Action button */}
              <div className="mt-6 pt-6 border-t border-gold/20 text-center">
                <a
                  href="#details"
                  className="inline-block px-6 py-3 rounded-full bg-dark-gold-gradient text-white font-medium shadow-lg border border-gold/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  View Program Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gold/70 text-sm mb-2 font-medium">Scroll Down</p>
        <div className="w-10 h-10 rounded-full bg-dark-gold-gradient flex items-center justify-center shadow-lg border border-gold/30">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
