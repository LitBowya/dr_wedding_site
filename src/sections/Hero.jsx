
import { Heart, Calendar, MapPin, Clock, Target, ArrowDown } from 'lucide-react';
import SplittableText from '../components/SplittableText';


const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">

      {/* Floating elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
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
          <div className="mb-12 text-center">
            <p className="text-gold font-script text-xl sm:text-2xl md:text-3xl mb-4 opacity-90 min-h-[40px]"></p>
            <div className="underline w-0 h-0.5 bg-gold mx-auto rounded-full opacity-0"></div>
          </div>

          {/* Names with modern styling */}
          <div className="mb-16 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* David's name */}
              <SplittableText
                as="h1"
                text="David Yaw"
                className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold font-black"
              />

              {/* Ampersand */}
              <div
                className="text-5xl md:text-6xl font-script text-gold my-2 md:my-0"
              >
                &
              </div>

              {/* Ruth's name */}
              <SplittableText
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
                  <span className="text-gold">11:00</span> AM
                </p>
              </div>
            </div>

            {/* Venue card */}
            <div
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

    </section>
  );
};

export default Hero;
