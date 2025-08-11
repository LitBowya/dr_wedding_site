
import { Crown, Users, Camera, Music, Gift, Coffee } from 'lucide-react';


const Cast = () => {


  const castData = [
    {
      category: "Wedding Leadership",
      icon: <Crown className="w-6 h-6" />,
      color: "wine",
      members: [
        { role: "Officiating Minister", name: "David Odonkor" },
        { role: "Chairman", name: "Joseph Larwer" },
        { role: "Program Director", name: "Enoch McCarthy Emmanuel Adusu" }
      ]
    },
    {
      category: "Happy Couple",
      icon: <Users className="w-6 h-6" />,
      color: "gold",
      members: [
        { role: "Groom", name: "David Yaw Doeyibo" },
        { role: "Bride", name: "Ruth Mamley Glover" }
      ]
    },
    {
      category: "Photography Team",
      icon: <Camera className="w-6 h-6" />,
      color: "wine",
      members: [
        { role: "Photograph Director", name: "Wise Akornor" },
        { role: "Photographer", name: "Gig Photography" }
      ]
    },
    {
      category: "Sound & Stage",
      icon: <Music className="w-6 h-6" />,
      color: "gold",
      members: [
        { role: "Sound Engineer", name: "Marcelle Kemavor" },
        { role: "Stage Assistant", name: "Atteh Sebbie" },
        { role: "Technical Support", name: "Lawerh Sebbie" }
      ]
    },
    {
      category: "Wedding Attendants",
      icon: <Users className="w-6 h-6" />,
      color: "wine",
      members: [
        { role: "Attendant", name: "David Komesuor" },
        { role: "Attendant", name: "Heyford Narh" },
        { role: "Attendant", name: "Godson Appertey" },
        { role: "Attendant", name: "Evans Tetteh" },
        { role: "Attendant", name: "Solomon Damenor" },
        { role: "Attendant", name: "Joseph Glover" }
      ]
    },
    {
      category: "Gift & Hospitality",
      icon: <Gift className="w-6 h-6" />,
      color: "gold",
      members: [
        { role: "Gift Table", name: "Handsome Teye Akornor" },
        { role: "Gift Table", name: "Hilda Anorwa Okyere" }
      ]
    },
    {
      category: "Service Team",
      icon: <Coffee className="w-6 h-6" />,
      color: "wine",
      members: [
        { role: "Server", name: "Phoebe Glover" },
        { role: "Server", name: "Eunice Odei" },
        { role: "Server", name: "Esther Glover" },
        { role: "Server", name: "Vera Teye" },
        { role: "Server", name: "Getrude Addison" },
        { role: "Server", name: "Philicia Damenor" }
      ]
    }
  ];

  return (
    <section className="relative py-24 px-4 dart-background overflow-hidden">
      {/* Background romantic elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-20 right-20 w-40 h-40 bg-wine rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-light-gold rounded-full blur-3xl"></div>
      </div>

      {/* Floating love elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/6 text-gold text-3xl opacity-20 animate-loveAtmosphere">♥</div>
        <div className="absolute top-1/4 right-1/5 text-wine text-4xl opacity-25 animate-loveAtmosphere" style={{animationDelay: '2s'}}>♥</div>
        <div className="absolute bottom-1/4 left-1/4 text-gold text-5xl opacity-15 animate-loveAtmosphere" style={{animationDelay: '4s'}}>♥</div>
        <div className="absolute bottom-1/6 right-1/4 text-wine text-3xl opacity-20 animate-loveAtmosphere" style={{animationDelay: '6s'}}>♥</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl text-white">
            Wedding Cast
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-0.5 bg-gold"></div>
            <Users className="w-6 h-6 text-gold" />
            <div className="w-20 h-0.5 bg-gold"></div>
          </div>
          <p className="text-wine/80 text-lg mt-6 font-script">
            The amazing people making our special day possible
          </p>
        </div>

        {/* Cast Groups */}
        <div className="space-y-16">
          {castData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="max-w-6xl mx-auto"
            >
              {/* Group Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
                  group.color === 'wine' 
                    ? 'bg-wine text-white' 
                    : 'bg-gold text-white'
                } shadow-lg`}>
                  {group.icon}
                  <h3 className="text-xl font-serif font-medium">{group.category}</h3>
                </div>
              </div>

              {/* Members Grid */}
              <div className={`grid gap-6 ${
                group.members.length <= 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' :
                group.members.length <= 3 ? 'md:grid-cols-3 max-w-3xl mx-auto' :
                group.members.length <= 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
                'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {group.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className={`cast-card ${
                      group.color === 'wine' ? 'glass-wine border-gold/30' : 'glass-gold border-wine/30'
                    } rounded-2xl p-6 shadow-xl border-2 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
                  >
                    {/* Member Initial Circle */}
                    <div className={`w-16 h-16 ${
                      group.color === 'wine' ? 'bg-wine-gold-gradient' : 'bg-gold-wine-gradient'
                    } rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-serif text-white font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>

                    {/* Member Details */}
                    <div className="text-center">
                      <h4 className="text-lg font-serif mb-2">{member.name}</h4>
                      <p className={`text-sm font-medium px-3 py-1 rounded-full ${
                        group.color === 'wine' 
                          ? 'text-gold bg-gold/20 border border-gold/30' 
                          : 'text-gold bg-wine/20 border border-wine/30'
                      }`}>
                        {member.role}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute top-3 right-3 w-3 h-3 ${
                      group.color === 'wine' ? 'bg-gold' : 'bg-wine'
                    } rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Thank You Message */}
        <div className="mt-20 text-center">
          <div className="glass-wine rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-gold/30 max-w-4xl mx-auto backdrop-blur-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="text-gold text-2xl">♥</div>
              <h3 className="text-2xl font-serif text-gold">Heartfelt Gratitude</h3>
              <div className="text-gold text-2xl">♥</div>
            </div>
            <p className="text-wine/90 leading-relaxed text-lg mb-6">
              David and Ruth extend their heartfelt appreciation to everyone who has contributed
              to making their special day perfect. Your love, support, and dedication mean the world to them.
            </p>

            <div className="bg-gold/10 rounded-2xl p-6">
              <p className="text-gold font-script text-xl italic">
                "We are blessed to have such wonderful people in our lives. Thank you for being part of our love story."
                <br />
                <span className="text-base font-sans mt-2 block">- David & Ruth</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cast;
