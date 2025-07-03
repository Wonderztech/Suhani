import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Your privacy is important to us. It is Suhani Kapoor Designs' policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL Here], and other sites we own and operate.</p>

          <h2 className="font-serif text-2xl mt-6 mb-3">Information We Collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
          <p>Information we collect may include:</p>
          <ul>
            <li>Name</li>
            <li>Contact information including email address and phone number</li>
            <li>Demographic information such as postcode, preferences, and interests</li>
            <li>Shipping and billing addresses</li>
            <li>Other information relevant to customer surveys and/or offers</li>
          </ul>

          <h2 className="font-serif text-2xl mt-6 mb-3">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Process your transactions</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="font-serif text-2xl mt-6 mb-3">Security</h2>
          <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>

          <h2 className="font-serif text-2xl mt-6 mb-3">Cookies</h2>
          <p>We use cookies to help improve your experience of our website. This cookie policy is part of Suhani Kapoor Designs' privacy policy, and covers the use of cookies between your device and our site.</p>

          <h2 className="font-serif text-2xl mt-6 mb-3">Links to Other Websites</h2>
          <p>Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>

          <p className="mt-6"><em>This is a template Privacy Policy. Please replace this with your own comprehensive policy tailored to your specific data handling practices.</em></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
