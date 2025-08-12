import React, { useState } from 'react';
import { X, Heart, Camera, Sparkles } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Photo data with wine and gold theme
  const photos = [
    { id: 1, category: 'Couple', image: '/images/couple1.webp', size: 'square' },
    { id: 2, category: 'Couple', image: '/images/couple2.webp', size: 'wide' },
    { id: 3, category: 'Couple', image: '/images/couple3.webp', size: 'square' },
    { id: 4, category: 'Couple', image: '/images/couple4.webp', size: 'square' },
    { id: 5, category: 'Couple', image: '/images/couple5.webp', size: 'wide' },
    { id: 6, category: 'Couple', image: '/images/couple6.webp', size: 'square' },
    { id: 7, category: 'Couple', image: '/images/couple7.webp', size: 'square' },
    { id: 8, category: 'Couple', image: '/images/couple8.webp', size: 'wide' },
    { id: 9, category: 'Couple', image: '/images/couple9.webp', size: 'square' }
  ];



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

  return (
    <>
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Floating love elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/6 right-1/6 text-wine text-4xl opacity-20 animate-loveAtmosphere">♥</div>
          <div className="absolute top-2/3 left-1/5 text-gold text-5xl opacity-25 animate-loveAtmosphere" style={{animationDelay: '3s'}}>♥</div>
          <div className="absolute bottom-1/4 right-1/4 text-wine text-3xl opacity-30 animate-loveAtmosphere" style={{animationDelay: '6s'}}>♥</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl text-white">
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
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 cursor-pointer aspect-[3/4] bg-black"
                    onClick={() => openModal(photo)}
                >
                  {/* Photo background */}
                  <img
                      src={photo.image}
                      alt={photo.category}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center max-w-5xl h-[100vh] p-2 md:p-8 transition-all duration-300">
            <div className="relative w-full  flex flex-col items-center justify-center">
              {/* Close button */}
              <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gold transition-colors z-10 p-2 bg-black/40 rounded-full backdrop-blur-md"
                  aria-label="Close"
              >
                <X className="w-10 h-10" />
              </button>
              {/* Enlarged photo */}
              <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden flex items-center justify-center shadow-3xl border-4 border-gold/30">
                <img
                  src={selectedPhoto?.image}
                  alt={selectedPhoto?.category}
                  className="object-contain w-full h-full max-h-full max-w-full"
                  style={{ background: '#222' }}
                />
                {/* Romantic wine-gold overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#722f37]/40 via-[#d4af37]/20 to-[#722f37]/40 pointer-events-none"></div>
                {/* Decorative hearts */}
                <div className="absolute top-8 left-8 text-white/30 text-4xl animate-floatHeart">♥</div>
                <div className="absolute bottom-8 right-8 text-white/30 text-3xl animate-floatHeart" style={{ animationDelay: '2s' }}>♥</div>
              </div>
            </div>
          </div>
      )}

    </>
  );
};

export default PhotoGallery;
