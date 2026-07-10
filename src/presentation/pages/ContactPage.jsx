import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form Data:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-alabaster-grey">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-black mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-ink-black text-opacity-70">
            Have questions about Aalo Shikkha? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-glaucous mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Information */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
            <h2 className="font-serif text-2xl font-bold text-ink-black mb-6">
              Contact Information
            </h2>
            <p className="text-ink-black text-opacity-60 mb-8">
              Reach out to us through any of the channels below. We'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-alabaster-grey bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all">
                <div className="bg-pale-sky bg-opacity-30 p-3 rounded-lg">
                  <FaEnvelope className="text-glaucous text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-ink-black">Email</p>
                  <a
                    href="mailto:humayrabinteshafique2008@gmail.com"
                    className="text-ink-black text-opacity-70 hover:text-glaucous transition-colors"
                  >
                    humayrabinteshafique2008@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-alabaster-grey bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all">
                <div className="bg-pale-sky bg-opacity-30 p-3 rounded-lg">
                  <FaPhone className="text-glaucous text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-ink-black">Phone</p>
                  <a
                    href="tel:+8801845466970"
                    className="text-ink-black text-opacity-70 hover:text-glaucous transition-colors"
                  >
                    01845466970
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-alabaster-grey bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all">
                <div className="bg-pale-sky bg-opacity-30 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-glaucous text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-ink-black">Address</p>
                  <p className="text-ink-black text-opacity-70">
                    7/E Shiddheswari lane, Dhaka
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t border-alabaster-grey">
              <p className="font-semibold text-ink-black mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-pale-sky bg-opacity-30 p-3 rounded-lg hover:bg-pale-sky hover:bg-opacity-60 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-glaucous text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-pale-sky bg-opacity-30 p-3 rounded-lg hover:bg-pale-sky hover:bg-opacity-60 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-glaucous text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-pale-sky bg-opacity-30 p-3 rounded-lg hover:bg-pale-sky hover:bg-opacity-60 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-glaucous text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-pale-sky bg-opacity-30 p-3 rounded-lg hover:bg-pale-sky hover:bg-opacity-60 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-glaucous text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10">
            <h2 className="font-serif text-2xl font-bold text-ink-black mb-6">
              Send Us a Message
            </h2>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-ink-black font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-alabaster-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-glaucous focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-ink-black font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-alabaster-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-glaucous focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-ink-black font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-alabaster-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-glaucous focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-ink-black font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 border border-alabaster-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-glaucous focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-ink-black font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-alabaster-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-glaucous focus:border-transparent transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-glaucous text-white px-6 py-4 rounded-lg font-semibold transition-all ${
                  isSubmitting
                    ? 'opacity-70 cursor-not-allowed'
                    : 'hover:bg-opacity-90 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="text-xs text-ink-black text-opacity-40 text-center">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;