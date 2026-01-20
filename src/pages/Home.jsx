import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Users, Crown, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const handleJoin = () => {
    if (input.trim() !== '') {
      navigate(`/room/${input}`);
    }
  };

  const handleInstantMeeting = () => {
    const randomID = Math.random().toString(36).substring(2, 9);
    navigate(`/room/${randomID}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-yellow-500/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Lets Connect Now!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white via-gray-200 to-amber-100 bg-clip-text text-transparent leading-tight">
            Connect in Crystal <br className="hidden sm:block" />Clear Quality
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto px-4">
            Experience premium video calls with luxurious design and seamless connectivity
          </p>

          {/* Join Meeting Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-2xl mx-auto px-4">
            <input
              type="text"
              placeholder="Enter room ID to join..."
              className="w-full sm:flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 focus:bg-white/10 transition"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
            />
            <button
              onClick={handleJoin}
              className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-xl hover:shadow-2xl cursor-pointer transition transform hover:scale-105"
            >
              Join Meeting
            </button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            <div 
              onClick={handleInstantMeeting}
              className="p-6 bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-amber-400/50 transition cursor-pointer group"
            >
              <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition">
                <Video className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Instant Meeting</h3>
              <p className="text-gray-400 text-sm">Start a meeting right now</p>
            </div>

            <div 
              onClick={() => navigate('/meeting-types')}
              className="p-6 bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-amber-400/50 transition cursor-pointer group"
            >
              <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Schedule Meeting</h3>
              <p className="text-gray-400 text-sm">Plan your next call</p>
            </div>

            <div 
              onClick={() => navigate('/plans')}
              className="p-6 bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-amber-400/50 transition cursor-pointer group sm:col-span-2 md:col-span-1"
            >
              <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition">
                <Crown className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Premium Plans</h3>
              <p className="text-gray-400 text-sm">Unlock all features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-linear-to-b from-transparent to-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Why Choose LuxeCall?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'HD Quality', desc: 'Crystal clear video & audio' },
              { title: 'Secure', desc: 'End-to-end encryption' },
              { title: 'No Limits', desc: 'Unlimited meeting duration' },
              { title: 'Cross-Platform', desc: 'Works on all devices' }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl text-center hover:border-amber-400/30 transition">
                <h3 className="text-lg font-semibold mb-2 text-amber-400">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;