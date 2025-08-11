import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Calendar, Clock, MapPin, Heart, Music, BookOpen, Users, Target, ArrowRight, Church, Mic} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WeddingDetails = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const programRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const quoteRef = useRef(null);
  const dartboardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dartboard animation
      const dartboard = dartboardRef.current;
      const rings = dartboard.querySelectorAll('.dart-ring');

      gsap.set(rings, { 
        opacity: 0,
        scale: 0.8
      });

      gsap.to(rings, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: dartboard,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Rotate dartboard continuously
      gsap.to(dartboard, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none"
      });

      // Title animation with modern reveal
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Timeline animation
      gsap.fromTo(timelineRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Program items staggered animation with more dynamic effect
      const programItems = programRef.current?.querySelectorAll('.program-item');
      if (programItems) {
        programItems.forEach((item, index) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });

          tl.fromTo(item,
            { 
              opacity: 0, 
              x: index % 2 === 0 ? -40 : 40,
              rotationY: index % 2 === 0 ? -10 : 10
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 1,
              ease: "power3.out"
            },
            "-=0.8"
          );
        });
      }

      // Cards animation
      cardsRef.current.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Quote animation
      gsap.fromTo(quoteRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const programItems = [
    { icon: Users, title: "Arrival Of Guest", time: "11:00 AM - 11:45 AM" },
    { icon: Church, title: "Arrival Of Groom", time: "11:45 AM" },
    { icon: Heart, title: "Arrival Of Bride: <strong>Original Song, Jehovah's Always By Our Side</strong>", time: "11:50 AM" },
    { icon: Music, title: "Song No.131 (<strong>What God Has Yoked Together</strong>) & Opening Prayer - Joseph Larwer", time: "12:00 PM" },
    { icon: Mic, title: "Discourse: <strong>Honorable Marriages In God's Sight</strong> - David Odonkor", time: "12:05 PM" },
    { icon: Music, title: "Song No.132 (<strong>Now We Are One</strong>) & Chairman's Closing Remarks", time: "12:35 PM" },
  ];


  return (
    <section id="details" ref={sectionRef} className="relative bg-dark-gray py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          ref={dartboardRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="dart-ring absolute inset-0 rounded-full border-2 border-gold"></div>
          <div className="dart-ring absolute inset-[100px] rounded-full border-2 border-wine"></div>
          <div className="dart-ring absolute inset-[200px] rounded-full border-2 border-gold"></div>
          <div className="dart-ring absolute inset-[300px] rounded-full border-2 border-wine"></div>
          <div className="dart-ring absolute inset-[390px] rounded-full bg-gold"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold mb-4">
            Wedding Program
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A detailed timeline of our ceremony. We are so excited to share these moments with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Timeline Section */}
          <div className="lg:col-span-2">
            <div ref={programRef} className="space-y-8">
              {programItems.map((item, index) => (
                <div key={index} className="program-item flex items-start space-x-4 sm:space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-dark-gold-gradient flex-shrink-0 flex items-center justify-center shadow-lg border-2 border-gold/50">
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    {index < programItems.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-gold/50 to-wine/50"></div>
                    )}
                  </div>
                  <div className="bg-dark/50 backdrop-blur-sm p-5 rounded-xl border border-gold/20 w-full transform transition-all duration-300 hover:border-gold/40 hover:scale-105">
                    {/*<h3 >*/}
                    {/*  {item.title}*/}
                    {/*</h3>*/}
                    <div className="text-lg sm:text-xl font-serif text-gold mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-sm text-white/70 font-medium">
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="space-y-8 lg:mt-12">
            <div ref={addToCardsRef} className="glass-modern-gold p-6 rounded-2xl border border-gold/30 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-dark-wine-gradient flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-serif text-gold">Our Theme</h3>
              </div>
              <p className="text-white/80">
                Our wedding theme is a blend of modern elegance and timeless romance, with a color palette of <span className="font-semibold text-gold">Gold</span> and <span className="font-semibold text-wine">Wine</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div ref={quoteRef} className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl font-script text-gold/90 leading-relaxed">
            "I have found the one whom my soul loves."
          </p>
          <p className="text-white/70 mt-4 text-lg">
            - Song of Solomon 3:4
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
