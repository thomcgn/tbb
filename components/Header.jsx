"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-black relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold">
          The Black Banshee
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
        </button>

        {/* Menu */}
        <ul className={`md:flex md:space-x-6 md:items-center absolute md:static bg-white w-full md:w-auto left-0 md:left-auto transition-all duration-300 ease-in ${isOpen ? "top-16 z-50" : "-top-125"}`}>
          <li>
            <Link href="/" className="block px-4 py-2 hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/getraenke" className="block px-4 py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Getränke</Link>
          </li>
          <li>
            <Link href="/reservation" className="block px-4 py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Reservation</Link>
          </li>
          <li>
            <Link href="/rules" className="block px-4 py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Rules</Link>
          </li>

          {!isLoggedIn && (
            <li>
              <button
                onClick={() => { handleLogin(); setIsOpen(false); }}
                className="block px-4 py-2 hover:text-yellow-300 w-full text-left"
              >
                Login
              </button>
            </li>
          )}

          {isLoggedIn && (
            <>
              <li>
                <Link href="/staff" className="block px-4 py-2 hover:text-yellow-300" onClick={() => setIsOpen(false)}>Staff</Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:text-yellow-300 w-full text-left"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
