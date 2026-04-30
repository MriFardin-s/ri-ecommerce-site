"use client"

import Image from 'next/image';
import logoImg from '../../assets/Logo.png'
import { FaBars, FaTimes, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import NavLink from './NavLink';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. Logo Section */}
          <div className="shrink-0">
            <NavLink href="/" className="gap-2!">
              <Image src={logoImg} alt="Ri Farm Logo" width={40} height={30} className="w-auto h-auto" priority />
              <span className="text-2xl font-bold text-green-800">
                Qurbani<span className="text-orange-500">Hat</span>
              </span>
            </NavLink>
          </div>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/animals">All Animals</NavLink>
            {isLoggedIn && <NavLink href="/my-profile">My Profile</NavLink>}
          </div>

          {/* 3. Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <NavLink 
                  href="/my-profile" 
                  className="p-0.5 rounded-full border-2 border-transparent transition"
                  activeClassName="border-green-600"
                >
                  <FaUserCircle size={35} className="text-gray-400" />
                </NavLink>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 font-medium transition"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <NavLink 
                  href="/login" 
                  className="px-5 py-2 rounded-lg border border-gray-200 transition"
                  activeClassName="bg-green-700 text-white border-green-700 shadow-md"
                >
                  Login
                </NavLink>
                <NavLink 
                  href="/register" 
                  className="px-5 py-2 rounded-lg border border-gray-200 transition"
                  activeClassName="bg-green-700 text-white border-green-700 shadow-md"
                >
                  Register
                </NavLink>
              </div>
            )}
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none p-2">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Side Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} bg-white border-t border-gray-100`}>
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
          <NavLink href="/" onClick={toggleMenu} className="block px-3 py-2 rounded-md">Home</NavLink>
          <NavLink href="/animals" onClick={toggleMenu} className="block px-3 py-2 rounded-md">All Animals</NavLink>
          
          {isLoggedIn ? (
            <>
              <NavLink href="/my-profile" onClick={toggleMenu} className="block px-3 py-2 rounded-md">
                <FaUserCircle /> My Profile
              </NavLink>
              <hr className="my-2 border-gray-100" />
              <button 
                onClick={() => { setIsLoggedIn(false); toggleMenu(); }}
                className="w-full text-left flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <div className="pt-4 flex flex-col gap-3">
              <NavLink 
                href="/login" 
                onClick={toggleMenu} 
                className="text-center py-2 border rounded-md"
                activeClassName="bg-green-700 text-white"
              >
                Login
              </NavLink>
              <NavLink 
                href="/register" 
                onClick={toggleMenu} 
                className="text-center py-2 border rounded-md"
                activeClassName="bg-green-700 text-white"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;