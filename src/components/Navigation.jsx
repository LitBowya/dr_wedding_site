import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, Heart, Target, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { href: '#hero', label: 'Home', icon: <Heart className="w-4 h-4" /> },
    { href: '#about', label: 'Our Story', icon: <Heart className="w-4 h-4" /> },
    { href: '#details', label: 'Program', icon: <Target className="w-4 h-4" /> },
    { href: '#gallery', label: 'Gallery', icon: <Heart className="w-4 h-4" /> },
    { href: '#cast', label: 'Wedding Cast', icon: <Target className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial nav entrance animation with staggered items
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3
        }
      );

      // Logo animation
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0, rotation: -10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );

      // Nav items staggered animation
      gsap.fromTo(navItemsRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          delay: 1
        }
      );

      // Scroll-triggered background change with smoother transition
      ScrollTrigger.create({
        trigger: "body",
        start: "80px top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      });

      // Create enhanced glowing effect for logo
      const logoGlow = () => {
        const tl = gsap.timeline({repeat: -1, repeatDelay: 3});
        tl.to('.nav-logo-glow', {
          filter: 'drop-shadow(0 0 12px rgba(212, 175, 55, 0.9))',
          scale: 1.1,
          duration: 1.5,
          ease: "sine.inOut"
        })
        .to('.nav-logo-glow', {
          filter: 'drop-shadow(0 0 3px rgba(212, 175, 55, 0.4))',
          scale: 1,
          duration: 1.5,
          ease: "sine.inOut"
        });

        return tl;
      };

      logoGlow();

      // Track active section for navigation highlighting
      const sections = navItems.map(item => item.href.substring(1));

      sections.forEach(section => {
        ScrollTrigger.create({
          trigger: `#${section}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(section),
          onEnterBack: () => setActiveSection(section)
        });
      });

    }, navRef);

    return () => ctx.revert();
  }, []);

  const smoothScrollTo = (target) => {
    const element = document.querySelector(target);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 80
        },
        ease: "power3.inOut"
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      // Enhanced menu opening animation
      gsap.fromTo(menuRef.current,
        { opacity: 0, scale: 0.95, y: -20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        }
      );

      // Staggered menu items animation
      const menuItems = menuRef.current.querySelectorAll('button');
      gsap.fromTo(menuItems,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2
        }
      );
    }
  };

  const addToNavItemsRef = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-modern-gold border-b border-gold/30 backdrop-blur-xl shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Modern Logo */}
            <div
              ref={logoRef}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => smoothScrollTo('#hero')}
            >
              <div className="relative nav-logo-glow">
                <div className="w-12 h-12 rounded-full bg-dark-gold-gradient flex items-center justify-center shadow-lg border border-gold/30">
                  <Target className="w-7 h-7 text-gold transition-all duration-300 group-hover:scale-110" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors duration-300">
                  D & R
                </span>
                <div className="text-xs font-script tracking-wide text-gold/80">
                  August 16th, 2025
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  ref={addToNavItemsRef}
                  onClick={() => smoothScrollTo(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group overflow-hidden ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gold/20 text-gold'
                      : 'text-white/90 hover:text-gold hover:bg-gold/10'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>

                  {/* Enhanced hover effect */}
                  <span className={`absolute inset-0 bg-gold/10 transform scale-0 rounded-full transition-transform duration-300 group-hover:scale-100 ${
                    activeSection === item.href.substring(1) ? 'scale-100' : ''
                  }`}></span>

                  {/* Shimmer effect on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 shimmer-effect"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-full bg-gold/10 text-gold hover:bg-gold/20 transition-all duration-300 shadow-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden glass-modern-gold border-t border-gold/20 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollTo(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gold/20 text-gold'
                      : 'text-white hover:text-gold hover:bg-gold/10'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      {item.icon}
                      {item.label}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                      activeSection === item.href.substring(1) ? 'text-gold' : 'text-gold/50'
                    }`} />
                  </span>
                </button>
              ))}

              {/* Mobile wedding info */}
              <div className="mt-6 pt-4 border-t border-gold/20">
                <div className="text-center">
                  <p className="text-gold font-script text-lg">David & Ruth</p>
                  <p className="text-white/60 text-sm">Kingdom Hall of Jehovah's Witnesses</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile menu overlay with dart board elements */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-dark/80 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Dart board elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold/5 animate-dartPulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-wine/5 animate-dartPulse" style={{animationDelay: '2s'}}></div>

          {/* Gold elements */}
          <div className="absolute top-1/3 right-1/3 text-gold text-3xl opacity-30 animate-floatHeart">♥</div>
          <div className="absolute bottom-1/4 left-1/3 text-gold text-4xl opacity-25 animate-floatHeart" style={{animationDelay: '1.5s'}}>♥</div>
        </div>
      )}
    </>
  );
};

export default Navigation;
