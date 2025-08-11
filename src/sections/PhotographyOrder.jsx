
import { Camera, Heart, Users, Crown } from 'lucide-react';


const PhotographyOrder = () => {

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


  return (
    <section
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-12 h-12 text-white mr-4" />
            <h2 className="text-3xl md:text-6xl text-white">
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
