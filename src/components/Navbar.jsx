import React, { useState } from 'react';
import { Menu, X, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           
          {/* Logo */}

          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-linear-to-br from-amber-400 via-yellow-300 to-amber-500 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent cursor-pointer">
              LuxeCall
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-300 hover:text-white transition cursor-pointer">
              Home
            </button>
            <button onClick={() => navigate('/meeting-types')} className="text-gray-300 hover:text-white transition cursor-pointer">
              Meetings
            </button>
            <button onClick={() => navigate('/plans')} className="text-gray-300 hover:text-white transition cursor-pointer">
              Plans
            </button>
            <button className="px-6 py-2 bg-linear-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-lg cursor-pointer transition transform hover:scale-105">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => { navigate('/'); setIsOpen(false); }} 
              className="block w-full cursor-pointer text-left text-gray-300 hover:text-white py-2"
            >
              Home
            </button>
            <button 
              onClick={() => { navigate('/meeting-types'); setIsOpen(false); }} 
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              Meetings
            </button>
            <button 
              onClick={() => { navigate('/plans'); setIsOpen(false); }} 
              className="block w-full text-left text-gray-300 hover:text-white py-2"
            >
              Plans
            </button>
            <button className="w-full px-6 py-2 bg-linear-to-r from-amber-400 to-yellow-500 text-black font-semibold rounded-lg">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;