import React, { useState } from 'react';

export interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

interface PaymentPageProps {
  orderTotal: number;
  onSubmitPayment: (data: PaymentFormData) => void;
  onBackToShipping: () => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ orderTotal, onSubmitPayment, onBackToShipping }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
  });
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    if (name === 'cardNumber') {
      value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (value.length > 19) value = value.substring(0, 19); // Visa/Mastercard format roughly
    } else if (name === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      if (value.length > 5) value = value.substring(0, 5);
    } else if (name === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 4) value = value.substring(0, 4); // Max 4 for Amex, 3 for others
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof PaymentFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PaymentFormData> = {};
    if (!formData.cardHolderName.trim()) newErrors.cardHolderName = 'Cardholder name is required.';
    if (formData.cardNumber.replace(/\s/g, '').length < 13 || formData.cardNumber.replace(/\s/g, '').length > 19) { // Basic length check
        newErrors.cardNumber = 'Card number must be between 13 and 19 digits.';
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    } else {
        const [month, year] = formData.expiryDate.split('/').map(Number);
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            newErrors.expiryDate = 'Card has expired.';
        }
        if (month < 1 || month > 12) newErrors.expiryDate = 'Invalid month.';
    }
    if (formData.cvv.length < 3 || formData.cvv.length > 4) newErrors.cvv = 'CVV must be 3 or 4 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Payment Data (dummy):', formData);
      // Simulate successful payment
      onSubmitPayment(formData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <button
        onClick={onBackToShipping}
        className="mb-6 inline-flex items-center text-[#D4AF37] hover:underline"
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Back to Shipping
      </button>
      <h1 className="font-serif text-3xl font-bold text-center mb-8">Payment Information</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6 p-4 bg-gray-100 rounded-md text-center">
          <p className="text-lg font-medium">Order Total: <span className="text-[#D4AF37] font-bold">₹{orderTotal.toLocaleString()}</span></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
            <input type="text" name="cardHolderName" id="cardHolderName" value={formData.cardHolderName} onChange={handleChange} required
                   className={`w-full px-3 py-2 border ${errors.cardHolderName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.cardHolderName && <p className="text-red-500 text-xs mt-1">{errors.cardHolderName}</p>}
          </div>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input type="text" name="cardNumber" id="cardNumber" value={formData.cardNumber} onChange={handleChange} required placeholder="0000 0000 0000 0000"
                   inputMode="numeric"
                   className={`w-full px-3 py-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input type="text" name="expiryDate" id="expiryDate" value={formData.expiryDate} onChange={handleChange} required placeholder="MM/YY"
                     className={`w-full px-3 py-2 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
              {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input type="text" name="cvv" id="cvv" value={formData.cvv} onChange={handleChange} required placeholder="123"
                     inputMode="numeric"
                     className={`w-full px-3 py-2 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
              {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
            </div>
          </div>
          {/* Add a section for billing address if different from shipping */}
          <button type="submit"
                  className="w-full bg-[#D4AF37] text-white px-6 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer text-lg">
            Pay ₹{orderTotal.toLocaleString()}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
