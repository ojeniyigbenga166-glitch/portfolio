import { useState } from 'react';

export default function Footer() {

  return (
    <footer className="bg-dark-secondary border-t border-dark-tertiary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2 hover:text-white transition-colors duration-300">
              ARLTECH
            </h3>
            <p className="text-gray-400 text-sm">
              Full-stack web developer & designer crafting digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 hover:text-orange-400 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Dropdown */}
          <div>
            <h4 className="font-bold text-white mb-4 hover:text-orange-400 transition-colors duration-300">Connect</h4>
            <div className="relative group">
              <button className="w-full px-4 py-2 bg-dark-tertiary hover:bg-orange-500/20 rounded-lg border border-dark-tertiary text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                📱 Contact Me
                <span className="text-xs group-hover:rotate-180 transition-transform duration-300">▼</span>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-full bg-dark-secondary border border-dark-tertiary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a
                  href="https://wa.me/08147574404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-dark-tertiary transition-all duration-300 border-b border-dark-tertiary hover:translate-x-1"
                >
                  <span className="text-lg hover:scale-125 transition-transform duration-300">💬</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:articulatetech56@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-dark-tertiary transition-all duration-300 border-b border-dark-tertiary hover:translate-x-1"
                >
                  <span className="text-lg hover:scale-125 transition-transform duration-300">📧</span>
                  <span>Gmail</span>
                </a>
                <a
                  href="https://www.fiverr.com/users/damsel6052/seller_dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-dark-tertiary transition-all duration-300 rounded-b-lg hover:translate-x-1"
                >
                  <span className="text-lg hover:scale-125 transition-transform duration-300">⭐</span>
                  <span>Fiverr</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-tertiary pt-8">
          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 ARLTECH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-all duration-300 hover:translate-y-1">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-all duration-300 hover:translate-y-1">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-all duration-300 hover:translate-y-1">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
