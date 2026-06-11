import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import nccLogo from '../../assets/shared/ncc-logo.png';
import mnitLogo from '../../assets/shared/mnit-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Activities', path: '/activities' },
  { name: 'Camps', path: '/camps' },
  { name: 'Cadets', path: '/cadets' },
  { name: 'Downloads', path: '/downloads' },
  { name: 'FAQs', path: '/faqs' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    twMerge(
      "px-3 xl:px-4 py-2 rounded-full text-sm xl:text-base font-medium whitespace-nowrap transition-all duration-300 ease-out",
      "hover:bg-white/15 hover:text-white",
      isActive
        ? "bg-gradient-to-r from-mnit-red to-red-700 text-white shadow-md shadow-red-900/30 ring-1 ring-white/20"
        : "text-gray-100"
    );

  const mobileLinkClass = ({ isActive }) =>
    twMerge(
      "block px-3 py-2 rounded-md text-base font-medium",
      isActive
        ? "bg-mnit-red text-white"
        : "text-gray-100 hover:bg-white/10 hover:text-white"
    );

  return (
    <nav
      className={twMerge(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full",
        "border border-white/15 backdrop-blur-xl shadow-xl shadow-black/20 z-50",
        "bg-gradient-to-r transition-all duration-300",
        scrolled
          ? "from-mnit-navy/95 via-mnit-blue/90 to-mnit-navy/95"
          : "from-mnit-navy/80 via-mnit-blue/70 to-mnit-navy/80"
      )}
    >
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Left: NCC Logo + wordmark */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={nccLogo}
              alt="NCC Logo"
              className="h-12 w-12 rounded-full object-contain bg-white p-1 border-2 border-white/20"
            />
            <div className="hidden xl:block leading-tight">
              <span className="block font-bold text-base text-white">National Cadet Corps</span>
              <span className="block text-xs text-gray-300 tracking-wider">राष्ट्रीय कैडेट कोर</span>
            </div>
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass} end={link.path === '/'}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right: MNIT Logo + wordmark */}
          <a
            href="https://mnit.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 flex-shrink-0 transition-opacity hover:opacity-90"
          >
            <img src={mnitLogo} alt="MNIT Logo" className="h-12 w-auto" />
            <div className="hidden xl:block leading-tight">
              <span className="block text-xs text-white font-semibold">MNIT Jaipur</span>
              <span className="block text-[10px] text-gray-300 tracking-wider">मालवीय राष्ट्रीय प्रौद्योगिकी संस्थान</span>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-mnit-blue/90 backdrop-blur-xl border-t border-white/10 rounded-b-3xl mt-2 pb-3">
          <div className="px-3 pt-2 pb-1 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
