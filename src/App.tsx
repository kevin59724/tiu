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
    { top: '10%', left: '15%', scale: 1.2, opacity: 0.8 },
    { top: '25%', left: '75%', scale: 0.8, opacity: 0.6 },
    { top: '60%', left: '10%', scale: 1.5, opacity: 0.7 },
    { top: '75%', left: '80%', scale: 0.9, opacity: 0.5 },
    { top: '85%', left: '40%', scale: 1.1, opacity: 0.9 },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-4 overflow-hidden relative">
      <div className="w-full max-w-lg h-full flex items-center py-4 relative">
        {/* Mobile Container with Background */}
        <div
          className="w-full h-full flex flex-col relative overflow-hidden rounded-3xl shadow-2xl bg-gray-50"
        >
          {/* Background Image restricted to this container */}
          <img
            src="/background_final.jpeg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />

          {/* Background Clouds restricted to this container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 10 }}>
            {clouds.map((cloud, index) => (
              <img
                key={index}
                src="/bg_0.png"
                alt=""
                className="absolute"
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

          {/* Main Card Content */}
          <div className="flex-1 flex flex-col justify-between py-6 px-8 relative overflow-hidden" style={{ zIndex: 20 }}>
            {/* Header */}
            <div className="flex items-center shrink-0">
              <button className="p-2 hover:bg-white/50 rounded-lg transition-colors -ml-2">
                <ChevronLeft className="w-6 h-6 text-red-600" strokeWidth={3} />
              </button>
              <h1 className="text-xl font-bold tracking-wide ml-2">TIU VIRTUAL</h1>
            </div>

            {/* Content Group (to keep clock, image and info together but distributed) */}
            <div className="flex-1 flex flex-col justify-around py-2">

              {/* Clock Section */}
              <div className="flex flex-col items-center shrink-0">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl px-3 py-1.5 inline-block mb-2">
                  <div className="text-4xl sm:text-5xl tracking-tight text-gray-900">
                    {getLimaTime()}
                  </div>
                </div>
                <div className="text-gray-600 text-base sm:text-lg text-center">
                  {getLimaDate()}
                </div>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center shrink-0">
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-gray-200 bg-white shadow-xl">
                    <img
                      src="/image.png"
                      alt="Profile"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="space-y-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 shrink-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-red-600 mb-2 tracking-tight whitespace-nowrap">
                    KEVIN FER PORTUGAL
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-gray-600 text-[10px] uppercase font-bold mb-0.5">Código</div>
                    <div className="text-sm font-bold text-gray-800">20201C260</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600 text-[10px] uppercase font-bold mb-0.5">ID Banner</div>
                    <div className="text-sm font-bold text-gray-800">N00957410</div>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-gray-100">
                  <div className="text-base sm:text-lg font-bold text-gray-800 mb-1 leading-tight">Ingeniería Mecatrónica</div>
                  <div className="flex items-center justify-center text-xs font-medium text-gray-600">
                    <MapPin className="w-3 h-3 text-red-500 mr-1.5" />
                    <span>Campus San Miguel</span>
                  </div>
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