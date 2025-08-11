
import { Target, Sparkles, ArrowRight, Calendar } from 'lucide-react';


const About = () => {
  // Timeline data
  const timelineEvents = [
    {
      date: "January 2023",
      title: "First Meeting",
      description: "David and Ruth met at a spiritual gathering of Jehovah's Witnesses"
    },
    {
      date: "April 2023",
      title: "Friendship Blossoms",
      description: "Their shared faith and values created a strong foundation for their relationship"
    },
    {
      date: "September 2023",
      title: "Courtship Begins",
      description: "David asked Ruth's parents for permission to court her"
    },
    {
      date: "February 2024",
      title: "The Proposal",
      description: "David proposed to Ruth during an eatery event at Kentucky Fried Chicken (KFC)"
    },
    {
      date: "August 2025",
      title: "Wedding Day",
      description: "The day they will unite their lives in marriage before Jehovah and loved ones"
    }
  ];

  return (
    <section className="relative py-24 px-4 dart-background overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title with modern design */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <h2 className="text-3xl md:text-6xl text-white">
              About
            </h2>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Our <span className="text-gold">Love Story</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gold"></div>
            <Target className="w-6 h-6 text-gold animate-pulse" />
            <div className="w-20 h-0.5 bg-gold"></div>
          </div>
        </div>

        {/* Couple Cards with modern design */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {/* David's Card */}
          <div
            className="glass-modern-gold rounded-3xl p-8 shadow-xl border border-gold/30 transition-all duration-300"
          >
            {/* Profile photo */}
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/30 shadow-lg">
              <div className="profile-photo w-full h-full bg-dark-gold-gradient flex items-center justify-center transition-all duration-300">
                <span className="text-6xl font-serif text-white font-bold">D</span>
              </div>
              {/* Sparkle effects */}
              <div className="sparkle absolute top-1/4 right-1/4 w-3 h-3 bg-gold rounded-full opacity-70"></div>
              <div className="sparkle absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-70"></div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif text-gold mb-2">David Yaw Doeyibo</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-dark/50 border border-gold/20 text-white/80 text-sm">
                The Groom
              </div>
            </div>

            <p className="text-white/80 leading-relaxed text-center mb-6">
              A devoted man of faith with a heart full of love and kindness. David brings joy wherever he goes
              and has found his perfect companion in Ruth. His gentle spirit and unwavering commitment make him
              the perfect partner for life's beautiful journey.
            </p>

            {/* Interests/Traits */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">Faith-driven</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">Kind-hearted</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">Devoted</span>
            </div>
          </div>

          {/* Ruth's Card */}
          <div
            className="glass-modern-gold rounded-3xl p-8 shadow-xl border border-gold/30 transition-all duration-300"
          >
            {/* Profile photo */}
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-wine/30 shadow-lg">
              <div className="profile-photo w-full h-full bg-dark-wine-gradient flex items-center justify-center transition-all duration-300">
                <span className="text-6xl font-serif text-white font-bold">R</span>
              </div>
              {/* Sparkle effects */}
              <div className="sparkle absolute top-1/4 left-1/4 w-3 h-3 bg-wine rounded-full opacity-70"></div>
              <div className="sparkle absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-70"></div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-serif text-gold mb-2">Ruth Mamley Glover</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-dark/50 border border-gold/20 text-white/80 text-sm">
                The Bride
              </div>
            </div>

            <p className="text-white/80 leading-relaxed text-center mb-6">
              A woman of grace and beauty, both inside and out. Ruth's loving nature and warm smile light up
              every room she enters. Her faithful heart and caring spirit have captured David's love completely,
              making them a perfect match blessed by Jehovah.
            </p>

            {/* Interests/Traits */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">Graceful</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">Loving</span>
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs">Faithful</span>
            </div>
          </div>
        </div>

        {/* Love Story Timeline */}
        <div className="mb-24">
          <div className="glass-modern-gold rounded-3xl p-8 md:p-12 shadow-xl border border-gold/30">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-full bg-dark-gold-gradient flex items-center justify-center shadow-lg">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-gold">
                  Our Journey Together
                </h3>
                <p className="text-white/70">
                  The path that led us to our wedding day
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/50 via-gold/30 to-gold/10 transform md:-translate-x-1/2"></div>

              {/* Timeline events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={index}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-dark rounded-full border-2 border-gold transform -translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="glass-modern rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="inline-block px-3 py-1 rounded-full bg-dark/50 border border-gold/20 text-gold text-xs mb-3">
                          {event.date}
                        </div>
                        <h4 className="text-xl font-serif text-white mb-2">{event.title}</h4>
                        <p className="text-white/70">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <div className="glass-modern-gold rounded-3xl p-8 md:p-12 shadow-xl border border-gold/30 relative overflow-hidden">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-serif text-gold">How We Met</h3>
              <Sparkles className="w-8 h-8 text-gold" />
            </div>

            <p className="text-white/80 leading-relaxed text-lg mb-8">
              In the loving fellowship of Jehovah's Witnesses, two hearts found each other. David and Ruth's
              paths crossed during a beautiful spiritual gathering, where their shared faith and love for
              Jehovah brought them together. What started as friendship blossomed into a beautiful love story
              guided by faith, respect, and mutual devotion.
            </p>

            <div className="mt-8 bg-dark/50 rounded-2xl p-8 border border-gold/10">
              <p className="quote-text bg-gradient-to-r from-gold via-gold-light to-gold bg-[length:200%_auto] font-script text-2xl italic">
                "Two hearts united in love, blessed by Jehovah, ready to start their eternal journey together."
              </p>
            </div>

            {/* Action button */}
            <div className="mt-10">
              <a 
                href="#details" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-gold-gradient text-white font-medium shadow-lg border border-gold/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Wedding Program
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
