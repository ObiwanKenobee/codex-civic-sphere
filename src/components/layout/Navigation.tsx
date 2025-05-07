
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Book, Vote, Settings, Home, MessageSquare } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Laws', path: '/laws', icon: Book },
    { name: 'Vote', path: '/vote', icon: Vote },
    { name: 'Learn', path: '/learn', icon: Book },
    { name: 'Civic AI', path: '/ai', icon: MessageSquare },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-codex-blue">Codex Novum</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-medium text-gray-600 hover:text-codex-blue flex items-center space-x-1"
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/profile" 
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <Settings size={18} />
            <span>Profile</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg rounded-lg mt-2 absolute right-4 left-4 z-10 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-medium text-gray-600 hover:text-codex-blue flex items-center space-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              to="/profile"
              className="font-medium text-gray-600 hover:text-codex-blue flex items-center space-x-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings size={18} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
