import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Users, Video } from 'lucide-react';
import Navbar from '../components/Navbar';

const MeetingTypes = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [roomInput, setRoomInput] = useState('');

  const meetingTypes = [
    {
      id: 'one-on-one',
      title: 'One-on-One',
      desc: 'Personal video call with one other person',
      icon: Phone,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'group',
      title: 'Group Call',
      desc: 'Video conference with multiple participants',
      icon: Users,
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 'webinar',
      title: 'Webinar',
      desc: 'Large-scale presentation mode',
      icon: Video,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const startMeeting = () => {
    const roomID = roomInput.trim() !== '' ? roomInput : Math.random().toString(36).substring(2, 9);
    navigate(`/room/${roomID}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center bg-linear-to-r from-white to-amber-200 bg-clip-text text-transparent">
            Choose Your Meeting Type
          </h1>
          <p className="text-gray-400 text-center mb-12 px-4">Select the perfect format for your conversation</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 px-4">
            {meetingTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`p-6 sm:p-8 bg-white/5 border rounded-2xl cursor-pointer transition transform hover:scale-105 ${
                  selectedType === type.id ? 'border-amber-400 bg-white/10' : 'border-white/10'
                }`}
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{type.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{type.desc}</p>
              </div>
            ))}
          </div>

          {selectedType && (
            <div className="max-w-2xl mx-4 p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Start Your Meeting</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter custom room ID (optional)"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/50 text-sm sm:text-base"
                  value={roomInput}
                  onChange={(e) => setRoomInput(e.target.value)}
                  onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    startMeeting();
                  }
                }}
                />
                <button
                  onClick={startMeeting}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-xl hover:shadow-2xl cursor-pointer hover:shadow-amber-500/50 transition whitespace-nowrap"
                >
                  Start Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetingTypes;