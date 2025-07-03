import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Suhani Kapoor Designs</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Discover the heart behind our creations, a journey of passion, craftsmanship, and timeless elegance dedicated to the modern woman.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="md:w-1/2">
          <img
            src="https://readdy.ai/api/search-image?query=Indian%20fashion%20designer%20sketching%20ethnic%20wear%20in%20a%20bright%2C%20elegant%20studio&width=600&height=400&seq=30"
            alt="Designer Suhani Kapoor sketching"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Suhani Kapoor Designs, we believe in the power of heritage and the allure of contemporary design. Each piece is a narrative, intricately woven with threads of tradition and tailored for the confident, graceful woman of today. Our collections are more than just garments; they are heirlooms in the making.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are committed to sustainable practices, exquisite craftsmanship, and providing a personalized experience for every client. Our vision is to celebrate the rich tapestry of Indian culture through fashion that resonates globally.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-6">Meet the Visionary</h2>
        <img
          src="https://readdy.ai/api/search-image?query=Portrait%20of%20an%20elegant%20South%20Asian%20woman%20fashion%20designer%2C%20smiling%2C%20professional%20attire&width=300&height=300&seq=31"
          alt="Suhani Kapoor"
          className="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg border-4 border-white"
        />
        <h3 className="font-serif text-2xl text-gray-700">Suhani Kapoor</h3>
        <p className="text-md text-[#D4AF37] font-medium mb-3">Founder & Creative Director</p>
        <p className="max-w-xl mx-auto text-gray-600 leading-relaxed">
          "My dream has always been to create pieces that not only adorn but also empower. Fashion is a language, and through Suhani Kapoor Designs, I hope to speak of elegance, strength, and the timeless beauty of our heritage."
        </p>
      </div>

      <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-lg shadow-md">
        <h2 className="font-serif text-3xl font-semibold text-gray-800 mb-6 text-center">Our Commitment</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <i className="fas fa-leaf text-4xl text-[#D4AF37] mb-3"></i>
            <h4 className="font-semibold text-xl mb-2">Ethical Sourcing</h4>
            <p className="text-gray-600 text-sm">We prioritize materials that are sustainably sourced and ethically produced.</p>
          </div>
          <div>
            <i className="fas fa-cut text-4xl text-[#D4AF37] mb-3"></i>
            <h4 className="font-semibold text-xl mb-2">Artisanal Craftsmanship</h4>
            <p className="text-gray-600 text-sm">Celebrating traditional techniques and skilled artisans in every creation.</p>
          </div>
          <div>
            <i className="fas fa-hand-holding-heart text-4xl text-[#D4AF37] mb-3"></i>
            <h4 className="font-semibold text-xl mb-2">Client Focused</h4>
            <p className="text-gray-600 text-sm">Dedicated to providing an exceptional and personalized experience for you.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage;
