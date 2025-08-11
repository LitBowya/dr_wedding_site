import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Heart, Camera, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const galleryRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Photo data with wine and gold theme
  // Photo data with image paths (public/images/...)
  const photos = [
    { id: 1, category: 'Ruth', image: '/images/ruth1.webp', size: 'tall' },
    { id: 2, category: 'David', image: '/images/david1.webp', size: 'wide' },
    { id: 3, category: 'Couple', image: '/images/couple1.webp', size: 'square' },
    { id: 4, category: 'Ruth', image: '/images/ruth2.webp', size: 'tall' },
    { id: 5, category: 'David', image: '/images/david2.webp', size: 'square' },
    { id: 6, category: 'Couple', image: '/images/couple2.webp', size: 'wide' },
    { id: 7, category: 'Ruth', image: '/images/ruth3.webp', size: 'square' },
    { id: 8, category: 'David', image: '/images/david3.webp', size: 'tall' },
    { id: 9, category: 'Couple', image: '/images/couple3.webp', size: 'square' }
  ];


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Gallery items romantic entrance
      const galleryItems = galleryRef.current?.querySelectorAll('.gallery-item');
      if (galleryItems) {
        gsap.fromTo(galleryItems,
          { opacity: 0, scale: 0.7, y: 60, rotationY: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1.5,
              from: "random"
            },
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Romantic hover effects
        galleryItems.forEach(item => {
          const handleMouseEnter = () => {
            gsap.to(item, {
              scale: 1.08,
              y: -10,
              rotationY: 5,
              duration: 0.4,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(item, {
              scale: 1,
              y: 0,
              rotationY: 0,
              duration: 0.4,
              ease: "power2.out"
            });
          };

          item.addEventListener('mouseenter', handleMouseEnter);
          item.addEventListener('mouseleave', handleMouseLeave);
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case 'wide':
        return 'md:col-span-2 h-64';
      case 'tall':
        return 'md:row-span-2 h-80 md:h-96';
      default:
        return 'h-64';
    }
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-amber-50 to-yellow-50 relative overflow-hidden">
        {/* Romantic background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute top-10 left-10 w-40 h-40 bg-wine rounded-full blur-3xl animate-goldSparkle"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-light-gold rounded-full blur-3xl"></div>
        </div>

        {/* Floating love elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/6 right-1/6 text-wine text-4xl opacity-20 animate-loveAtmosphere">♥</div>
          <div className="absolute top-2/3 left-1/5 text-gold text-5xl opacity-25 animate-loveAtmosphere" style={{animationDelay: '3s'}}>♥</div>
          <div className="absolute bottom-1/4 right-1/4 text-wine text-3xl opacity-30 animate-loveAtmosphere" style={{animationDelay: '6s'}}>♥</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-serif text-wine mb-6"
            >
              Our Precious Moments
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-0.5 bg-gold"></div>
              <Heart className="w-6 h-6 text-gold fill-current animate-pulse" />
              <div className="w-20 h-0.5 bg-gold"></div>
            </div>
            <p className="text-wine/80 text-lg mt-6 max-w-2xl mx-auto font-script text-wine">
              A glimpse into our beautiful journey together, captured in love and joy
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min"
          >
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className={`gallery-item ${getSizeClasses(photo.size)} cursor-pointer group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 max-md:min-h-[350px]`}
                    onClick={() => openModal(photo)}
                >
                  {/* Photo background */}
                  <div
                      className="w-full h-full relative bg-cover bg-top"
                      style={{ backgroundImage: `url(${photo.image})` }}
                  >
                    {/* Romantic overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <Camera className="w-10 h-10 mx-auto mb-3" />
                        <p className="text-lg font-serif capitalize">{photo.category}</p>
                      </div>
                    </div>

                    {/* Love heart decoration */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Heart className="w-8 h-8 text-white fill-current animate-pulse" />
                    </div>

                    {/* Sparkle effects */}
                    <div className="absolute top-6 left-6 w-2 h-2 bg-white rounded-full opacity-60 group-hover:animate-goldSparkle"></div>
                    <div
                        className="absolute bottom-8 right-8 w-3 h-3 bg-white rounded-full opacity-40 group-hover:animate-goldSparkle"
                        style={{ animationDelay: '0.5s' }}
                    ></div>

                    {/* Photo number */}
                    <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium bg-black/20 rounded-full px-3 py-1">
                      #{photo.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
            ))}

          </div>

          {/* Romantic call to action */}
          <div className="text-center mt-16">
            <div className="glass-wine rounded-3xl p-8 shadow-2xl border-2 border-gold/30 max-w-md mx-auto backdrop-blur-lg">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-gold" />
                <Camera className="w-8 h-8 text-wine" />
                <Sparkles className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-wine mb-3">Share the Love</h3>
              <p className="text-wine/80 text-sm mb-4 leading-relaxed">
                Help us capture every beautiful moment by sharing your photos with our special hashtag
              </p>
              <div className="bg-gold/20 text-wine px-6 py-3 rounded-full text-lg font-script border border-gold/30">
                #DavidAndRuth2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Modal for enlarged photo view */}
      {isModalOpen && (
          <div className="fixed inset-0 bg-wine/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <button
                  onClick={closeModal}
                  className="absolute -top-16 right-0 text-white hover:text-gold transition-colors z-10 p-2"
              >
                <X className="w-10 h-10" />
              </button>

              {/* Enlarged photo */}
              <div className="relative max-md:h-[425px] lg:h-[500px] w-full aspect-video rounded-3xl overflow-hidden shadow-3xl border-4 border-gold/30">
                <div
                    className="w-full h-full relative bg-cover bg-center flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${selectedPhoto?.image})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center top`,
                    }}
                >
                  {/* Romantic wine-gold overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#722f37]/40 via-[#d4af37]/20 to-[#722f37]/40"></div>

                  <div className="text-white text-center relative z-10">
                    <Camera className="w-20 h-20 mx-auto mb-6 opacity-80" />
                    <h3 className="text-3xl font-serif mb-3 capitalize">
                      {selectedPhoto?.category} Memory
                    </h3>
                    <p className="text-white/60 text-sm mt-2">
                      Photo #{selectedPhoto?.id.toString().padStart(2, "0")}
                    </p>
                  </div>

                  {/* Decorative hearts */}
                  <div className="absolute top-8 left-8 text-white/30 text-4xl animate-floatHeart">
                    ♥
                  </div>
                  <div
                      className="absolute bottom-8 right-8 text-white/30 text-3xl animate-floatHeart"
                      style={{ animationDelay: "2s" }}
                  >
                    ♥
                  </div>
                </div>
              </div>

              {/* Photo info */}
              <div className="glass-gold rounded-3xl p-6 mt-6 text-center backdrop-blur-lg border-2 border-wine/30">
                <h4 className="text-lg font-serif text-gold mb-2 capitalize">
                  {selectedPhoto?.category} Memories
                </h4>
                <p className="text-wine/80 text-sm font-script">
                  "Every picture tells our love story"
                </p>
              </div>
            </div>
          </div>
      )}

    </>
  );
};

export default PhotoGallery;
