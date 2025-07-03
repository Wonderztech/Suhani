import React, { useState } from 'react';

export interface ShippingFormData {
  fullName: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
}

interface ShippingPageProps {
  onSubmitShipping: (data: ShippingFormData) => void;
  onBackToCart: () => void;
}

const ShippingPage: React.FC<ShippingPageProps> = ({ onSubmitShipping, onBackToCart }) => {
  const [formData, setFormData] = useState<ShippingFormData>({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India', // Default country
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<Partial<ShippingFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ShippingFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ShippingFormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = 'Address Line 1 is required.';
    if (!formData.city.trim()) newErrors.city = 'City is required.';
    if (!formData.state.trim()) newErrors.state = 'State/Province is required.';
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP/Postal code is required.';
    } else if (!/^\d{6}$/.test(formData.zipCode) && formData.country === "India") { // Simple Indian PIN code validation
        newErrors.zipCode = 'Invalid ZIP/Postal code for India (should be 6 digits).';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required.';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber.replace(/\s+/g, ''))) { // Basic E.164 format check
        newErrors.phoneNumber = 'Invalid phone number format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Shipping Data:', formData);
      onSubmitShipping(formData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <button
        onClick={onBackToCart}
        className="mb-6 inline-flex items-center text-[#D4AF37] hover:underline"
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Back to Cart
      </button>
      <h1 className="font-serif text-3xl font-bold text-center mb-8">Shipping Information</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required
                 className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
          <input type="text" name="addressLine1" id="addressLine1" value={formData.addressLine1} onChange={handleChange} required
                 className={`w-full px-3 py-2 border ${errors.addressLine1 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
          {errors.addressLine1 && <p className="text-red-500 text-xs mt-1">{errors.addressLine1}</p>}
        </div>
        <div>
          <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">Address Line 2 (Optional)</label>
          <input type="text" name="addressLine2" id="addressLine2" value={formData.addressLine2} onChange={handleChange}
                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} required
                   className={`w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State / Province</label>
            <input type="text" name="state" id="state" value={formData.state} onChange={handleChange} required
                   className={`w-full px-3 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
            <input type="text" name="zipCode" id="zipCode" value={formData.zipCode} onChange={handleChange} required
                   className={`w-full px-3 py-2 border ${errors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <select name="country" id="country" value={formData.country} onChange={handleChange} required
                    className={`w-full px-3 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`}>
              {/* Add more countries as needed */}
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required
                 placeholder="+91 1234567890"
                 className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
        </div>
        <button type="submit"
                className="w-full bg-[#D4AF37] text-white px-6 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer text-lg">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default ShippingPage;
