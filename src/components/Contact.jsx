import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contactMethods = [
    {
      id: 1,
      icon: "✉️",
      title: "Email",
      value: "ojeniyigbenga166@gmail.com",
      link: "mailto:ojeniyigbenga166@gmail.com"
    },
    {
      id: 2,
      icon: "💬",
      title: "WhatsApp",
      value: "+2348147574404",
      link: "https://wa.me/2348147574404?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you"
    },
    {
      id: 3,
      icon: "📍",
      title: "Location",
      value: "Futa southgate Akure,Nigeria",
      link: "#"
    },
    {
      id: 4,
      icon: "🕐",
      title: "Response Time",
      value: "24 hours",
      link: "#"
    }
  ];

  const socialLinks = [
    { name: "WhatsApp", url: "https://wa.me/2348147574404?text=Hi%2C%20I%27m%20interested%20in%20discussing%20a%20project%20with%20you", icon: "💬" },
    { name: "Twitter", url: "https://twitter.com", icon: "𝕏" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "in" },
    { name: "GitHub", url: "https://github.com", icon: "⚙️" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
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
        
        // Auto close modal after 5 seconds
        setTimeout(() => setShowSuccessModal(false), 5000);
      } else {
        setErrorMessage('❌ Failed to send message. Please try again.');
        setTimeout(() => setErrorMessage(''), 5000);
      }
    } catch (error) {
      setErrorMessage('❌ Network error. Please try again.');
      console.error('Error:', error);
      setTimeout(() => setErrorMessage(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-orange-500/30 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl shadow-orange-500/20 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-orange-400 transition-colors text-2xl"
            >
              ✕
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full flex items-center justify-center border border-orange-500/50">
                <span className="text-4xl">✓</span>
              </div>
            </div>

            {/* Success Text */}
            <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-3">
              Message Sent!
            </h3>

            <p className="text-center text-gray-400 mb-2">
              Thank you for reaching out. Your message has been received.
            </p>

            <p className="text-center text-orange-400 font-semibold mb-8">
              I'll get back to you shortly.
            </p>

            {/* Details */}
            <div className="bg-dark/50 rounded-lg p-4 mb-8 border border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Expected Response</p>
              <p className="text-white font-semibold">Within 24 hours</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={closeModal}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Done
              </button>
              <a
                href="#home"
                className="flex-1 px-6 py-3 border-2 border-gray-700 hover:border-orange-400 text-white font-bold rounded-lg transition-all duration-300 text-center hover:bg-orange-500/5"
              >
                Back Home
              </a>
            </div>

            {/* Loading indicator (closes automatically) */}
            <div className="mt-6 flex justify-center">
              <div className="text-xs text-gray-500">
                Closing in <span className="text-orange-400 font-semibold">5s</span>...
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-dark via-dark to-orange-950/20"></div>

      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Let's <span className="text-orange-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="lg:col-span-1">
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactMethods.map((method) => (
                <a
                  key={method.id}
                  href={method.link}
                  target={method.id === 2 ? "_blank" : "_self"}
                  rel={method.id === 2 ? "noopener noreferrer" : ""}
                  className="group p-6 rounded-2xl border border-gray-800 hover:border-orange-500/50 bg-dark-secondary/40 transition-all duration-300 hover:bg-dark-secondary hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{method.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{method.title}</h3>
                      <p className="text-white font-bold group-hover:text-orange-400 transition-colors mt-1">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-gray-800 bg-dark-secondary/40">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-gray-700 hover:border-orange-500 bg-dark-tertiary hover:bg-orange-500/10 flex items-center justify-center text-white hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border border-gray-800 bg-dark-secondary/40 backdrop-blur-sm">
              {/* Error Message */}
              {errorMessage && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-sm font-semibold text-center">
                  {errorMessage}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-tertiary border border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Info Text */}
              <p className="text-sm text-gray-500 text-center">
                I'll get back to you as soon as possible. Typically within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
