import { useState } from 'react';
import logoImage from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navLinks = ['Home', 'Projects', 'Services', 'Contact'];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xwvabbnp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setShowContactModal(false);
        setTimeout(() => setShowSuccessModal(false), 5000);
      } else {
        setErrorMessage('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrorMessage('❌ Network error. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeSuccessModal}
          ></div>
          <div className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-orange-500/30 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl shadow-orange-500/20">
            <button
              onClick={closeSuccessModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-orange-400 transition-colors text-2xl"
            >
              ✕
            </button>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/50">
                <span className="text-4xl">✓</span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-3">
              Message Sent!
            </h3>
            <p className="text-center text-gray-400 mb-2">
              Thank you for reaching out. Your message has been received.
            </p>
            <p className="text-center text-orange-400 font-semibold mb-8">
              I'll get back to you shortly.
            </p>
            <button
              onClick={closeSuccessModal}
              className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeContactModal}
          ></div>
          <div className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-orange-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-orange-500/20 my-auto">
            <button
              onClick={closeContactModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-orange-400 transition-colors text-2xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 pt-4">
              Send me a <span className="text-orange-400">Message</span>
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-semibold text-center">
                  {errorMessage}
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your message here..."
                  rows="4"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed text-sm"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── NAV WRAPPER ── */}
      <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-dark-secondary">
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logoImage} alt="ARLTECH Logo" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              link === 'Contact' ? (
                <div key={link} className="relative group">
                  <button className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium flex items-center gap-1 group-hover:scale-110">
                    {link}
                    <span className="text-xs group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </button>

                  {/* Desktop Dropdown */}
                  <div className="absolute right-0 mt-0 w-40 bg-dark-secondary border border-dark-tertiary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <a
                      href="https://wa.me/2348147574404?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-dark-tertiary transition-all duration-300 border-b border-dark-tertiary hover:translate-x-1"
                    >
                      <span className="hover:scale-125 transition-transform duration-300">💬</span>
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowContactModal(true);
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-dark-tertiary transition-all duration-300 border-b border-dark-tertiary cursor-pointer hover:translate-x-1"
                    >
                      <span className="hover:scale-125 transition-transform duration-300">📧</span>
                      <span>Gmail</span>
                    </a>
                    <a
                      href="https://fiverr.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-dark-tertiary transition-all duration-300 rounded-b-lg hover:translate-x-1"
                    >
                      <span className="hover:scale-125 transition-transform duration-300">⭐</span>
                      <span>Fiverr</span>
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium hover:scale-110 inline-block"
                >
                  {link}
                </a>
              )
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 transition-all duration-300 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu – lives inside <nav> so it's always full-width */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-dark-secondary bg-dark/95 backdrop-blur-md px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              link === 'Contact' ? (
                <div key={link} className="flex flex-col gap-2">
                  <span className="text-gray-300 font-medium text-sm">Contact</span>
                  <div className="ml-4 flex flex-col gap-2 border-l border-dark-tertiary pl-4">
                    <a
                      href="https://wa.me/2348147574404?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>💬</span>
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowContactModal(true);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 cursor-pointer text-sm py-1"
                    >
                      <span>📧</span>
                      <span>Gmail</span>
                    </a>
                    <a
                      href="https://fiverr.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>⭐</span>
                      <span>Fiverr</span>
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm font-medium py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              )
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
