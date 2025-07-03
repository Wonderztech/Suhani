import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of ethnic wear do you offer?",
    answer: "Suhani Kapoor Designs specializes in a wide range of luxury ethnic wear, including bridal lehengas, festive anarkalis, Indo-Western outfits, sarees, and custom-designed pieces tailored to your preferences."
  },
  {
    question: "How does custom ordering work?",
    answer: "For custom orders, you can schedule a consultation with our design team. We discuss your vision, preferences for fabric, color, and embroidery, and take your measurements to create a bespoke outfit. Contact us to start the process!"
  },
  {
    question: "What is your shipping policy?",
    answer: "We ship worldwide. Shipping times and costs vary depending on the destination and the complexity of the order (especially for custom pieces). Ready-to-ship items are typically dispatched within 3-5 business days. You'll receive detailed shipping information upon order confirmation."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "Due to the made-to-order and custom nature of many of our garments, returns and exchanges are limited. For ready-to-ship items, returns may be accepted within 7 days if the item is unused and in its original condition with tags. Please refer to our detailed Returns & Exchanges policy page or contact customer service for specific cases."
  },
  {
    question: "How do I determine my size?",
    answer: "We provide a comprehensive size guide on our website. For custom orders, we will guide you through the measurement process. If you have any doubts, our customer service team is happy to assist you in finding the perfect fit."
  },
  {
    question: "How should I care for my luxury ethnic wear?",
    answer: "Most of our garments are made with delicate fabrics and intricate embroideries. We generally recommend dry cleaning only. Specific care instructions are provided with each garment."
  }
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Find answers to common questions about our products, services, and policies.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <span>{item.question}</span>
              <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}></i>
            </button>
            {openIndex === index && (
              <div className="p-5 bg-white border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
