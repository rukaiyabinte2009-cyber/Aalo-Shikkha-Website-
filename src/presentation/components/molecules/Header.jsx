import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl text-glaucous">✦</span>
            <div>
              <h1 className="font-serif font-bold text-ink-black text-xl leading-tight">
                AALO SHIKKHA
              </h1>
              <p className="font-sans text-glaucous text-[10px] tracking-[2px] uppercase leading-tight">
                Transparency Through Technology
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-glaucous ${
                    isActive ? 'text-glaucous' : 'text-ink-black'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-glaucous text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-3xl text-ink-black"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-4 border-t border-alabaster-grey">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-glaucous ${
                      isActive ? 'text-glaucous' : 'text-ink-black'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="bg-glaucous text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-all"
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
