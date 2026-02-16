import { useState, useEffect } from 'react';
import { ChevronLeft, MapPin } from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getLimaTime = () => {
    return new Intl.DateTimeFormat('es-PE', {
      timeZone: 'America/Lima',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(time);
  };

  const getLimaDate = () => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Lima',
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(time);
  };

  const clouds = [
    { top: '60%', left: '7%', scale: 0.3, opacity: 0.8 },
    { top: '53%', left: '7%', scale: 0.5, opacity: 0.6 },
    { top: '45%', left: '25%', scale: 0.6, opacity: 0.7 },
    { top: '55%', left: '45%', scale: 0.6, opacity: 0.5 },
    { top: '50%', left: '65%', scale: 0.4, opacity: 0.9 },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-gray-900">
      {/* Background Image - Full Screen */}
      <img
        src="/background_final.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Background Clouds - Full Screen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 10 }}>
        {clouds.map((cloud, index) => (
          <img
            key={index}
            src="/bg_0.png"
            alt=""
            className="absolute opacity-80"
            style={{
              top: cloud.top,
              left: cloud.left,
              transform: `scale(${cloud.scale})`,
              opacity: cloud.opacity,
              width: '100px'
            }}
          />
        ))}
      </div>

      {/* Main Content Container - Fits screen height */}
      <div className="w-full max-w-lg min-h-screen sm:h-screen flex flex-col pt-4 pb-0 px-8 relative z-20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center shrink-0 mb-1">
          <button className="p-2 hover:bg-white/50 rounded-lg transition-colors -ml-2">
            <ChevronLeft className="w-6 h-6 text-red-600" strokeWidth={3} />
          </button>
          <h1 className="text-xl font-bold tracking-wide ml-2 text-gray-800 drop-shadow-sm">TIU VIRTUAL</h1>
        </div>

        {/* Content Group - Proportionally distributed */}
        <div className="flex-1 flex flex-col items-center overflow-hidden">

          {/* Clock Section - Adjusted weight */}
          <div className="flex flex-col items-center shrink-0 mb-4 mt-6">
            <div className="bg-[#E6E6FA] rounded-2xl px-5 py-2 inline-block mb-1 shadow-sm border border-white/50">
              <div className="text-5xl tracking-tight text-gray-900 font-normal leading-none">
                {getLimaTime()}
              </div>
            </div>
            <div className="text-gray-700 text-lg font-normal text-center leading-tight drop-shadow-sm">
              {getLimaDate()}
            </div>
          </div>

          {/* Profile Image - Raised another 3px (mt-[21px] -> mt-[18px]) */}
          <div className="flex justify-center shrink-0 mt-[18px] mb-6 scale-95 origin-top">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden aspect-square bg-white">
                <img
                  src="/image.png"
                  alt="Profile"
                  className="w-full h-full object-contain object-center scale-110 translate-y-2"
                />
              </div>
            </div>
          </div>

          {/* Info Section - Rounded corners and no shadow as requested */}
          <div className="w-[calc(100%+40px)] space-y-3 bg-white/95 backdrop-blur-md rounded-[3rem] pt-[27px] pb-[40px] px-8 border border-white/20 shrink-0 mx-[-20px] mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold font-oswald text-red-600 leading-none tracking-tight px-2">
                <div>KEVIN FER PORTUGAL</div>
                <div>FUENTES</div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-center">
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Código de alumno</div>
                <div className="text-lg font-bold text-gray-800 leading-none">20201C260</div>
              </div>

              <div className="text-center">
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">ID Banner</div>
                <div className="text-lg font-bold text-gray-800 leading-none">N00957410</div>
              </div>

              <div className="text-center">
                <div className="text-base font-bold text-gray-800 mb-1 leading-tight uppercase">INGENIERÍA MECATRÓNICA</div>
                <div className="flex items-center justify-center text-xs font-medium text-gray-600">
                  <MapPin className="w-3 h-3 text-red-500 mr-2" />
                  <span>Campus San Miguel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;