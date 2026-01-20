import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Home } from 'lucide-react';

const VideoRoom = () => {
  const { roomID } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const zpRef = useRef(null);

  useEffect(() => {
    if (!roomID) {
      navigate('/');
      return;
    }

    const initMeeting = async () => {
      if (!containerRef.current) return;

      // place with your actual credentials
      const appID = 1740476576;
      const serverSecret = "edcfd6ed96b485b4994b9e951e8774d2";
      
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomID, 
        Date.now().toString(), 
        "User_" + Math.floor(Math.random() * 1000)
      );
      
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp;
      
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: 'Copy Meeting Link',
            url: window.location.href,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
        showScreenSharingButton: true,
        showRoomTimer: true,
        showTurnOffRemoteCameraButton: true,
        showTurnOffRemoteMicrophoneButton: true,
        showRemoveUserButton: true,
        onLeaveRoom: () => {
          navigate('/');
        },
      });
    };

    initMeeting();

    // Cleanup function
    return () => {
      if (zpRef.current) {
        zpRef.current.destroy();
      }
    };
  }, [roomID, navigate]);

  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Home Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-50 flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-lg cursor-pointer hover:shadow-2xl hover:shadow-amber-500/50 transition"
      >
        <Home className="w-5 h-5" />
        <span className="hidden sm:inline">Leave Meeting</span>
      </button>
      
      {/* Video Container */}
      <div className="w-full h-full" ref={containerRef}></div>
    </div>
  );
};

export default VideoRoom;
