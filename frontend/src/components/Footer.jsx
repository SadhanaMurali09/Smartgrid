import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiLinkedin, FiGithub, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLeadershipClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#leadership');
    } else {
      window.location.hash = 'leadership';
      const el = document.getElementById('leadership');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] text-slate-300 pt-16 pb-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Subtitle */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-extrabold tracking-tight text-white">
                Sensor<span className="text-blue-500">Grid</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building modern web applications, IoT solutions, embedded systems, and creative digital experiences that help businesses innovate and grow.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#leadership" onClick={handleLeadershipClick} className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/services/software" className="hover:text-cyan-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/iot" className="hover:text-cyan-400 transition-colors">
                  IoT Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/designing" className="hover:text-cyan-400 transition-colors">
                  Creative Designing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400 mb-6">
              <li className="flex items-center gap-3">
                <FiMail className="text-blue-500 w-4 h-4 shrink-0" />
                <a href="mailto:sensorgrid123@gmail.com" className="hover:text-cyan-400 transition-colors">
                  sensorgrid123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-blue-500 w-4 h-4 shrink-0" />
                <a href="tel:+918668079413" className="hover:text-cyan-400 transition-colors">
                  +91 86680 79413
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-blue-500 w-4 h-4 shrink-0" />
                <span>Gobi, Tamil Nadu, India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all"
                aria-label="Facebook"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} SensorGrid. All rights reserved. | Developed and Maintained by{' '}
            <span className="text-blue-400 font-medium">Sadhana and Dharun</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </a>
            <Link to="/admin/login" className="hover:text-cyan-400 text-slate-300 font-medium transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
