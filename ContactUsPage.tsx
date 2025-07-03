import React, { useState } from 'react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log('Contact Form Submitted:', formData);
    setIsSubmitted(true);
    // Reset form after a delay or keep it filled
    // setTimeout(() => {
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    //   setIsSubmitted(false);
    // }, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We'd love to hear from you. Whether you have a question about our collections, custom orders, or just want to share your thoughts, please reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-6">Contact Details</h2>
          <div className="space-y-5">
            <div className="flex items-start">
              <i className="fas fa-map-marker-alt text-2xl text-[#D4AF37] mr-4 mt-1"></i>
              <div>
                <h3 className="font-semibold">Our Studio</h3>
                <p className="text-gray-600">123 Silk Route, Textile District, Mumbai, MH 400001, India</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-envelope text-2xl text-[#D4AF37] mr-4 mt-1"></i>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600 hover:text-[#D4AF37] cursor-pointer">info@suhanikapoordesigns.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fas fa-phone-alt text-2xl text-[#D4AF37] mr-4 mt-1"></i>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 22 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fab fa-whatsapp text-2xl text-[#D4AF37] mr-4 mt-1"></i>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
             <h3 className="font-semibold mb-3">Business Hours</h3>
             <p className="text-gray-600 text-sm">Monday - Saturday: 10:00 AM - 7:00 PM (IST)</p>
             <p className="text-gray-600 text-sm">Sunday: By Appointment Only</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-6">Send Us A Message</h2>
          {isSubmitted ? (
            <div className="text-center py-10">
              <i className="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
              <p className="text-lg font-medium text-gray-700">Thank you! Your message has been sent.</p>
              <p className="text-sm text-gray-500">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                       className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"></textarea>
              </div>
              <button type="submit"
                      className="w-full bg-[#D4AF37] text-white px-6 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
