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
    { top: '65%', left: '10%', scale: 1.2, opacity: 0.8 },
    { top: '70%', left: '85%', scale: 0.8, opacity: 0.6 },
    { top: '80%', left: '15%', scale: 1.5, opacity: 0.7 },
    { top: '85%', left: '75%', scale: 0.9, opacity: 0.5 },
    { top: '92%', left: '40%', scale: 1.1, opacity: 0.9 },
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
      <div className="w-full max-w-lg min-h-screen sm:h-screen flex flex-col pt-6 pb-6 px-8 relative z-20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center shrink-0 mb-4">
          <button className="p-2 hover:bg-white/50 rounded-lg transition-colors -ml-2">
            <ChevronLeft className="w-6 h-6 text-red-600" strokeWidth={3} />
          </button>
          <h1 className="text-xl font-bold tracking-wide ml-2 text-gray-800 drop-shadow-sm">TIU VIRTUAL</h1>
        </div>

        {/* Content Group - Proportionally distributed */}
        <div className="flex-1 flex flex-col justify-between overflow-hidden">

          {/* Clock Section */}
          <div className="flex flex-col items-center shrink-0">
            <div className="bg-[#E6E6FA] rounded-2xl px-5 py-2 inline-block mb-2 shadow-sm border border-white/50">
              <div className="text-5xl tracking-tight text-gray-900 font-medium leading-none">
                {getLimaTime()}
              </div>
            </div>
            <div className="text-gray-700 text-lg font-medium text-center leading-tight drop-shadow-sm">
              {getLimaDate()}
            </div>
          </div>

          {/* Profile Image - Circular */}
          <div className="flex justify-center shrink-0 my-4">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl aspect-square">
                <img
                  src="/image.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Info Section - Vertical Stack */}
          <div className="space-y-3 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 shrink-0">
            <div className="text-center">
              <div className="text-2xl font-black text-red-600 leading-tight tracking-tight px-2">
                <div>KEVIN FER PORTUGAL</div>
                <div>FUENTES</div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-center">
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Código de alumno</div>
                <div className="text-lg font-bold text-gray-800 leading-none">20201C260</div>
              </div>

              <div className="text-center pt-3 border-t border-gray-100">
                <div className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">ID Banner</div>
                <div className="text-lg font-bold text-gray-800 leading-none">N00957410</div>
              </div>

              <div className="text-center pt-3 border-t border-gray-100">
                <div className="text-base font-bold text-gray-800 mb-1 leading-tight">Ingeniería Mecatrónica</div>
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