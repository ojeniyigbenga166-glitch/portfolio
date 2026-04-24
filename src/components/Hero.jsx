import { useState } from 'react';

export default function Hero() {
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

      {/* ── HERO SECTION ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-dark via-dark to-orange-950"></div>

        {/* Glow Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/15 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent filter blur-2xl opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-orange-600/10 rounded-full filter blur-3xl"></div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* LEFT SIDE – TEXT CONTENT */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight pt-8 sm:pt-12">
                <span className="text-white">Open For Project</span>
                <br />
                <span className="text-orange-400">Olugebnga</span>
                <br />
                <span className="text-white">Ojeniyi</span>n
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Transforming technical precision into business growth. I bridge the gap between beautiful design and performant code to create digital experiences that convert.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 text-base sm:text-lg"
                >
                  View My Work
                </button>
                <button
                  className="px-7 py-4 border-2 border-gray-600 hover:border-orange-400 text-white font-bold rounded-lg transition-all duration-300 hover:bg-orange-500/5 text-base sm:text-lg"
                  onClick={() => setShowContactModal(true)}
                >
                  Let's Talk
                </button>
              </div>

              {/* Stats Row */}
              <div className="flex justify-center lg:justify-start gap-6 sm:gap-10 mt-12 pt-8 border-t border-gray-800">
                <div className="transition-all duration-300 hover:scale-105 text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">50+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Projects Delivered</div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">30+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Happy Clients</div>
                </div>
                <div className="transition-all duration-300 hover:scale-105 text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white">5+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Years Experience</div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – IMAGE (desktop only) */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-full max-w-md aspect-square">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-3xl blur-xl opacity-75"></div>

                <div className="relative w-full h-full rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
                    alt="Developer workspace"
                    className="w-full h-full object-cover rounded-3xl filter brightness-110 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent rounded-3xl"></div>
                </div>

                <div className="absolute -inset-8 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent rounded-3xl filter blur-3xl -z-10 opacity-80"></div>
                <div className="absolute -inset-12 bg-gradient-to-t from-orange-500/15 to-transparent rounded-full filter blur-3xl -z-10 opacity-60"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
