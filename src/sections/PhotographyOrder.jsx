import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Heart, Users, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PhotographyOrder = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const orderListRef = useRef([]);

  const photographyOrder = [
    { id: 0, title: "Couple Alone", icon: Heart, special: true },
    { id: 1, title: "Officiating Minister Mr. Odonkor", icon: Crown },
    { id: 2, title: "Chairman Mr. Larwer", icon: Crown },
    { id: 3, title: "Mothers of the couple", icon: Heart },
    { id: 4, title: "Mr Eric Glover and Mr Anna Addo", icon: Users },
    { id: 5, title: "Groom's family", icon: Users },
    { id: 6, title: "Bride's family", icon: Users },
    { id: 7, title: "Groom's men and bride's maid", icon: Heart },
    { id: 8, title: "Lebanon Dangme Congregation", icon: Users },
    { id: 9, title: "CEO of SIV engineering and colleagues", icon: Users },
    { id: 10, title: "CEO of AkorfaGH and colleagues", icon: Users },
    { id: 11, title: "Friends of the groom", icon: Users },
    { id: 12, title: "Friends of the bride", icon: Users }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with golden sparkle effect
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Photography order items animation
      orderListRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              y: 50,
              scale: 0.9,
              rotationY: index % 2 === 0 ? -15 : 15
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 1.2,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Hover animation
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Floating camera icons animation
      const createFloatingCamera = () => {
        const camera = document.createElement('div');
        camera.innerHTML = '📸';
        camera.className = 'absolute text-2xl opacity-20';
        camera.style.left = `${Math.random() * 100}%`;
        camera.style.top = '100%';
        camera.style.pointerEvents = 'none';
        camera.style.zIndex = '1';

        sectionRef.current?.appendChild(camera);

        gsap.to(camera, {
          y: -600,
          x: `+=${(Math.random() - 0.5) * 200}`,
          rotation: Math.random() * 360,
          opacity: 0,
          duration: 15,
          ease: "none",
          onComplete: () => {
            camera.remove();
          }
        });
      };

      const cameraInterval = setInterval(createFloatingCamera, 3000);

      return () => {
        clearInterval(cameraInterval);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToOrderListRef = (el) => {
    if (el && !orderListRef.current.includes(el)) {
      orderListRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--gold) 0%, #b8941f 25%, var(--wine) 75%, var(--dark-wine) 100%)'
      }}
    >
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-12 h-12 text-white mr-4" />
            <h2 className="text-3xl md:text-6xl font-display font-bold text-white">
              Photography Order
            </h2>
            <Camera className="w-12 h-12 text-white ml-4" />
          </div>
          <div className="w-32 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-white/90 font-elegant max-w-2xl mx-auto">
            Capturing every precious moment in perfect sequence
          </p>
        </div>

        {/* Special Couple Section */}
        <div
          ref={addToOrderListRef}
          className="mb-12 text-center"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30">
            <Heart className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-3xl font-script text-white mb-2">First & Forever</h3>
            <p className="text-2xl font-elegant text-white">Couple Alone</p>
          </div>
        </div>

        {/* Main Photography Order List */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-display text-white mb-8">Then, Couple With:</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photographyOrder.slice(1).map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                ref={addToOrderListRef}
                className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <IconComponent className="w-5 h-5 text-white mr-2" />
                      <h4 className="text-lg font-semibold text-white group-hover:text-gold-light transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom border */}
                <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-white/80">
            <div className="w-16 h-px bg-white/40"></div>
            <Camera className="w-8 h-8" />
            <span className="text-lg font-script">Capturing Love, One Frame at a Time</span>
            <Camera className="w-8 h-8" />
            <div className="w-16 h-px bg-white/40"></div>
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default PhotographyOrder;
