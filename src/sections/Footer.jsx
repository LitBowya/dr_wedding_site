import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Social icons romantic animation
      const socialIcons = contentRef.current?.querySelectorAll('.social-icon');
      if (socialIcons) {
        gsap.fromTo(socialIcons,
          { opacity: 0, scale: 0, rotation: 180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-wine via-dark-wine to-wine text-white overflow-hidden">
      {/* Romantic background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-40 h-40 bg-gold rounded-full blur-3xl animate-goldSparkle"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-light-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold rounded-full blur-3xl"></div>
      </div>

      {/* Floating love elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 text-gold text-4xl opacity-20 animate-loveAtmosphere">♥</div>
        <div className="absolute top-1/3 right-1/4 text-light-gold text-5xl opacity-15 animate-loveAtmosphere" style={{animationDelay: '3s'}}>♥</div>
        <div className="absolute bottom-1/3 left-1/3 text-gold text-3xl opacity-25 animate-loveAtmosphere" style={{animationDelay: '6s'}}>♥</div>
        <div className="absolute bottom-20 right-1/3 text-light-gold text-4xl opacity-20 animate-loveAtmosphere" style={{animationDelay: '9s'}}>♥</div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Couple Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <Heart className="w-8 h-8 text-gold fill-current animate-pulse" />
              <h3 className="text-3xl font-serif">David & Ruth</h3>
              <Heart className="w-8 h-8 text-gold fill-current animate-pulse" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6 font-script text-lg">
              "Two hearts united in love, blessed by Jehovah, ready to start their eternal journey together."
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-serif mb-6 text-gold">Wedding Navigation</h4>
            <nav className="space-y-4">
              <a href="#hero" className="block text-white/80 hover:text-gold transition-colors duration-300 font-medium">Home</a>
              <a href="#about" className="block text-white/80 hover:text-gold transition-colors duration-300 font-medium">Our Love Story</a>
              <a href="#details" className="block text-white/80 hover:text-gold transition-colors duration-300 font-medium">Wedding Details</a>
              <a href="#gallery" className="block text-white/80 hover:text-gold transition-colors duration-300 font-medium">Photo Gallery</a>
              <a href="#cast" className="block text-white/80 hover:text-gold transition-colors duration-300 font-medium">Wedding Cast</a>
            </nav>
          </div>

          {/* Wedding Details */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-serif mb-6 text-gold">Wedding Information</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <Calendar className="w-5 h-5 text-gold" />
                <span>August 16th, 2025</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Kingdom Hall of Jehovah's Witnesses</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-end">
                <Phone className="w-5 h-5 text-gold" />
                <span>Mandela High Street, Ashiaman</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wedding Hashtag */}
        <div className="text-center py-8 border-t border-gold/30">
          <div className="glass-gold rounded-3xl px-8 py-6 inline-block border border-gold/40 backdrop-blur-lg">
            <p className="text-white/80 text-sm mb-2">Share your beautiful moments with</p>
            <p className="text-2xl font-script text-gold">#DavidAndRuth2025</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Heart className="w-4 h-4 text-gold fill-current" />
              <span className="text-white/60 text-xs">Love is in the air</span>
              <Heart className="w-4 h-4 text-gold fill-current" />
            </div>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="text-center py-8 border-t border-gold/30">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-script text-gold italic mb-2">
              "Above all, clothe yourselves with love, which binds us all together in perfect harmony."
            </p>
            <p className="text-white/60 text-sm">- Colossians 3:14</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gold/30">
          <p className="text-white/60 text-sm">
            © 2025 David Yaw Doeyibo & Ruth Mamley Glover Wedding. Made with ♥ and blessed by Jehovah.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Kingdom Hall of Jehovah's Witnesses • Ashiaman, Ghana
          </p>
        </div>
      </div>

      {/* Romantic floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-10 left-1/6 opacity-30">
          <Heart className="w-6 h-6 text-gold fill-current animate-floatHeart" style={{ animationDelay: '0s' }} />
        </div>
        <div className="absolute bottom-20 right-1/5 opacity-25">
          <Heart className="w-4 h-4 text-light-gold fill-current animate-floatHeart" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-16 left-1/2 opacity-20">
          <Heart className="w-5 h-5 text-gold fill-current animate-floatHeart" style={{ animationDelay: '4s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
