import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Welcome to Suhani Kapoor Designs. These terms and conditions outline the rules and regulations for the use of Suhani Kapoor Designs' Website, located at [Your Website URL Here].</p>

          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Suhani Kapoor Designs if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2 className="font-serif text-2xl mt-6 mb-3">Cookies</h2>
          <p>We employ the use of cookies. By accessing Suhani Kapoor Designs, you agreed to use cookies in agreement with the Suhani Kapoor Designs' Privacy Policy.</p>

          <h2 className="font-serif text-2xl mt-6 mb-3">License</h2>
          <p>Unless otherwise stated, Suhani Kapoor Designs and/or its licensors own the intellectual property rights for all material on Suhani Kapoor Designs. All intellectual property rights are reserved. You may access this from Suhani Kapoor Designs for your own personal use subjected to restrictions set in these terms and conditions.</p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from Suhani Kapoor Designs</li>
            <li>Sell, rent or sub-license material from Suhani Kapoor Designs</li>
            <li>Reproduce, duplicate or copy material from Suhani Kapoor Designs</li>
            <li>Redistribute content from Suhani Kapoor Designs</li>
          </ul>

          <h2 className="font-serif text-2xl mt-6 mb-3">User Comments</h2>
          <p>This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Suhani Kapoor Designs does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Suhani Kapoor Designs, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.</p>

          <h2 className="font-serif text-2xl mt-6 mb-3">Disclaimer</h2>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
          <ul>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="mt-6"><em>This is a template Terms of Service. Please replace this with your own comprehensive terms.</em></p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
