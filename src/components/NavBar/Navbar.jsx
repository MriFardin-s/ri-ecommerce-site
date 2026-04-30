"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import logoImg from '../../assets/Logo.png'
import { FaBars, FaTimes, FaSignOutAlt, FaPaw, FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
            <Image src={logoImg} alt="Ri Farm Logo" width={50} height={60}  ></Image>

              <span className="text-2xl font-bold text-green-800">
                Qurbani<span className="text-orange-500">Hat</span>
              </span>
            </Link>
          </div>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
             <Link href="/" className="text-gray-700 hover:text-green-700 font-medium transition">Home</Link>
            <Link href="/animals" className="text-gray-700 hover:text-green-700 font-medium transition">All Animals</Link>
            
            {isLoggedIn && (
               <Link href="/my-profile" className="text-gray-700 hover:text-green-700 font-medium transition">My Profile</Link>
            )}
          </div>

          {/* 3. Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link href="/my-profile" className="w-10 h-10 rounded-full border-2 border-green-500 overflow-hidden hover:opacity-80 transition">
               <FaUserCircle size={40} className="text-gray-400 hover:text-green-600 transition-colors" />
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 font-medium transition"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-gray-700 font-medium hover:text-green-700">Login</Link>
                <Link href="/register" className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 shadow-sm transition">
                  Register
                </Link>
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
          <Link onClick={toggleMenu} href="/" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium">Home</Link>
          <Link onClick={toggleMenu} href="/animals" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium">All Animals</Link>
          
          {isLoggedIn ? (
            <>
              <Link onClick={toggleMenu} href="/my-profile" className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium flex items-center gap-2">
                <FaUserCircle /> My Profile
              </Link>
              <hr className="my-2 border-gray-100" />
              <button className="w-full text-left flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md font-medium">
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <div className="pt-4 flex flex-col gap-3">
              <Link onClick={toggleMenu} href="/login" className="text-center px-3 py-2 text-gray-700 border border-gray-200 rounded-md font-medium">Login</Link>
              <Link onClick={toggleMenu} href="/register" className="text-center px-3 py-2 bg-green-700 text-white rounded-md font-medium">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;