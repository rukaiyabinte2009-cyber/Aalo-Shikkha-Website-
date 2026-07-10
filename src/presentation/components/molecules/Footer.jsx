import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-glaucous">✦</span>
              <div>
                <h1 className="font-serif font-bold text-white text-xl leading-tight">
                  AALO SHIKKHA
                </h1>
                <p className="font-sans text-glaucous text-[10px] tracking-[2px] uppercase leading-tight">
                  Transparency Through Technology
                </p>
              </div>
            </div>
            <p className="text-alabaster-grey text-sm mt-4 leading-relaxed">
              Illuminating education one institution at a time. Built for Bangladesh.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-alabaster-grey hover:text-glaucous transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-alabaster-grey hover:text-glaucous transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Pricing', 'Blog', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : '/' + item.toLowerCase()}
                    className="text-alabaster-grey hover:text-glaucous transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-alabaster-grey hover:text-glaucous transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-alabaster-grey hover:text-glaucous transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-alabaster-grey">
                <FaEnvelope className="mt-1 text-glaucous" />
                <span>humayrabinteshafique2008@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-alabaster-grey">
                <FaPhone className="mt-1 text-glaucous" />
                <span>01845466970</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-alabaster-grey">
                <FaMapMarkerAlt className="mt-1 text-glaucous" />
                <span>7/E Shiddheswari lane, Dhaka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-alabaster-grey border-opacity-20 pt-6 text-center">
          <p className="text-alabaster-grey text-sm">
            &copy; {currentYear} Aalo Shikkha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
